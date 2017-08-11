/////////////////////////Main Body///////////////////////////////
var operatorSign;
var num1= '',
    num2 = '',
     ans = '';
var display = document.getElementById('ans');


//////////////////////////Operator//////////////////////////////

function operator(op){
    operatorSign = op;
    display.innerHTML = operatorSign;
}


//////////////////////Number retrieving///////////////////////////



function num(n){
    if(operatorSign === undefined){
        num1 += n;
        display.innerHTML = num1
    }

    else {
        num2 += n;
        display.innerHTML = num2
    }

}
  

  /////////////////////////calculation///////////////////////

  function perform(equals) {
      if(equals === '='){

    if(operatorSign === 'x' ){
        ans =  num1*num2; 
        display.innerHTML= ans;
         val1 = ans;
         val2 = "";
           

        
    
    
    }
    else if(operatorSign === '/' ){
        ans = num1/num2;
        display.innerHTML= ans;
         val1 = ans;
         val2 = "";
            
        
    
    
    }
    else if(operatorSign === '-' ){
        ans = num1 - num2;
        display.innerHTML= ans;
         val1 = ans;
         val2 = "";
            
            
        
    }
    else if(operatorSign === '+')

{
       ans = Number(num1) + Number(num2);
        display.innerHTML= ans;
         val1 = ans;
         val2 = "";
            
          
      
    }
      
  
   }else{
        num1 = '';
        num2 = '';
        ans = '';
        operatorSign = undefined;

        display.innerHTML = '';

    }

  }

  function square(){
      var root = num1 * num1;
      display.innerHTML = root;
  }

 function sqRoot() {
     var sRoot = Math.sqrt (Number(num1));
     display.innerHTML = sRoot;
 }
  





      
    
     


  





























 