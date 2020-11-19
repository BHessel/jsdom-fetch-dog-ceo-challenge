console.log('%c HI', 'color: firebrick')

//Challenge 1
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(dogImg => addDogImages(dogImg))

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(breed => breedList(breed))

    let letters = document.getElementById('breed-dropdown')
    letters.addEventListener('change', (event) => { 
        const letter = event.target.value
        //call the function
        //HOW DO WE GET BREED HERE?  DUNNO YET
        breedListSelect(letter)
    })
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

//refresh the dog breed list
//Maybe, as part of the refreshing, we do this junk down herevvv
//on event select from list
//take the letter they selected
//cycle through the list of breeds (already up)
// ==> I guess that means we grab the parent ul & cycle through the li's?
//if the current one I'm looking at matches the letter, great.  Leave it be
//else nuke it.



function breedListSelect(letter){
    // location.reload()
    let list = document.getElementById('dog-breeds')
    let dogs = list.querySelectorAll('li')
    
        dogs.forEach(breed => {
        //console.log(breed.textContent)
        ///let breedName = breed
        // console.log(breed)
        // console.log(breed.innerHTML.charAt(0))
        if (breed.innerHTML.charAt(0) === letter){
            //do good stuff
            console.log("This one's good")
            //debugger
        }    else {
            //delete that sucker
            // console.log(breed)
            breed.remove()
            
        }
    })
    // console.log(list, letter)
    // debugger
    // for(const breedKey in breed.message){
    // let li = document.createElement('li')
    // li.addEventListener('click', (event) => {
    //     event.currentTarget.style.color = 'red'})           
    //     li.innerText = breedKey
    //     list.appendChild(li)
    // }
}