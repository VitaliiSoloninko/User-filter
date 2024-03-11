// ================ Object
// const car = {
//     model: 'Tesla',
//     year: 2024,
// }

// ================ object to JSON, це просто рядок
// const json = JSON.stringify(car)
// console.log(json)

// ================ JSON to object
// const parsed = JSON.parse(json)
// console.log(parsed)

/* download Json Local File
async function downloadJsonLocalFile() {
    try {
        const resp = await fetch('users.json', {
            method: 'GET',
        })
        console.log(resp)
    } catch (error) {
        
    }
}

downloadJsonLocalFile()
*/

// ================ Download JSON
// ================ start назва методу
// response - відповідь

// отримати елемент з HTML
// const list = document.getElementById('list') // перший спосіб отримати елемент
const listCard = document.querySelector('#list') 
const filter = document.querySelector('#filter')
let USERS = []

// Відслідковування введення даних з input
filter.addEventListener ('input', (event) => {
    const value = event.target.value.toLowerCase() // перевіряти введення тільки в нижньому регістрі
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value)   // якщо юзер нейм співападає, тільки в нижньому регістрі .toLowerCase()
    })
    render(filteredUsers)
})

async function downloadJSON() {
    listCard.innerHTML = 'Loading ...' // поки не загрузилися дані з сервера
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        })
        const data = await response.json() // перетворюємо (response) відповідь JSON на обект
            USERS = data // запамятати весь список для фільтрування
            render(data) // вивести весь список 
    } catch (error) { // якщо не загрузився JSON
        listCard.style.color = 'red' // повідомлення червоним
        listCard.innerHTML = error.message // вивести повідомлення
    }
}

function render(users = []) {
    if (users.length === 0) { // якщо немає потрібного імені, довжина 0
        listCard.innerHTML = 'No matched users!' // вивести повідомлення
    } else {
        const htmlUserName = users.map(toHTML).join('') // users.map ??? join - прибирає кому
        listCard.innerHTML = htmlUserName // вивести в HTML
    }
}

// Вивести дані в HTML, верстка + JS
function toHTML(user) { 
    return `
    <li class="list-group-item">${user.name}</li>
    `
}

downloadJSON()