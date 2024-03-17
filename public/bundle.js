/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Activity,Repository} = __webpack_require__(/*! ../scripts/models */ \"./scripts/models.js\")\n\n\nconst repository = new Repository();\nconst showActivity = ({id,title,description,imgURL})=>{\n\n  const tarjeta = document.createElement('div');\n  const tituloElemento = document.createElement('h3');\n  const descripcionElemento = document.createElement('p');\n  const imagenElemento = document.createElement('img');\n   \n  tituloElemento.innerHTML = title;\n  imagenElemento.src= imgURL;\n  descripcionElemento.innerHTML = description;\n  \n\n  tituloElemento.classList.add('tituloActividad');\n  descripcionElemento.classList.add('descripcionActividad');\n  imagenElemento.classList.add('imagenActividad');\n  tarjeta.classList.add('tarjetaActividad');\n  \n\n  tarjeta.appendChild(tituloElemento);\n  tarjeta.appendChild(imagenElemento);\n  tarjeta.appendChild(descripcionElemento);\n\n  tarjeta.id = id;\n\n  tarjeta.addEventListener(\"click\",function(){\n        tarjeta.style.border = \"3px solid red\";\n        actividadesSeleccionadas.push(tarjeta);\n  });\n\n\n\n  return tarjeta;\n}\n\nconst convertActivies = ()=>{\n    \n    const contenedorTarjetas = document.getElementById(\"contenedorTarjetas\");\n    contenedorTarjetas.innerHTML=\"\";\n\n    const listaActividades = repository.getAllActivities();\n\n    if(listaActividades.length == 0){\n        contenedorTarjetas.innerHTML=\"There is not activities\";\n    }\n    else{\n        const tarjetas = listaActividades.map((act) => showActivity(act));\n        tarjetas.forEach((tarjeta)=>contenedorTarjetas.appendChild(tarjeta));\n    }\n    \n\n}\n\nconst handlerAddActivities = (event)=>{\n\n    event.preventDefault();\n\n    const tituloInput = document.getElementById(\"titulo\").value\n    const descripcionInput = document.getElementById(\"descripcion\").value\n    const urlImagenInput = document.getElementById(\"urlImagen\").value\n\n    if(!tituloInput || !descripcionInput || !urlImagenInput){\n        alert(\"Complete all the form\");\n        return\n    }\n    \n    else{\n    repository.createActivity(tituloInput,descripcionInput,urlImagenInput);\n    convertActivies();\n    }\n\n    document.getElementById(\"titulo\").value=\"\"\n    document.getElementById(\"descripcion\").value=\"\"\n    document.getElementById(\"urlImagen\").value=\"\"\n}\n\n\nconst handlerDeleteActivities = ()=>{\n    \n    actividadesSeleccionadas.forEach(actividadSeleccionada => {\n        repository.deleteActivity(parseInt(actividadSeleccionada.id));\n    });\n    convertActivies();\n}\n\n\nconst actividadesSeleccionadas = []; // para guardar las tarjetas seleccionadas para eliminar\n\nconst botonAgregarActivity = document.getElementById(\"btnAddActivity\");\nconst botonDeleteActivity = document.getElementById(\"btnEliminateActivity\");\n\nbotonAgregarActivity.addEventListener('click',handlerAddActivities); \nbotonDeleteActivity.addEventListener('click',handlerDeleteActivities);\n\n\n\n\n\n//# sourceURL=webpack://m1/./scripts/index.js?");

/***/ }),

/***/ "./scripts/models.js":
/*!***************************!*\
  !*** ./scripts/models.js ***!
  \***************************/
/***/ ((module) => {

eval("class Activity{\n    constructor(id,title,description,imgURL){\n        this.id=id;\n        this.title=title;\n        this.description=description;\n        this.imgURL=imgURL;\n    }\n}\n\nclass Repository{\n    constructor(){\n        this.activities=[];\n        this.id = 0;\n    }\n\n    getAllActivities(){\n        return this.activities\n    }   \n    \n    createActivity(title,description,imgURL){\n        this.id++;\n        const activity = new Activity(this.id,title,description,imgURL);\n        this.activities.push(activity);\n    }\n\n    deleteActivity(id){\n    this.activities =   this.activities.filter(activity=>{\n            return activity.id!==id;\n        })\n    }\n}\n\n\n\nmodule.exports = {Activity, Repository};    \n\n//# sourceURL=webpack://m1/./scripts/models.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;