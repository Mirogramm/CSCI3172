const studentNames = ["Alpha", "Bravo", "Charlie", "Delta", "Shrek", "Fiona", "Hannah", "Montana"];
const studentGrades = [
    [85, 92, 78, 90],
    [70, 88, 95, 80],
    [null, 76, 85, 89],
    [90, null, 82, 87],
    [88, 94, 91, 85],
    [75, 80, 70, 25],
    [82, 90, 60, 84],
    [93, 34, 65, 68]
];

function calculateAverage(grades) {
    let sum=0;
    let count=0;
    for (let i=0; i<grades.length; i++) {
        const grade = grades[i];
        if (grade !== null && grade !== undefined) {
            sum += grade;
            count++
        }
    }
    if (count === 0) {return 0;}
    return Math.round(sum/count);
}

function getLetterGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function populateGradeBook() {
    const tableBody = document.getElementById("gradeBook");

    for (let i = 0; i < studentNames.length; i++) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = studentNames[i];
        row.appendChild(nameCell);

        const grades = studentGrades[i];
        for (let j=0; j<4; j++) {
            const gradeCell = document.createElement("td");
            gradeCell.textContent = (grades[j] !== null && grades[j] !== undefined) ? grades[j] : "N/A";
            row.appendChild(gradeCell);
        }

        const average = calculateAverage(grades);
        const averageCell = document.createElement("td");
        averageCell.textContent = average;
        row.appendChild(averageCell);

        const letterGrade = getLetterGrade(average);
        const letterGradeCell = document.createElement("td");
        letterGradeCell.textContent = letterGrade;
        row.appendChild(letterGradeCell);

        tableBody.appendChild(row);
    }
}

window.onload = populateGradeBook;