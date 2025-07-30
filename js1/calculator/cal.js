function getValues() {
            const a = parseFloat(document.getElementById("field1").value);
            const b = parseFloat(document.getElementById("field2").value);
            return [a, b];
        }

        function add() {
            const [a, b] = getValues();
            document.getElementById("calculator").innerHTML = "Addition:"+(a + b);
        }

        function sub() {
            const [a, b] = getValues();
            document.getElementById("calculator").innerHTML = "Subtraction:"+(a - b);
        }

        function multiply() {
            const [a, b] = getValues();
            document.getElementById("calculator").innerHTML = "Multiplication"+(a * b);
        }

        function divide() {
            const [a, b] = getValues();
            document.getElementById("calculator").innerHTML = "Division"+(a / b);
        }