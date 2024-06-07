const fibonacci = function(num) {
    if (num >= 0) {
        let numbers = [0,1];
        for (i=0; i < num; i++){
            let sum = numbers[i] + numbers[i+1];
            numbers.push(sum);
        }
        return numbers[num];
    } else return ("OOPS");
};

// Do not edit below this line
module.exports = fibonacci;
