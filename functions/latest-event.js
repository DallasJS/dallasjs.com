const Feedparser = require('feedparser');
const request = require('request');
const ogs = require('open-graph-scraper');
const { GeneralError } = require('@feathersjs/errors');

exports.handler = async (event, context) => {
  const feedurl = 'https://www.meetup.com/dallasjs/events/atom';
  const parser = new Feedparser({ feedurl });

  const req = request(feedurl);

  req.on('error', e => {
    throw new GeneralError(e);
  });

  req.on('response', res => {
    if (res.statusCode !== 200) {
      req.emit('error', new GeneralError('Unable to retrieve Atom stream'));
    } else {
      req.pipe(parser);
    }
  });

  parser.on('error', e => {
    throw new GeneralError('An error has occurred in parsing Atom stream');
  });

  let item = null;

  parser.on('readable', () => {
    if (item === null) {
      item = parser.read();
    }

    parser.pause();
    parser.emit('end');
  });

  await new Promise(resolve => parser.on('end', resolve));

  let opengraph = {};

  if (item) {
    opengraph = await ogs({ url: item.link });
  }

  return {
    statusCode: 200,
    body: JSON.stringify(opengraph)
  };
};
