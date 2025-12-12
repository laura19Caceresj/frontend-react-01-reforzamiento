import { heroes, type Hero, Owner } from "../data/heroes.data"





const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    //if (!hero){
    //  throw new Error('No existe un heroe con el id ${id');
    //}    


    return hero;

}

console.log(getHeroById(2));



/**tarea
* gertHeroesByOwner => Hero[]
* Filtrar heroes por su propietario 
* @param Owner el propetario por el cual filtra
* @returns arreglo de heroes del propietario
* */

export const getHeroesByOwner =(owner :Owner)=>{


     const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return heroesByOwner;
}
