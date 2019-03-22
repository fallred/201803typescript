class Person {
    name: string
    age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getName():string{
        return this.name;
    }
}
// function Person2(name:string, age:number){
//     this.name = name;
//     this.age = age;
// }

let p1 = new Person('zfpx1', 10);
console.log(p1);


class Parent {
    name: string
    age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getName():string{
        return this.name;
    }
}
class Student extends Parent {
    no: number
    constructor(name:string,age:number,no:number){
        super(name,age);//调用父类的构造函数
        this.no = no;
    }
    getNo(){
        return this.no
    }
}
let s1 = new Student('zfpx',10,1);
console.log(s1);

// public 公开的，自己，子类，其他类都能访问
// protected 受保护的，自己 子类能访问，但是其他人不能访问
// private 私有的，只有自己访问，子类，其他人不能访问。
class Father {
    public name:string = '';
    protected age:number = 30;
    private money:number;
    constructor(name:string,age:number,money:number){
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getMoney(){
        return this.money;
    }

}

class Child extends Father {
    getName(){
        return this.name;
    }
    getAge() {
        return this.age;
    }
    // getMoney(){
        // return this.money;
    // }
}
let child = new Child('zfpx', 10, 1);
console.log(child.name);
child.getName();
// child.age();


// 不能访问
// console.log(child.age);
// 不能访问
// console.log(child.money);
class Animal {
    constructor(public name: string){
        this.name = name;
    }
}