console.log('Client side javascript file is loaded!');



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  const location = search.value;
  const baseURL = `http://localhost:3000/weather?address=${location}`;

  fetch(baseURL).then((response) => {
    response.json().then(({ error, location, forecast}) => {
      if (error) {
        messageOne.textContent = error;
      } else {
        messageOne.textContent = location;
        messageTwo.textContent = forecast;
      }
    });
  });
})