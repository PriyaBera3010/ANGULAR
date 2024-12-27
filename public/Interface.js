"use strict";
class Student1 {
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
const Stu1 = new Student1(1, "Abc", 4);
Stu1.printStuDetails();
const Stu2 = new Student1(2, "Xyz", 4);
Stu2.printStuDetails();
