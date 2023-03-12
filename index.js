// Write your solution in this file!
const employee = {
    name : "Emily", streetAddress: "123 Main St."
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployee = {...employee}
    updateEmployee[key]=value
    return updateEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const updateEmployee = {employee}
    delete updateEmployee.value
    return updateEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value
    delete employee.value
    return employee
}