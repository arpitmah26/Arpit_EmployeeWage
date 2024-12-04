# Arpit_EmployeeWage

3/12/24
created Repository Arpit_EmployeeWage.

4/12/24

# Wage Calculation Program

This program is designed to calculate daily and monthly wages based on the type of work (part-time, full-time, or no time). It simulates the work hours and computes the total wage earned by an individual over a month.

## Features

### Constants

- **HOURLY_WAGE**: The hourly wage rate (Rs. 20).
- **PART_TIME_HOURS**: The number of hours for part-time work (4 hours).
- **FULL_TIME_HOURS**: The number of hours for full-time work (8 hours).

### Functions

#### `getWorkHours(workType)`

This function returns the number of work hours based on the type of work. The work type is represented by integers:
- `0`: No work
- `1`: Part-time work
- `2`: Full-time work

**Parameters:**
- `workType` (int): The type of work.

**Returns:**
- `int`: The number of hours worked.

#### `calculateDailyWage()`

This function calculates the daily wage based on a randomly assigned work type (no work, part-time, or full-time).

**Returns:**
- `Object`: An object containing the following properties:
  - `hoursWorked` (int): The number of hours worked.
  - `dailyWage` (int): The calculated daily wage.
  - `workType` (string): Description of the work type.

#### `calculateMonthlyWage()`

This function calculates the total wage, total hours worked, and total days worked over a month. It logs the daily wage details and the total wage for the month.

**Usage:**
```javascript
calculateMonthlyWage();
```

This function calculates the total wage, total hours worked, and total days worked until a maximum of 20 days or 160 hours is reached, whichever comes first. It logs the daily wage details and the total wage for the period.


**Usage:**
```javascript
maxWages();
```

## Simulation  
The program simulates daily and monthly wage calculation by invoking the appropriate functions. It outputs the daily wage details and total monthly wages.

**Usage:**

```javascript
maxWages();
```


