"use strict";
class student {
    constructor(enroll_no, name, sem) {
        this.enroll_no = enroll_no;
        this.name = name;
        this.sem = sem;
    }
    printStuDetails() {
        console.log("Enrollment Number: ", this.enroll_no);
        console.log("Name: ", this.name);
        console.log("Semester: ", this.sem, "\n");
    }
}
const stu1 = new student(1, "Abc", 4);
stu1.printStuDetails();
