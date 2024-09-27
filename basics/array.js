let grades = [78, 67, 95, 87, 85, 75];
let total = 0;
for(let x =0; x < grades.length; x++){
  total = total + grades [x];
}
document.getElementById("output").innerHTML += total/grades.length;