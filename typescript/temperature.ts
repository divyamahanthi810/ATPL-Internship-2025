function convertTemp(): void {
  const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
  const fahrenheitOutput = document.getElementById('fahrenheit') as HTMLSpanElement;
  const kelvinOutput = document.getElementById('kelvin') as HTMLSpanElement;

  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    fahrenheitOutput.textContent = fahrenheit.toFixed(2);
    kelvinOutput.textContent = kelvin.toFixed(2);
  } else {
    fahrenheitOutput.textContent = '';
    kelvinOutput.textContent = '';
    alert('Please enter a valid number.');
  }
}
