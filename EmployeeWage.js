// UC4.js

// Constants
const HOURLY_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const TOTAL_WORKING_DAYS = 20;

// UC1: Check Employee Attendance
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

// for(let i=0 ; i<5; i++){
//     console.log(`Employee is ${checkEmployeeAttendance()}`);
    
// }

// UC3: Get Work Hours Based on Work Type
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

// UC2: Calculate Daily Wage
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

// for(let i = 0; i < 5; i++) {
//     const result = calculateDailyWage();
//     console.log(`Work Type: ${result.workType}, Hours Worked: ${result.hoursWorked}, Daily Wage: $${result.dailyWage}`);
    
// }

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









// Run the Monthly Wage Calculation
// calculateMonthlyWage();
