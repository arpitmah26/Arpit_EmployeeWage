/*
Ability to Calculate Daily 
Employee Wage based on 
part time or full time work
 UC 2 - Use Math.Random to check No Time, 
Part Time or Full Time- Assume Part Time is 4 Hrs and Full time 
is 8 Hrs and per hour wage is $20- Solve Using  Switch Statement
*/

const HOURLY_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;


function calculateDailyWage(){


    //generate random work type
    let workType = Math.floor(Math.random() * 3);

    // var to store work hrs
    let hoursWorked;
    let workTypeDescription;

    switch(workType){
        case 0:
            hoursWorked =0;
            workTypeDescription = "No Time";
            break;

        case 1:
            hoursWorked = PART_TIME_HOURS;
            workTypeDescription = "Part Time";
            break;
        case 2:
            hoursWorked = FULL_TIME_HOURS;
            workTypeDescription = "Full Time";
            break;
        default:
            hoursWorked = 0;
            workTypeDescription ="Unknown";
            break;
    }

    // cal wage
    let dailyWage  = hoursWorked * HOURLY_WAGE;

    return{
        hoursWorked,
        dailyWage,
        workType : workTypeDescription,
    };
}

for(let i = 0; i < 5; i++) {
    const result = calculateDailyWage();
    console.log(`Work Type: ${result.workType}, Hours Worked: ${result.hoursWorked}, Daily Wage: $${result.dailyWage}`);
    
}