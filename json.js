// stringify 방법

// let json = JSON.stringify(true);
// json = JSON.stringify(['banana','apple'])
// console.log(json)
const robot = {
  name:"tori",
  color:"white",
  size:null,
  birthDate:new Date(),
  jump:()=>{
    console.log(`${name} can jump!`)
  }
}
// json = JSON.stringify(robot, (key,value)=>{ return value})
// console.log(json)


// parse 방법

json= JSON.stringify(robot);
const obj = JSON.parse(json);
console.log(obj)

/*
JSON(string, number, object, array, true, false, null을 지원)
  1. Object -> JSON : .stringify
    string으로 변환된다
    함수는 변환되지 않는다
  2. JSON -> Object : .parse

*/
