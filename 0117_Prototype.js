// 일반 객체
var obj = {
    name : '홍길동'
}
// 함수 선언문
function myFunc(number){
    return 2*number;
}
console.dir(obj);
console.dir(myFunc);

// 내장 배열 ; argument (유사배열객체) - 함수객체의 property
// 가변인자함수를 구현하기 위해서 사용!
function sum() {
    let result = 0;
    for(let i = 0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(10,20,30,40));
console.log(sum(90,85,5,36,85,97,50));

// ES6 ; rest parameter - 진짜 배열
function sum1(...args){
    let result = 0;
    for(let i = 0; i<args.length; i++){
        result += args[i];
    }
    return result;
}

// 함수선언문 - 생성자 함수
function Circle(radius){
    this.radius = radius;
    Circle.prototype.getArea = function(){
        return Math.PI * this.radius ** 2 ;
    }
    Circle.prototype.name = '홍길동'
}

const Circle1 = new Circle(2);
const Circle2 = new Circle(5);
console.dir(Circle);
console.dir(Circle1);
console.dir(Circle2);
console.log(Circle2.radius === Circle1.radius);
console.log(Circle1.getArea === Circle2.getArea);
console.log(Circle1.name, Circle2.name);

Circle1.name = '신사임당'
console.log(Circle1.name, Circle2.name); // 신사임당 홍길동

Circle.prototype.name = '강감찬'
console.log(Circle1.name, Circle2.name); // 신사임당 강감찬

Circle1.__proto__.name = '신사임당'
console.log(Circle1.name, Circle2.name); // 신사임당 신사임당

console.log(Circle1.constructor === Circle); // true 

// == 내용이 같은지 비교 (일단 타입을 맞춰주고 같은지 비교)
// === 타입이 같고, 내용이 같은지를 비교

//prototype은 상속 구조를 나타내기 위한 방법
const obj1 = {}; // 객체 literal로 만든 빈 객체
const parent = {x : 1};
obj1.__proto__ = parent; // 상속 구조도를 재구성할 수 있음(instance level에서 가능-자바와의 차이점)
console.log(obj1.x);

// 유일한 예외 
// object는 생성자함수면서 객체
const obj2 = Object.create(null); // create라는 property를 가지고있음
// 상위 prototype 객체를 지정해서 만들 수 있다
const obj3 = new Object();

const obj4 = {};
const parent1 = {
    x : 1
}
// prototype 객체를 획득
Object.getPrototypeOf(obj4);
// obj4의 prototype 객체를 parent1로 설정
Object.setPrototypeOf(obj4, parent1);

// non-constructor인 arrow function
const person = (name) => {
      this.name = neme;
};
console.log(person.prototype); // undefined

function Circle01 (radius){
    this.radius=radius;
}

const circle02 = new Circle01(5);
console.dir(circle02);

Circle01.age = 20;
console.log(circle02.age); //undefined ; prototype chain이 다르므로
// 상위 함수의 property 직접적 사용 불가

 // 전역, 함수안에서 제일 위에 언급

// function foo(){
//     'use strict';
//     x=10; // 전역변수로 만든다 ; window객체의 property로 등록 (암묵적 전역,implicit global)
// }
// foo();
// console.log(x); // 10

const x =1 ;
function outer(){
    const x = 10;
    function inner(){
        console.log(x);
    }
    return inner; // 함수가 함수를 리턴 - 자바스크립트의 함수는 일급객체이므로
}
const result = outer();
result(); // 10 (closure)

// closure 예제 - 즉시실행함수
const increase = (function(){
    let num = 0;
    return function() {
        return ++num; 
    }
}());

console.log(increase());
console.log(increase());
console.log(increase());

// 간단한 카운터를 만들 수 있다
// 현재 카운트 값을 외부에서 함부로 변경하지 못하도록 -> 지역변수인데 계속 유지가 되어야함
// (자바의 정보 은닉 ; information hiding)

