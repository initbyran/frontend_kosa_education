// primitive type

// 1. number type ; 정수와 실수 구분하지 않음
let myVar = 1.0 // 실수 
console.log(myVar == 1); // true
console.log(3/2); // 1.5
console.log(10/0); // Infinity (무한대)
console.log(10*'Hello'); // NaN (Not a Number) ; 산술연산불가

// 2. string type
var myStr = 'Hello'
myStr = "소리없는 \n아우성"
myStr = `소리없는
 아우성` // 문자열 여러줄로 표현가능
let test = 100
myStr=`현재 test의 값은 ${test}입니다`
console.log(myStr);

// 3. boolean 
var test1 = true

// 4. undefined 
// 5. null
test = null;
 
// 6. symbol 
let mySymbol = Symbol();
console.log(mySymbol);

let mySymbol1 = Symbol("소리없는 아우성");
let mySymbol2 = Symbol("소리없는 아우성");

console.log(mySymbol1==mySymbol2); // false

// 객체화 - 유사 배열 객체
let str = 'hello'; 
console.log(str[0]); // h
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO
str[0] = 'H'; 
console.log(str); // hello로 그대로 나옴 ; 잠시 객체가 만들어졌다가 원래 상태로 회귀함.

// reference type
let myObj = {
    'name' : '홍길동',
    'age' : 20,
    'address' : '서울',
    'myInfo' : function (){}, // 익명함수
    10 : 100 
}
myObj.address = '부산';
console.log(myObj.name);
console.log(myObj[10]);
console.log(myObj.address);

// 연산자 typeof
console.log(typeof 'Hello');
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof Symbol());
console.log(typeof [1,2,3]); // object
console.log(typeof null); // object : javascript의 대표적 오류

let myFunc = function(){
};
console.log(typeof myFunc); // function : object가 원래 나와야함

// function - 함수 선언문 (named function)
//function myFunc(a,b){
//    return a+b;
//}
// function - 함수 표현식 (anonymous function ; function literal)
//let aa = function(){}
// function - contructor function
//let bb = new Function('x','y', 'return x + y');
// function - arrow function
//let cc = (x,y) => {return x+y};
// 함수 선언문
function myFunc1(a,b){
    return a+b;
}
console.log(myFunc1(10,20));
// function literal
//(function myfunc2(a,b){
//    return a+b;
//})
console.log(myfunc1(30,20));  // 30
// console.log(myfunc2(10,20));  // error

// 함수 선언문
function myfunc1(a,b){
    return a+b;
}
// 함수 표현식
let myfunc2 = function(a,b){
    return a+b ;
}

function add(){
    return arguments[0] + arguments[1];
}
//console.log(add(10)); // javascript는 이름만 맞으면 인자의 개수에 상관없이 무조건 호출 ; NaN
console.log(add(10,20,30,40)); // 30
// IIFE
(function(){
    let x = 10;
    let y = 20 ;
    console.log(x+y);
}());

// 중첩 함수
function outer(){
    let x = 1;
    function inner(){
        let y = 2;
        console.log(x+y);
    }
    inner();
} outer ();

// callback 함수

function repeat(n){
    for(let i=0; i<n; i++){
        console.log(i);
    }
} repeat (3);

function repeat_odd(n){
    for(let i=0; i<n; i++){
        if( i % 2 == 1){
            console.log(i);
        }}
} repeat (5);

// 공통된 로직을 작성하고 경우에 따라서 변화되는 로직을 추상화해서 외부 함수로 대체 ; 함수 융합
// 함수가 함수를 인자로 받는다
function repeat(n, f){
    for(let i=0; i<n; i++){
             f(i);
        }} 
       
let printAll = function(i) {
    console.log(i);
}
let printOdd = function(i){
    if( i % 2 == 1) console.log(i);
}
repeat(10,printOdd);

