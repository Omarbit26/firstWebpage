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
        this.activities.push(activity);
    }

    deleteActivity(id){
    this.activities =   this.activities.filter(activity=>{
            return activity.id!==id;
        })
    }
}



module.exports = {Activity, Repository};    