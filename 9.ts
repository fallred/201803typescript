/**
 * 函数的重载
 * Java里面重载是值两个或两个以上的函数，参数的个数和类型不一样
 */

// function attr(key:string) {

// }
// function attr(key:string,val:string) {

// }
// attr('a');
// attr('a','1');
// 函数的声明
function attr(val:string):void;
function attr(val:number):void;
function attr(val:boolean):void;

// function attr(val:string|number|boolean):void{
//     console.log(typeof val,val);
// }

function attr(val:any):void{
    console.log(typeof val,val);
}
attr('zfpx');
attr(10);
attr(true);
// attr({});

function parse(str:string):any|never{
    return JSON.parse(str);
}
var obj = parse('{"name":"zfpx"}');
console.log(obj);

function multi1(a:number,b:number):void{
    // return a + b;
}