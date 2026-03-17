console.log("start")

setTimeout(()=>{console.log("executed after 60 sec")},60000)   //async fun ,it takes callback as argument

console.log("end")


const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
       resolve("task completed")
    }
    else{
        reject("task failed")
    }
});
myPromise.then((result)=>
{
    console.log(result);
}
)
.catch((error)=>
{
    console.log(error);
});



