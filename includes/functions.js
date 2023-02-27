
export function addInputDOM (){
    let studentWrapperContent = document.querySelector("#studentWrapperContent");
    let inputDiv = document.createElement("div");
    
    let inputStudent = document.createElement("input");
    let addStudentBtn = document.createElement("button");
    
    addStudentBtn.classList.add("add");
    inputStudent.classList.add("inputStudent");
    inputDiv.classList.add("inputDiv");
    inputStudent.placeholder = "New student";
    
    addStudentBtn.innerHTML = "+";
    
    inputDiv.append(inputStudent);
    inputDiv.append(addStudentBtn);
    
    studentWrapperContent.append(inputDiv);    
}

export function addStudent(array){
    let inputStudent = document.querySelector(".inputStudent");
    let studentListDOM = document.querySelector("#studentList");
    let name = inputStudent.value;
    let nameDiv = document.createElement("div");
    nameDiv.innerHTML = `<span>${name}</span>`;
    nameDiv.classList.add("nameDiv");
    nameDiv.classList.add(`${name}`);

    studentListDOM.append(nameDiv);

    inputStudent.value = "";
    inputStudent.innerHTML = "";

    let studentInfo = {
        studentName: name,
        value: 0
    }

    array.push(studentInfo);
}

export function addStudentDOM(name){
    let inputStudent = document.querySelector(".inputStudent");
    let studentListDOM = document.querySelector("#studentList");
    //let name = inputStudent.value;
    let nameDiv = document.createElement("div");
    nameDiv.innerHTML = `<span>${name}</span>`;
    nameDiv.classList.add("nameDiv");
    nameDiv.classList.add(`${name}`);

    studentListDOM.append(nameDiv);

    inputStudent.value = "";
    inputStudent.innerHTML = "";
}

function ranDOMIZE(array){
    let randStudent = array[Math.floor(Math.random()*array.length)]

    return randStudent;
}

function shuffleArr(array){
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

function sortArr(array){
    array.sort((a, b) => a.value - b.value);
}

export function sampleStudent(array){
    shuffleArr(array);
    console.log(array);
    let sortedStudents = array.sort((a, b) => a.value > b.value ? -1 : 1);
    console.log(sortedStudents);
    
    let randStudent = ranDOMIZE(sortedStudents);

    let terrorizedStudent;
    //let lesserStudent;

    sortedStudents.forEach(element => {
        //kolla om den har mindre poäng eller har samma
        //om så, har den inte blivit vald 
        //- den blir vald och det läggs till poäng till mindre risk.
        if(randStudent.studentName === element.studentName){
            if (randStudent.value < element.value 
                ||randStudent.value === element.value){
                //lesserStudent = randStudent; //har inte blivit vald lika många ggr
                //console.log(randStudent.value);
                //console.log(element.value)
                randStudent.value = element.value + 10;
                terrorizedStudent = randStudent.studentName;
            }
        }
    });

return terrorizedStudent
}

export function howTerrorizedIsStudent(array){

    array.forEach(student => {
        let studentClass = document.querySelector(`.${student.studentName}`)
        if(student.value >= 10){
            studentClass.style.color = "yellow";
        }if(student.value >= 20){
            studentClass.style.color = "orange";
        }if(student.value >= 30){
            studentClass.style.color = "red";
        }
    })
}