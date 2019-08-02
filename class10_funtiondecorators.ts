
function log(target, key) { // Target is the class reference and key the function referene
    console.log(key + 'se ha llamado');
}

class Persona {
    private name: string;

    constructor( name: string){
        this.name = name;
    }
    @log
    sayMyName () { // When sayMyname function is called Log function's going to get executed
        console.log(this.name);
    }
}

const persona: Persona = new Persona('Alan');
persona.sayMyName(); // 'Alan'