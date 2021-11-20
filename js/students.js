import { Users } from "./users.js"

export class Students extends Users
{
    constructor(id,user_id,name,bith_date,sex)
    {
        super(user_id,name,bith_date,sex);
        this.id = id;
    }
}



var student1 = new Students("1", "1", "Alberto", "03/12/1960", "M")
var student2 = new Students("2", "2", "Luciano", "03/10/1950", "M");
var student3 = new Students("3", "3", "Emely", "01/06/1983", "F")
var student4 = new Students(sessionStorage.getItem("student_id"),
    sessionStorage.getItem("user_id_student"),
    sessionStorage.getItem("student_name"),
    sessionStorage.getItem("student_bith_date"),
    sessionStorage.getItem("student_sex"));

export const students_guard = [student1,student2,student3,student4];