const loaddata = async () => {
  const res = await window.fetch('/.netlify/functions/latest-event');

  if (res.status !== 200) return;
  const { data } = await res.json();

  document.body.className = '';

  const image = document.querySelector('#image');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const link = document.querySelector('#link');

  if (data) {
    image.src = data.ogImage.url;
    image.alt = `A related photo for ${data.ogTitle}`;

    title.textContent = data.ogTitle;
    description.textContent = data.ogDescription + ' ...';
    link.href = data.ogUrl;
  } else {
    image.src = '/images/logo.png';
    image.alt = 'DallasJS logo';

    title.textContent = 'Upcoming events will be announced soon!';
    description.innerHTML = 'If you are interested in speaking be sure to <a href="https://docs.google.com/forms/d/e/1FAIpQLSczn46zpO-ouuKaCiF3lrIf7ryi5UlD0e3-UWzCLCJcawBqoQ/viewform">let us know</a>!';
    link.href = 'https://www.meetup.com/DallasJS';
    link.textContent = 'Join us on Meetup.com';
  }
};

loaddata().catch(e => console.log(e));
