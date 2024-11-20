

//funzione che prende le card e gli assegna l'immagine corrispondente
const takeAllCardElem = (result,imgOverlay) => {
    const cardsElem = document.querySelectorAll(".card-ms"); //prendo tutte le card
    
    console.log(imgOverlay);

    
    cardsElem.forEach((curItem,index) => {

        curItem.addEventListener("click", () => {
            
            //faccio comparire l'overlay
            overlayElem.classList.remove("d-none");
            
            //carico l'immagine nell'HTML
            imgOverlayElem.innerHTML = `<img src="${result[index].thumbnailUrl}" alt="" width="300px" heigth="300px" >` 


        })

    });

};


//funzione che genera le card
const generaCard = (text) => {


    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6", { timeout: 5000 }).then((resp) => {

        let result = resp.data;

        result.forEach(curItem => {

            console.log(curItem);

            //creo le card
            text += `<div class="card-ms col-4 mt-5" data-id="${curItem.id}">
                        <img src="./img/pin.svg" alt="" class="pin-ms">
                        <div class="square-ms">
                            <img src="${curItem.thumbnailUrl}" alt="" width="300px" heigth="300px">
                        </div>
                        <p class="card-text-ms">${curItem.title} </p>
                    </div>`;


        })

        //carico le card nell'HTML
        cardElem.innerHTML = text;

        //richiamo funzione 
        takeAllCardElem(result,imgOverlayElem);

    });

};

