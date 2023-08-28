// const dogButton=document.getElementById("dogButton")
// const newDog=document.getElementById('dogImage')

// const getNewDog=()=>{
//     //fetching Api request
//     //stuff you have to wait for
//     fetch ("https://dog.ceo/api/breeds/image/random")
//     //whenever we have to fetch we use two .then
//     //json is an object with two keys message and status
//     //turn the data into json
//     .then (response=> response.json())
//     //log json
//     .then (json=>{
//         newDog.innerHTML=`<img src="${json.message}" height=300px width=300px/>` 
//     })

// }
// getNewDog()
// dogButton.onclick = ()=> getNewDog()

//const newDog=document.getElementById('dogImage')
//fetch ("https://dog.ceo/api/breeds/image/random").then (response=> response.json()).then (json=>{ newDog.innerHTML=`<img src="${json.message}" height=300px width=300px/>` })

//.then - Promises
//asynchronous programming
//Previous programming were synchronous 

const dogss = document.getElementById('dogss')
const dogImageDiv = document.getElementById('dogImage')
//fetching Api request
//stuff you have to wait for
const generate = () => {
fetch('https://api.api-ninjas.com/v1/randomimage?category=')
//whenever we have to fetch we use two .then
//json is an object with two keys message and status
//turn the data into json
.then(response => response.json())
//log json
.then(json => {
    //console.log(json.message)
    dogImageDiv.innerHTML= `<img src="${json.message}" height=300px width=300px/>`
     })
    }
dogss.onclick = () => generate()