// var keyword는 같은 scope내에서 중복선언이 가능 ; var이 없는 걸로 간주
var x = 100;
var y = 100;
var x = 300;
// x = 300;
// var y;  초기화 없이 재선언하면  무시

var x = 1;
if(true){
    var x = 100;
}

// console.log(x); // 100이 찍힘 ; var는 fuction level scope만 local scope로 인정
var x = 1;
function myFunc(){
    // JavaScript는 함수형 언어 (Java method는 class안에 위치)
    // method와 같은 기능 ; 독립적으로 존재 
    var x = 200;
    console.log(x);
}

console.log(x);

x=100;

console.log(x);

function myFunc(){
    console.log(x);
    var x;
}

myFunc();

