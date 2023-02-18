import { addInputDOM, addStudent } from "./functions.js";
addInputDOM();


let studentArray = [];
let inputStudent = document.querySelector(".inputStudent");


document.querySelector(".add").addEventListener("click", () => {
    if (inputStudent.value === ""){
        //ERROR MESSAGE

    }else{
        addStudent();

        console.log(inputStudent.value);

        inputStudent.innerHTML = "";
        inputStudent.value = "";
    }
})




