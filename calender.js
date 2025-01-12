const date=document.querySelector("#date");
const day=document.querySelector("#day");
const month=document.querySelector("#month");
const year=document.querySelector("#year");

const today=new Date();
console.log(today);
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allMonths=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML =allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();