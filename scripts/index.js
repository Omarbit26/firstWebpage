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

const repository = new Repository();

const showActivity = ({title,description,imgURL})=>{

  const tarjeta = document.createElement('div');
  const tituloElemento = document.createElement('h3');
  const descripcionElemento = document.createElement('p');
  const imagenElemento = document.createElement('img');
   
  tituloElemento.innerHTML = title;
  imagenElemento.src= imgURL;
  descripcionElemento.innerHTML = description;
  

  tituloElemento.classList.add('tituloActividad');
  descripcionElemento.classList.add('descripcionActividad');
  imagenElemento.classList.add('imagenActividad');
  tarjeta.classList.add('tarjetaActividad');
  

  tarjeta.appendChild(tituloElemento);
  tarjeta.appendChild(imagenElemento);
  tarjeta.appendChild(descripcionElemento);

  return tarjeta;
}

const convertActivies = ()=>{
    
    const contenedorTarjetas = document.getElementById("contenedorTarjetas");
    contenedorTarjetas.innerHTML="";

    const listaActividades = repository.getAllActivities();
    const tarjetas = listaActividades.map((act) => showActivity(act));
    tarjetas.forEach((tarjeta)=>contenedorTarjetas.appendChild(tarjeta));

}


const handlerAddActivities = ()=>{


    const tituloInput = document.getElementById("titulo").value
    const descripcionInput = document.getElementById("descripcion").value
    const urlImagenInput = document.getElementById("urlImagen").value

    if(!tituloInput || !descripcionInput || !urlImagenInput){
        alert("Complete all the form");
        return
    }
    
    else{
    repository.createActivity(tituloInput,descripcionInput,urlImagenInput);
    convertActivies();
    }

    document.getElementById("titulo").value=""
    document.getElementById("descripcion").value=""
    document.getElementById("urlImagen").value=""
    
}


const handlerDeleteActivities = ()=>{
    
    repository.activities.forEach(act=>repository.deleteActivity(act.id));
    const contenedorTarjetas = document.getElementById("contenedorTarjetas");
    contenedorTarjetas.innerHTML="Click add Activitie to eliminate the cards";
    

}



const botonAgregarActivity = document.getElementById("btnAddActivity");
const botonDeleteActivity = document.getElementById("btnEliminateActivity");



botonAgregarActivity.addEventListener('click',handlerAddActivities); 
botonDeleteActivity.addEventListener('click',handlerDeleteActivities);

