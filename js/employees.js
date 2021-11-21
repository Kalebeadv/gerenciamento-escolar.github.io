import { Users } from "./users.js"

export class Employees extends Users {
    constructor(id, user_id, name, bith_date, sex, type_of_employee, cpf, status) {
        super(user_id, name, bith_date, sex);
        this.id = id;
        this.type_of_employee = type_of_employee;
        this.cpf = cpf;
        this.status = status;
    }

}


const atribute_array = ["id", "user_id", "name", "bith_date", "sex","type_of_employee","cpf","status"];
const element_array = ["4", "4", "Willian", "01/06/1985", "M", "Coordinator", "111.222.333-33", "active"];

var employ1 = new Employees("1", "1", "kalebe", "03/12/1960", "M", "Teacher", "123.123.333-22", "active");
var employ2 = new Employees("2", "2", "Gustavo", "03/10/1950", "M", "Administrator", "111.111.222-00", "active");
var employ3 = new Employees("3", "3", "Evelyn", "01/06/1983", "F", "Coordinator", "333.333.333-33", "active");
var employ4 = new Employees(sessionStorage.getItem("id"),
    sessionStorage.getItem("user_id"),
    sessionStorage.getItem("name"),
    sessionStorage.getItem("bith_date"),
    sessionStorage.getItem("sex"),
    sessionStorage.getItem("type"),
    sessionStorage.getItem("cpf"),
    sessionStorage.getItem("status"));

export const employees_guard = [employ1, employ2, employ3,employ4];
let button_register = document.getElementById("button_employee_registration");
button_register.addEventListener("click", register_employees);
let button_teacher_report = document.getElementById("teacher_register");
let button_coordinador_report = document.getElementById("coordinator_register");
let button_admin_report = document.getElementById("administrator_register");
let button_birth_day = document.getElementById("birth_day_register");
button_teacher_report.addEventListener("click", show_teacher_registers);
button_coordinador_report.addEventListener("click", show_coordinator_registers);
button_admin_report.addEventListener("click", show_administrator_registers);
button_birth_day.addEventListener("click", show_birth_days);

function register_employees() {
    for (let i = 0; i < atribute_array.length; i++) 
    {
        if (document.getElementById(atribute_array[i]).value == null) 
        {
            sessionStorage.setItem(atribute_array[i], element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
        else 
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
    }
}

function show_teacher_registers()
{
    for(let i = 0; i < employees_guard.length; i++)
    {
        
        if(employees_guard[i].type_of_employee === "Teacher")
        {
            window.alert("Teacher name: " + employees_guard[i].name);
        }
    }
}

function show_coordinator_registers()
{
    for(let i = 0; i < employees_guard.length; i++)
    {
        
        if(employees_guard[i].type_of_employee === "Coordinator")
        {
            window.alert("Coordinator name: " + employees_guard[i].name);
        }
    }
}

function show_administrator_registers()
{
    for(let i = 0; i < employees_guard.length; i++)
    {
        
        if(employees_guard[i].type_of_employee === "Administrator")
        {
            window.alert("Administrator name: " + employees_guard[i].name);
        }
    }
}

function show_birth_days()
{
    let birthdays = "";
    for(let i = 0; i < employees_guard.length; i++)
    {
        birthdays += employees_guard[i].name + " " + employees_guard[i].bith_date +"\n"; 
    }
    window.alert(birthdays);
}