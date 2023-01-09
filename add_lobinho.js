const url = "https://lobinhos.herokuapp.com" //Link da API

const postWolf = () => {

    const nameScreen = document.querySelector('#name').value; //Retornará os valores colocados nos inputs da tela
    const ageScreen = document.querySelector('#age').value;
    const photoScreen = document.querySelector('#photo').value;
    const descriptionScreen = document.querySelector('#descrip').value;
    const body = { //criará o body do objeto que será enviado para a API
        wolf:{
    
            name: nameScreen,
            age: ageScreen,
            image_url: photoScreen,
            description: descriptionScreen
            
        }
   }

   const config = { //Configurará o método post -- PADRÃO
       method:"POST",
       body: JSON.stringify(body), //Fará o parse do json para string para que seja adicionado ao sistema
       headers:{
           "Content-Type":"application/json"
       }
    }
    fetch(url + "/wolves" , config) //fará o método POST funcionar
    .then((response) => response.json())
    .then((w) => {
        alert(`O novo Lobinho ${w.name} foi adicionado com sucesso!`)  
    })
    .catch(error => {
       console.error(error)
    })
}

const btnSave = document.querySelector('.botao2')
btnSave.addEventListener("click", postWolf)


