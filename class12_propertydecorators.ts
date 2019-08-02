function logProperty(target:any, key:any) {
    let _val:any = target[key];
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }
    const setter = (newValue:any) => {
        console.log(`Set: ${key} => ${_val}`);
        _val = newValue;
    }
    const objectProperty = {
        get: getter,
        set: setter
    }
    Object.defineProperty(target, key, objectProperty)
}

class Persona {
    @logProperty
    public name: string;

    constructor(name: string) {
        this.name = name
    }
}

const p = new Persona('Alan');
p.name = 'Platzi'; // Set: name => 'Platzi'
const nameFromClass = p.name; // Get: name => 'Platzi'