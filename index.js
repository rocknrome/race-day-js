//Race Day project
//Adult registrants run at 9:30 am or 11:00 am.
//Early adults run at 9:30 am.
//Late adults run at 11:00 am.
//Youth registrants run at 12:30 pm (regardless of registration).
//But we didn't plan for runners that are exactly 18! We'll handle that by the end of the project.
//Create a variable that indicates whether a runner registered early or not. Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
//Create a variable for the runner’s age and set it equal to a number. You’ll change this later as you test different runner conditions.
let runnerAge = 16
//Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
if (runnerAge >= 18 && earlyRegistration === true) {
  raceNumber = raceNumber + 1000;
}
//Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
if (runnerAge >= 18 && earlyRegistration === true) {
  console.log('You are running at 9:30am ' + 'and your race number is ' + (raceNumber))
}
  //“Late adults run at 11:00 am”. Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am. Write the corresponding else if statement. Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
else if (runnerAge >= 18 && earlyRegistration === false) 
  console.log('Late adults run at 11:00 am ' + 'and your race number is ' + (raceNumber))
//“Youth registrants run at 12:30 pm (regardless of registration)”. For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
else if (runnerAge < 18) 
  console.log('Youth registrants run at 12:30 pm (regardless of registration) ')





