function conversor(){
  var c = Number(window.prompt('Digite uma temperatura em ºC(celcius):'))
  var k = c + 273
  var f = (c*1.8) + 32
  var res = document.querySelector("section#res")
  
  res.innerHTML = (`<p style="font: normal bold 1.5em verdana">A temperatura de ${c}°C, corresponde a...</p>`)
  res.innerHTML += (`<p style="font normal bold 1em verdana">${k}'k(Kelvin)</p>`)
  res.innerHTML += (`<p style="font normal bold 1em verdana">${f}'F(Fahrenheit)</p>`)
  
}