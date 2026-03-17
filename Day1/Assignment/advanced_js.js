const original={
    names:"laptop",
    brand:"asus",
    quantity:20
}
const copy=original;
copy.quantity=30;
console.log(original)
console.log(copy)

//objects are reference types ,both original and copy points to same obj , ie shallow copy so change in one affetcts another

//merge arrays
let arr1=[10,20,30,40]
let arr2=[50,60,70]
let arr3=[...arr1,...arr2]
console.log(arr3)

//merge objects

let obj1={"A":1,"B":2,"C":3}
let obj2={"D":4,"E":5}
let obj3={...obj1,...obj2}
console.log(obj3)


//cal avg
function avg(...score){
let sum=0;
for(let num of score){
    sum=sum+num;
}
let avg=sum/score.length;
console.log(avg)
}
avg(10,20,30)
avg(30,30,50,60,70)

const obj={
    names:"laptop",
    brand:"asus",
    quantity:"50"
}

const {names,brand,quantity} =obj
console.log(names)
console.log(brand)
console.log(quantity)

const arr=[100,200,300,400]
const [first,third]=arr
console.log(first)
console.log(third)


function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve()},ms);
    });
}
delay(6000).then(()=>console.log("Done Waiting"));


