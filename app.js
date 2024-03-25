const form = document.querySelector("form");
// days content
const dayTitle = document.getElementById("dayTitle");
const day = document.getElementById("day");
const dayErr = document.getElementById("dayErr");
// month content
const monthTitle = document.getElementById("monthTitle");
const month = document.getElementById("month");
const monthErr = document.getElementById("monthErr");
// year content
const yearTitle = document.getElementById("yearTitle");
const year = document.getElementById("year");
const yearErr = document.getElementById("yearErr");

// results
const yearResult = document.getElementById("yearResult");
const monthResult = document.getElementById("monthResult");
const dayResult = document.getElementById("dayResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getErrors();
  getResult();
});

function getResult() {
  // first get values and current Date
  day.value = parseInt(day.value);
  month.value = parseInt(month.value);
  year.value = parseInt(year.value);
  const currentDate = new Date();

  // calculate year and show it dom
  const birthday = new Date(`${month.value}, ${day.value}, ${year.value}`);
  const diff = currentDate - birthday;

  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  yearResult.innerHTML = age;
  // calculate months and show it dom
  currentMonth = currentDate.getMonth() + 1;

  let monthDifference = month.value - currentMonth;

  if (monthDifference < 0) {
    monthDifference += 12;
  } else {
    Math.abs(monthDifference);
  }
  monthResult.innerHTML = monthDifference;
  // calculate days and show it dom
  currentDay = currentDate.getDate();

  let dayDifference = day.value - currentDay;

  if (dayDifference < 0) {
    dayDifference += 31;
  } else if (day.value > currentDay) {
    dayDifference = currentDay - day.value;
  } else {
    Math.abs(dayDifference);
  }

  dayResult.innerHTML = dayDifference;
}

function getErrors() {
  // day if logic
  if (day.value === "") {
    dayTitle.style.color = "red";
    day.style.border = "1px solid #ff5959";
    dayErr.innerHTML = "Must be a valid day";
  } else if (day.value > 31 || day.value < 1) {
    dayTitle.style.color = "red";
    day.style.border = "1px solid #ff5959";
    dayErr.innerHTML = "nice try baby";
  } else {
    dayTitle.style.color = "";
    day.style.border = "1px solid #854dff";
    dayErr.innerHTML = "";
  }
  // month if logic
  if (month.value === "") {
    monthTitle.style.color = "red";
    month.style.border = "1px solid #ff5959";
    monthErr.innerHTML = "Must be a valid day";
  } else if (month.value > 12 || month.value < 1) {
    monthTitle.style.color = "red";
    month.style.border = "1px solid #ff5959";
    monthErr.innerHTML = "Nice try baby";
  } else {
    monthTitle.style.color = "";
    month.style.border = "1px solid #854dff";
    monthErr.innerHTML = "";
  }
  // year if logic
  if (year.value === "" || year.value > 2024) {
    yearTitle.style.color = "red";
    year.style.border = "1px solid #ff5959";
    yearErr.innerHTML = "Must be a valid day";
  } else if (year.value < 1924) {
    yearTitle.style.color = "red";
    year.style.border = "1px solid #ff5959";
    yearErr.innerHTML = "you are lucky or dead";
  } else {
    yearTitle.style.color = "";
    year.style.border = "1px solid #854dff";
    yearErr.innerHTML = "";
  }
}
