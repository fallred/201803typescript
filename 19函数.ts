
function sum (a:number,b:number):number{
    return a+b;
}
sum(3,2);
//函数表达式
// type用来定义类型别名
type GetUserName = (x:string,y:string)=> string
let getUserName:GetUserName = function(firstName:string,lastName:string){
    return firstName + lastName;
}

// 默认参数
//剩余参数
// 函数重载
type MyType = string|number|boolean;
function getType(val:MyType):MyType {
    return val;
}

function double(val:string):string;
function double(val:number):void;
function double(val:boolean):boolean;

function double(val:any) {
    if (typeof val == 'string') {
        return val+val;
    }
    if (typeof val == 'number') {
        return val+2;
    }
    if (typeof val == 'boolean') {
        return !val;
    }
}
double('zfpx');
double(10);
double(true);