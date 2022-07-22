import throttle from 'lodash.throttle';

const form = document.querySelector("form")
const email = document.querySelector("input")
const message = document.querySelector("textarea")

const formData = {}
const LOCALSTORAG_FORM = "feedback-form-state"

form.addEventListener("input", throttle(handleInput, 500))
form.addEventListener("submit", handleSubmit)


populateForm()

function handleInput(e) {
    formData[e.target.name] = e.target.value
    console.log(formData)
    localStorage.setItem(LOCALSTORAG_FORM, JSON.stringify(formData))
}

function handleSubmit(e) {
    e.preventDefault();
    const
        { elements: { email, message }
    } = e.target;

    console.log(`email: ${email.value}, message: ${message.value}`);
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAG_FORM)
}

function populateForm() {
    const savedSet = localStorage.getItem(LOCALSTORAG_FORM)
    
    const parsedSet = JSON.parse(savedSet)


     
    if (parsedSet.email) {
        email.value = parsedSet.email
    } else email.value = ""

    if (parsedSet.message) {
        message.value = parsedSet.message
    } else message.value = ""
}

