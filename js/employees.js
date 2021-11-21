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

export const employees_guard = [employ1, employ2, employ3,employ4];

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