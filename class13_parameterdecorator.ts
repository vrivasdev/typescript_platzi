
function logParameter(target:any, propertyName:any, index:any) {
    const metadataKey = `log_${propertyName}_parameters`;
    if(Array.isArray(target[metadataKey])){
        target[metadataKey].push(index);
    } else {
        target[metadataKey] = [index];
    }
    console.log(target[metadataKey]);
}

class P {
    greet(@logParameter message: string): string {
        return message;
    }
}

const p = new P();
p.greet('Hola');