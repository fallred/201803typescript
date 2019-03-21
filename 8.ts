function greeting1(name:string):void{
    console.log('hello',name);
}
greeting1('zfpx');


// ts形参合实参要完全一样,?可选参数只能放在最后一个参数
function greeting2(name:string,age?:number):void{
    console.log('hello',name,age);
}
greeting2('zfpx2',10);

function ajax(url:string,method:string='GET',){
    console.log(method,url);
}
ajax('/user','POST');

// 剩余参数
function sum1(...numbers:number[]){
    return numbers.reduce((val,item)=>{
        return val+item;
    },0)
}
let ret = sum1(1,2,3,4,5);
console.log(ret);