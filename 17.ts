/**
 * 泛型
 * generic type
 */
function calculate<T>(value:T):T{
    return value;
}
// console.log(calculate<string>('zfpx'));
// console.log(calculate<number>(1));

// 类的泛型 如何使用
class MyArray<T> {
    // 定义一个私有属性list
    private list:T[] = [];
    add(value:T){
        this.list.push(value);
    }
    max():T{
        let ret = this.list[0];
        for(let i = 1;i<this.list.length;i++){
            if (this.list[i]>ret) {
                ret = this.list[i];
            }
        }
        return ret;
    }
}
let arr = new MyArray<number>();
arr.add(1);
arr.add(2);
arr.add(3);
console.log(arr.max());