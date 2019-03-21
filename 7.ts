/**
 * any 任何值
 * void是any的反面，不能有任何值
 * never永远不会有返回值
 */
let ak:any= 10;
function say():void{}
// 这个函数一旦开始执行，永远不会结束，进入死循环
function sum():never{
    while(true){
        console.log(1);
    }
};
function multi():never{
    throw Error('ok');
}
function divide(a:number,b:number):never|number{
    return a/b;
}
divide(10,2);
divide(10,0);