function calculateGrade() {
      const s1 = Number(document.getElementById('sub1').value);
      const s2 = Number(document.getElementById('sub2').value);
      const s3 = Number(document.getElementById('sub3').value);
      const s4 = Number(document.getElementById('sub4').value);
      const s5 = Number(document.getElementById('sub5').value);

      const output = document.getElementById('output');

      // Check for empty or invalid inputs
      if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
        output.textContent = "Please enter marks for all subjects.";
        output.style.color = "orange";
        return;
      }

      const total = s1 + s2 + s3 + s4 + s5;
      const average = total / 5;
      let grade = "";
      let color = "green";

      if (average >= 90) {
        grade = "A";
      } else if (average >= 75) {
        grade = "B";
      } else if (average >= 60) {
        grade = "C";
      } else if (average >= 40) {
        grade = "D";
      } else {
        grade = "F";
        color = "red";
      }

      output.textContent = `Total: ${total} | Average: ${average.toFixed(2)} | Grade: ${grade}`;
      output.style.color = color;
    }