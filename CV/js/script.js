
const buttonCV = document.querySelector("#data__buttonCV");
const buttonExp = document.querySelector("#data__buttonExp");
let printArea = document.querySelector("#printArea");
let cvArea = document.querySelector("#cvArea");


let contactLiObject = "";
let profilePicObject = "";
let contactLilinkObject = "";
let habilidadesLiObject = "";
let lgacObject = "";
let tituloObject = "";
let formacionObject = "";

function printCV(){
let profilePic = document.querySelector("#data__profilePic");
//here we have de data DOM
let contactLiText = document.querySelector("#data__contactLiText");
let contactLilink = document.querySelector("#data__contactLilink");
let habilidadesLi = document.querySelector("#data__habilidadesLi");
//here we have the academic DOM
let lgac = document.querySelector("#formacion__lgac");
let titulo = document.querySelector("#formacion__titulo");
let dependencia = document.querySelector("#formacion__dependencia");
let fecha = document.querySelector("#formacion__fecha");
let informacion = document.querySelector("#formacion__informacion");


    //data section
//this changes the profile pic value if is not null
if (profilePic.value != "") {
    profilePicObject = `${profilePic.value}`
}

//this adds an <li> behind the first <li> inside the contact list
if (contactLiText.value != "" && contactLilink.value == "") {
    contactLiObject +=`
    <li>${contactLiText.value}</li>`
}

if (contactLiText.value != "" && contactLilink.value != "") {
    contactLiObject +=`
    <li><a href="${contactLilink.value}">${contactLiText.value}</a></li>`
}

//this adds an <li> behind the first <li> inside the habilidades list 
if (habilidadesLi.value != "") {
    habilidadesLiObject += `
    <li>${habilidadesLi.value}</li>`
}

    //formacion section
//lgac
if (lgac.value != "") {
    lgacObject = `${lgac.value}`
}


//formation
if (dependencia.value != "" || fecha.value !="" || informacion.value !="" || titulo.value !=""){
    formacionObject += `
    <p style="font-weight: bold; font-size: 1rem; font-family: 'Noticia Text',serif; margin-bottom: 0;">${titulo.value}</p>
    <p style="margin: 0; font-family: 'Open Sans','lucida grande',tahoma,verdana,arial,sans-serif;">${dependencia.value}<span style="font-size: 0.8rem;">[${fecha.value}]</span></p>
    <p>${informacion.value}
    </p>
    `
}
    printArea.value = 

`		
<div style="width: 90%; margin: 1rem auto; gap: 1rem; display: flex; flex-wrap: wrap;">
    <div style="margin: auto; padding: 1rem; border-radius: 8px; background-color: rgba(24,52,92,0.1); flex: 1 0 320px; box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.50);">
        <div style="width: 60%; height: auto; margin: auto;">
            <img src="${profilePicObject}" style="width: 100%; height: auto; margin: auto; border-radius: 8px;" />
        </div>
    
        <h4 style="font-size: 1.5rem;">Contacto</h4>
        <ul style="margin: auto;">
            ${contactLiObject}
        </ul>

        <h4 style="font-size: 1.5rem;">Habilidades</h4>
        <ul style="margin: auto;">
            ${habilidadesLiObject}
        </ul>
    </div>

    <div style="width: 100%; height: auto; flex: 1 0 430px;">
        <h3>${lgacObject}</h3>
        <h4 style="text-indent: 1rem;">Formación Académica:</h4>
        <div>
        ${formacionObject}
        </div>
    </div>
</div>
`
    cvArea.innerHTML = printArea.value;


    profilePic.value = "";
    contactLiText.value = "";
    contactLilink.value = "";
    habilidadesLi.value = "";
    lgac.value = "";
    titulo.value = "";
    dependencia.value = "";
    fecha.value = "";
    informacion.value = "";

}


//experience objects
let lencabezadoObjecto = "";
let ltituloObjecto = "";
let lliObjecto = "";
let rencabezadoObjecto = "";
let rtituloObjecto = "";
let rliObjecto = "";


function printExp() {
    //left experience data
    let lencabezado = document.querySelector("#data__lencabezado");
    let ltitulo = document.querySelector("#data__ltitulo");
    let lli = document.querySelector("#data__lli");
    //right experience data
    let rencabezado = document.querySelector("#data__rencabezado");
    let rtitulo = document.querySelector("#data__rtitulo");
    let rli = document.querySelector("#data__rli");





    expArea.innerHTML = printAreaExp.value;
}





buttonCV.onclick = printCV;
buttonExp.onclick = printExp;
