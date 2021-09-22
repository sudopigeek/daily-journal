export const ShowEntryForm = () => {
    document.getElementsByTagName("main")[0].innerHTML = `
    <form id="entryForm">
        <input class="entryForm" type="date" placeholder="Date" id="entryDate">
        <input class="entryForm" type="text" placeholder="Concepts Covered" id="conceptsCovered">
        <textarea class="entryForm" placeholder="Journal Entry" id="journalEntry" cols="30" rows="10"></textarea>
        <select class="entryForm" name="Mood" id="mood">
            <option value="focused">Focused</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
        </select>
        <input class="entryForm" type="submit" value="Record Entry" id="recordEntry">
    </form>
    <section id="currentEntries">
    </section>
    `
}