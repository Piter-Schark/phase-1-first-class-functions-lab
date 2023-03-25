// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2);
}

 const returnLastTwoDrivers = function () {
    return drivers.slice(2);
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier (multiplier){
    return function fareMultiplier(fare){
        return (multiplier * fare)
    }
 }

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, selection){
    return  selection (returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers))
}
