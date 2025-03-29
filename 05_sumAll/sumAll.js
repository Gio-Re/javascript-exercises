const sumAll = function(start, stop) {
    let sum = 0;
    if (start < 0 || stop <0 || !Number.isInteger(start) || !Number.isInteger(stop)) {
        return 'ERROR';
    }
    else if ( start > stop ) {
        for (let num = stop; num <= start; num++) {
            sum += num;
        }
        return sum;
    
    }
    for (let num = start; num <= stop; num++) {
        sum += num;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
