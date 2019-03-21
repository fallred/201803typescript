// any任何类型，任何值，放弃了检查
// interface DOM {
//     style: String
// };
// let root:any = document.getElementById('root');
// let root:(HTMLElement|null) = document.getElementById('root');
let root = document.getElementById('root');
root!.style!.color = 'red';

let a:any = 1;
a = 'zfpx';

