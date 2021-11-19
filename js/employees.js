import { Users } from "./users.js"

class Employee extends Users {
    constructor(id, user_id, name, bith_date, sex, type_of_employee, cpf, status) {
        super(user_id, name, bith_date, sex);
        this.id = id;
        this.type_of_employee = type_of_employee;
        this.cpf = cpf;
        this.status = status;
    }

    getBirth_day() {
        window.alert(this.bith_date);
    }
}

var employees = [];
let button_birth_day = document.getElementById("button_birth_day");
let button_registration = document.getElementById("button_registration");

button_registration.addEventListener("click", fetchIssues);
button_birth_day.addEventListener("click", show_birthdays);

function registrationStorage()
{
    localStorage.setItem("id", document.getElementById("id").value);
    localStorate.setItem("user_id", document.getElementById("user_id"),value);
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("bith_date", document.getElementById("bith_date").value);
    localStorage.setItem("sex", document.getElementById("sex").value);
    localStorage.setItem("type", document.getElementById("type").value);
    localStorage.setItem("cpf", document.getElementById("cpf").value); 
    localStorage.setItem("status", document.getElementById("status").value);
     
}

function show_birthdays()
{
    
}

function fetchIssues () {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issuesList');
    
    issuesList.innerHTML = '';
    
    for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var desc = issues[i].description;
      var severity = issues[i].severity;
      var assignedTo = issues[i].assignedTo;
      var status = issues[i].status;
      
      issuesList.innerHTML +=   '<div class="well">'+
                                '<h6>Issue ID: ' + id + '</h6>'+
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + desc + '</h3>'+
                                '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' '+
                                '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                                '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
                                '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
                                '</div>';
    }
  }

