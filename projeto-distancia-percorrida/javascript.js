function conversor(){
    var m = Number(window.prompt('Digite quantos metros você percorreu:'))
    km = m * 0.001
    he = m * 0.01
    dam = m * 0.1
    dcm = m * 10
    cm = m * 100
    mm = m * 1000

    var res = document.querySelector('section#res')
    res.innerHTML = (`<p style='font-weight: bold; font-family: Verdana; font-size:1.5em'> A distância percorrida de ${m}m, corresponde a.. </p>`)
    res.innerHTML +=(`<p style = 'font: bold 1em 'Courier New', Courier, monospace'> você percorreu ${km} quilômetros(Km) </p>`)
    res.innerHTML +=(`<p style = 'font: bold 1em 'Courier New', Courier, monospace'> você percorreu ${he} hectômetros(Hm) </p>`)
    res.innerHTML +=(`<p style = 'font: bold 1em 'Courier New', Courier, monospace'> você percorreu ${dam} Decâmetros(Dam) </p>`)
    res.innerHTML +=(`<p style = 'font: bold 1em 'Courier New', Courier, monospace'> você percorreu ${dcm} Decímetros(dm) </p>`)
    res.innerHTML +=(`<p style = 'font: bold 1em 'Courier New', Courier, monospace'> você percorreu ${cm} centímetros(cm) </p>`)
    res.innerHTML +=(`<p style = 'font: bold 1em 'Courier New', Courier, monospace'> você percorreu ${mm} milímetros(mm) </p>`)
}
