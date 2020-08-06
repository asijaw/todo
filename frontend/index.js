document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
    createForm()
})

const BASE_URL = "http://127.0.0.1:3000";

function fetchUsers() {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for(let user of users) {
            fetch(`${BASE_URL}/lists`)
            .then(r => r.json())
            .then(userLists => {
                let listArray = userLists.filter(item => (item.user_id === user.id))
                let u = new User(user.id, user.username, user.email, listArray)
                u.renderUser()
                console.log(u)
            })
        }
    })
}

function createForm() {
    let userForm = document.getElementById("users-form")

    userForm.innerHTML += `<form>
        Username: <input type="text" id="username">
        Email: <input type="text" id="email">
        ToDo: <input type="text" id="todo">
        <input type="submit" value="Create New User">
    </form>`

    userForm.addEventListener("submit", formSubmission)
}

function formSubmission() {
    event.preventDefault() 
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let todo = document.getElementById("todo").value
 
    let user = {
       username: username,
       email: email,
       lists: todo
    }
 
    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
        console.log(user)
        
        let u = new User(user.id, user.username, user.email, user.lists)
        //u.renderUser()

    })
}

function deleteUser() {
    
    const userId = parseInt(event.target.dataset.id, 10)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE"
    })

    location.reload()
}

function addItem(e) {
    e.preventDefault()

    let todo = document.getElementById("todo").value
    let userID = 1
    console.log(userID)
    let newItem = {
        description: todo,
        user_id: userID
    }

    fetch(`${BASE_URL}/lists`, {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(r => r.json())
    .then(userLists => {
        
        //console.log(userLists)
        // let listArray = userLists.filter(item => (item.user_id === user.id))
        // let items = listArray.map(item => {return item.description})
        
    })
}

function removeItem() {
    const itemId = parseInt(event.target.dataset.id, 10)
    
    fetch(`${BASE_URL}/lists/${itemId}`, {
        method: "DELETE"
    })

    location.reload()
}
