function randomNumber(minNumber, maxNumber){
     
 return Math.floor(Math.random() * (maxNumber - minNumber + 1)) +minNumber;

}
console.log(randomNumber(5, 10));
module.exports = randomNumber;