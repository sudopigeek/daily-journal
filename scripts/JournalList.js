import { getEntries } from "./data/DataManager.js";
import { entryCard } from "./EntryCard.js";

export const ListEntries = () => {
    let container = document.getElementById("currentEntries")
    getEntries().then(entries => {
        for (let i = 0; i < entries.length; i++) {
            console.log(entries[i])
            container.innerHTML += entryCard(entries[i])
        }
    })
}