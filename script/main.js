import notesData from './notes-data.js';
import './form-validation.js';
import './components/app-bar.js';
import './components/list-notes.js';
import './components/section-show-notes.js';
import './components/form-notes.js';

const objNotesData = notesData;
const showNotes = document.querySelector('section-show-notes');
const form = document.querySelector('form-notes');

document.addEventListener('DOMContentLoaded', () => {    
    form.addEventListener('submit', addListNote)  
    formatDate(objNotesData); 
    render(objNotesData);
})

function addListNote(event){
    const id = `notes-${+new Date()}`;
    const {titleNote} = event.detail;
    const {bodyNote} = event.detail;
    const createdAt = new Date().toLocaleDateString();
    const archived = false;

    const resultObjNotes = objectNotes(id, titleNote, bodyNote, createdAt, archived);
    
    objNotesData.push(resultObjNotes);    
 
    render(objNotesData);
}

function objectNotes(id, title, body, createdAt, archived){
    return {
        id,
        title,
        body,
        createdAt,
        archived,
    }
}

function render(objNotesData){
    showNotes.innerHTML = '';
    for(const note of objNotesData){     
        const resultListNote = makeListNote(note);      
        showNotes.append(resultListNote);
    }
}

function formatDate(objNotesData){
    for(const note of objNotesData){
        note.createdAt = new Date(note.createdAt).toLocaleDateString();   
    }    
}

function makeListNote(note){
    const listNotes = document.createElement('list-notes'); 
    listNotes.note = note;
    
    return listNotes;
}





