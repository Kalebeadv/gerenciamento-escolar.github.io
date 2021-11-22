import { Users } from "./users.js";
import { notes_guard } from "./notes.js";
import { matters_guard } from "./matters.js"; 
import { inscriptions_guard } from "./inscriptions.js"
export class Students extends Users
{
    constructor(id,user_id,name,bith_date,sex)
    {
        super(user_id,name,bith_date,sex);
        this.id = id;
    }
}

var student1 = new Students("1", "1", "alberto", "03/12/1960", "M")
var student2 = new Students("2", "2", "luciano", "03/10/1950", "M");
var student3 = new Students("3", "3", "emely", "01/06/1983", "F")
var student4 = new Students(sessionStorage.getItem("student_id"),
    sessionStorage.getItem("user_id_student"),
    sessionStorage.getItem("student_name"),
    sessionStorage.getItem("student_bith_date"),
    sessionStorage.getItem("student_sex"));

export const students_guard = [student1,student2,student3,student4];
const atribute_array = ["student_id", "user_id_student", "student_name", "student_bith_date", "student_sex"];
const element_array = ["4","4","Kalebe o iracundo", "03/12/2000", "M"];
let register_student = document.getElementById("button__student_registration");
let show_students_register = document.getElementById("student_register");
let show_notes = document.getElementById("notes_register");
let show_birhday = document.getElementById("birthday_register");
let show_students_for_matters_registers = document.getElementById("students_for_matters_registers");
var note = "";
let hr = "\n___________________\n";
register_student.addEventListener("click", register_students);
show_students_register.addEventListener("click", show_students_registers);
show_notes.addEventListener("click", show_notes_registers);
show_students_for_matters_registers.addEventListener("click", students_for_matters_register);
show_birhday.addEventListener("click", show_birth_days);
let quantity_student_count = 0;
function register_students()
{
    for(let i = 0; i < atribute_array.length; i++)
    {
        if(document.getElementById(atribute_array[i]).value == null)
        {
            sessionStorage.setItem(atribute_array[i],element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
        else
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
    }
    
}

function show_students_registers()
{
    let student_registers = "";
    for(let i = 0; i < students_guard.length; i++)
    {
        student_registers += "Name: " +students_guard[i].name + " ID: "+ students_guard[i].id + hr; 
    }
    window.alert(student_registers);
}

function show_notes_registers() {
    for (let i = 0; i < students_guard.length; i++) 
    {
        if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) >= 7.0) 
        {

            note +="name: " + students_guard[i].name +"\nStatus: " + "Approved\n" + "first_assessment: " + 
            notes_guard[i].first_assessment + "\n" +"second_assessment: " + 
            notes_guard[i].second_assessment + hr;
        }

        else if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) < 7.0 &&
            (notes_guard[i].first_assessment + notes_guard[i].second_assessment) > 4.0) 
        {

            note += "name: " + students_guard[i].name +"\nStatus: " +"Recovery\n" + "first_assessment: " 
            + notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }

        else 
        {
            note += "name: " + students_guard[i].name +"\nStatus: " + "Failed\n" + "first_assessment: " +
            notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }
    }
    window.alert(note);
}

function students_for_matters_register()
{
    let matters = "";
    let count = 0;
    for(let i = 0; i < students_guard.length; i++)
    {
        if(students_guard[i].id == inscriptions_guard[i].student_id)
        {
            quantity_student_count++;
            if(students_guard[i].id){count++;} 
            matters += "Matter id:" + inscriptions_guard[i].matter_id + "\n" + 
            "Matter name: " + matters_guard[i].name + "\n" +
            "Student id: " + inscriptions_guard[i].student_id +"\n"+ 
            "Student name: " + students_guard[i].name + "\n" +
            "Quantity: " + count + hr;
            count = 0;
        } 
    }
    window.alert(matters);
}
function show_birth_days()
{
    
    let birthdays = "";
    for(let i = 0; i < students_guard.length; i++)
    {
        let date = "" + students_guard[i].bith_date;
        let splitao = date.split("/");
        console.log(splitao[1]);
        switch(splitao[1]) 
        {
            case "01" : birthdays += "January\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;
            case "02" : birthdays += "February\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "03" : birthdays += "March\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "04" : birthdays += "April\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "05" : birthdays += "May\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "06" : birthdays += "June\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "07" : birthdays += "July\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "08" : birthdays += "August\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "09" : birthdays += "September\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "10" : birthdays += "October\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "11" : birthdays += "November\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "12" : birthdays += "December\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

        }
    }
    window.alert(birthdays);
}

