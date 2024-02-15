class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    displayDetails() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

// Example usage:
let person1 = new Person("John", "Doe", 25, "Male");
let person2 = new Person("Jane", "Smith", 30, "Female");

person1.displayDetails();

person2.displayDetails();
