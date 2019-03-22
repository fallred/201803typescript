/**
 * 在分支中判断变量的具体类型
 */
function double(input:string|number|boolean){
    if(typeof input == 'number'){
        input.toFixed()
        return input*2;
    }
    if (typeof input == 'string') {
        input.length
        return input+input;
    }
    if (typeof input == 'boolean') {
        return !input;
    }
}

class Bird1 {
    name1:string = '';
}
class Dog1 {
    name2:string = '';
}
function getName(animal:Bird1|Dog1){
    if (animal instanceof Bird1) {
        return animal.name1
    }
    if (animal instanceof Dog1) {
        return animal.name2;
    }
}

/**
 * null保护
 * 默认情况下对null的检查是不严格的
 */
function getFirstLetter(str:string|null){
    // if(str == null){
    //     return ''
    // }
    function log(){
        // console.log(str.trim());
        //
        console.log(str!.trim());
    }
    // 这是第一种处理方式
    str = str || '';
    log();
    return str.charAt(0);
}

/**
 * 链判断运算符,原理是三元运算符
 */
let  a8:any = {
    b:'zhufeng'
};
a8 = null;
// console.log(a8?.b);
console.log(a8 == null ? undefined: a8.b);

/**
 * 可辨识的联合类型
 */
interface WarningButton {
    class: 'warning',
    text1: '修改'
}
interface DangerButton {
    class: 'danger',
    text2: '删除'
}
type Button = WarningButton | DangerButton;
function getButton(button:Button){
    if (button.class == 'warning') {
        console.log(button.text1);
    }
    if (button.class == 'danger') {
        console.log(button.text2);
    }
}


interface Bird9 {
    swing: number;
}

interface Dog9 {
    leg: number;
}

function getNumber(animal:Bird9|Dog9){
    if ('swing' in animal) {
        console.log(animal.swing);
    }
    if ('leg' in animal) {
        console.log(animal.leg);
    }
}
/**
 * 自定义类型保护
 */

interface Bird10 {
    name: string;
    swing: number;
}

interface Dog10 {
    name:string;
    leg: number;
}
function isBird(x:Bird10|Dog10):x is Bird10{
    return (x as Bird10).swing > 0;
    // return (<Bird10>x).swing > 0;
}
// 如果是鸟的话，返回鸟的翅膀的个数，如果是狗的话，返回狗的腿的个数
function getAnimal(x:Bird10|Dog10){
    if (isBird(x)) {
        console.log(x.swing);
    } else {
        console.log(x.leg);
    }
}
