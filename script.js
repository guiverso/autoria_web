import {Persona,Compendium} from './Personas.js'

const compendium = new Compendium();

function list(){
    let table = document.querySelector('#list > tbody');
    let message = "";
    compendium.personas.forEach(element => {
        message += '<tr><td>'+element.name+'</td><td>'+element.atk+'</td><td>'+element.def+'</td><td>'+element.tarot+'</td></tr>'
    });

    table.innerHTML = message;
}

function register(){
    let name = document.querySelector('#pName').value;
    let atk = document.querySelector('#pAtk').value;
    let def = document.querySelector('#pDef').value;
    let tarot = document.querySelector('#pTarot').value;

    compendium.create(name,atk,def,tarot);
    list();
}

function search(){
    let name = document.querySelector('#searchbar').value;
    let persona = compendium.get(name);

    let title = querySelector('#searchModalLabel')

}

let button = document.querySelector('#registerbtn');
button.addEventListener('click', register)

list();