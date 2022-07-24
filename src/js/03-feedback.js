import throttle from 'lodash.throttle';

const form = document.querySelector("form")
// const email = document.querySelector("input")
// const message = document.querySelector("textarea")

let formData = {}
const LOCALSTORAG_FORM = "feedback-form-state"

form.addEventListener("input", throttle(handleInput, 1000))
form.addEventListener("submit", handleSubmit)


populateForm()

function handleInput(e) {

    const { email, message } = form;

    formData = {email: email.value, message: message.value}
    console.log(formData)
    localStorage.setItem(LOCALSTORAG_FORM, JSON.stringify(formData))
}

function handleSubmit(e) {
    e.preventDefault();
    // const
    //     { elements: { email, message }
    //     } = e.target;
    
    const { email, message } = form;

    console.log(`email: ${email.value}, message: ${message.value}`);
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAG_FORM)
}

function populateForm() {

    // const savedSet = localStorage.getItem(LOCALSTORAG_FORM)
    const parsedSet = JSON.parse(localStorage.getItem(LOCALSTORAG_FORM))

    if (parsedSet === null) {
        return
    }
    

    form.elements.email.value = parsedSet.email || ''
    form.elements.message.value = parsedSet.message || ''
}

