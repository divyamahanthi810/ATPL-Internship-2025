const form = document.getElementById('myForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const errorMsg = document.getElementById('error') as HTMLParagraphElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
    errorMsg.textContent = 'Name and Email are required!';
  } else {
    errorMsg.textContent = '';
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
  }
});
