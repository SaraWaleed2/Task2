const yargs = require("yargs")
const dataPerson = require("./dataPerson")
yargs.command({
    command: "add",
    describe: "Add Person",
    builder: {
        id: {
            describe: "User Id",
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: "User First Name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "User Last Name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "User Age Name",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "User City",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        dataPerson.addPerson(x.id , x.fname , x.lname , x.age , x.city)
        
    }
})

////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "delete",
    describe: "delete Person",
    builder: {
        id: {
            describe: "User Id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        dataPerson.deletePerson(x.id)
        
    }
})

////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "listData",
    describe: "list Person",
    handler: () => {
        dataPerson.listData()
        
    }
})

////////////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "readData",
    describe: "read Data for specific Person",
    builder: {
        id: {
            describe: "User Id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        dataPerson.readData(x.id)
        
    }
    // handler: () => {
    //     dataPerson.readDataPerson5()
        
    // }
})

////////////////////////////////////////////////////////////////////////////////
yargs.parse()