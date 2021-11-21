import {students_guard} from "./students.js"
import {notes_guard} from "./notes.js"
import {matters_guard} from "./matters.js"
import {courses_guard} from "./courses.js"

class Inscriptions
{
    constructor (id, course_id, matter_id, student_id, note_id)
    {
        this.id = id;
        this.course_id = course_id;
        this.matter_id = matter_id;
        this.student_id = student_id;
        this.note_id = note_id;
    }
    registration()
    {

    }
    display_report()
    {
        
    }
}

var inscription1 = new Inscriptions("1",courses_guard[0].id,matters_guard[0].id,"1",
    notes_guard[0].id);
var inscription2 = new Inscriptions("2",courses_guard[1].id,matters_guard[1].id,"2",
notes_guard[1].id);

var inscription3 = new Inscriptions("3",courses_guard[2].id,matters_guard[2].id,"3",
notes_guard[1].id);

var inscription4 = new Inscriptions("4",courses_guard[3].id,matters_guard[3].id,"4",
notes_guard[1].id);

export const inscriptions_guard = [inscription1,inscription2,inscription3,inscription4];