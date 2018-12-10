/*var constants = require('./constants');

console.log(`${constants.Underscore}%s${constants.Reset}` ,"I Am Using Yellow");
console.log("\x1b[44m%s\x1b[0m" ,"Background Color Is Blue");

constants.value(['Bienvendido', 'prueba']);

console.unicorn = console.log.bind(console, '🦄 ');
console.pizza = console.log.bind(console, '🍕 ');
console.beer = console.log.bind(console, '🍺  %s 🍺');
console.poo = console.log.bind(console, '💩  %s 🙏');

// Log to the console!
console.unicorn("Magical!");
console.beer("Cheers!");
console.pizza("Tasty!");
console.poo("Oh f*ck!");


var l = console.log.bind(console, '🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 \n LOG: %s \n🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 ');
var w = console.warn.bind(console, 'WARN:');
var e = console.error.bind(console, 'ERROR:');

l('Test')
*/

function log (msg, color) {
    color = color || "black";
    bgc = "White";
    switch (color) {
        case "success":  color = "Green";      bgc = "LimeGreen";       break;
        case "info":     color = "DodgerBlue"; bgc = "Turquoise";       break;
        case "error":    color = "Red";        bgc = "Black";           break;
        case "start":    color = "OliveDrab";  bgc = "PaleGreen";       break;
        case "warning":  color = "Tomato";     bgc = "Black";           break;
        case "end":      color = "Orchid";     bgc = "MediumVioletRed"; break;
        default: color = color;
    }

    if (typeof msg == "object") {
        console.log(msg);
    } else if (typeof color == "object") {
        console.log("%c" + msg, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;");
        console.log(color);
    } else {
        console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
    }
}