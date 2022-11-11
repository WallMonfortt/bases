interface Person {
    name: string;
    age: number;
    hobbies: string[];
    isActive: boolean;

}

// use interface to define a type
export let person: Person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    isActive: true,
}

let otherPerson: Person = {
    name: 'Jane',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    isActive: true,
}


// generic type
let wal = {
    name: 'Walmart',
    size: 'large',
    model: 'X5',
}

let juan = {
    name: 'Juan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
}

let people = [wal, juan];

console.log(people[0].name); // Walmart

for (let person of people) {
    console.log(person.name);
}

console.log( people.map(person => person.name) );

let peopleWithInterface: Person[] = [person, otherPerson];

console.log(peopleWithInterface[0].name); // John
