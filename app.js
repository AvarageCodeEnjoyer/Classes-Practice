const ulList = document.getElementById('ulList')
const button = document.getElementById('btn')
let friendsARR = []
var i = 0

class Friends{
  constructor(name, school, age){
    this.name = name
    this.school = school
    this.age = age
  }
  addFriends() {
    let createLI = document.createElement('LI')
    createLI.innerHTML = `<h1>${this.name}</h1>
                          School: ${this.school} <br>
                          Age: ${this.age}`
    ulList.appendChild(createLI)
    console.log(friendsARR[i])
    i++
    return
  }  
}

function addArray(){
  let Name = document.getElementById('name').value
  let School = document.getElementById('school').value
  let Age = document.getElementById('age').value
  friendsARR[i] = new Friends(Name, School, Age)
  return friendsARR[i].addFriends()
}


button.addEventListener("click", addArray)


/* function addFriends(){
  let name = prompt("Whats their name?")
  let school = prompt("Where do they go to school")
  let age = prompt("How old are they?")

  friendsARR[i] = new Friends(name, school, age)
  addLI(friendsARR[i])
  console.log(friendsARR[i])
  i++
} */



/* function addLI(item){
  const createLI = document.createElement('LI')
  createLI.innerHTML = `<h1>${item.name}</h1>
                        School: ${item.school} <br>
                        Age: ${item.age}`
  ulList.appendChild(createLI)
} */




