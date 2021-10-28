const userList = document.querySelector('#userList')
const navTabs = document.querySelector('#navTabs')
const infoBox = document.querySelector('#infoBox')

const person = [{
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough"
        }
    },
    {
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh"
        }
    },
    {
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven"
        }
    }]

let users =  []
let todoList =  []
let posts =  []
let photoAlbums =  []

const  URL = 'https://jsonplaceholder.typicode.com'

const  fetchUsers = async () => {
    try {
        const response =await  fetch (`${URL}/users`)
        const data = await response.json()
        users = data
    }
    catch (e){
        console.log(e)
    }
    renderUsers()
}

const renderUsers = () =>{
    users.forEach( user =>{
        const userElement = document.createElement('div')
        userElement.className = `left-item`
        userElement.textContent = user.name
        userElement.addEventListener('click', ()=>{
            clickUser(user)
        })
        userList.append(userElement)
    })
}

const clickUser = (user) => {

}

const fetchTodoByUserId = async (userId) =>{
    try{
        const response = await fetch(`${URL}/todos?userId=${userId}`)
        todoList = await response.json()
    }catch (e) {
       console.log(e)
    }
}

const fetchPosts = async (userId) =>{
    try{
        const response = await fetch(`${URL}/posts?userId=${userId}`)
        posts = await response.json()
    }catch (e) {
        console.log(e)
    }
}

const fetchAlbums = async (userId) =>{
    try{
        const response = await fetch(`${URL}/albums?userId=${userId}`)
        photoAlbums = await response.json()
    }catch (e) {
        console.log(e)
    }
}

const renderFullInfo = (person) => {
  const userInfo = document.createElement('div')
    infoBox.append(userInfo)
    userInfo.innerHTML = `
    <h3>${person.name}</h3>
    <p>${person.username}</p>
    <p>${person.email}</p>
    <p>${person.address}</p>
    `
}

const main = () =>{
    fetchUsers()
}

main()