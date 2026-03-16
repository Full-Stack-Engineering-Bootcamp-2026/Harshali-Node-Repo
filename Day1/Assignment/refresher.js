const names='Harshali'
const age='22'
const hobby=['Drawing and Painting','Chess','Gardening']
const msg=`Hi, I'm ${names}, I'm ${age} years old and I love ${hobby}`
console.log(msg)

const square=num=>num*num;
console.log(square(10));

const isEven=num=>{
    if(num%2==0) {
        return true
    }
    else {
        return false
    }
    
}
console.log(isEven(10));
console.log(isEven(15));

const fruits=['Mango','WAtermalon','Coconut','Avacado','Strawberry']
const result=fruits.map(fruit=>fruit.toUpperCase())
console.log(result)

const result1=fruits.filter(fruit=>fruit.length>5)
console.log(result1)

const student={
    names:'Harshali',
    course:'Fullstack Bootcamp',
    year:'2026',
    info:()=>{
        console.log(student.names,student.course,student.year)
    }
}
console.log(student.names)
console.log(student.course)
console.log(student.year)

//optional

const[firstFruit,secondFruit]=fruits;
console.log(firstFruit)
console.log(secondFruit)

