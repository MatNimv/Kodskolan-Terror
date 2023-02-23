import { addInputDOM, addStudent, sampleStudent,howTerrorizedIsStudent } from "./functions.js";
addInputDOM();

let studentArray = [];
let chosenStudent = document.querySelector("#chosenStudent > span");
let inputStudent = document.querySelector("input");


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






