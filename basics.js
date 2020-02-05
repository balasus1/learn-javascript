let fahrenheit2Celsius = function(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9
    if(celcius <= 0){
        let isFreezing = true
    }
    return celcius
}

let temp1 = fahrenheit2Celsius(35)
let temp2 = fahrenheit2Celsius(64)

let getTip = function(total, tipPercent = .5){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    // using template string
    return `A ${percent}% tip on $${total} would be $${tip}`
}
console.log(temp1)
console.log(temp2)
let tip = getTip(40)
console.log(tip)