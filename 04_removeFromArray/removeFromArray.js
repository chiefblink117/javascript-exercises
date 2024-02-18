// let array = [1, 2, 3, 4];
const removeFromArray = function(arr, ...values) {
    return arr.filter(element => !values.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
