var form = document.getElementById('myForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var errorMsg = document.getElementById('error');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        errorMsg.textContent = 'Name and Email are required!';
    }
    else {
        errorMsg.textContent = '';
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
    }
});
