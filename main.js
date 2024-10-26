class Coach {
    constructor(name, specialization, raiting) {
        this.name = name;
        this.specialization = specialization;
        this.raiting = raiting;
    }

    displayInfo () {
        console.log(`Coach:${this.name}, Specialization:${this.specialization}, Rating:${this.raiting}`);
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();