class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep;
    }
}

const kodom = new Person ('Kodom ali', 32);
console.log(kodom);
kodom.sleep()

const badam = new Person ('kacha badam', 23);
console.log(badam.sleep);

// vejal
const lazy = kodom.sleep;
lazy()


// const person = {
//     name: "John",
//     age: 30,
//     introduce: function() {
//       console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.");
//     }
//   };