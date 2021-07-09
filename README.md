# To-Do-List

[Nomad Coder 초보자를 위한 바닐라 자바스크립트](https://youtu.be/wUHncG3VwPw) (old ver.) <br>
[바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lectures/2866) (updated)

> making to-do-list application using Vanilla Javascript <br> 바닐라 자바스크립트 사용법을 익히자!

<br>

## OMG. (21/07/08)

I JUST GOT FOUND THE COURSE WAS UPDATED TO 2021 VERSION. <br>
I THINK I NEED TO DO IT AGAIN WITH THE NEW VERSION.
So, ... Let's get started.

         🧐 OVERVIEW
         It seems there's nothing much changed actually. I'm going to mixing up all courses to organize theory.

<hr>

## Thoery (updated)

### 1. 변수, let

-   Create, Initialize, Use

### 2. 상수, const

-   Stable, dosen't changed

### 3. 자료형

-   string, boolean, number, float...
-   null =/= undefined
    + null은 '없음'을 확실히 지정해 주는 것 (= empty)
    + undefined는 말 그대로 값이 할당되지 않음. 정의됨 but 할당X.


### 4. 배열

        const array = []

- 배열의 목적은 하나의 변수안에 데이터의 list를 갖기 위함 (말하자면 같은 속성끼리의 나열)
-   인덱스로 접근해서 값을 찾자
-   index, starting num is 0
-   모든 자료형, 변수 다 넣을 수 있다

```javascript
const arr = ["apple", "orange"];
console.log(arr); // apple, orange 2개 출력
arr.push("lemon");
console.log(arr); // apple, orange, lemon 3개 출력
// * 배열에서 뒤에 삽입 시에 push() 사용. (object와 헷갈리지 말 것)
```

        삽입 <-> 제거
        뒤에서 : push() <-> pop()
        앞에서 : shift() <-> unshift() 

### 5. Object

          const obj = {
                name : "a',
                num : 10,
                boo : true,
          }
          
          * name, num, boo : property ('=. variables) 

-   list와 다른 형태의 데이터. 같은 분류의 다른 속성.
-   value로 배열이 들어갈 수 있다.
-   value로 오브젝트가 들어갈 수 있다. 즉 오브젝트안의 오브젝트
-   , 빼 먹지 않도록 주의!
-   "" , {}, [] quotes, 괄호 닫기 주의!
-   오브젝트 안의 배열, 오브젝트의 배열 안의 오브젝트

```javascript
const info = {
  name : kim,
  gender : female,
  favMovies : ["LOTR", "Harrypotter"],
  FavFood : [
               {
                   name : hamburger,
                   location : McDonalds
                },
                {
                    name : coffee,
                    location : glin
                 }
              ]
            }
```
- 출력하기
  + info.name
  + info["name"]

-   배열과 오브젝트의 쓰임을 분리할 줄 알아야 한다.
    +   DB에서 데이터 리스트만 뽑아온다면 Array
    +   만약 데이터를 합쳐 만들어야 한다면 Object

### 6. function 함수

      function name(param, param, ...){

      };
      name(args, args, ...);
      
-   해당 파라미터는 그 함수 안에서만 존재한다.
    + function name(a, b){};
    + a, b를 {}이 끝난 바깥에서 호출하면 error
    
-   함수의 리턴
```javascript
// calculator HW
const calculator = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    mult: (a, b) => a * b,
    divide: (a, b) => a / b,
    power: (a, b) => a ** b,
};

// const plus = calculrator.plus(4,2);
const plus = (a, b) =>
    document.write(calculrator.plus(a, b) + '</br>');
plus(4, 2);

const minus = document.write(calculrator.minus(2, 4));
document.write('<br>');

const mult = (a, b) => document.write(calculrator.mult(a, b));
mult(5, 9);

document.write('<br>');
```
- 여기서 return을 적용해서 분리하면 값을 얻고 재정의할 수 있게 된다.
  + 값을 콘솔로그로 출력하는 것과 변수에 리턴 값을 담아 출력하는 건 다른 의미임을 알자.
```javascript
const calculator = {
    plus: (a, b) => return a + b,
    minus: (a, b) => return a - b,
    mult: (a, b) => return a * b,
    divide: (a, b) => return a / b,
    power: (a, b) => return a ** b,
};

const plusResult = calculator.plus(2,3);
const multResult = calculator.mult(plusResult, 10);
```
리턴을 사용하면 이런 식의 값의 할당이 가능하게 된다.
 
 - 함수의 리턴이 끝나는 순간 함수의 수명은 끝난다.
```javascript
function cal (a, b) {
console.log("hello");   // 실행 O
return a + b;
console.log("hello");   // 실행 X
```
