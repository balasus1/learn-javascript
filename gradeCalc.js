const grades = function (score, totalScore) {
    const percent = (score/totalScore) * 100
    let grade = ''

    if (percent >= 90){
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'        
    }

    return `You got ${grade} (${percent}%)`
}
const result = grades(80, 100)
console.log(result)

