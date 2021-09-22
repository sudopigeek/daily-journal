import { ListEntries } from "./JournalList.js";
import { addEntry, getEntry, updateEntry, deleteEntry, logoutUser, getLoggedInUser, setLoggedInUser, loginUser, registerUser } from './data/DataManager.js';
import {LoginForm} from '../auth/LoginForm.js'
import {RegisterForm} from '../auth/RegisterForm.js'
import {ShowEntryForm} from './EntryForm.js'

let idToEdit
const checkForUser = () => {
    if (sessionStorage.getItem("user")){
        setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
        ListEntries()
        idToEdit = ""
    }else {
        showLoginRegister()
    }
}

const showLoginRegister = () => {
    const entryElement = document.querySelector("#entryForm");
    //template strings can be used here too
    entryElement.innerHTML = `${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
    //make sure the post list is cleared out too
    const postElement = document.querySelector("#currentEntries");
    postElement.innerHTML = "";
}
checkForUser()
document.getElementById("entryForm").addEventListener('submit', function(event) {
    if (document.getElementById("recordEntry").value === "Edit Entry") {
        updateEntry({
            id: idToEdit,
            author: getLoggedInUser().name,
            date: event.target[0].value,
            concepts: event.target[1].value,
            entry: event.target[2].value,
            mood: event.target[3].value
        })
    } else {
        addEntry({
            author: getLoggedInUser().name,
            date: event.target[0].value,
            concepts: event.target[1].value,
            entry: event.target[2].value,
            mood: event.target[3].value
        })
    }
    ListEntries()
    event.preventDefault()
})

document.addEventListener('click', function(event) {
    if (event.target.className === "editEntry") {
        let id = event.target.id.split("_")
        if (id[0] === "edit") {
            window.scrollTo(0, 0)
             getEntry(id[1]).then(output => {
                idToEdit = id[1]
                document.getElementById("entryDate").value = output.date
                document.getElementById("conceptsCovered").value = output.concepts
                document.getElementById("journalEntry").value = output.entry
                document.getElementById("mood").value = output.mood.toLowerCase()
                document.getElementById("recordEntry").value = "Edit Entry"
             })
        } else if (id[0] === "delete") {
            if (confirm("Are you sure you want to delete the entry?")) {
                deleteEntry(id[1])
                ListEntries()
                event.preventDefault()
            }
        }
    } else if (event.target.id == "login__submit") {
        event.preventDefault()
        const userObject = {
            name: document.querySelector("input[name='name']").value,
            email: document.querySelector("input[name='email']").value
        }
        loginUser(userObject).then(dbUserObj => {
            if(dbUserObj){
                sessionStorage.setItem("user", JSON.stringify(dbUserObj));
                ShowEntryForm()
                ListEntries()
                idToEdit = ""
            } else {
                //got a false value - no user
                const entryElement = document.querySelector("#entryForm");
                entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
            }
        })
    } else if (event.target.id == "register__submit") {
        event.preventDefault()
        const userObject = {
            name: document.querySelector("input[name='registerName']").value,
            email: document.querySelector("input[name='registerEmail']").value
        }
        registerUser(userObject).then(dbUserObj => {
            sessionStorage.setItem("user", JSON.stringify(dbUserObj));
            ShowEntryForm()
            ListEntries()
            idToEdit = ""
        })
    }
})
document.getElementById("logout").addEventListener('click', (event) => {
    logoutUser();
    console.log(getLoggedInUser());
    sessionStorage.clear();
    checkForUser();
})