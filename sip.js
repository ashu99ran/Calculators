function calc()
{
  var pv = parseInt(document.getElementById("pv").value);
  var n = parseInt(document.getElementById("n").value);
  var r = parseInt(document.getElementById("r").value);

  var i = r/100;

  var powe = Math.pow(1+i,n-1);

  var result = pv * [(powe/i)*(1+i)];

  result = Math.floor(result);

  document.querySelector("#result").innerHTML = result;
}
