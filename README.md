# To-Do-List

[Nomad Coder 초보자를 위한 바닐라 자바스크립트](https://youtu.be/wUHncG3VwPw) (old ver.) <br>
[바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lectures/2866) (updated)

> making to-do-list application using Vanilla Javascript <br> 바닐라 자바스크립트 사용법을 익히자!

<br>

## ISSUES...

-   개선하고 싶은 사항

    -   draggable element가 sticky박스에 한정돼 있는데, 문제는 이 박스가 가장 하단에 있어서 여백을 element의 여백을 잡아야만 드래깅이 가능하다. z-index를 주고 바꿔보려고 했지만 잘 안 풀렸다. 뭔가 해결 방법을 알고 싶은데 ..

    -   form tag 자체 혹은 바깥에 div로 감싸서 sticky 클래스를 적용하면 form input 타이핑 불가. button은 눌림. z-index input, form을 적용해도 안됨..

## OMG... (21/07/08)

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
    -   null은 '없음'을 확실히 지정해 주는 것 (= empty)
    -   undefined는 말 그대로 값이 할당되지 않음. 정의됨 but 할당X.

### 4. 배열

        const array = []

-   배열의 목적은 하나의 변수안에 데이터의 list를 갖기 위함 (말하자면 같은 속성끼리의 나열)
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
    name: kim,
    gender: female,
    favMovies: ["LOTR", "Harrypotter"],
    FavFood: [
        {
            name: hamburger,
            location: McDonalds,
        },
        {
            name: coffee,
            location: glin,
        },
    ],
};
```

-   출력하기

    -   info.name
    -   info["name"]

-   배열과 오브젝트의 쓰임을 분리할 줄 알아야 한다.
    -   DB에서 데이터 리스트만 뽑아온다면 Array
    -   만약 데이터를 합쳐 만들어야 한다면 Object

### 6. function 함수

      function name(param, param, ...){

      };
      name(args, args, ...);

-   해당 파라미터는 그 함수 안에서만 존재한다.
    -   function name(a, b){};
    -   a, b를 {}이 끝난 바깥에서 호출하면 error
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
    document.write(calculrator.plus(a, b) + "</br>");
plus(4, 2);

const minus = document.write(calculrator.minus(2, 4));
document.write("<br>");

const mult = (a, b) => document.write(calculrator.mult(a, b));
mult(5, 9);

document.write("<br>");
```

-   여기서 return을 적용해서 분리하면 값을 얻고 재정의할 수 있게 된다.
    -   값을 콘솔로그로 출력하는 것과 변수에 리턴 값을 담아 출력하는 건 다른 의미임을 알자.

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

-   함수의 리턴이 끝나는 순간 함수의 수명은 끝난다.

```javascript
function cal (a, b) {
console.log("hello");   // 실행 O
return a + b;
console.log("hello");   // 실행 X
```

<br>
<hr>

## Tips

### parseInt()

-   string -> number

```javascript
const age = prompt("How r u?");

console.log(age); // prompt창에 입력한 수가 출력됨
console.log(typeof age); // string
// 이 log는 string이다. 숫자인지 아닌지 구별하거나 숫자의 크기를 비교하고 싶다면 숫자를 number로 변경해야 한다.

parseInt(age); // number
console.log(age, typeof age); // 입력값, number

// 만약, prompt 입력값이 숫자가 아닐 경우
age = "abcd";
parseInt(age); // NaN
console.log(age, typeof age); // abcd, NaN
// 이런 식으로 입력값이 숫자인지 아닌지 구별할 수 있다.
// +) 메인 프로젝트 때 정규식으로만 구분했던 문자열을 이런 방식을 차용할 수도 있었겠단 생각이 든다.
```

### isNaN()

-   is Not A Number?
-   boolean (true / false) 타입으로 반환
    -   true === number 아니다.
    -   false === number 이다.

```javascript
const age = 12;
console.log(isNaN(age)); // false

if (isNaN(age)) {
    console.log("Please write a number");
}
```

### Operator

-   &&, ||, <, >, <=, >=, === (== 사용은 지양함)
-   순서에 유의할 것

```javascript
// const age = parseInt(prompt("What is ur age?"));

const age = 100;

// case 1
if (age > 80) {
    console.log("hi");
} else if (age === 100) {
    console.log("wow");
}
// case 1은 먼저 age>80이 조건이 먼저 성립되기 때문에 age === 100 조건이 true이더라도 두번째 조건은 실행되지 않는다.
// 이 조건을 실행하고 싶다면 코드의 순서를 바꿔야 한다.

// case 2
if (age === 100) {
    console.log("wow");
} else if (age > 80) {
    console.log("hi");
}
// case 2는 먼저 100과 일치하는지 조건을 먼저 검사하기 때문에 두 가지 조건 모두 실행할 수 있게 된다.

// Or, else if가 아닌 다른 if문으로 분기하면 두가지 모두 실행할 수 있게 된다.
```

### Math

-   Math.random() : 0-1 사이 소수점이 붙은 숫자를 반환
-   Math.round(1.2) ==> 1 : 소수점 반올림
-   Math.ceil(1.2) ==> 2 : 올림
-   Math.floor(1.9) ==> 1 : 내림

### addEventListener()

-   어떠한 이벤트를 실행하기 위함

```javascript
const title = document.querySelector("div.hello:first-child hi");

// 이벤트에 할당할 함수
function handleClick() {
    alert("Clicked!");
}

// "click" 이벤트를 발생시키겠다.
// click -> function 실행
title.addEventListener("click", handleClick);

// "function()"으로 호출하면 클릭 시에 함수가 호출되는 것이 아니라 즉시 실행이 된다.

// 아래와 같은 로직으로 실행됨
function handleClick() {
    alert("Clicked!");
}
handleClick();

// 클릭 시 실행하고 싶다면 "function"으로 함수 이름만 기입해야 한다.
// js로 내가 원하는 타이밍을 제어하는 것
```

-   addEventListener() VS onclick()
    -   `onclick`은 과거부터 행해오던 HTML inline 방식이지만, 전역으로 변수를 설정해주는 것과 같은 로직이라 다른 라이브러리들과 충돌이 날 가능성이 높다. 에러 발생을 줄일 수 있고, 내용과 기능의 분리가 되면 더 좋으니 `addEventListener`의 사용이 권장된다.
    -   참고 : https://unikys.tistory.com/312

### More Events...

-   MDN 사이트에서 적용 가능한 이벤트가 어떤 것이 있는지 검색해보자.
-   addEventListener()형태가 아닌 해당 이벤트 이름으로 똑같은 효과를 적용시킬 수 있다.

```javascript
// ex)
title.addEventListener("click", handleClick);
// 이 형태는 아래와 같은 작용
title.onClick = handleClick;

// but, add~형태는 removeEventListener을 통해서 eventListener을 제거할 수 있어 컨트롤이 더 편리함 (개인에 따라..)
```

### Sticky 참고

-   *https://heodolf.tistory.com/105* \*\*
-   https://ko.javascript.info/mouse-drag-and-drop
-   https://homzzang.com/b/js-1479
