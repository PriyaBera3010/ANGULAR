class student{
    enroll_no : number;
    name : string;
    sem : number;

    constructor(enroll_no: number, name: string, sem: number){
         this.enroll_no = enroll_no;
         this.name = name;
         this.sem = sem;
    }

    printStuDetails(): void {
        console.log("Enrollment Number: ",this.enroll_no);
        console.log("Name: ",this.name);
        console.log("Semester: ",this.sem, "\n");
    }
}

const stu1 = new student(1, "Abc", 4);
stu1.printStuDetails();