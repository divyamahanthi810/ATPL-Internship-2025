const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
const counter = document.getElementById('counter') as HTMLParagraphElement;

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  counter.textContent = `Characters: ${length}`;
});