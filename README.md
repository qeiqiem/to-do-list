# to-do-list

[Nomad Coder 초보자를 위한 바닐라 자바스크립트](https://youtu.be/wUHncG3VwPw)

> making to-do-list application using Vanilla Javascript <br> 바닐라 자바스크립트 사용법을 익히자!

## 1-1 ~ 1-10

### 1. 변수, let

-   Create, Initialize, Use

### 2. 상수, const

-   Stable, dosen't changed

### 3. 자료형

-   string, boolean, number, float...

### 4. 배열

-   index, starting num is 0
-   모든 자료형, 변수 다 넣을 수 있다.

        const array = []

### 5. Object

-   value로 배열이 들어갈 수 있다.
-   value로 오브젝트가 들어갈 수 있다. 즉 오브젝트안의 오브젝트
-   , 빼 먹지 않도록 주의!
-   "" , {}, [] quotes, 괄호 닫기 주의!

          const obj = {}

-   오브젝트 안의 배열, 오브젝트의 배열 안의 오브젝트

            const info ={
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

-   배열과 오브젝트의 쓰임을 분리할 줄 알아야 한다.
    -   DB에서 데이터 리스트만 뽑아온다면 Array
    -   만약 데이터를 합쳐 만들어야 한다면 Object
