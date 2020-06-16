function calc()
{
  var r1 = parseInt(document.getElementById("r1").value);
  var y = parseInt(document.getElementById("y").value);
  var l = parseInt(document.getElementById("l").value);
  var i = parseInt(document.getElementById("i").value);
  var r = parseInt(document.getElementById("r").value);
  var c = parseInt(document.getElementById("c").value);
  var rd = parseInt(document.getElementById("rd").value);

  var i = i/100;
  var r = r/100;
  var ab = Math.pow(1+i,y);
  var rd = rd/100;
  var total = c*ab;
  var total1 = total*rd;
  var income = total-total1;

  var adjR = (1+r)/(1+i)-1;

  var rate = (adjR)/12;
  var nper = l*12;
  var pmt = income;
  var type = 1;

  var n1 = pmt*(1+rate);
  var n2 = Math.pow(1+rate,nper);
  var n3 = (n2-1)/rate;
  var result = (n1*n3)/n2;
  income = Math.floor(income);
  result = Math.floor(result);

console.log(adjR);
console.log(rate);
console.log(nper);
console.log(pmt);
console.log(n1);
console.log(n2);
console.log(n3);

  document.querySelector("#income").innerHTML = income;
  document.querySelector("#result").innerHTML = result;
}
