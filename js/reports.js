import { employees_guard } from "./employees.js";
import { students_guard } from "./students.js";
import { notes_guard } from "./notes.js";
import { matters_guard } from "./matters.js";
import { inscriptions_guard } from "./inscriptions.js";
import { courses_guard } from "./courses.js";


let button_emp = document.getElementById("birth_day_emp");
button_emp.addEventListener('click', show_emp_birthday);


function show_stu_birthday()
{
    const div = document.createElement("div");
    let html_student_tittle = "<h3>Students Birth Day</h3>";
    div.innerHTML = html_student_tittle;

    for(let i = 0; i < students_guard.length; i++)
    {
        if(students_guard[i].name != null)
        {
            window.alert("<p>" + students_guard[i].name + " " + students_guard[i].bith_date + "<br>" + "</p>");
        }    
        
        else
            break;
        
    }
}

function show_emp_birthday()
{
    const div2 = document.createElement("div");
    let html_tittle_employee = "<h3>Employees Birth Day</h3>"
    div2.innerHTML = html_tittle_employee;

    for(let i = 0; i < employees_guard.length; i++)
    {
        if(employees_guard[i].name != null)
        {
            window.alert( "<p>" + employees_guard[i].name + " " + employees_guard[i].bith_date + "<br>" + "</p>");
        }
        else
            break;
    }
}




