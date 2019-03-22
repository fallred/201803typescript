let myObj:any = {};
// function attr10(key:string):any;
function attr10(key:string,val?:any):void;

function attr10(key:string,val:any){
    if(val){
        myObj[key] = val;
    } else {
        return myObj[key];
    }
}
attr10('name','zfpx');
console.log(attr10('name'));