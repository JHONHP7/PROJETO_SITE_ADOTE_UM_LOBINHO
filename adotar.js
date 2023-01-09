const url = "https://lobinhos.herokuapp.com" //Link da API
const wolfAdopt = (wolf) => {

    //Retorno das informações do adotante
    const adopterName = document.querySelector('.inputmaior')
    const adopterMail = document.querySelector('.inputmaior2')
    const adopterAge = document.querySelector('.inputmenor')

    const body = {
        wolf:{
            adopter_name: adopterName.value,
            adopter_email: adopterMail.value,
            adopter_age: adopterAge.value,
            adopted: true
        }
    }
      
    fetch(url + "/wolves/" + wolf.id, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type":"application/json"
        }})
    .then(response => response.json())
    .then(wolf => {
        alert(`${wolf.name} foi adotado com sucesso!`)
    })
    .catch(error => {
        console.error(error)
    })
            
}
const getThatWolf = () => {
    const urlParam = new URLSearchParams(window.location.search).get('id')
    fetch(url + "/wolves/" + urlParam)
    .then(response => response.json())
    .then(wolf => {
       wolfAdopt(wolf)
    })
    .catch(error => {
        console.error(error)
    })
}

const btnAdocao = document.querySelector('.adoption')
btnAdocao.addEventListener("click", getThatWolf)
