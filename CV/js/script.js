
const button = document.querySelector("#data__button");
let printArea = document.querySelector("#printArea");
let cardArea = document.querySelector("#cardArea");

let contactLiObject = "";
let profilePicObject = "";
let contactLilinkObject = "";
let habilidadesLiObject = "";

function print(){
let profilePic = document.querySelector("#data__profilePic");
//let abbreviation = document.querySelector("#data__abbreviation");
let contactLiText = document.querySelector("#data__contactLiText");
let contactLilink = document.querySelector("#data__contactLilink");
let habilidadesLi = document.querySelector("#data__habilidadesLi");

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


    printArea.value = 

`		
<div style="width: 60%; height: auto; margin: auto;">
<img src="${profilePicObject}" style="width: 100%; height: auto; margin: auto; border-radius: 8px;" />
</div>
<h4 style="font-size: 1.5rem;">Contacto</h4>
<ul style="margin: auto;">
    ${contactLiObject}
    <li><a href="https://www.linkedin.com/in/phdit-jaot-27900715/">LinkedIn</a></li>
    <li><a href="https://orcid.org/0000-0001-5649-5514">ORCID</a></li>
    <li>IEEE Miembro: 80390636 </li>
</ul>

<h4 style="font-size: 1.5rem;">Habilidades</h4>
<ul style="margin: auto;">
    ${habilidadesLiObject}
    <li>Infraestructure as a Service</li>
    <li>Security Systems</li>
    <li>Distributed Systems</li>
    <li>AI applied to Networks and Telecommunications</li>
</ul>
`
    cardArea.innerHTML = printArea.value;


    profilePic.value = "";
    contactLiText.value = "";
    contactLilink.value = "";
    habilidadesLi.value = "";

}



button.onclick = print;
