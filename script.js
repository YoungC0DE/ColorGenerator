const copyBtn = document.getElementById("copy")

copyBtn.addEventListener("click", () => {
    if (copyBtn.textContent != "Copied!") copyBtn.innerHTML = "Copied!"

    /* Get the text field */
    var copyText = document.getElementById("code")

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)
})

const colorRGB = () => {
    let R = document.getElementById("R").value,
        G = document.getElementById("G").value,
        B = document.getElementById("B").value

    let color = `rgb(${R}, ${G}, ${B})`
    document.getElementById("resultColor").style.backgroundColor = color
    document.getElementById("code").value = "background-color: " + color
}

document.getElementById("R").addEventListener("input", colorRGB)
document.getElementById("G").addEventListener("input", colorRGB)
document.getElementById("B").addEventListener("input", colorRGB)