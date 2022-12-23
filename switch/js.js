const expr = 'Papayas'; 
// متغير 

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log("sajjad")
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'nagative';
    }
    return result;
  }
  
  console.log(testNum(-5));
  // expected output: "nagative"