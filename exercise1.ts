//1
let rectangleLength:number = 5; //the length of rectangle
let rectangleWidth:number = 3;  //the width of rectangle
let rectangleArea:number = rectangleLength * rectangleWidth;
console.log(rectangleArea); //Area of rectangle
//2
let rectanglePerimeter:number = 2 * (rectangleLength + rectangleWidth);
console.log(rectanglePerimeter); //Perimeter of rectangle
//3
let circleRadius:number = 5; //radius of circle
let circleDiameter:number = 2 * circleRadius //diameter of circle
console.log(circleDiameter);

let circleCircumference:number = 2 * Math.PI * circleRadius;
console.log(circleCircumference);

let circleArea:number = Math.PI * circleRadius ** 2;//math PI is 3.14
console.log(circleArea);
//4
let angleA:number = 80;
let angleB:number = 65;
let totalAngle:number = 180; //total angle of triangle is 180
let angleC:number = totalAngle-angleA-angleB;
console.log(angleC);
//5
let days:number = 400;
let years:number = Math.floor(days/365);
let remainingDays:number = days % 365;
let months:number = Math.floor(remainingDays/30);
let fDays: number = remainingDays % 30;
console.log(`${years} year, ${months} month, ${fDays} days.`); //1 year, 1month, 5 days.

let days2:number = 366;
let years2:number = Math.floor(days2/365);
let remainingDays2:number = days2 % 365;
let months2:number = Math.floor(remainingDays2/30);
let fDays2: number = remainingDays2 % 30;
console.log(`${years2} year, ${months2} month, ${fDays2} day.`); //1 year, 0 month, 1 day
//7
let date1 = new Date("2022-1-20")
let date2 = new Date("2022-01-22")
let diffDays = date1.getDay() - date2.getDay(); //the result will be in minus so need to *-1 to get the result
diffDays = -diffDays
console.log(diffDays);

