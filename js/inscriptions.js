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
}

var inscription1 = new Inscriptions("1","1","1","1","1");
var inscription2 = new Inscriptions("2","2","2","2","2");
var inscription3 = new Inscriptions("3","3","3","3","3");
var inscription4 = new Inscriptions("4","4","4","4","4");

export const inscriptions_guard = [inscription1,inscription2,inscription3,inscription4];