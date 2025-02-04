// Write{ your solution in this file!
const employee = {
    name: "Ben",
    streetAdress: "1234 sesame street"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
    [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let obj = {...employee};
    delete obj[key];
    return obj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}