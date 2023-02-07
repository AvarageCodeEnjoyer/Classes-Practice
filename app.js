const ulList = document.getElementById('ulList')
const button = document.getElementById('btn')
const newFriend = new Friends
let friendsARR = []
var i = 0


button.addEventListener("click", newFriend)

class Friends{
  constructor(name, school, age){
    this.name = name
    this.school = school
    this.age = age
    addFriends(); {
      let name = prompt("Whats their name?")
      let school = prompt("Where do they go to school")
      let age = prompt("How old are they?")
    
      friendsARR[i] = new Friends(name, school, age)
      addLI(friendsARR[i])
      console.log(friendsARR[i])
      i++
    }
  }
}



/* function addFriends(){
  let name = prompt("Whats their name?")
  let school = prompt("Where do they go to school")
  let age = prompt("How old are they?")

  friendsARR[i] = new Friends(name, school, age)
  addLI(friendsARR[i])
  console.log(friendsARR[i])
  i++
} */



function addLI(item){
  const createLI = document.createElement('LI')
  createLI.innerHTML = `<h1>${item.name}</h1>
                        School: ${item.school} <br>
                        Age: ${item.age}`
  ulList.appendChild(createLI)
}




