export const entryCard = (entryObj) => {
    let date = entryObj.date.split("-")
    return `
        <section class="journalEntry" id="${entryObj.id}">
            <h2>${NumToMonth[date[1]-1]} ${date[2].replace('0', '')}, ${date[0]}</h2>
            <h4>${entryObj.concepts}</h4>
            <h5>${entryObj.entry}</h5>
            <p>Mood: ${entryObj.mood}</p>
            <form id="editEntryForm">
                <button class="editEntry" id="edit_${entryObj.id}" type="button">Edit</button>
                <button class="editEntry" id="delete_${entryObj.id}" type="button">Delete</button>
            </form>
        </section>
    `
}

const NumToMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]