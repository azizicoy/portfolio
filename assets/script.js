const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
    alert('Please enter your name and email');
  } else {
    alert(`Thank you for contacting me, ${nameInput.value}! I will get back to you at ${emailInput.value} as soon as possible.`);
  }
});
