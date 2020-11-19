console.log('%c HI', 'color: firebrick')

//Challenge 1
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(dogImg => addDogImages(dogImg))

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(breed => breedList(breed))
})

function addDogImages(dogImg){
    let container = document.getElementById('dog-image-container')
    dogImg.message.forEach(dogUrl => {    
    let img = document.createElement('img')
        img.src = dogUrl
        container.appendChild(img)
    })
}

//Challenge 2 + 3
function breedList(breed){
    let list = document.getElementById('dog-breeds')
    for(const breedKey in breed.message){
    let li = document.createElement('li')
    li.addEventListener('click', (event) => {
        event.currentTarget.style.color = 'red'})           
        li.innerText = breedKey
        list.appendChild(li)
    }
}

//Challenge 4

function breedByLetterHelper(letter){
    
}