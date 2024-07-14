const fs = require("fs")
// Add
const addStudent = (id , fname , lname , city , age)=>{
    const allStudentsData = loadData();
    const dublicatedData = allStudentsData.filter((obj)=>{
        return obj.id === id;
    })
    if(dublicatedData.length == 0){
        allStudentsData.push({
            id : id,
            fname : fname,
            lname : lname,
            city  : city,
            age   : age
        })
        saveAllData(allStudentsData)
    }
    else { 
        console.log(`The ID : ${id} is Existing Before`)
    }
}
// Delete
const deleteStudent = (id)=>{
    const allStudentsData = loadData();
    const dataToKeep = allStudentsData.filter((obj)=>{
        return obj.id != id
    })
    const dataToDelete = allStudentsData.find((obj)=>{
        return obj.id == id
    })
    if(dataToDelete){
        saveAllData(dataToKeep)
    }
    else { console.log(`The ID : ${id} you want to delete isn't existing in database`)}
}
// Read
const readStudent = (id)=>{
    const allStudentsData = loadData();
    const studentNeeded = allStudentsData.find((obj)=>{
        return obj.id == id;
    })
    if(studentNeeded){
        console.log(studentNeeded)
    }
    else { console.log(`The ID : ${id} you search for isn't existing in database`)}
}

// List
const StudentList = ()=>{
    const allStudentsData = loadData();
    allStudentsData.forEach((obj) => {
        console.log(`First Name: ${obj.fname} & City: ${obj.city}`)
    });
}
///////////////////////////////////////////////////////////////////////////////////////////
// Load Data
function loadData(){
    try{
        const allStudentsJson = fs.readFileSync("allStudents.json").toString();
        return JSON.parse(allStudentsJson)
    }
    catch { return [] }
}
// Save Data
function saveAllData(allStudentsData){
    const saveAllDataJson = JSON.stringify(allStudentsData)
    fs.writeFileSync("allStudents.json" , saveAllDataJson )
}
//////////////////////////////////////////////////////////////////////////////////////////////
module.exports ={
    addStudent,
    deleteStudent,
    readStudent,
    StudentList
}
