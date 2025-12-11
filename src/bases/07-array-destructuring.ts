

const characterNames =[ 'Goku', 'Vegueta', 'Trunks' ];
//muestra todos los personajes que estan en el array
const [p1,p2,p3] =characterNames;
console.log({p1, p2,p3});

//ejercicio mostrar a vegueta

const [,b2]= characterNames;
console.log({b2});

//tarea mostrar a trunks
 const [,,trunks]=characterNames;
 console.log({trunks});


 const returnsArrayFn =()=>{
     return [ 'ABC', 123] as const;
 }

 const [letters, numbers]= returnsArrayFn();

 console.log (letters,numbers);



 //tarea

