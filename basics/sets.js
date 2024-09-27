let employees = new Set();
employees.add("Ravi");
employees.add("Divya");
employees.add("Sony");
employees.add("Priya");
employees.add("Sonu Sehgal");

console.log(employees);


if (employees.has("Sonu Sehgal")) {
    console.log("Sonu Sehgal is included in the set.");
  }
  
  if (employees.has("Krishna")) {
    console.log("Krishna is included in the set.");
  } else {
    console.log("No Krishna Sorry");
  }
  
  for (const employee of employees) {
    console.log(employee);
  }
  