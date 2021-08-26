// Your code here

let createEmployeeRecord = function(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(array) {
    return array.map(arr => createEmployeeRecord(arr) )
}

let createTimeInEvent = function(employee, time) {
    let [date, hour] = time.split(" ")
    employee.timeInEvents.push({type: "TimeIn", date: date, hour: parseInt(hour) })
    return employee
}

let createTimeOutEvent = function(employee, time) {
    let [date, hour] = time.split(" ")
    employee.timeOutEvents.push({type: "TimeOut", date: date, hour: parseInt(hour) })
    return employee
}

let hoursWorkedOnDate = function(obj, date) {
    let timeIn = obj.timeInEvents.find(object => object.date == date )
    let timeOut = obj.timeOutEvents.find(object => object.date == date )
    let hoursWorked = timeOut.hour/100 - timeIn.hour/100
    return hoursWorked
}

let wagesEarnedOnDate = function(object, date) {
    let hours = hoursWorkedOnDate(object, date)
    let payAmount = object.payPerHour
    let payCheck = hours * payAmount
    return payCheck
}

let allWagesFor = function(object) {
    let dates = object.timeInEvents.map(obj => obj.date)
    let payAmounts = dates.map(date => wagesEarnedOnDate(object, date))

    let payCheck = payAmounts.reduce(function(total, current) {
        return total + current
    })
    return payCheck
}

let findEmployeeByFirstName = function(array, firstName) {
    // let names = array.map(obj => obj.firstName)
    // let name = names.find(name => name === firstName)
    // console.log(name)
    // return name
    let person = array.find(obj => obj.firstName == firstName)
    return person
}

let calculatePayroll = function(array) {
    let wages = array.map(obj => allWagesFor(obj))
    let payRoll = wages.reduce(function(total, current) {
        return total + current
    })
    return payRoll
}

