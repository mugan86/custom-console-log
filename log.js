module.exports = {
    success: function(message) {
        console.log(`%c😁😁 %s 😁😁`, 'color: green; font-size: 18px', message)
    },
    info: function(message) {
        console.log(`%c😁😁 %s 😁😁`, 'color: #81BEF7; font-size: 18px', message)
    },
    error: function(message) {
        console.error('😡😡 %s 😡😡', message);
    }
};