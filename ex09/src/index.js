function logicalOrOperator(num){

    if (num < 20 || num > 30) {
        return "Out";
    }
    return "In";
}
console.log(logicalOrOperator(100));
module.exports = logicalOrOperator;