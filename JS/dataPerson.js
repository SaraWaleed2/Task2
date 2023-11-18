const fs = require("fs")

//add person
const addPerson = (id, fname, lname, age, city) => {

    const allData = loadData()

    const duplicatedId = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedId.length == 0) {
        allData.push(
            {
                id,
                fname,
                lname,
                age,
                city
            }
        )

        saveAllData(allData)
    }
    else {
        console.log("ERROR , Duplicated Id ");
    }
}

////////////////////////////////////////////////////////////////////////////////
//load Data
const loadData = () => {
    try {
        const readJsonData = fs.readFileSync("data.json").toString()
        return JSON.parse(readJsonData)

    } catch {
        return []
    }
}

////////////////////////////////////////////////////////////////////////////////
//save All Data
const saveAllData = (allData) => {
    const saveData = JSON.stringify(allData)
    fs.writeFileSync("data.json", saveData)
}

////////////////////////////////////////////////////////////////////////////////
//delete Person
const deletePerson = (id) => {
    const allData = loadData()
    const newData = allData.filter((obj) => {
        return obj.id !== id
    })
    saveAllData(newData)
}

////////////////////////////////////////////////////////////////////////////////
//list Data
const listData = () => {
    const allData = loadData()
    allData.forEach(
        (obj) => {
            console.log(obj.id, obj.fname, obj.lname, obj.city)
        }
    )
}

////////////////////////////////////////////////////////////////////////////////
//read Data for specific Person 

const readData = (id) => {
    const allData = loadData()
    const findPerson = allData.find((obj) => {
        return obj.id === id
    })
    if (findPerson) {
        console.log(findPerson);
    } else {
        console.log("Person Not Found.");
    }
}

////////////////////////////////////////////////////////////////////////////////
//read Data for person 5
// const readDataPerson5 = () => {
//     const allData = loadData()
//     const findPerson = allData.find((obj) => {
//         return obj.id = 5
//     })
//     if (findPerson) {
//         console.log(findPerson);
//     } else {
//         console.log("Person Not Found.");
//     }
// }

module.exports = {
    addPerson,
    deletePerson,
    listData,
    readData
}