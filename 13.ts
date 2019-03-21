/**
 * 接口 本质上是一种约束
 * 约束对象
 */
interface userInterface{
    name:string,
    age:number,
    home?: string,
    height?: number
}
function getUserInfo(user:userInterface):void{
    console.log(`${user.name} ${user.age} ${user.home}`);
}
function getVipInfo(user:userInterface):void{
    console.log(`${user.name} ${user.age}`);
}
getUserInfo({
    name: 'zfpx',
    age: 10,
    home: 'beijing'
});
getVipInfo({
    name: 'zfpx',
    age: 10
});


