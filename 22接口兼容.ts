/**
 * 接口的兼容性
 */
interface Animal7 {
    name:string;
    age:number;
    gender:number;
}
let a7:Animal7 = {
    name:'zhufeng',
    age:10,
    gender: 0
};
interface Person7 {
    name:string;
    age:number;
    // gender:number;
}
function getName11(p:Person7):string{
    return p.name;
}
// 在检查参数类型的时候，并不是真正的比较接口类型，而是比较的具体的属性是否兼容
getName11(a7);

/**
 * 基本数据类型的兼容性
 */
let num:string|number;
let str:string = '';
num = str;
// 字符串的核心方法就是toString
let num5:{
    toString():string
};
let str2:string = '';
num5 = str2;

/**
 * 类的兼容性
 * 父子之间能不能赋值跟是不是父类子类一点关系都没有，关键看要的属性有没有
 */
class Parent8 {
    name:string='';
    age:number = 9;
}
class Child8 extends Parent8 {
    // age:number = 9;
    age:number = 9;
}
let p8:Parent8 = new Parent8();
let c8 = new Child8();
// 把一个子类的实例赋给了父类的变量
let p88:Parent8 = new Child8();
// 把父类的实例赋给子类的变量
let c77:Child8 = new Parent8();
let c88:Child8 = {name:'zhufeng',age:10};


/**
 * 函数的兼容性
 * 比较函数的时候先比较函数上的参数，再比较函数上的返回值
 * 参数是可以省略的
 * 参数只能少传不能多传，类型要对
 */
type sumFunc = (a:number,b:number)=>number;
let sum7:sumFunc;
sum7 = function(a:number,b:number):number{
    return a+b;
}
sum7 = function(a:number):number{
    return a;
}
sum7 = function():number{
    return 0;
}
// sum7 = function(a:number,b:number,c:number):number{
//     return a+b+c;
// }
// 这里不是箭头函数，箭头左边是参数列表 ，右边是返回值是一个对象
type GetPerson = ()=>{
    name:string,
    age:number
}
let getPerson:GetPerson;
getPerson = function(){
    return {name:'zhufeng',age:10}
}
getPerson = function(){
    return {name:'zhufeng',age:10,gender:'male'}
}
// getPerson = function(){
//     return {name:'zhufeng'}
// }
getPerson().age.toFixed(2);

/**
 * 双向协变
 */
type LogFunc = (val:number|string) =>void
let log3:LogFunc;
// log3 = function(val:number){
//     console.log(val);
// }
log3 = function(val:number|string|boolean){
    console.log(val);
}

/**
 * 泛型的兼容性
 * 泛型在判断兼容性的时候，会先判断具体类型，再进行兼容性的判断
 */
interface Empty<T>{}
let x1:Empty<string>='';
let y1:Empty<number>=1;
x1 = y1;


interface NotEmpty<T>{
    data:T
}
let x11:NotEmpty<string>={data:'124'};
let y11:NotEmpty<number>={data:123};
// x11 = y11;

/**
 * 枚举的兼容性
 * 枚举和数字兼容
 * 兼容性比较的是值，而不是比较怎么来的
 */
enum Colors2 {
    Red,
    Yellow,
    Blue
}
// let Colors2 = {
//     0: 'Red',
//     1: 'Yellow',
//     2: 'Blue'
// };
let num4:number = Colors2.Red;
console.log(num4);
num4 = 2;

let c5:Colors2;
c5 = Colors2.Red;
c5 = 1;