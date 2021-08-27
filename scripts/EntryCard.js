export const entryCard = (entryObj) => {
    return `
        <section class="journalEntry">
            <h3>${entryObj.date}</h3>
            <h5>${entryObj.concepts}</h5>
            <p>${entryObj.entry}</p>
        </section>
    `
}