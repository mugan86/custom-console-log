console.unicorn = console.log.bind(console, "🦄 ");

function success (message) {
    console.log("%c😁😁 %s 😁😁", "color: green; font-size: 18px", message);
}

function prueba (message) {
    console.log("%c %s", "color: green; font-size: 18px", message);
    //console.log("prueba-");
}
function info (message) {
    console.log("%c😁😁 %s 😁😁", "color: #81BEF7; font-size: 18px", message);
} 

function error (message) {
    console.error("😡😡 %s 😡😡", message);
}

function unicorn () {
    console.log("Hola");
}

function hola () {
    return 1;
}

module.exports = {
    success,
    prueba,
    info,
    error,
    hola,
    unicorn
};