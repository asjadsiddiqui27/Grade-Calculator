let OutMarks = document.querySelectorAll(".outOfMarks");
OutMarks[0].value = 100;
OutMarks[1].value = 100;
OutMarks[2].value = 100;
OutMarks[3].value = 100;
OutMarks[4].value = 100;
OutMarks[5].value = 500;
// setOutOfMarks


// get Access Input marks
let obtainMarks = document.getElementsByClassName("obtainMarks");
let obtainMarksArray = Array.from(obtainMarks); //covert classCollection to array.

let totalobtain = document.getElementById("totalObtain")  //TotalMarksOFAllSub

//get Submit Button
let btnSubmit = document.getElementById("submitBtn");

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();//To pervent from loading the page after a click

    // Use reduce to calculate the total
    let total = obtainMarksArray.reduce((acc, el) => {
        return acc + parseInt(el.value); // Use parseInt to convert the value to a number
    }, 0);

    totalobtain.value = total;
    //Total Sum Of all Sub marks


    // percentage

    let percentage = document.getElementById("percentage");
    let finalPer = ((total / OutMarks[5].value) * 100);
    percentage.value = finalPer.toFixed(2);
    console.log(percentage.value);


    // Grade
    let grade = document.getElementById("grade");
    if ((finalPer >= 80) && (finalPer < 100)) {
        grade.value = "A";
    }
    else if ((finalPer >= 65) && (finalPer < 80)) {
        grade.value = "B";
    }
    else if ((finalPer >= 50) && (finalPer < 65)) {
        grade.value = "C";
    }
    else if ((finalPer >= 45) && (finalPer < 50)) {
        grade.value = "D";
    }
    else if ((finalPer >= 30) && (finalPer < 45)) {
        grade.value = "E";
    }
    else if ((finalPer < 30)) {
        grade.value = "F";
    }


})