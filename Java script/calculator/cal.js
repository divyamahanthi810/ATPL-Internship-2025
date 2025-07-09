function add(){
            let number1=Number(document.getElementById("field1").value);
            let number2=Number(document.getElementById("field2").value);
            document.getElementById("calculator").innerHTML="addition: "+(number1+number2);
        }
        function sub(){
            let number1=Number(document.getElementById("field1").value);
            let number2=Number(document.getElementById("field2").value);
            document.getElementById("calculator").innerHTML="subtraction :" +(number1-number2);
        }
        function multiply(){
            let number1=Number(document.getElementById("field1").value);
            let number2=Number(document.getElementById("field2").value);
            document.getElementById("calculator").innerHTML="Multiplication :"+(number1*number2);
        }
        function divide(){
            let number1=Number(document.getElementById("field1").value);
            let number2=Number(document.getElementById("field2").value);
            document.getElementById("calculator").innerHTML="Division :"+(number1/number2);
        }