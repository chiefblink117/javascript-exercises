const palindromes = function (string) {
    let arr = string.replace(/[^a-zA-Z]/g, '').toLowerCase().split(' ').join('');
    let arrReverse = [...arr].reverse();
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arrReverse[i]) {
            return false;
        }
    } return true;
};

// Do not edit below this line
module.exports = palindromes;
