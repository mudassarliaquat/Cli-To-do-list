#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.cyan(chalk.green("Welcome to Todo App")));
let main = async () => {
    while (condition === true) {
        let operators = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Select a operation what you want to do",
                choices: [
                    "Add Task",
                    "View Task",
                    "Delete Task",
                    "Update Task",
                    "Exit",
                ],
            },
        ]);
        if (operators.operation === "Add Task") {
            await addTask();
        }
        else if (operators.operation === "View Task") {
            await veiwList();
        }
        else if (operators.operation === "Exit") {
            console.log(chalk.yellowBright `\n \t\t\t    Thank You For Using Todo App`);
            condition = false;
        }
        else if (operators.operation === "Delete Task") {
            await deleteTask();
        }
        else if (operators.operation === "Update Task") {
            await updateTask();
        }
    }
};
let addTask = async () => {
    let firstTask = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "Enter your add Task?",
        },
    ]);
    todos.push(firstTask.add);
    console.log(chalk.yellowBright(`\n \t\t\t\t ${firstTask.add}`));
    console.log(`\t\t Your Task Has Been Successfully Added\n`);
};
let veiwList = async () => {
    console.log(chalk.cyan("\n \t\t ************** Todo List **************"));
    todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let deleteTask = async () => {
    let thirdTask = await inquirer.prompt([
        {
            name: "delete",
            type: "list",
            message: "Select a task to delete",
            choices: todos.map((item) => item),
        },
    ]);
    let newTodo = todos.filter((val) => val !== thirdTask.delete);
    todos = [...newTodo];
    console.log(chalk.red(`\n \t\t\t\t ${thirdTask.delete}`));
    console.log(`\t\t Your Task Has Been Deleted Successfully\n`);
    console.log(todos);
};
let updateTask = async () => {
    await veiwList();
    let fourthTask = await inquirer.prompt([
        {
            name: "update",
            type: "number",
            message: "Enter a index no what you want to update",
        },
        {
            name: "add",
            type: "input",
            message: "Enter your add Task?",
        },
    ]);
    todos[fourthTask.update - 1] = fourthTask.add;
    console.log(chalk.yellowBright(`\n \t\t Your Task ${fourthTask.update} updated successfully`));
    console.log(chalk.cyan(`\t [for view update item please check a : view list shukrya]\n`));
    todos;
};
main();
