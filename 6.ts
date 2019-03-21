function greeting(name:string):string{
    console.log('hello',name);
    return 'ok';
}
greeting('zfpx');

let xx:never;
xx = (()=>{
    throw new Error('wrong');
})();

let yy:object = {name: 'zfpx2'};
console.log(yy);