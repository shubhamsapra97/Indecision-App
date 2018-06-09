class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
};

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }

        return description;
    }
};

class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    getDescription(){

        let description = super.getDescription();

        if(this.location){
            description += ` He is from ${this.location}.`;
        }

        return description;
    }
}

const me = new Person('Shubham' , 22);
console.log(me.getDescription());

const me1 = new Student('Andrew' , 25 , 'Computer Science');
console.log(me1.getDescription());

const me2 = new Student();
console.log(me2.getDescription());

const t1 = new Traveler('Shubdi' , 33 , 'Hoshiarpur');
console.log(t1.getDescription());

const t2 = new Traveler();
console.log(t2.getDescription());