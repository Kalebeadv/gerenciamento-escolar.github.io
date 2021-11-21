import { Users } from "./users.js"
import { notes_guard } from "./notes.js";

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

let show_notes = document.getElementById("enter_seach");
show_notes.addEventListener("click", seach_notes);
let register_student = document.getElementById("button__student_registration");
register_student.addEventListener("click", register_students);

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

function seach_notes()
{
    let input = document.getElementById("seach_notes");
    for(let i = 0; i < students_guard.length; i++)
    {
        if(input.value == students_guard[i].name)
        {
            
            if((notes_guard[i].first_assessment +  notes_guard[i].second_assessment) >= 7.0)
            {
               
                window.alert(input.value + "\n" + "Approved\n" +
                    "first_assessment: "+notes_guard[i].first_assessment + "\n" +
                     "second_assessment: "+ notes_guard[i].second_assessment);
                break;
            }
            else if((notes_guard[i].first_assessment +  notes_guard[i].second_assessment) < 7.0 && 
                (notes_guard[i].first_assessment +  notes_guard[i].second_assessment) > 4.0 )
            {

                window.alert(input.value + "\n" + "Recovery\n" +
                    "first_assessment: "+notes_guard[i].first_assessment + "\n" +
                     "second_assessment: "+ notes_guard[i].second_assessment);
                break;
            }
            else
            {
                window.alert(input.value + "\n" + "Failed\n" +
                "first_assessment: "+notes_guard[i].first_assessment + "\n" +
                "second_assessment: "+ notes_guard[i].second_assessment);
                break;
            }
           
        }
        else{
            window.alert("Students registers: " + students_guard[i].name);
        }
    }
}