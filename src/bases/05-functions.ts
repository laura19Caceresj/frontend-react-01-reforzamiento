
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








function invoicename(id: number): string {
    return `factura_compra_${id}.pdf `;
}

const message3 = invoicename(1234);
console.log(message3);



// funcion de multiplicacion de dos numeros 


const mul = (number1: number, number2: number): number => {
   const multiplicacion = number1*number2;

    return multiplicacion;
}

const number1:number = 9;
const number2:number =2;

console.log(`Los numeros ${number1} por ${number2} el restultado es: `+ mul(number1, number2));

// funcion que retorna un objeto tipo normal
function getUser(){
    return{
    uid:'abc-123',
    username:'El_Papi1502',         
    };
}

const user= getUser();
console.log(user);


//funcion flecha que retorna un objeto
 function getUser2(uid:number, username:string):string =>{
    return `El uid es: ${uid} y el username es: ${username}`;

 }

 const user2= getUser2(77,'juan');
 console.log(user2);