// ================ Download JSON
// ================ start назва методу
// response - відповідь

// отримати елемент з HTML
// const list = document.getElementById('list')
const list = document.querySelector('#list') 

// users.json - загрузити JSON локально з папки, вставити замість адреси сайту
async function downloadJSON() {
    list.innerHTML = 'Loading ...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', { 
            method: 'GET',
        })
        const data = await resp.json() // перетворюємо resp відповідь на обект
        setTimeout(() => {
            render(data)
        }, 2000)
        
    } catch (error) {
        list.style.color = 'red'
        list.innerHTML = error.message 
    }
}
// join - gприбирає кому
function render(users = []) {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}

function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>
    `
}

downloadJSON()
