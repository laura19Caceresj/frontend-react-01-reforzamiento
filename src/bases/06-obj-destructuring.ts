const person = {
    name: 'laura',
    age: 23,
    key: 'airoman'
};

//desestructuracion de objetos
const { key, name: ironmanName, age } = person;


//este codigo se puede simplificar
//const name =person.name;
//const age = person.age;
//const key = person.key;


console.log({ ironmanName, age, key });



interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;//rank es opcional

    //tambien se puede hacer asi
    // rank: string | undefined;


}


const useContext = ({ key, name, age, rank }: Hero) => {



    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank
    };
};




const context = useContext(person);
console.log(context);



//ejercicio tarea esta mal echa
const useContext3 = ({ key, name = "sin nombre", age, rank = "sin rango" }: Hero) => {
    return {
        key,
        name,
        age,
        rank
    };
};

const context3 = useContext3(person);
console.log(context3);

//desdestructuracion  de rank y keyName al llamar la funcion
const {
    rank,
    keyName,
    user,
    //user: { name } 
} = useContext(person);
const { name } = user;

console.log({ rank, keyName, name });



