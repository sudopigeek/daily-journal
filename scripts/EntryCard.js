export const entryCard = (entryObj) => {
    return `
        <section class="journalEntry">
            <h2>${entryObj.date}</h2>
            <h4>${entryObj.concepts}</h4>
            <h5>${entryObj.entry}</h5>
            <p>Mood: ${entryObj.mood}</p>
        </section>
    `
}