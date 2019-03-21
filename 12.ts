class Person2 {
    static myname = 'hello';
    // 加上static表示这个属性是静态的属性，是属于类的属性，可以通过类直接访问。
    static getName(){

    }
}
let P2  = new Person2();
console.log(Person2.myname);
console.log(Person2.getName);
// console.log(p2.getName);

// 多类
class Animal2{
    speak(){
        throw new Error('这是一个抽象的基类，不能直接使用');
    }
}

class Dog extends Animal2{
    speak(){
        console.log('小狗汪汪汪!');
    }
}

class Cat extends Animal2{
    speak(){
        console.log('小猫喵喵喵!');
    }
}
let dog = new Dog();
dog.speak();
let cat = new Cat();
cat.speak(); 

// 抽象类
abstract class Animal3 {
    abstract speak():void;
}

// 普通类必须实现抽象类的所有方法
class Dog3 extends Animal3 {
    speak(){
        console.log('小狗汪汪汪！');
    }
    speak2(){
        console.log('小狗汪汪汪汪！');
    }
}
class Cat extends Animal2 {

}