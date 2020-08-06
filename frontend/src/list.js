class List {
    constructor(id, description, user_id) {
        this.id = id
        this.description = description;
        this.user_id = user_id
    }

    

    renderListItem () {

        const div = document.querySelector(`div[data-id="${this.user_id}"]`)
        const ul = document.querySelector(`ul[data-id="${this.user_id}"]`)
        const li = document.createElement("li")
        const p = document.createElement("p")
        const deleteButton = document.createElement("button")
        const addButton = document.createElement("button")
        const completeBtn = document.createElement("input")

        completeBtn.setAttribute("type", "checkbox")

        
        deleteButton.setAttribute("class", "remove-btn")
        deleteButton.setAttribute("data-id", this.id)
        deleteButton.addEventListener("click", removeItem)
        deleteButton.innerHTML = "Remove"

        p.appendChild(completeBtn)
        p.innerHTML += ` ${this.description} `

        
        p.appendChild(deleteButton)
        li.appendChild(p)
        div.appendChild(li)
        
    }

}