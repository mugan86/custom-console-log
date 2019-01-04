const mensajeTipo = "estilo, mensaje,emoji, estilo,emoji";
const contenido = "background-color: red;";
const value = mensajeTipo.split(",");
let finalMessageFormat = "";
for(let i = 0; i < value.length; i++) {
    if (value[i].trim() === "estilo") {
        console.log(checkBlankSpaces(value[i]), "%c");
        finalMessageFormat = finalMessageFormat + (checkBlankSpaces(value[i]) + "%c");
    } else if (value[i].trim() === "mensaje" || value[i].trim() === "emoji") {
        // checkBlankSpaces(value[i])
        console.log(checkBlankSpaces(value[i]), "%s");
        finalMessageFormat = finalMessageFormat + (checkBlankSpaces(value[i]) +  "%s");
    }
}

console.log(finalMessageFormat);

function checkBlankSpaces(text) {
    let position = 0;
    const blankSpacesStart = [];
    while (text[position] === " " && position <= text.length) {
        blankSpacesStart.push(" ");
        position = position + 1;
    }
    console.log(blankSpacesStart.length);
    return String(blankSpacesStart);
}