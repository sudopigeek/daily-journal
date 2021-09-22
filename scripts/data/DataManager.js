let loggedInUser = {
    id: 1,
    name: "Bryan",
    email: "bryan@bn.com"
}

export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
        .then(response => response.json())
        .then(parsedUser => {
        //is there a user?
        //console.log("parsedUser", parsedUser) //data is returned as an array
        if (parsedUser.length > 0){
            setLoggedInUser(parsedUser[0]);
            return getLoggedInUser();
        }else {
            //no user
            return false;
        }
    })
}

export const registerUser = (userObj) => {
    return fetch(`http://localhost:8088/users`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(parsedUser => {
        setLoggedInUser(parsedUser);
        return getLoggedInUser();
    })
}

export const setLoggedInUser = (userObj) => {
    loggedInUser = userObj;
}

export const getLoggedInUser = () => {
    return loggedInUser;
}

export const logoutUser = () => {
    loggedInUser = {}
}

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

export const getEntry = (entryId) => {
    return fetch(`http://localhost:8088/journalEntry/${entryId}`)
    .then(response => response.json())
    .then(parsedResponse => {
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

export const updateEntry = postObj => {
    return fetch(`http://localhost:8088/journalEntry/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    }).then(response => response.json()).then(getPosts)
}

export const deleteEntry = entryId => {
    fetch(`http://localhost:8088/journalEntry/${entryId}`, {
        method: 'DELETE',
    });
}