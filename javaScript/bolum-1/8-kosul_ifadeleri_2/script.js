// age >= 18
// graduation == "high school or university"

let age = 20;
let graduation = "√ľniversity"

age = 20;

if (age >= 20 && (graduation == "high school" || graduation == "√ľniversity")){
    console.log("You meet the eligibility criteria to obtain a driver's license")
}else{
    console.log("You do not meet the eligibility criteria to obtain a driver's license")
}


/*
****** and ****** 

true, true => true
true, false => false
*/

/*
****** or ****** 

true, true => true
true, false => true
false, false => false
*/