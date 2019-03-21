function attr(key:string):any;
function attr(key:string,val:any):void;
let myObj:any = {};
function attr(key:string,val:any){
    if(val){
        myObj[key] = val;
    } else {
        return myObj[key];
    }
}
attr('name','zfpx');
console.log(attr('name'));