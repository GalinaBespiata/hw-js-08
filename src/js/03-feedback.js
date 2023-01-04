import throttle from "lodash.throttle";
const STORAGE_KEY_FEEDBACK = "feedback-form-state";

const inputEl = document.querySelector(".js-feedback-input");
const textAreaEl = document.querySelector(".js-feedback-textArea");
const formEl = document.querySelector(".feedback-form");

populateMessage();

const formField ={};
formEl.addEventListener("input", throttle(onFormInput, 500));
formEl.addEventListener("submit", onFormSubmit);

function onFormInput(event){
    formField[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(formField));
  
}

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
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
            inputEl.value = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)).email;
            textAreaEl.value = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK)).message;
        }
        }
