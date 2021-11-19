import {Users} from "./users.js"

class Employee extends Users
{
    constructor(id,user_id,name,bith_date,sex,type_of_employee, cpf,status)
    {
        super(user_id,name,bith_date,sex);
        this.id = id;
        this.type_of_employee = type_of_employee;
        this.cpf = cpf;
        this.status = status;
    }
}

var employees = [];

let button_registration = document.getElementById("button_registration");
button_registration.onclick = registration_employee;

function add_registration(user)
{
    this.employees.add(user);
}

function registration_employee()
{
    let employee = new Employee(document.getElementById("id"),document.getElementById("user_id")
                                ,document.getElementById("name"),document.getElementById("bith_date"),
                                document.getElementById("sex"),document.getElementById("type"),
                                document.getElementById("cpf"),document.getElementById("status"));
    add_registration(employee);
    
}
