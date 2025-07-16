class Persona {
    constructor(name,atk,def,tarot){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.tarot = tarot;
    }
}

class Compendium{
    constructor(){
        this.personas = [];
        this.personas[0] = new Persona('orpheus',1,1,'the fool');
        this.personas[1] = new Persona('izanagi',2,2,'the fool');
        this.personas[2] = new Persona('arsene',3,3,'the fool');
    }

    get(name){
        let finded = this.personas.filter(element => element.name == name)[0];
        if(finded.name == name && this.personas.length > 0){
            return finded;
        }else{
            return false;
        }
    }

    del(name){
        let persona = get(name);
        if(persona != false){
            let newlist = this.personas.filter(element => element != persona);
            this.personas = newlist;
            return true
        }else{
            return false;
        }
    }

    edit(oldname, newname, atk, def, tarot){
        let persona = get(oldname);
        let index = this.personas.indexOf(persona);
    
        persona.name = newname;
        persona.atk = atk;
        persona.def = def;
        persona.tarot = tarot;
    
        this.personas[index] = persona;
    }

    create(name,atk,def,tarot){
        return this.personas.push(new Persona(name,atk,def,tarot));
    }
}

export {Persona,Compendium};