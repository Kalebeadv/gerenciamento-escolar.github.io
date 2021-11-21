import {notes_guard} from "./notes.js"
class Matters {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    atribute_array = ["id", "name", "description"];
    element_array = ["4", "English", "Pro english"];

    register_matters() {
        for (let i = 0; i < atribute_array.length; i++) {
            if (document.getElementById("id").value == null) {
                sessionStorage.setItem(atribute_array[i], element_array[i]);
                console.log(sessionStorage.getItem(atribute_array[i]));
            }
            else {
                sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
                console.log(sessionStorage.getItem(atribute_array[i]));
            }
        }
    }
}

export const matters_guard = [history,mathematics,geography,english];

var history = new Matters("0", "History", "The study of the past – specifically the people,"
    + "societies, events and problems of the past – as well as" 
    + "our attempts to understand them. It is a pursuit common to all human societies.");

var mathematics = new Matters("1", "Mathematic", "mathematics, the science of structure" 
    + "order, and relation that has evolved from"
    + "elemental practices of counting, measuring,"
    + "and describing the shapes of objects." 
    + "It deals with logical reasoning and quantitative calculation,"
    + "and its development has involved an increasing degree of idealization"
    + "and abstraction of its subject matter.");

var geography = new Matters("2", "Geography", "the study of the world, its physical and"
    + "social environments, and the dynamic nature of the relationships" 
    + "among them, from local to global scales.");

var english = new Matters();

let button = document.getElementById("matter_register_class");
button.addEventListener("click",function()
 {
     localStorage.setItem("id", document.getElementById("id").value);
     localStorage.setItem("name", document.getElementById("name").value);
     localStorage.setItem("description", document.getElementById("description").value);
     english = new Matters(localStorage.getItem("id"),localStorage.getItem("name"), 
     localStorage.getItem("description"));
     console.log(localStorage.getItem("id") + localStorage.getItem("name") +
     localStorage.getItem("description"));
 });

 let button2 = document.getElementById("quantity_students");
 button2.addEventListener("click", function(){
    let text = "";
    let count = 0;
    for(let i = 0; i < notes_guard.length; i++)
    {
        count++;
        text += "first assessment: " +notes_guard[i].first_assessment + "\n" +
        "second assessment: "+notes_guard[i].second_assessment + "\n";
    }
    window.alert(text += "Quantity of students: " + count); 
 });




