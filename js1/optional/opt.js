function myFunction(){
        let no = 55;
        let ab = parseFloat(document.getElementById("num").value);

        if (ab === no) {
            document.getElementById("demo").innerHTML = "Correct";
        } else if (ab < no) {
            document.getElementById("demo").innerHTML = "Too less";
        } else {
            document.getElementById("demo").innerHTML = "Too high";
        }
    }