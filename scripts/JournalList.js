import { getEntries, saveEntry } from "./JournalData.js";
import { entryCard } from "./EntryCard.js";

export const ListEntries = () => {
    let container = document.getElementById("currentEntries")
    let html = ""
    for (const entry of getEntries()) {
        html += entryCard(entry)
    }
    container.innerHTML = `${html}`
}