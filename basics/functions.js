let cubeThis = function (someNumber) {
    document.getElementById("output").innerHTML =
      someNumber * someNumber * someNumber;
  };
  
  let x = prompt("What number would you like to cube?");
  cubeThis(x);
  