let students = ["Prabhat Kumar", "Krishna Singh", "Om Prakash", "Vikash Singh", "Sumit Srivastava", "Sonu Sehgal"];

 students= students.replaceAll ("Krishna Singh", "Om Prakash", "Prabhat Kumar", "Sonu Sehgal", "Sumit Srivastava", "Vikash Singh");

 document.getElementById("students").innerHTML = students;