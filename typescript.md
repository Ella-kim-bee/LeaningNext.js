### 기본
- start `npm install typescript`
- index.ts

### type
- number
- string
- boolean
- null
- undefined
- any

~~~
  let a:number = 3;
  a = "string"; // error

  let b:any = 4;
  b = "string";

  let c:number | string = 'string';
  c = 1;
  c = null; // error

  let d:string[] = ['a', 'b'];
  d.push(3); // error
~~~

~~~
  funtion addNumber (a:number, b:number):number{
    return a+b
  }
~~~

### .ts
  - node는 javascript만 이해함
  - .ts --변환--> .js
  > tsc index.ts
  - tsconfig.json : .ts -> .js compilerOptions
  > cmd shift B

### type
- model folder type 만들기
- resturant.ts
- type
~~~
  export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[]
  }

  export type Address = {
    city:string;
    detail:string;
    zipCode:number;
  }

  export type Menu = {
    name:string;
    price:number;
    category:string;
  }
~~~
`let data:Restaurant = { ... }`

`useState<Restaurant>(data)`

### interface
~~~
  interface OwnProps {
    info:Restaurant,
    changeAddress(address:Address):void // :return type
    // changeAddress(address:Address):boolean
  }
~~~

### 제네릭 <>
- `useState<Restaurant>(data)`
- useState에 Restaurant type을 쓰겠다
- type을 자유롭게 지정할 때 사용

### extends
- type 확장
~~~
  interface OwnProps extends Menu {
    // extends Menu 로 가져온 정보
    // name:string;
    // price:number;
    // category:string;

    // 추가할 정보
    showBestMenu(name:string):boolean
  }
  const BestMenu:React.FC<OwnProps> = (name, showBestMenu) =>{
    return (
      <div>{name}</div>
    )
  }
~~~

### type의 확장 &
type OwnProps = Menu & {
  showBestMenu(name:string):boolean
}

### type의 선택
- 그것만 빼고
- Address type에서 'zipCode'제외하고 나머지만
`export type AddressWithoutZip = Omit<Address, 'zipCode'>`

- 그것만 선택
- Address type에서 'zipCode'제외하고 나머지만
`export type AddressZip = Pick<Address, 'zipCode'>`

- ?
- 있을수도 없을수도
~~~
export type Menu = {
  name:string;
  price:number;
  category?:string;
}
~~~

### dynamic type
- api 응답값 type 처리
~~~
export type ApiResp<T> = {
  data:T[];
  totalpage:number;
  page:number;
}

export type RestuarantResp = ApiResp<Restaurant>
export type MenuResp = ApiResp<Menu>
~~~