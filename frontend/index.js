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

    if (username && email && todo) {
 
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
            let u = new User(user.id, user.username, user.email, user.lists)
            u.renderUser()

        })
    }
}

function deleteUser() {
    
    const userId = parseInt(event.target.dataset.id, 10)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE"
    })

    location.reload()
}

function addItem() {
    
    event.preventDefault()
    let userID = event.target.parentElement.dataset.id
    let todo = document.getElementById(`new-item-${userID}`).value

    let newItem = {
        user_id: userID,
        description: todo,

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
    .then(list => {
        
        console.log(list)
        let l = new List(list.id, list.description, list.user_id)
        l.renderListItem()
        
    })
}

function removeItem() {
    const itemId = parseInt(event.target.dataset.id, 10)
    
    fetch(`${BASE_URL}/lists/${itemId}`, {
        method: "DELETE"
    })

    location.reload()
}
