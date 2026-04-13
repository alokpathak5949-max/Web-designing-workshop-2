function generateInputs() {
    let n = document.getElementById("subjects").value;
    let div = document.getElementById("marksInput");
    div.innerHTML = "";

    for (let i = 1; i <= n; i++) {
        div.innerHTML += "<input type='number' id='mark" + i + "' placeholder='Enter marks of subject " + i + "'><br>";
    }
}

function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = document.getElementById("mark" + i).value;
        total += Number(marks);
    }

    let average = total / n;
    let grade = "";

    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks = " + total +
        "<br>Average = " + average +
        "<br>Grade = " + grade;
}