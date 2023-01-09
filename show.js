const url = "https://lobinhos.herokuapp.com" //Link da API
const urlParam = new URLSearchParams(window.location.search).get('id')

const screenDiv = document.querySelector('.adopt')

const wolfMaker = (wolf) => {
    const photo = wolf.image_url
    const descrip = wolf.description
    const name = wolf.name
    const id = wolf.id
    const wolfDiv = document.createElement('div')
    wolfDiv.innerHTML = `
    <div class="title">
        <h1>${name}</h1>
    </div>
    <div class="main flex">
        <div class="content1 flex">
            <div class="imagem">
                <img src="${photo}" alt="Foto do lobinho ${name}">             
            </div>
            <div class="button flex">
                <a href="Layout-Adotar_lobinho.html?id=${id}" target="blank"><button class="button1">adotar</button></a>
                <button class="btn-delete" onclick="deleteThatWolf()">excluir</button>
            </div>
        </div>
        <div class="content2 flex">
            <p class="texto1">${descrip}</p>
        </div>    
    </div>
    `
   screenDiv.appendChild(wolfDiv)
}


const getThatWolf = () => {
    fetch(url + "/wolves/" + urlParam)
    .then(response => response.json())
    .then(wolf => {
        wolfMaker(wolf)
    })
    .catch(error => {
        console.error(error)
    })
}
getThatWolf()


const deleteThatWolf = () => {
    fetch(url + "/wolves/" + urlParam, {method: "DELETE"})
    .then(() =>{
        alert('Lobinho apagado com sucesso!')
    })
    .catch(error => {
        console.error(error)
    })
    
}


