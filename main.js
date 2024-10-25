function Student(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.grades = [];
    this.attendance = [];

    this.getAge = function () {
        let age = 2024 - this.dateOfBirth;
        console.log(`The age of the student is ${age} years`);
    }
    this.addGrade = function (grade) {
        this.grades.push(grade);
    }
    this.averageGrade = function () {
        let sum = this.grades.reduce((acc, number) => {
           return  acc + number;
        })

        return  sum / this.grades.length;
    };
    this.present = function () {
        if (this.attendance.length <= 25) {
            this.attendance.push(true);
        } else {
            console.log("Sorry. It is no longer possible to enter data");
        }
    }
    this.absent = function () {
        if (this.attendance.length <= 25) {
            this.attendance.push(false);
        } else {
            console.log("Sorry. It is no longer possible to enter data");
        }
    }
    this.averageAttendance = function () {
        let attendedCount = this.attendance.filter((boolean) => boolean === true);

        return  attendedCount.length / this.attendance.length
    }
    this.summery = function () {
        if (this.averageGrade() > 90 && this.averageAttendance() > 0.9) {
            console.log("Молодець!");
        } else if (this.averageGrade() < 90 || this.averageAttendance() < 0.9) {
            console.log("Добре, але можна краще");
        } else if (this.averageGrade() < 90 && this.averageAttendance() < 0.9) {
            console.log("Редиска!");
        }
    }

}

const alex = new Student('Alex', 'Alexenko', 1996);

alex.getAge();
alex.addGrade(70);
alex.addGrade(36);
alex.addGrade(85);
alex.addGrade(100);
alex.addGrade(90);
alex.addGrade(83);
alex.present();
alex.absent();
alex.present();
alex.present();
alex.summery();

const alice = new Student('Alice', 'Alicenko', 1994);

alice.getAge();
alice.addGrade(90);
alice.addGrade(80);
alice.addGrade(100);
alice.addGrade(100);
alice.addGrade(100);
alice.addGrade(98);
alice.present();
alice.present();
alice.present();
alice.present();
alice.present();
alice.present();
alice.summery();