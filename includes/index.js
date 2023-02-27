import { addInputDOM, addStudent, sampleStudent,howTerrorizedIsStudent, addStudentDOM } from "./functions.js";
addInputDOM();

let studentArray = jsonarray;
let chosenStudent = document.querySelector("#chosenStudent > span");
let inputStudent = document.querySelector("input");

studentArray.forEach(element => {
    addStudentDOM(element.studentName);
    
});

howTerrorizedIsStudent(studentArray);

document.querySelector("#radioTerror").addEventListener("click", () => {
    let terrorStudents = studentArray.filter(obj => obj.value > 0)
    document.querySelector("#studentList").innerHTML = "";

    terrorStudents.forEach(element => {
        addStudentDOM(element.studentName);
    });
    howTerrorizedIsStudent(studentArray);
})
document.querySelector("#radioAll").addEventListener("click", () => {
    document.querySelector("#studentList").innerHTML = "";

    studentArray.forEach(element => {
        addStudentDOM(element.studentName);
    });
    howTerrorizedIsStudent(studentArray);
})





document.querySelector(".add").addEventListener("click", () => {
    if (inputStudent.innerHTML== ""){
        //ERROR
    }
        addStudent(studentArray);
    })

document.querySelector("#terrorize").addEventListener("click", () => {
    //väljer ut en elev med value
    let terrorizedStudent = sampleStudent(studentArray);
    //sampleStudent(studentArray);
    chosenStudent.innerHTML = terrorizedStudent;

    //check value of student
    howTerrorizedIsStudent(studentArray);
})


document.querySelector("#savexit").addEventListener("click", () => {
    console.log(studentArray);

    const data = {studentArray};
    const req = new Request("../server.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"}
    });

    fetch(req).then(response => console.log(response));
    })





