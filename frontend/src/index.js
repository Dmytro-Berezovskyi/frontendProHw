import {getTodos} from "./js/API.js";
import {openAddPopup, closeAddPopup, submitFormAdd, closeEditPopup, submitFormEdit} from "./js/DOM.js";

//Main
getTodos();

openAddPopup();

submitFormAdd();

document.querySelector('#btn-close').addEventListener('click', closeAddPopup);

submitFormEdit();

document.querySelector('#btn-close-edit').addEventListener('click', closeEditPopup);