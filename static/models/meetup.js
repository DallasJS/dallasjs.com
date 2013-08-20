define(['can/model'], function() {

	var Meetup = can.Model({

		findAll: 'GET /meetups'

	}, {});

	return Meetup;

});