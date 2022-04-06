function myFunction(myParameter){
    
    if (myParameter > 13 ) {

        return "true!";
    }
    return "false!";
 }

 console.log("The parameter is " + myFunction(20)) ;
 module.exports = myFunction;