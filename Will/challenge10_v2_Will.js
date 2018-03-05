//Challenge 10

function defineFirstArg(func, arg) {

    //console.log(func);
  
        //console.log(arg);									//arg is defined here.
  
    var firstArg = arg;										//define firstArg to be input into the inner function
  
               console.log(firstArg);						//firstArg is defined here
  
    var inFunc = func;										//define a function to be called in the inner function ??? this probably isn't necessary?
  
    //console.log(inFunc);
  
        function newFunc(firstArg) {				//declare the inner function
  
        //console.log(inFunc);							//the inFunc declaration on line 7 doesn't get passed into this scope??
  
        console.log(firstArg);						//the firstArg variable didn't get passed into this scope??
  
        var result = inFunc(firstArg);		//can't call inFunc since it's not defined...
  
        //console.log(result);
  
        };
  
        return newFunc;
  
  }
  
 
  
  // Uncomment these to check your work!
  
  const subtract = function(big, small) { return big - small; };
  
  //console.log(subtract);
  
  //const subFrom20 = defineFirstArg(subtract, 20);
  
  //console.log(subFrom20);
  
  console.log(subtract); // should log: 15