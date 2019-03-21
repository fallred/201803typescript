/**
 * 数据类型
 */
let isMarried:boolean = true;
isMarried = false;
typeof isMarried

let age:number = 10;
let firstname:string = '张';
//定义数组
let hobbies:string[] = ['smoking','drinking','dance'];
let numbers:Array<number> = [4,5,6];
let students:Array<object> = [{name:'zfpx1'},{name:'zfpx2'}];
console.log(students);

let fullname:[string,string,number] = ['张','三',9];
let arr2:Array<string|number> = [4,5,6,'234'];
let arr3:Array<any> = ['hello',9,true];

//枚举
let gender = 'boy';

