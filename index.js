exports.encode = (base, message) => {
    encoded = "";
    var bytes = [],
        count = 0;
    return message.split("").forEach((char => {
        bytes.push(char.charCodeAt())
    })), base <= 36 && base >= 2 ? bytes.forEach((byte => {
        count != message.length - 1 ? (encoded += byte.toString(base) + " ", count++) : encoded += byte.toString(base)
    })) : encoded = "An error has been occurred", encoded
}, exports.decode = (base, message) => (decoded = "", base <= 36 && base >= 2 ? message.split(" ").forEach((byte => {
    decoded += String.fromCharCode(parseInt(byte, base))
})) : decoded = "An error has been occurred", decoded);