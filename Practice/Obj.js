const person={
    names: 'Harshali',
    age:22,
    greet: function (){

        console.log('hello I am ' +person.names + ' My age is'+person.age);

        console.log('hello' +this.names);

        console.log(`hello I am ${person.names},My age is ${person.age}`)
    },

    colors: ['black','white']
}
person.greet();
console.log(person.colors[0]);
