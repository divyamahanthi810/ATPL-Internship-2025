var textarea = document.getElementById('textArea');
var counter = document.getElementById('counter');
textarea.addEventListener('input', function () {
    var length = textarea.value.length;
    counter.textContent = "Characters: ".concat(length);
});
