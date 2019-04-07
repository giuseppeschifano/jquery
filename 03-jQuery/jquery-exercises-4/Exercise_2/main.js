
//Check to see if script is linked properly.
console.log("This script is linked properly")


let expenses = 18;
let insurances = 7;
let contrib = 5;

//Write your JS code here...

let totReduction = expenses + insurances + contrib;

    //function to calculate salary

$(".calc").click(function(){

    //get the inputs

  let gross =  Number($("#salary").val());
  let gender = Number($("#gender").val());
  let children = Number($("#children").val());
    console.log("gross " + gross + " | gender " + gender + " | " + " | children " + children );

  //check childs

  if(children === 3){
      totReduction = totReduction -1;
  }else if(children === 4){
      totReduction = totReduction - 2;
  }

  //check gender woman (=2) !

  if(gender == 2){
    totReduction = totReduction -2;
    }

    //formula to calculate end result

    let result = gross - ((gross * totReduction)/100);

    //print it to html

    $(".salary").html("€ " + result)
    
    //reset the totReduction

    totReduction = expenses + insurances + contrib;

  
});

 
