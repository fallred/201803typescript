// 可索引接口，对数据组对象的约束
interface userInterface {
    [index:number]: string
}

let arr5:userInterface = ['zfpx1','zfpx2'];
console.log(arr5);