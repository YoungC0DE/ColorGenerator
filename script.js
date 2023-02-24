// function to convert rgb in hexadecimal
const rgbaToHex = (r=0,g=0,b=0,a=1) => {
  r = parseInt(r).toString(16);
  g = parseInt(g).toString(16);
  b = parseInt(b).toString(16);
  a = Math.round(parseFloat(a) * 255).toString(16);

  r = r.length == 1 ? '0'+r : r;
  g = g.length == 1 ? '0'+g : g;
  b = b.length == 1 ? '0'+b : b;
  a = a.length == 1 ? '0'+a : a;

  return "#" + r + g + b + a;
}

const copyColor = (el, mode) => {
    // Get the text in input
    let input = document.getElementById(mode);

    // Select the text field
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */

    // set the copied text in the transfer area
    navigator.clipboard.writeText(input.value);

    // Change message in button
    el.innerHTML = "Copied!";
}

const colorRGBA = () => {
    let R = document.getElementById("rangeR").value,
        G = document.getElementById("rangeG").value,
        B = document.getElementById("rangeB").value,
        A = document.getElementById("rangeA").value / 100;

    let rgba = `rgba(${R}, ${G}, ${B}, ${A})`;
    let hex = rgbaToHex(R, G, B, A);

    document.getElementById("resultColor").style.backgroundColor = rgba
    document.getElementById("rgbaCode").value = rgba;
    document.getElementById("hexCode").value = hex;
}

const setValueInRange = (el, elSibling, alfa=false) => {
    elSibling.value = alfa ? el.value / 100 : el.value;
    colorRGBA();
}

document.getElementById("copyRgba").addEventListener("click", (e) => copyColor(e.target, 'rgbaCode'));
document.getElementById("copyHex").addEventListener("click", (e) => copyColor(e.target, 'hexCode'));

['R', 'G', 'B', 'A'].forEach((el, index) => {
    document.getElementById(`range${el}`).addEventListener('input', (e) => {
        setValueInRange(e.target, e.target.nextElementSibling, el == 'A' ? true : false)
    });
    document.getElementById(`num${el}`).addEventListener('input', (e) => {
        setValueInRange(e.target, e.target.previousElementSibling, el == 'A' ? true : false)
    });
});