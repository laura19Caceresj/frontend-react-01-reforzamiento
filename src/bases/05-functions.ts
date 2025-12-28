
//opcion 1 para crear funciones
function greet(name: string, age: number): string {
    return `Hello ${name}  Age: ${age}`;
}





// FUNCION FLECHA
const greet2 = (name: string): string => {

    return `Hello ${name}`;
}
const message2 = greet2('Vegeta...');

const message = greet('Goku...', 12);

console.log(message, message2);





//ejercicios practicos

// funcion que retorna el nombre de una factura 
function invoicename(id: number): string {
    return `factura_compra_${id}.pdf `;
}

const message3 = invoicename(1234);
console.log(message3);



// funcion de multiplicacion de dos numeros 
const mul = (number1: number, number2: number): number => {
    const multiplicacion = number1 * number2;

    return multiplicacion;
}

const number1: number = 9;
const number2: number = 2;

console.log(`Los numeros ${number1} por ${number2} el restultado es: ` + mul(number1, number2));

// funcion que retorna un objeto tipo normal
function getUser() {
    return {
        uid: 'abc-123',
        username: 'El_Papi1502',
    };
}

const user = getUser();
console.log(user);



//este ejercicio esta mal echo porque no retorna un objeto
// tarea funcion flecha retornando objeto
const task = (uid: string, username: string): string => {
    return `El id es ${uid} y el nombre es ${username}`;

}

const result = task('abc-123', 'El_Papi1502');
console.log(result);

//tarea echa por el profesor
const task2 = () => {
    return {
        uid: 'abc-123',
        username: 'El_Papi1502',

    };
}

const user2 = task2();
console.log(user2);



//Funcion de flecha simplificada
// FUNCION FLECHA
const greet5 = (name: string) => `Hello ${name}`;

const message5 = greet5('Vegeta...');
console.log(message5);


//funcion de flecha simplificada que retorna un objeto aca significa que esta regresando un objeto inclicito


//tarea echa por el profesor
const task3 = () => ({

    uid: 'abc-123',
    username: 'El_Papi15',

});
const user6 = task3();
console.log(user6);




interface User {
    uid: string;
    username: string;
}


function getUser3(): User {
    return {
        uid: 'abc-123',
        username: 'El_Papi1502',

    };
}

console.log(getUser3);




//una forma de hacer pero es dificil de leer funcion tradicional
const myNumbers: number[] = [1,2, 3, 4, 5, 6, 7, 8, 9,];
//myNumbers.forEach(function(value){
//  console.log({value});
//});

//Segunda forma de hacer mas facil de leer funcion de flecha
//funcion covac anonima


//myNumbers.forEach((value) => {
//  console.log({ value });
//});


myNumbers.forEach(console.log);
