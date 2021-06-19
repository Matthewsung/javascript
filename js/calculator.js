const cal = document.querySelector('.cal')
const cal_val = document.querySelector('.cal_val')
let total_num =[];
cal.addEventListener('click',function(event){
  let value = event.target;
  let tmp = value.dataset.type
  if(tmp == "type" && value.value == "+"){
    total_num[0] =  total_num.reduce((prev,cur)=>{return Number(prev) + Number(cur);})
    total_num.splice(1);
    console.log(total_num)
  }
  else if(tmp == "type" && value.value == "-"){
    let a =  total_num.reduce((prev,cur)=>{return Number(prev) - Number(cur);})
    console.log(a)
  }
  else if(tmp == "type" && value.value == "*"){
    let a =  total_num.reduce((prev,cur)=>{return Number(prev) * Number(cur);})
    console.log(a)
  }
  else if(tmp == "type" && value.value == "/"){
    let a =  total_num.reduce((prev,cur)=>{return Number(prev) / Number(cur);})
    console.log(a)
  }
  else if(tmp == "type" && value.value == "="){
    cal_val.innerHTML = Number(total_num.join(''))
  }
  else if(tmp == "num"){
    
    total_num.push(value.value)
  }
  else if(tmp == "type"&&value.value == "del"){
    total_num.splice(0)
  }
  cal_val.innerHTML = total_num;
 total_num.push(value.value)
  console.log(total_num)
  // console.log(total_num)
})