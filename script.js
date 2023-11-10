//Buttons
let onButton = document.getElementById('trigger-ON')
let offButton = document.getElementById('trigger-OFF')
let lightStatus = document.getElementById('light-status')


//Events

function delay(millisec) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, millisec);
  })
}

function toggleLight(lightOFF, lightON) {
  // console.log("ON->Off", lightOFF)
  lightOFF.classList.add("off")

  // console.log("OFF->ON", lightON)
  lightON.classList.remove("off")

}
let timerId;
let poweredON = 0

async function clickHandler() {
  // console.log("light status",lightStatus.innerHTML)
  lightStatus.innerHTML = "ON"

  if (timerId) {
    clearTimeout(timerId)
    timerId = null;
  }

  let lights = document.getElementById("stoplight")
  let red = lights.children[0]
  let yellow = lights.children[1]
  let green = lights.children[2]
  const nextLight = [red, green, yellow]
  const lightTimers = {
    redToGreen: 8000,
    greenToYellow: 8000,
    yellowToRed: 2000,
  }
  // let i=0

  // do{
  toggleLight(red, green) //turn off red, turn on green
  await delay(lightTimers.greenToYellow)
  toggleLight(green, yellow) //turn on green
  await delay(lightTimers.yellowToRed)
  toggleLight(yellow, red) //turn on red
  await delay(lightTimers.redToGreen)
  toggleLight(red, green) //turn off red, turn on green

  //TODO: Create automatic loop for light

  // i = 2
  // poweredON = true

  // }while(poweredON<10) {
  //     // if red, switch to green
  //   if(i === 0 ){
  //     console.log("red to green")
  //     toggleLight(lights.children[i])
  //     i = 2
  //     toggleLight(lights.children[i])
  //   }else{
  //     console.log(i, "to", i-1)
  //     // await delay(2000)
  //     toggleLight(lights.children[i])
  //     i--
  //     toggleLight(lights.children[i])
  //   }

  // }
  // while(poweredON<10){
  //   // 2 -> 1 -> 0 -> 2...
  //   if(i===0){// if red
  //     console.log("red to green")
  //     await delay(100)
  //     toggleLight(lights.children[i])
  //     i = 2// switch to green next
  //     toggleLight(lights.children[i])
  //   }else if(i===2){ //if green
  //     console.log("green to yellow")
  //     await delay(2000)
  //     toggleLight(lights.children[i])
  //     i = 1 // change to yellow
  //     toggleLight(lights.children[i]) 
  //   }else{ // if yellow, change to red
  //     console.log("yellow to red")
  //     await delay(1000)
  //     toggleLight(lights.children[i])
  //     i = 0
  //     toggleLight(lights.children[i])
  //   }
  //   poweredON++
  // }

}

function stopStopLight() {
  poweredON = 10
  clearTimeout(timerId)
  timerId = null;
  lightStatus.innerHTML = "OFF"
}

//Listeners
onButton.addEventListener('click', clickHandler)
offButton.addEventListener('click', stopStopLight)