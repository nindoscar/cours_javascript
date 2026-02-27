/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/

const form = document.querySelector("form")
const inputs = document.querySelectorAll("form input")
const firstname = document.querySelector(".firstname")
const lastname = document.querySelector(".lastname")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    lastname.textContent = `Votre prénomS: ${inputs[0].value} `
    firstname.textContent = `Votre nom : ${inputs[1].value} `

    form.reset()
}
