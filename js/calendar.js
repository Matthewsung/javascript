const t_body = document.querySelector('tbody')
function makeTable(){
  for(let j=0; j<6; j++){
    let tr = document.createElement("tr");
  t_body.appendChild(tr)
    for(let i=0; i<7; i++){
      let td = document.createElement("td");
      td.innerHTML = i+1; 
      tr.appendChild(td)
    }
  }
}
makeTable()

// const d = new Date
// console.log(d.getMonth())
let d =5
if((d< 8 && d%2 == 1)||(d>=8 && d%2 ==0)){
  console.log("31일")
}
else if(d == 4 ||d == 6 ||d == 9 ){
  console.log("30일")
}
else{
  console.log("2월")
}