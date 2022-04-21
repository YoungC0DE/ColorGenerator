const colorRGB = () => {
    let R = document.getElementById("R").value,
        G = document.getElementById("G").value,
        B = document.getElementById("B").value
    
    let color = `rgb(${R},${G},${B})`
    document.getElementById("resultColor").style.backgroundColor = color
    document.getElementById("code").innerHTML = "background-color: " + color
}

document.getElementById("R").addEventListener("input", colorRGB)
document.getElementById("G").addEventListener("input", colorRGB)
document.getElementById("B").addEventListener("input", colorRGB)