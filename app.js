const yargs = require("yargs")
const allstudents = require("./studentsData")
// Add Command
yargs.command({
    command : "add",
    describe : "to add an item",
    builder : {
        fname :{
            describe : "this is describe for first name in add command",
            demandOption : true,
            type : "string"
        },
        lname :{
            describe : "this is describe for last name in add command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=>{
          allstudents.addStudent(x.id , x.fname , x.lname , x.city , x.age)  
    }
})

// Delete Command
yargs.command({
    command : "delete",
    describe : "to delete an item",
    builder : {
        id :{
            describe : "This is id describe in delete command",
            demandOption : true
        }
    },
    handler : (x)=>{
          allstudents.deleteStudent(x.id)
    }
})

// Read Command
yargs.command({
    command : "read",
    describe : "to read an item",
    builder : {
        id :{
            describe : "This is id describe in read command",
            demandOption : true
        }
    },
    handler : (x)=>{
          allstudents.readStudent(x.id)
    }
})

// List
yargs.command({
    command : "list",
    describe : "to list students data",
    handler : ()=>{
          allstudents.StudentList()
    }
})

yargs.parse()