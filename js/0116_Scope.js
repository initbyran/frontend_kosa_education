// var x = 'hello'; // 전역변수(global scope)

// // 함수 선언문
// function foo(){
//     var x = 'world';
//     console.log(x);
//     function bar(){
//         var x = "haha"; // 지역변수
//         console.log(y);
//     }
// // identifier resolution(식별자 결정)
// // x는 서로 다른 변수 (지역변수)
// }

// foo();

// console.log(x);

var x = 1;
function foo11(){
    var x = 10;
    bar();
}
function bar11 (){
    console.log(x); 
    // 함수가 만들어질때 변수 결정됨; 
}
console.log(bar11()); // 1

// foo();

// 객체 literal
// const obj={
//     //property ; key(String), value
//     myName : '홍길동',
//     myAge : 20
// }

// console.log(obj); // 직접적 사용 불가
// // console.log(obj.[[prototype]]); 직접적 사용 불가
// console.log(obj.__proto__); // 간접적 사용 가능 

const person = {
    name : '홍길동',
    age : 20
}

console.log(person);
console.log(Object.getOwnPropertyDescriptors(person));

//객체를 다른 방식으로 만들어보기
const person1={}
Object.defineProperty(person1, 'firstName',{
    value:'홍', 
    writable: true, 
    enumerable: true, 
    configurable: true
}); 

// const person1={
//     firstName : '홍'
// }

// console.log(person1.firstName);
// person.firstName = '최' // 안바뀜
// console.log(person1.firstName);

// key 값 추출
for (let key in person1) {
    console.log(key);
}

// new라는 keyword로 생성자 함수 호출 가능
const person2 = new Object();
person2.name = '홍길동';
person2.age = 20;
console.log(person2);
// built-in contructor function
const strObj= new String('소리없는 아우성'); // property 생성 (유사 배열 객체)
console.log(typeof strObj); // object 
console.log(strObj); // String {'소리없는 아우성!'} 

const strObj1 = {
    name : '홍길동'
}
console.log(typeof strObj1); // object ; literal
console.log(strObj1);

const numObj = new Number(100);
console.log(numObj);

const dateObj = new Date();
console.log(dateObj);
console.log(dateObj.toLocaleString());

// 동일한 형태의 객체를 만들려면?
// 사용자 정의 생정자 함수
// 함수 선언문
function Person(){
}

const person3 = new Person();
const person4 = {}

console.log(person3);
console.log(person4);

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){    
         return 2*(3.14)*(radius); 
    }
} // class 역할-field, method
let circle1 = new Circle(5); // 객체 생성
console.log(circle1);
console.log(circle1.getDiameter());

function foo() {
    console.log(this);
}

foo(); // 일반 함수로 호출 (this는 전역객체)

const obj = {
    foo, // ES6의 축약표현(foo : foo) 
    // 객체가 가지고있는 함수;method
    name: '홍길동'
}

obj.foo();

function Circle1(radius){
    this.radius = radius; // this ; 전역객체(window)
}

const circle2 = Circle1(10); // 일반함수
console.log(circle2); // undefined : Circle1이 리턴값이 없으므로
console.log(radius); // 10 ; window.radius의 축약 ; 최상위의 radius값 출력

const circle3 = new Circle1(20); // 생성자함수
console.log(circle3); // 20

var myName = '홍길동';
function foo(){
    console.log(this); // this ; 전역객체
} // 일반함수

foo();

// 함수 선언문  
function foo1() {
}
// 1 phase ; foo1라는 변수 생성(묵시적으로)
foo1.myName = '홍길동';
foo1.myFunc = function(){
    console.log(this);
} // 함수도 객체이므로 property를 붙일 수 있다
//console.log(foo1.myName);
foo1.myFunc();
// foo1은 일반함수로 호출 가능 ; collable function ([[call]] 있음)
// foo1(); -> 내부적으로 [[call]] 호출
var myVar = 100; // 전역변수(전역객체에 property로 붙어있는)
var myVar = {}; // 일반 객체
// myVar(); -> [[call]]이 없으므로 오류발생

// [[constructor]] : 함수선언문, 함수표현식, 클래스 -> constructor
// 1. 함수선언문
function add (x,y) {
    return x+y;
}
add(); // [[call]] 호츨
let instance = new add(); // [[constructor]] 호출
console.log(instance); // add {}

function createUser(name, age){
    this.name = name
    this.age = age
}
let inst = new createUser('홍길동', 20);
console.log(inst);

// 2. 함수표현식
const bar = function() {
}
bar();
new bar();

const obj1 = {
    x:function(){} // method라고 하지 않음 ; 그냥 property x (함수가 달려있는)  
// 객체 생성 가능하므로 constructor (O) 
}
new obj1.x(); // 함수 표현식으로 만든 생성자 함수
//Arrow-function
const myFunc1=(a,b) => {return a+b};
myFunc1(); // [[call]]가능
// new myFunc1();// [[constructor]] 없음 ; TypeError: myFunc1 is not a constructor

var obj2 = { 
    // myFunc2 : function() {}
    myFunc2(){}, // 축약형, 메소드
    name : '홍길동'
}
// new obj2.myFunc2(); // 객체 생성 불가

var object = {
    name : '홍길동'
}
console.dir(object);

function square(number){
    return number*number;
}
console.log(square);
console.dir(square);




