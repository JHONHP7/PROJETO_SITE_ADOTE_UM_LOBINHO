const url = "https://lobinhos.herokuapp.com" //Link da API
const screen = document.querySelector('.wolf-list')//Retornará a ul responsável pela renderização dos resultados na tela

//Função que criará a div que retornará o lobo
const creatediv = (wolf) => {
    const li = document.createElement('li')

    li.innerHTML = `
        <div class = "texto-imagem">
            <img class = "lobinho" src = "${wolf.image_url}">
            <div class = "descricao_lobinho">
                <p>${wolf.name}</p>
                <p>Idade: ${wolf.age} anos</p>
                <p>${wolf.description}</p>
            </div>
        </div>
    `

    if (wolf.adopted == false){
        li.innerHTML += `
            <a href="Layout-Show_Lobinho.html?id=${wolf.id}" target="blank"><button class="botao4" value="${wolf.id}">Adotar</button></a>
        `
    }

    if(wolf.adopted == true){
        li.innerHTML += `
            <button class="botao4" value="${wolf.id}">Adotado</button></a>
        `
    }
    screen.appendChild(li)
    
}

//Função que recuperará os dados da API
const getWolves = () => {
    const txtSearch = document.querySelector('#search').value //Captação do input de busca
   
    while (screen.firstChild){
        screen.removeChild(screen.firstChild)
    } //Limpar a tela antes de cada busca

    fetch(url + "/wolves") //A resposta será um fetch do url da API juntamente, retornando a promise resolvida
    .then((response) => response.json()) // Transfomará a promise resolvida em uma prommise contendo o objeto .json
    .then((data) => { //filtra os objetos e retorna de acordo com o texto indicado no input
        const datafiltra = data.filter(wolf => !txtSearch || wolf.name.includes(txtSearch))
        datafiltra.forEach (wolf => { 
            creatediv(wolf)
        })           
    })
    .catch((error) => { //Caso de algum erro, este será retornado como uma mensagem de erro no console
        console.error(error);
    })
}

const getAdoptedWolves = () => {
    const txtSearch = document.querySelector('#search').value //Captação do input de busca
    const screen = document.querySelector('.wolf-list')//Retornará a ul responsável pela renderização dos resultados na tela

    while (screen.firstChild){
        screen.removeChild(screen.firstChild)
    } //Limpar a tela antes de cada busca

    fetch(url + "/wolves/adopted") //A resposta será um fetch do url da API juntamente, retornando a promise resolvida
    .then((response) => response.json()) // Transfomará a promise resolvida em uma prommise contendo o objeto .json
    .then((data) => { //filtra os objetos e retorna de acordo com o texto indicado no input
        const datafiltra = data.filter(wolf => !txtSearch || wolf.name.includes(txtSearch))
        datafiltra.forEach (wolf => { 
            creatediv(wolf)
        })           
    })
    .catch((error) => { //Caso de algum erro, este será retornado como uma mensagem de erro no console
        console.error(error);
    })
}


const btnSearch = document.querySelector('#btn-search');
const adopted = document.querySelector('#adopted')
btnSearch.addEventListener("click", () =>{
    if(!adopted.checked){
        getWolves()
    }else{
        getAdoptedWolves()
    }
});

getWolves()








