/*
Ability to Check Employee is 
present or Absent- Use Math.Random to check Absent or 
Present
 UC 1 - Use const which signal that the identifier 
won't be reassigned. And use let where the 
variable may be reassigned. Both have Block 
Scope. Traditional var has function scope
*/

const PRESENT = "Present";
const ABSENT = "Absent";

function checkEmployeeAttendance(){
    const PRESENT = "Present";
    const ABSENT = "Absent";

    let status;
    if(Math.random() < 0.5){
        status = ABSENT;
    }else{
        status =PRESENT;
    }
    return status;
}

for(let i=0 ; i<5; i++){
    console.log(`Employee is ${checkEmployeeAttendance()}`);
    
}