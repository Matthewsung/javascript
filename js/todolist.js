
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
  name.addEventListener('keyup',(event)=>{
    let keycode= event.keyCode;
    keycode==13?inputName(name.value):console.log()
    localStorage.setItem("userName",name)

  })
}
function inputName(name){
  const name_box = document.querySelector('.name_box')
  name_box.innerHTML = `<div class="user">안녕하세요 ${name}님</div>`
}
saveName()

//todolist

function toDo(){
  const list = document.querySelector('.todolist_input');
  const list_box = document.querySelector('.todolist_box')
  list.addEventListener('keydown',(event)=>{
    let keycode = event.keyCode;
    if(keycode ==13){
      let makeList = document.querySelector('.todolist_input').value;
      list_box.innerHTML += `
        <div class="todolist">
          <span>${makeList}</span>
          <div class="close">✔</div>
        </div>`
        deleteList()
    }
  })
}
function deleteList(){
  const close = document.querySelector('.close');
  close.addEventListener('click',(event)=>{
    let del_content = event.target.parentNode;
    del_content.remove()    
  })
  toDo()
}
toDo()