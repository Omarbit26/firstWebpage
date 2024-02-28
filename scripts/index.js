
class Activity{
    constructor(id,title,description,imgURL){
        this.id=id;
        this.title=title;
        this.description=description;
        this.imgURL=imgURL;
    }
}

class Repository{
    constructor(){
        this.activities=[];
        this.id = 0;
    }

    getAllActivities(){
        return this.activities
    }   
    
    createActivity(title,description,imgURL){
        this.id++;
        const activity = new Activity(this.id,title,description,imgURL);
        console.log(activity);
        this.activities.push(activity);
    }

    deleteActivity(id){
    this.activities =   this.activities.filter(activity=>{
            return activity.id!==id;
        })
    }
        
}

const miRepositorio = new Repository();



miRepositorio.createActivity("jugar","123","https://www.youtube.com/");

console.log(miRepositorio.getAllActivities())

miRepositorio.createActivity("correr","564","https://www.facebook.com/");

console.log(miRepositorio.getAllActivities())

miRepositorio.deleteActivity(1);

console.log(miRepositorio.getAllActivities())
