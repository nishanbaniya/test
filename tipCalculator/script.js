let billTotal = document.getElementById("billTotalInput")
let tip = document.getElementById('tipInput')
let totalPP = document.getElementById('perPersonTotal')
let numberP = document.getElementById('numberOfPeople')


const calculateBill = () => {
  result1 = Number(billTotal.value) + Number(tip.value / 100 * billTotal.value)
  result= Number(result1)/number
  // totalPP.innerHTML = result
  totalPP.innerHTML = `$${result.toFixed(2)}`
  return result

}

// let button = document.querySelectorAll(".splitButton")
let number=Number(numberP.innerText)

const increasePeople = () => {
  number += 1
  numberP.innerHTML = Number(number)
  calculateBill()
}


const decreasePeople = () => {
  if(number==1){
    return
  }
  else{
      number -= 1
      numberP.innerHTML = Number(number)
      calculateBill()
  }


}