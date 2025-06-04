//aqui será a pasta principal onde terá todos os scripts 

var users = [];

function register_event(){//cadastro
    let usernameinpt = document.querySelector('#username_inpt').value;
    //let passwordinpt = document.querySelector('#password_inpt').value;

    users.push(usernameinpt);
}

function search_event(){//pesquisa
    let searchinpt = document.querySelector('#search_inpt').value;

    let finded = users.indexOf(searchinpt)
    if(finded <= 0 && users.length > 0){
        alert(users[finded])
    }else{
        alert('usuário não encontrado')
    }
}

function list_event(){
    let listdiv = document.querySelector('#list');

    users.forEach(element =>)
}