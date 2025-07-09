function fun() {
            let number1 = parseFloat(document.getElementById("table").value);
            if (number1<0) {
                document.getElementById("demo").innerText = "Please enter a valid number.";
                return;
            }

            let output = "";
            for (let val = 1; val <= 10; val++) {
                output += `${number1} x ${val} = ${number1 * val}<br>`;
            }

            document.getElementById("demo").innerHTML = output;
        }