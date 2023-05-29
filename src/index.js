console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let breeds={}


function getBreeds(){
fetch(imgUrl)
    .then(response => response.json()) 
    .then(response => {
        const dogImageContainer = document.getElementById("dog-image-container")
        response.message.map(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })

    })
}
getBreeds();


function getBreedNames(){
  fetch(breedUrl)
.then(response => response.json()) 
.then(response =>{
   breeds = Object.keys(response.message)
   addBreeds(breeds)
})
}
getBreedNames()


document.addEventListener("click", (event)=>{
    if(event.target.matches("li")){
        event.target.style.color = "firebrick"
    }
})


function addBreeds(breeds){
    const ul = document.querySelector("#dog-breeds")
    breeds.map(breed=>{
     const li =document.createElement("li")
     li.textContent=breed
     ul.append(li)
    })
}


document.addEventListener("change", e =>{
    if(e.target.matches("#breed-dropdown")){
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML=""
    const filteredBreeds = breeds.filter(breed => breed[0]===e.target.value)
    addBreeds(filteredBreeds)
    }
})