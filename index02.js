// let ; block level scope. ES6에 도입
let result = 100;
{let rewult = 50;}
// 같은 scope내에서 중복선언 ; 에러
let score = 50;
{ let score = 100;
  let myVar = 10;
}
console.log(score); // 50
console.log(myVar); // error

let i = 100; // i는 전역변수 (global variable)
function myFunc(){
    let i = 10; // i는 지역변수(local variable); 자기영역(scope)에서만 살 수 있음
    for(let i=0; i<3; i++){
        console.log(i); // 0 1 2 
    }
   console.log(i); // 10
}

myFunc(); // 10
console.log(i); // 100