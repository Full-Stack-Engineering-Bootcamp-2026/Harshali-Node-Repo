const hobbies=['sports','cooking','painting']

for(let hobby of hobbies){
    console.log(hobby);
}

const numbers=[10,20,30];
const result=numbers.map((num)=>{
    return num*2;
})
console.log(result);


const numb=[10,20,30]
const res=numb.map(num=>num*2);

const users=[{names:'A',age:20},{names:'B',age:30}]
const result1=users.map(user=>user.age);
console.log(result1);