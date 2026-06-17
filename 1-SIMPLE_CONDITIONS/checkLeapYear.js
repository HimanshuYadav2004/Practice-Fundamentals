function checkLeapYear(year){
    if(year % 400 == 0){
        return true
    }
    else if(year % 100 == 0){
        return false
    }
    else if(year % 4 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(" 2000 : ", checkLeapYear(2000))
console.log(" 2012 : ", checkLeapYear(2012))
console.log(" 1990 : ", checkLeapYear(1990))
console.log(" 4000 : ", checkLeapYear(4000))