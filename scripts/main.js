import { ListEntries } from "./JournalList.js";
import { addEntry } from './data/DataManager.js';

ListEntries()

document.getElementById("entryForm").addEventListener('submit', function(event) {
    addEntry({
        date: event.target[0].value,
        concepts: event.target[1].value,
        entry: event.target[2].value,
        mood: event.target[3].value
    })
    ListEntries()
    event.preventDefault()
})