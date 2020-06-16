function calc()
{
  var n = parseInt(document.getElementById("n").value);
  var pv = parseInt(document.getElementById("pv").value);
  var r = parseInt(document.getElementById("r").value);
  var i = parseInt(document.getElementById("i").value);
  var inve = parseInt(document.getElementById("inve").value);

  var i = i/100;
  var r = r/100;

  var powe1 = Math.pow(1+i,n);
  var powe2 = Math.pow(1+r,n);

  var fv = pv*powe1;
  var fv1 = inve*powe2;

  fv = Math.floor(fv);
  fv1 = Math.floor(fv1);

  var result = fv-fv1;
  result = result/n;
  result = result/12;

  result = Math.floor(result);

  document.querySelector("#result").innerHTML = result;
  document.querySelector("#fv").innerHTML = fv;
  document.querySelector("#fv1").innerHTML = fv1;

}
