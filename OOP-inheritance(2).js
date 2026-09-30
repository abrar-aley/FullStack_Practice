class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log("Energy increasing while sleeping...");
    }

    doSomethingFun() {
        this.energy -= 10;
        console.log("Losing energy while having fun...");
    }
}

class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log("xp increasing while going to work...");
    }
}

function intern() {
    const worker1 = new Worker(0, 10, "Bob", 21, 110);
    worker1.goToWork();
    console.log(worker1.xp); // 10
}

function manager() {
    const manager1 = new Worker(100, 30, "Alice", 30, 120);
    manager1.doSomethingFun();
    console.log(manager1.energy); // 110
}

intern();   // call them so they actually run
manager();