import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    AddStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const ProgramStart = async (persons) => {
    console.log(chalk.bold.blueBright("Welcome guest"));
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Which student you want to talk :",
            choices: ["Self", "Student", "Exit"]
        });
        if (answer.select == "Self") {
            console.log(chalk.italic.green("Hello. I want to talk myself."));
            console.log(chalk.italic.green("I am fine"));
        }
        else if (answer.select == "Student") {
            let ask = await inquirer.prompt({
                type: "input",
                name: "studentName",
                message: "Which Student you want to talk : "
            });
            const student = persons.students.find((val) => val.name === ask.studentName);
            if (!student) {
                const name = new Student(ask.studentName);
                persons.AddStudent(name);
                console.log(chalk.bold.blueBright(`Hello I am ${name.name}. I am fine.`));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.blueBright(`Hello I am ${student.name}. I am fine.....................Student name is available`));
                console.log(persons.students);
            }
        }
        else {
            process.exit();
        }
    } while (true);
};
ProgramStart(persons);
