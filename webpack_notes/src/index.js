import('./index.css');
import logo from './logo.png';

const root = document.getElementById('root');

// Top Bar
let topDiv = document.createElement('div');
topDiv.classList.add('flex');

let image = document.createElement('img');
image.src = logo;
image.classList.add('logo');

let h1 = document.createElement('h1');
h1.innerText = "Notes";

topDiv.append(image, h1);


// Area for existing notes
let leftDiv = document.createElement('div');
leftDiv.classList.add('leftDiv');

let addedNotes = document.createElement('h3');
addedNotes.innerText = 'Previous Notes:';

let previousNotes = document.createElement('div');
previousNotes.classList.add('previousNotes');

leftDiv.append(addedNotes, previousNotes);


// Right side for adding notes content.
let rightDiv = document.createElement('div');
rightDiv.classList.add('rightDiv');

let optionsDiv = document.createElement('div');
optionsDiv.classList.add('optionsDiv');

let saveBtn = document.createElement('button');
saveBtn.innerText = "Save Note";
saveBtn.onclick = () => {
    let storedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    storedNotes[titleInput.value] = contentInput.value ;
    localStorage.setItem('notes', JSON.stringify(storedNotes));
    refreshNotes();
}

let deleteBtn = document.createElement('button');
deleteBtn.innerText = "Delete Note";
deleteBtn.onclick = () => {
    let storedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    delete storedNotes[titleInput.value];
    localStorage.setItem('notes', JSON.stringify(storedNotes));
    refreshNotes();
}

optionsDiv.append(saveBtn,deleteBtn);

let title = document.createElement('h3');
title.innerText = "Note's title: ";

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.placeholder = "Enter title";
titleInput.minLength = 1;


let content = document.createElement('h3');
content.innerText = "Note's Content: ";

let contentInput = document.createElement('textarea');
contentInput.classList.add('noteContent');
contentInput.placeholder = "Enter Content";
// contentInput.minLength = '1'; 

rightDiv.append(optionsDiv, title, titleInput, content, contentInput);

let containerDiv = document.createElement('div');
containerDiv.append(leftDiv, rightDiv); 
containerDiv.classList.add('containerDiv');

root.append(topDiv, containerDiv);

refreshNotes();

function refreshNotes(){
    let storedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    // console.log(storedNotes);
    previousNotes.innerHTML = "";
    for(let title in storedNotes){
        let div = document.createElement('div');
        div.innerText = title;
        div.onclick = () => {
            titleInput.value = title;
            contentInput.value = storedNotes[title];
        }
        div.classList.add('storedNotes');
        previousNotes.append(div);
    }
}