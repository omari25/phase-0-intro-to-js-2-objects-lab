// Write your solution in this file!
const employee = {
    name: 'Omar',
    address: 'Bunyala'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const anEmployee = {...employee};
    anEmployee[key] = value;
    return anEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const anEmployee = {...employee};
    delete anEmployee[key];
    return anEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}