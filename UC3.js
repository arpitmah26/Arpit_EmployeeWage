// Refactor the Code to write a function to get work hours


const HOURLY_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

// function to get work hours based on work type
function getWorkHours(workType){
    switch(workType){
        case 0:
            return 0;
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// function to calculate the daily wage based on work type
function calculateDailyWage(){
    let workType =Math.floor(Math.random() * 3);

    let hoursWorked = getWorkHours(workType);

    let workTypeDescription;
    switch(workType){
        case 0:
            workTypeDescription = "No Time";
            break;
        case 1:
            workTypeDescription = "Part Time";
            break;
        case 2:
            workTypeDescription = "Full Time";
            break;
        default:
            workTypeDescription = "Unknown";
    }

    //cal daily wage

    let dailyWage =hoursWorked * HOURLY_WAGE;

    // return the result as an object
    return {
        hoursWorked,
        dailyWage,
        workType: workTypeDescription,
    };
}

for(let i  = 0; i < 6
    ; i++){
    const result = calculateDailyWage();
    console.log(`Work Type: ${result.workType}, Hours Worked: ${result.hoursWorked}, Daily Wage: $${result.dailyWage}`);
    
}