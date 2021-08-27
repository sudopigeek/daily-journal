export const getEntries = () => {
    return Entries
}

export const saveEntry = (entryObj) => {
    Entries.push(entryObj)
}

const Entries = [
    {
        date: "07/07/2007",
        concepts: "Learned basic javascript",
        entry: "[entry here]",
        mood: "Happy"
    }
]