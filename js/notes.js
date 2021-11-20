
class Notes 
{
    constructor(id, inscription_id, first_assessment, second_assessment)
    {
        this.id = id;
        this.inscription_id = inscription_id; 
        this.first_assessment = first_assessment;
        this.second_assessment = second_assessment;
    }
}

var notes_students1 = new Notes("1", "1", "8.1", "8");
var notes_students2 = new Notes("2", "2", "9.3", "9.2");
var notes_students3 = new Notes("3", "3", "5.5", "10");
var notes_students4 = new Notes("4","4","8.5","5.1");

export const notes_guard = [notes_students1,notes_students2,notes_students3,notes_students4];