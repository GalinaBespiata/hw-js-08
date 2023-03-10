import throttle from "lodash.throttle";
const STORAGE_KEY_FEEDBACK = "feedback-form-state";

const inputEl = document.querySelector(".js-feedback-input");
const textAreaEl = document.querySelector(".js-feedback-textArea");
const formEl = document.querySelector(".feedback-form");

populateMessage();

formEl.addEventListener("input", throttle(onFormInput, 500));
formEl.addEventListener("submit", onFormSubmit);

 

function onFormInput(event){
    formField[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(formField));
}
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK));
const formField =savedData || {};

function onFormSubmit(event){
    event.preventDefault();
    console.log(savedData)
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY_FEEDBACK)
}

//  const emailData = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)).email;
//  console.log(localStorage)
// const textAreaData = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)).message;

// if(emailData){
//     inputEl.value = emailData;
// }
// if(textAreaData){
// textAreaEl.value = textAreaData;
// }
function populateMessage(){
     const savedData = localStorage.getItem(STORAGE_KEY_FEEDBACK);
    if(savedData){
            inputEl.value = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)).email || "";
            textAreaEl.value = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)).message || "";
        }
        }
