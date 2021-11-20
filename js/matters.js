class Matters
{
    constructor(id,name,description)
    {
        this.id = id;
        this.name = name;
        this.description = description;
    }

}

var history = new Matters("1", "History", "The study of the past – specifically the people,"
    + "societies, events and problems of the past – as well as" 
    + "our attempts to understand them. It is a pursuit common to all human societies.");

var mathematics = new Matters("2", "Mathematic", "mathematics, the science of structure" 
    + "order, and relation that has evolved from"
    + "elemental practices of counting, measuring,"
    + "and describing the shapes of objects." 
    + "It deals with logical reasoning and quantitative calculation,"
    + "and its development has involved an increasing degree of idealization"
    + "and abstraction of its subject matter.");

var geography = new Matters("3", "Geography", "the study of the world, its physical and"
    + "social environments, and the dynamic nature of the relationships" 
    + "among them, from local to global scales.");

var english = new Matters("4", "English", "English studies (usually called simply English)"
    + "'is an academic' + discipline taught in primary, secondary, and post-secondary education" 
    + "in English-speaking countries; it is not to be confused with English"
    + "taught as a foreign language,which is a distinct discipline. It involves the" 
    + "study and exploration of texts created in English literature.");

export const matters_guard = [history,mathematics,geography,english];