/**
 * 交叉类型
 * 是将多个类型转成一个类型
 */
interface Bird11 {
    name:string;
    fly():void
}
interface Person11{
    name:string;
    eat():void
}
// 取接口属性的并集
type BirdMan = Bird11 & Person11;
let birdMan:BirdMan = {
    name: 'zhufeng',
    fly(){},
    eat(){}
}; 

// 刚才说的是兼容性检查，仅在传参的时候可以那样去判断，属性可以多，赋值的时候不行
/*
type People = {
    name:string,
    age:number
};

let p:People = {
    name: 'zhufeng',
    age: 10,
    // gender: 'male'
};
*/

/*
interface People12 {
    name:string,
    age:number
};
function getName(p:People12){
    return p.name;
}
// 赋值 
// let p:People12 = {
//     name: 'zhufeng',
//     age: 10,
//     gender: 'male'
// };
let p = {
    name: 'zhufeng',
    age: 10,
    gender: 'male'
};
//传参可以
getName(p);
*/

let p13 = {
    name: 'zhufeng',
    age: 10,
    // gender: 'male',
    // isMarried: false
};
type People13 = typeof p13;
let p133:People13 = {
    name: 'zhufeng',
    age: 10
};

/**
 * 索引访问操作符
 */

 interface Person {
     name:string;
     age:number;
     job:{
         name:string
     },
     hobbies: {
         name: string,
         level: number
     }[]
 }
let job:Person['job'] = {name:'前端'};
let hobbyLevel:Person['hobbies'][0]['level'] = 10;
let hobbyLevel2:number = 10;

/**
 * 索引类型查询操作符
 * keyof
 */

 interface Person14 {
     name: string;
     age: number;
     gender: 'male' | 'female'
 }
 function getValueByKey(p:Person14,key:keyof Person14){
    return p[key];
 }
 let p14:Person14 = {
     name: 'zhufeng',
     age:10,
     gender: 'male'
 };
 let r11 = getValueByKey(p14,'name');

/**
 * 映射类型
 */
 interface Person15 {
    name: string;
    age: number;
    gender: 'male' | 'female'
}
type PartPerson = {
    [key in keyof Person15]?:Person15[key]

    // name?: string;
    // age?: number;
    // gender?: 'male' | 'female'
};
let p15:PartPerson = {
    name: 'zhufeng',
    age:10,
};

let p16:Partial<Person15> = {
    name: 'zhufeng',
    age:10,
};

let p17:Pick<Person15, 'name'> = {
    name: 'zhufeng',
    // age:10,
};

/**
 * 定义条件类型
 */
interface Fish {
    name1:string;
}
interface Water {
    name2:string;
}
interface Bird {
    name3:string;
}
interface Sky {
    name4:string;
}
type Condition<T> = T extends Fish ? Water : Sky;
let con:Condition<Fish> = {name2:'water'};
let con2:Water = {name2:'water'};