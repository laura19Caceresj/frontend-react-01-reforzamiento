

const myPromises = new Promise<number>((_, reject) => {
    setTimeout(() => {
        //! Yo quiero mi dinero !!  
        // resolve(100);
        reject('Mi amigo se perdio y no me dio mi dinero');
    }, 2000);// 2 segundos
});

myPromises.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
})
.catch((reason) => {
    console.warn(reason);
})
.finally(()=>{
    console.log('Pues a seguir con mi vida');
});
