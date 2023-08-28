const SuperHero_Token="1395391261008384"
const Base_Url= `https://superheroapi.com/api.php/${SuperHero_Token}`

const getNewHero=document.getElementById("getNewHero")
const heroImageDiv=document.getElementById("imageNew")
const searchByName=document.getElementById("byName")
//const namess=document.getElementById("name")
//const powerstatss=document.getElementById("stats")


const getSuperHero =(id)=>{
    fetch(`${Base_Url}/${id}`)
    .then(response=> response.json())
    .then(json=> {
        console.log(json)
        const superHero=json
        showHeroInfo(superHero)
        //const stats=showHeroInfo(json)
        //const namee=`<h2> Name: ${json.name} </h2>`
        //const intelligence=`<p> Intelligence: ${json.powerstats.intelligence} </p>`
        //heroImageDiv.innerHTML += `<img src="${json.image.url}" height=200 width=200/>`
        //heroImageDiv.innerHTML = ` ${namee} <img src="${json.image.url}" height=200 width=200/>  ${stats}`
        //namess.innerHTML=`Name: ${json.name}`
        //powerstatss.innerHTML=`PowerStats: ${json.powerstats.speed}`
    })
}

const randomHero=()=>{
  return Math.ceil(Math.random()*731)
}

getSuperHero(randomHero())

//getNewHero.onclick=()=>getSuperHero(randomHero())
getNewHero.onclick=()=>{
    const input=document.getElementById("input")
    if(input.value==""){
        getSuperHero(randomHero())
    }else{
    getSuperHero(input.value)
    //getSuperHeroByName(input.value)
    }
}
const getSuperHeroByName =(name)=>{
    fetch(`${Base_Url}/search/${name}`)
    .then(response=> response.json())
    .then(json=> {
        
        console.log(json.results[0])
        const hero=json.results[0]
        showHeroInfo(hero)

        // const namee=`<h2> Name: ${json.results[0].name} </h2>`
        //const intelligence=`<p> Intelligence: ${json.results[0].powerstats.intelligence} </p>`
        //heroImageDiv.innerHTML += `<img src="${json.image.url}" height=200 width=200/>`
        // heroImageDiv.innerHTML = `${namee} <img src="${json.results[0].image.url}" height=200 width=200/>  ${intelligence}`
        //namess.innerHTML=`<h2> Name: ${json.results[0].name} </h2>`
        //powerstatss.innerHTML=`<h4>PowerStats: ${json.results[0].powerstats.speed}</h4>`

    })
}

searchByName.onclick=()=>{
   const input=document.getElementById("input")
   getSuperHeroByName(input.value)


}

const statToEmoji={
    intelligence: "🧠" ,
    strength:"💪" ,
    speed:"🚀" ,
    durability:"🏋️‍♂️" ,
    power:"⚡" ,
    combat:"🤼‍♂️"
}


//const img="https://www.superherodb.com/pictures2/portraits/10/100/133.jpg"

const showHeroInfo =(charecter) =>{
    const namee=`<h2> Name: ${charecter.name} </h2>`

    const img=`<img src="${charecter.image.url}" height=200 width=200/>`

   const stats= Object.keys(charecter.powerstats).map(stat=>{
    return ` <p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${charecter.powerstats[stat]}</p>`
   })
   console.log(stats.join(""))

   heroImageDiv.innerHTML = ` ${namee}${img}${stats}`

   return stats.join("")

}



