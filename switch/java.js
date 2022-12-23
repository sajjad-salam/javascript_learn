try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  x=5;
  y=10;
  debugger;

  z=x+y;
  console.log(z)
  alert(z);
