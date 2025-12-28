import type { GiphyRandomResponse } from "../data/giphy.response";



const API_KEY = 'SQm6jKtbLgBZZLeBtO3d4FKDFwcwTDs2';





const createImageInsideDOM = (url: string) => {

    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

//funcion asincrona que genera una url random
const getRandomGifImageUrl = async ():Promise <string> => {


    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );


    //esperar el resultado de la promesa
    // el data que se encuentra en {data} se esta desestructurizo
const {data}:  GiphyRandomResponse  = await response.json();





    return data.images.original.url;
}

//forma 1 de utilizar el llamada
getRandomGifImageUrl().then((url)=> createImageInsideDOM(url));


//forma 2 de utilizar el llamado

getRandomGifImageUrl().then(createImageInsideDOM);









