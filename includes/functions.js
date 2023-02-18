
export function addInputDOM (){
    let studentListDOM = document.querySelector("#studentList");
    let inputDiv = document.createElement("div");
    
    let inputStudent = document.createElement("input");
    let addStudentBtn = document.createElement("button");
    
    addStudentBtn.classList.add("add");
    inputStudent.classList.add("inputStudent");
    
    addStudentBtn.innerHTML = "+";
    inputStudent.innerHTML = "New name";
    
    inputDiv.append(inputStudent);
    inputDiv.append(addStudentBtn);
    
    studentListDOM.append(inputDiv);    
}

export function addStudent(array){
    let inputStudent = document.querySelector(".inputStudent");


    let name = inputStudent.value;

    array.push(name);

    console.log(array);
}
