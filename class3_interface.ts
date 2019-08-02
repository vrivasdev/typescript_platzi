type Dni = number;

interface Persona {
    altura?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

const persona: Persona = {
    edad: 27,
    nombre: 'Alan',
    apellido: 'Rivas',
    dni: 3231232,
}