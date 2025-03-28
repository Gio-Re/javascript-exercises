const reverseString = function(text) {
    const textArray = text.split('');
    const reversedArray = textArray.reverse();
    let reversed = '';
    for  (const char of reversedArray) {
        reversed += char;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
