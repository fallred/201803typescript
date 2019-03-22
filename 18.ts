let num2;
num2 = 10;
num2 = '111';

// let num3 = 'fdfdsf';
// num3 = 123;
// 包装类
let name3 = 10;
console.log(name3.toFixed(3));

let name4 = 'zhufeng';
new String('zhufeng').toLocaleLowerCase();

let hasGirl:boolean = true;
hasGirl = Boolean(true);
// hasGirl = new Boolean(true);

let name5:string|number;
name5 = 'zhufeng';
name5 = 10;

// 类型断言
let name6:string|number|boolean;
name6 = 'zhufeng';
(name6 as string).length

function getNames(val:string|number|boolean){
    (val as string).length
}
// let root:any = document.getElementById('root')
// (root as number)