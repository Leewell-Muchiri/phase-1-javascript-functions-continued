// code your solution here
//razzle()
//function razzle(){
 //   console.log("You've been razzled!");
//}

//function razzle(lawyer = "Billy", target = "'em"){
//    console.log(`${lawyer} razzle-dazzles ${target}!`);
//}
//razzle()

function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

//(function (){
//    return("Yet more razzling");
//});

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
  }
  mondayWork('work from home');


//Lab
function wrapAdjective(par1="*"){
    return function (par="a hard worker"){
        return `You are ${par1}${par}${par1}!`
    };
  }
  wrapAdjective("||") ("passionate in programming");

