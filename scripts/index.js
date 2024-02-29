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

const showActivity = (activity)=>{

  let  {id,title,description,imgURL} = activity;

  const tarjeta = document.createElement('div');
  const tituloElemento = document.createElement('h3');
  tituloElemento.style.fontSize = "150%";
  tituloElemento.style.fontWeight = "600";
  tituloElemento.margin = "1em";

  const descripcionElemento = document.createElement('p');
  descripcionElemento.style.fontSize = "100%";
  descripcionElemento.style.lineHeight = "1.5";
  descripcionElemento.margin = "1em";

  const imagenElemento = document.createElement('img');
  imagenElemento.style.width="200px";
  imagenElemento.height.width="200px";
   
   
  tituloElemento.innerHTML = title;
  descripcionElemento.innerHTML = description;
  imagenElemento.src = imgURL;

  tarjeta.classList.add('tarjeta');
  tituloElemento.classList.add('titulo-actividad');
  descripcionElemento.classList.add('descripcion-actividad');
  imagenElemento.classList.add('imagen-actividad');

  tarjeta.appendChild(tituloElemento);
  tarjeta.appendChild(descripcionElemento);
  tarjeta.appendChild(imagenElemento);

  tarjeta.style.border = '3px solid black';
  tarjeta.style.textAlign = "center";
  tarjeta.style.margin = "1em";
  tarjeta.style.padding = "1em";
  tarjeta.style.paddingTop = "1em";
  tarjeta.style.paddingBottom = "1em"; 
  tarjeta.style.borderRadius = "5px";

  return tarjeta;
}

const convertActivies = ()=>{
    
    const contenedorTarjetas = document.getElementById("contenedorTarjetas");
    contenedorTarjetas.innerHTML="";
    const listaActividades = repository.getAllActivities();
    const tarjetas = listaActividades.map(act => showActivity(act));
    tarjetas.forEach(tarjeta=>contenedorTarjetas.appendChild(tarjeta));

    // agregando estilos

    contenedorTarjetas.style.display="flex";
    contenedorTarjetas.style.justifyContent = "space-around";


}

const repository = new Repository();


const HandlerAddActivities = ()=>{

    const tituloInput = document.getElementById("titulo").value
    const descripcionInput = document.getElementById("descripcion").value
    const urlImagenInput = document.getElementById("urlImagen").value

    if(tituloInput==="" && descripcionInput===""&&turlImagenInput===""){
        alert("competar todos los campos");
    }
    else{
        repository.createActivity(tituloInput,descripcionInput,urlImagenInput);
        convertActivies();
    }
}


botonAgregarActivity = document.getElementById("btnAddActivity")
botonAgregarActivity.addEventListener('click',HandlerAddActivities);