//aqui será a pasta principal onde terá todos os scripts 

var users = [];

function list_event(){//listar usuários
    let listdiv = document.querySelector('#list');
    let message = '';

    users.forEach(element => {
        let index = "'"+element+"'";
        console.log()
        message += '<p id = "username'+element+'" ><button onclick = "edit_object_event('+index+')">editar</button> '+element+' <button onclick = "remove_object_event('+index+')">remover</button></p>';
    })

    listdiv.innerHTML = message;
}

function register_event(){//cadastro

    let usernameinpt = document.querySelector('#username_inpt').value;

    users.push(usernameinpt);
    list_event();
}

function search_event(){//pesquisa
    let searchinpt = document.querySelector('#search_inpt').value;

    let finded = users.indexOf(searchinpt);
    console.log(finded)
    if(finded >= 0 && users.length > 0){
        alert(users[finded]);
    }else{
        alert('usuário não encontrado');
    }
}

function save_event(object){//salva um objeto
    let line = document.querySelector('#list > #username'+object);
    let newusername = document.querySelector('#editting_user').value;
    let index = users.indexOf(object)
    users[index] = newusername;
    list_event();
}

function edit_object_event(object){//abre a edição de um objeto
    let line = document.querySelector('#list > #username'+object);
    let index = "'"+object+"'"
    line.innerHTML = '<button onclick = "save_event('+index+')">salvar</button> <input id = "editting_user">';
}

function remove_object_event(object){
    users = users.filter(element => element !== object);
    list_event();
}