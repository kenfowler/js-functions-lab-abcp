function happyHolidays() {
  return 'Happy holidays!'
}
function happyHolidaysTo(name) {
  return 'Happy holidays, ${name}!'
}
function happyHolidayTo(nameOfHoliday,name) {
  return 'Happy ${nameOfHoliday}, ${name}!'
}
function holidayCountdown(holiday,days) {
  return 'It\'s ${days} days until ${happyHolidays}!'
}