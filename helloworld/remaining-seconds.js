'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

var hoursInADay = 24;
var minutesInAnHour = 60;
var secondsInAMinute = 60;

var secondsInADay = hoursInADay * minutesInAnHour * secondsInAMinute;
var elapsedTimeInSeconds = currentHours * minutesInAnHour * secondsInAMinute + currentMinutes * secondsInAMinute + currentSeconds;

console.log("Remaining seconds of the day: " + (secondsInADay - elapsedTimeInSeconds));
