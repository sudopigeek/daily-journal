export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const getEntries = () => {
    return fetch("http://localhost:8088/journalEntry")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const addEntry = postObj => {
    return fetch("http://localhost:8088/journalEntry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    }).then(response => response.json())
}