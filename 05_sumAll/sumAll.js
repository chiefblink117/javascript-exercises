const sumAll = function(int1, int2) {
    let allNum = 0;
    if (Number.isInteger(int1) && Number.isInteger(int2)) {
        if (int1 < int2) {
        for (i=int1 + 1; i < int2 ; i++) {
            allNum += i;
        } 
        } else {
            for (i=int2 + 1; i < int1 ; i++) {
                allNum += i;
            }
        }
        let totalSum = int1 + allNum + int2;
        if (totalSum > 0) {
            return totalSum;
        } else {
            return ("ERROR");
        }
    } else {
        return ("ERROR");
    }
};

// Do not edit below this line
module.exports = sumAll;
