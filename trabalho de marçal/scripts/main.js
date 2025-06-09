class Persona {//persona como objeto
    constructor(name, atk, def, ability,tarotcard){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.ability = ability;
        this.tarotcard = tarotcard;
    }

    sheet(){
        return `nome: ${this.name}
atk: ${this.atk}
def: ${this.def}
tarot: ${this.tarotcard}
habilidade: ${this.ability}`
    }
}

//aqui será a pasta principal onde terá todos os scripts 

var personas = [];

function list_event(){//listar usuários
    let listdiv = document.querySelector('#list');
    let message = '';

    personas.forEach(element => {
        message += `<div class="persona" id="a">
                <h2>${element.name}</h3>
                <h4>${element.tarotcard}</h2>
                <button onclick="remove_object_event(${element.name})">remover</button>
                <button onclick = "edit_object_event('${element.name}')">editar</button>
            </div>`;
    })

    listdiv.innerHTML = message;
}

function register_event(){//cadastro

    let name = document.querySelector('#name_inpt');
    let atk = document.querySelector('#atk_inpt');
    let def = document.querySelector('#def_inpt');
    let tarot = document.querySelector('#tarotcard_inpt');
    let ability = document.querySelector('#ability_inpt');

    personas.push(new Persona(name.value,atk.value,def.value,ability.value,tarot.value));
    list_event();

    name.value = '';
    atk.value = '';
    def.value = '';
    tarot.value = '';
    ability.value = '';
}

function search_event(){//pesquisa
    let search = document.querySelector('#search_inpt').value;

    let finded = personas.filter(element => element.name = search);
    console.log(finded[0].sheet())
    if(finded.length > 0 && personas.length > 0){
        alert(finded[0].sheet());
    }else{
        alert('persona não se encontra no compendio');
    }
}

function save_event(object){//salva um objeto
    let name = document.querySelector('#'+object+' > #name_inpt').value;
    let atk = document.querySelector('#'+object+' > #atk_inpt').value;
    let def = document.querySelector('#'+object+' > #def_inpt').value;
    let tarot = document.querySelector('#'+object+' > #tarotcard_inpt').value;
    let ability = document.querySelector('#'+object+' > #ability_inpt').value;
    let original = personas.filter(element => element.name = object)[0];
    let index = personas.indexOf(original);

    let newpersona = new Persona(name,atk,def,tarot,ability)

    personas[index] = newpersona;
    list_event();
}

function edit_object_event(object){//abre a edição de um objeto
    let line = document.querySelector('#list > #'+object);
    let persona = personas.filter(element => element.name == object)[0];
    line.innerHTML = `
    <input type="text" id="name_inpt" placeholder="nome" value = "${persona.name}">
    <input type="text" id="atk_inpt" placeholder="atk" value = "${persona.atk}">
    <input type="text" id="def_inpt" placeholder="def" value = "${persona.def}">
    <input type="text" id="tarotcard_inpt" placeholder="tarô" value = "${persona.tarotcard}">
    <input type="text" id="ability_inpt" placeholder="habilidade" value = "${persona.ability}">
    <button onclick = "save_event('${object}')">salvar</button>`;
}

function remove_object_event(object){
    personas = personas.filter(element => element.name !== object);
    list_event();
}