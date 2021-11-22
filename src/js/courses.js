class Courses
{
    constructor(id, name)
    {
        this.id = id;
        this.name = name
    }
}

var course1 = new Courses("1","basic history I");
var course2 =  new Courses("2", "basic mathematic I");
var course3 =  new Courses("2", "basic geography I");
var course4 =  new Courses("4", "basic english I");

export const courses_guard = [course1,course2,course3,course4];
