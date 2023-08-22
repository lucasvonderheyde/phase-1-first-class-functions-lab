// Code your solution in this file!
const returnFirstTwoDrivers = function(scuberDrivers) {
    return scuberDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(scuberDrivers) {
    return scuberDrivers.slice(-2, scuberDrivers.length + 1)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultipler) {
    return function (fare) {
        return fare * fareMultipler;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectDriversFunction) {
    return selectDriversFunction(drivers)
}

