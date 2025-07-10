function convertTemp() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitOutput = document.getElementById('fahrenheit');
    var kelvinOutput = document.getElementById('kelvin');
    var celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        var kelvin = celsius + 273.15;
        fahrenheitOutput.textContent = fahrenheit.toFixed(2);
        kelvinOutput.textContent = kelvin.toFixed(2);
    }
    else {
        fahrenheitOutput.textContent = '';
        kelvinOutput.textContent = '';
        alert('Please enter a valid number.');
    }
}
