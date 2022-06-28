const contenedor = document.querySelector(".flex-container");

const button = document.querySelector(".send-button");
let valorAntiguo = button.value;
button.value=valorAntiguo.toUpperCase();

function crearLlave(nombre, modelo, precio){
    img = " <img class='llave-img' src='llave.png'> ";
    nombre=`<h2>${nombre}</h2>`;
    modelo=`<h3>${modelo}</h3>`;
    precio=`<p>Precio: $<b>${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (modeloRandom)=>{
    document.querySelector(".key-data").value = modeloRandom;
}

let documentFragment = document.createDocumentFragment();

for(let i=1;i<=20;i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, `Modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML=llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);