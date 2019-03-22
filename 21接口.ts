/**
 * 1.当用接口描述对象的时候，多一个属性少一个属性都不行
 * 2.可用来表示行为的抽象
 * 一个接口可以被多个类来实现，一个类也可以实现多个接口
 * 一个类只能有一个父类，但是一个父类可能有多个子类，这就是所谓的单继承
 */

 interface Person6 {
     readonly id: number;
     name:string;
     //表示未知的其他任意属性
     [propName:string]:any;
 }
 let p3:Person6 = {
     id:1,
     name: 'zhufeng',
     age:10,
     city:'beijing'
 };
 /**
  * 接口也可以继承
  */
interface Speakable2 {
    speak():void;
}
interface SpeakChinese extends Speakable2 {
    speakChinese():void
}
class ChinesePerson implements SpeakChinese {
    speak(){

    }
    speakChinese(){
        
    }
}

/**
 * 函数类型接口
 * 接口还可以约束函数
 */
interface Discount {
    (price:number):number
}
function discount(price:number):number{
    return price*0.8;
}
let d:Discount = discount;

/**
 * 可索引接口是可以对对象和数组进行约束
 * index 代表对象的key,可以改为其他名
*/
interface UserInterface {
    [index:number]:string
}
let user:UserInterface = ['a','b','c'];

interface UserInterface2 {
    [index:string]:string
}
let user2:UserInterface2 = {name:'zhufeng'};

/**
 * 类的约束
 */

class Animal4 {
    // name:string;
    constructor(public name:string){
        // this.name = name;
    }
}

interface WithNameClass {
    new(name:string):Animal4
}
function createAnimal(clazz:WithNameClass,name:string){
    return new clazz(name);
}
// let a = createAnimal(Animal4,'zhufeng');

/**
 * 泛型
 */

 /**
  * 类数组
  */
function sum (...args:number[]) {
    let a2:IArguments = arguments;
    let result:number = 0;
    for (let i = 0;i < a2.length;i++) {
        result += a2[i];
    }
    return result;
}
sum(1,2,3);
// 类型推论
// let root1 = document.getElementById('root');
// let children:HTMLCollection = root1.children;
// let childNodes:NodeListOf<ChildNode> = root1.childNodes;
// let input:HTMLInputElement = document.createElement('input');


/**
 * 泛型类 在类中使用泛型
 * 泛型默认值
 * T = Type
 */
class MyArray2<T=number> {
    list:T[] = [];
    add(val:T){
        this.list.push(val);
    }
    getFirst():T{
        return this.list[0];
    }
}
let myArray = new MyArray2<number>();
let myArray1 = new MyArray2();
myArray.add(1);
myArray.add(2);
myArray.add(3);
let f = myArray.getFirst();
console.log(f);
/**
 * 泛型接口就是在定义接口的时候使用泛型
 */
interface SUM<T> {
    (a:T,b:T):T
}
let sum3:SUM<number> = function(a:number,b:number):number{
    return a+b;
}
let r2 = sum3(1,2);

/**
 * 泛型可以有多个
 * tuple长度和类型都确定的数值
 */
function swap<A,B>(tuple:[A,B]):[B,A]{
    return [tuple[1],tuple[0]];
}
swap<string,number>(['a',1]);

interface LengthWise {
    length: number
}
interface NumberWise {
    toFixed(number:number): number
}
function logger<T extends LengthWise>(val:T) {
    console.log(val.length);
}
function logger1<T extends NumberWise>(val:T) {
    console.log(val.toFixed(2));
}
logger<string>('hello');
// logger1<number>('hello');
// let t:number = 1;
// t.toFixed(2);

/**
 * 泛型类型的别名
 */
type Cart<T>={list:T[]}|T[];
let cart:Cart<string> = ['a','b','c'];
let cart2:Cart<string> = {list:['a','b','c']};

/**
 * 泛型接口 泛型类型别名的区别与联系
 * 1.接口会创建一个新的名词，别名不会
 * 2.类名不能被继承和实现
 * 3.或者，几种组合，
 */
interface A{

}
interface B {

}
type A1 = A | B;
type A2 = A;

//错误
// class APerson implements A1 {

// }

// 正确
class APerson implements A,B{

}
// 错误
// class C1 extends A1 {

// }