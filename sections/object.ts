

export let person = {
    name: 'John',   
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    isActive: true,
    toString: function() {
        return this.name + ' ' + this.age;
    }

}

console.log(person) // John

console.log(person.toString()) // John 30



let car = {
    name: 'BMW',
    size: 'small',
    model: 'X5',
    toString: function() {
        return this.name + ' ' + this.model;
    }

}

let samartTv = {
    name: 'Samsung',
    resolution: '4K',
    model: 'QLED',
    toString: function() {
        return this.name + ' ' + this.model;
    }
}

let youTuveVideo = {
    name: 'How to learn TypeScript',
    duration: 10,
    views: 1000,
    toString: function() {
        return this.name + ' ' + this.duration;
    }
}

console.log(car.toString()) // BMW X5
console.log(samartTv.toString()) // Samsung QLED
console.log(youTuveVideo.toString()) // How to learn TypeScript 10