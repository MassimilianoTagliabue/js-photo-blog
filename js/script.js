
const cardElem = document.getElementById("card")

let text = "";


axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6",{timeout:5000}).then((resp) =>{

    
    let result = resp.data;

    
    result.forEach( curItem => {

        console.log(curItem);
        
        text += `<div class="card-ms col-4 mt-5">
                    <img src="./img/pin.svg" alt="" class="pin-ms">
                    <div class="square-ms">
                        <img src="${curItem.thumbnailUrl}" alt="" width="300px" heigth="300px">
                    </div>
                    <p class="card-text-ms">${curItem.title} </p>
                </div>`;

              
    })
     
    cardElem.innerHTML = text;
    
    
})


