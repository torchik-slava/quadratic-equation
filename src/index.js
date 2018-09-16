module.exports = function solveEquation(equation) {
  // your implementation
  var arr = equation.split(' ');
  var a = arr[0];
  var b = arr[3]+arr[4];
  var c = arr[7]+arr[8];
  var d = b*b-4*a*c;
  if (d>=0){
    dSqrt = Math.sqrt(d);
    var x1 = Math.round((-b-dSqrt)/(2*a));
    var x2 = Math.round((-b+dSqrt)/(2*a));
  }
  if(x1>x2){
    var result = [x2,x1];
  } else {
    var result = [x1,x2];
  }
  return result; 

}
