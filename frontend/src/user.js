class User {
    constructor(id, username, email, lists) {
        this.id = id
        this.username = username
        this.email  = email
        this.lists = lists
    }

    renderUser() {

        const div = document.getElementById("users-container")
        const h3 = document.createElement("h3")
        const dltUserButton = document.createElement("button")
        const addItemButton = document.createElement("new-item")
        const ul = document.createElement("ul")

        div.setAttribute("class", "card")
        ul.setAttribute("data-id", this.id) 

        h3.innerHTML = `${this.username} `

        dltUserButton.setAttribute("class", "delete-user-btn")
        dltUserButton.setAttribute("data-id", this.id)
        dltUserButton.addEventListener("click", deleteUser)
        dltUserButton.innerHTML = "Delete User"

        addItemButton.setAttribute("class", "add-item-btn")
        addItemButton.setAttribute("data-id", this.id)

        addItemButton.innerHTML += `<form>
            ToDo: <input type="text" id="new-item">
            <input type="submit" value="Add ToDo">
        </form>`

        addItemButton.addEventListener("submit", addItem)

        h3.appendChild(dltUserButton)
        ul.appendChild(h3)
        div.appendChild(ul)

        for (let item of this.lists) {
            //console.log(item)
            let l = new List(item.id, item.description, item.user_id)
            l.renderListItem()
        }

        ul.appendChild(addItemButton)
        
        div.appendChild(ul)

       
        
    }
}

