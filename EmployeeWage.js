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



// UC4: Calculate Wages for a Month
function calculateMonthlyWage(){
    let totalWage =0;
    let totalHours = 0;
    let totalDays = 0;

    console.log("Daily Wage Details");
    console.log("--------------");

    for(let day =1; day <= TOTAL_WORKING_DAYS; day++){
        let dailyResult = calculateDailyWage();
        totalWage += dailyResult.dailyWage;
        totalHours += dailyResult.hoursWorked;
        if(dailyResult.hoursWorked !=0){
            totalDays++;
        }

        // console.log(
        //     `Day ${day}: Work Type: ${dailyResult.workType}, Hours Worked: ${dailyResult.hoursWorked}, Daily Wage: $${dailyResult.dailyWage}`
        // );
        
    }
    console.log("--------------");
console.log(`Total Wage for the Month: $${totalWage} Days ${totalDays} Hours ${totalHours}`);
}

//UC5

function maxWages(){
    let totalWage =0;
    let totalHours = 0;
    let totalDays = 0;

    console.log("Daily Wage Details");
    console.log("--------------");

    while(totalDays <20 && totalHours <160){
        let dailyResult = calculateDailyWage();
        totalWage += dailyResult.dailyWage;
        totalHours += dailyResult.hoursWorked;
        if(dailyResult.hoursWorked !=0){
            totalDays++;
        }

        // console.log(
        //     `Day ${day}: Work Type: ${dailyResult.workType}, Hours Worked: ${dailyResult.hoursWorked}, Daily Wage: $${dailyResult.dailyWage}`
        // );
        
    }
    console.log("--------------");
console.log(`Total Wage for the Month: $${totalWage} Days ${totalDays} Hours ${totalHours}`);
}

maxWages();

/*

    while (totalDays <20 && totalHours <160) {
        let attendance = checkAttendance();
        if (attendance) {
        let result = calculateDailyWages();
        totalDays++;
        totalHours += result.workedHours;
        Salary += result.dailyWages;
        }
    }
  console.log("The Employee worked hours:", totalHours, ", montly salary:", Salary,"and total days:",totalDays);
}

maxWages();

*/