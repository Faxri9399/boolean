const marks = [81, 70, 86, 59, 77];
console.log(calculateGrade(marks)); 
function calculateGrade(marks) {
    let avrg = calculateAverage(marks)
    if (avrg < 50) return 'F';
    if (avrg < 60) return 'F';
    if (avrg < 70) return 'F';
    if (avrg < 80) return 'F';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
    sum += value;
    let avrg = sum / array.length;
    return avrg;
}