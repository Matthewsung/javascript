
function inputTime(){
  const date = document.querySelector('.date')
  const time = document.querySelector('.time')
  let data = new Date()
  time.innerHTML = data.toLocaleTimeString()

  date.innerHTML= data.toDateString()
}
inputTime()
setInterval(inputTime, 1000);

// 이름 입력

function saveName(){
  const name = document.querySelector('.name')
  let value;
  name.addEventListener('keyup',(event)=>{
    event.keyCode==13? value = event.target.value:value;
  })  
  return value
}
function inputName(){
  const name = document.querySelector('.name_box')
  name.innerHTML = saveName()
}
