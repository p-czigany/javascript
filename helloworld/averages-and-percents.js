'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
var dailyCodingInHours = 6;
var semesterLengthInWeeks = 17;
var averageWeeklyCodingHours = 52;
var hoursInADay = 24;
var workdaysPerWeek = 5;
console.log("Coding hours in a semester: " + dailyCodingInHours * workdaysPerWeek * semesterLengthInWeeks);
console.log("Ratio of coding / work hours during the semester: " + dailyCodingInHours * workdaysPerWeek / averageWeeklyCodingHours * 100 + "%");
