const listCard = document.querySelector('#list') 
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener ('input', (event) => {
    const value = event.target.value.toLowerCase() 
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value)   
    })
    render(filteredUsers)
})

async function downloadJSON() {
    listCard.innerHTML = 'Loading ...' 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        })
        const data = await response.json() 
            USERS = data 
            render(data) 
    } catch (error) { 
        listCard.style.color = 'red' 
        listCard.innerHTML = error.message 
    }
}

function render(users = []) {
    if (users.length === 0) { 
        listCard.innerHTML = 'No matched users!' 
    } else {
        const htmlUserName = users.map(toHTML).join('') 
        listCard.innerHTML = htmlUserName 
    }
}


function toHTML(user) { 
    return `
    <li class="list-group-item">${user.name}</li>
    `
}

downloadJSON()