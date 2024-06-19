#! /usr/bin/env node


import inquirer from "inquirer";

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
class Person {
  students: Student[] = [];
  addStudent(obj: Student) {
    this.students.push(obj);
  }
}
const persons = new Person();

const programStart = async (persons: Person) => {
  do {
    console.log("welcome");
    const ans = await inquirer.prompt([
      {
        name: "select",
        type: "list",
        message: "whom would you like to interact with ",
        choices: ["staff", "student", "exit"],
      },
    ]);
    if (ans.select == "staff") {
      console.log(
        "you approach the staff room. please feel free to ask any question"
      );
    } else if (ans.select == "student") {
      const ans = await inquirer.prompt([
        {
          name: "student name",
          type: "input",
          message: "enter the student's name you want to engaged with",
        },
      ]);
      const student = persons.students.find((val) => val.name == ans.student);
      if (!student) {
        const name = new Student(ans.student);
        persons.addStudent(name);
        console.log(`hello i am ${name.name}. nice to meet you`);
        console.log("new student added");
        console.log("current student list:");
        console.log(persons.students);
      } else {
        console.log(`hello i am ${student.name}. nice to see you again`);
        console.log("existing new student");
        console.log(persons.students);
      }
    } else if (ans.select == "exit") {
      console.log(".........exitng the program..........");
      process.exit();
    }
  } while (true);
};

programStart(persons);
