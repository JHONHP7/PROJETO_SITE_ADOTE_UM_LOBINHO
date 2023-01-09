const url = "https://lobinhos.herokuapp.com" //Link da API
const screen = document.querySelector('.wolf-list')//Retornará a ul responsável pela renderização dos resultados na tela
const creatediv = (wolf) => {
    const li = document.createElement('li')

    li.innerHTML = `
        <div class = "texto-imagem">
            <a href="Layout-Show_Lobinho.html?id=${wolf.id}" target="blank"><img class = "lobinho" src = "${wolf.image_url}" align="left"></a>
            <div class = "descricao_lobinho">
                <h1>${wolf.name}</h1>
                <p>Idade: ${wolf.age} anos</p>
                <p>${wolf.description}</p>
            </div>
        </div>
        
    `
    screen.appendChild(li)
    
}

const getWolves = () => {
  
    while (screen.firstChild){
        screen.removeChild(screen.firstChild)
    } //Limpar a tela antes de cada busca

    fetch(url + "/wolves") //A resposta será um fetch do url da API juntamente, retornando a promise resolvida
    .then((response) => response.json()) // Transfomará a promise resolvida em uma prommise contendo o objeto .json
    .then((data) => { //filtra os objetos e retorna de acordo com o texto indicado no input
       creatediv(data[0])     
       creatediv(data[1])             
    })
    .catch((error) => { //Caso de algum erro, este será retornado como uma mensagem de erro no console
        console.error(error);
    })
}

getWolves()
