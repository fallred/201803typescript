/**
 * 定义一个类
 */
class Person1{
    name:string = 'ddd';
    getName():void {
        console.log(this.name);
    }
}
// get set
class Person3 {
    myname:string;
    constructor (myname:string) {
        this.myname = myname;
    }
    get name() {
        return this.myname;
    }
    set name (newVal) {
        this.myname = newVal;
    }
}
let p2 = new Person3('zhufeng');
console.log(p2.name);


// 参数的属性
// 加上public之后，就相当于给当前类的实例增加了一个公有属性
// public readonly protected private

class Person4 {
    constructor (public myname:string) {
    }

}
// 类的继承
// 类的静态属性，方法
// 抽象类
// 重写：子类重写父类的逻辑
// 重载：函数名一样，函数参数类型，个数不一样
// 多态


