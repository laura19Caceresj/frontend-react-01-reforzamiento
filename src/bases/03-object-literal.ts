


//Es tructura de interfaz que se utiliza en typescript para definir la forma de un objeto, especificando las propiedades y sus tipos de datos.

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    
    address: Address;
}


interface Address {
    postalCode: string;
    city: string;
    
}




const airoman: Person = {
    firstName: 'andrea',
    lastName: 'gonzalez',
    age: 39,

    address:{
        postalCode:'ABC-123',
        city:'Madrid',
    },
  
};



//const spiderman: Person={
//  firstName: "Petter",
//lastName: "Parker",
//age: 68
//}

console.log(airoman);
//const spiderman = structuredClone(airoman);


//spiderman.firstName = 'Peter';
//spiderman.lastName = 'Parker';
//spiderman.age = 23;
//spiderman.address.city='San Francisco';

//console.log(airoman, spiderman);
