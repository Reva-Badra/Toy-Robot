const { MESSAGES } = require('./constants');
let Robot = require('./robot');
let Board = require('./board');

const readline = require('readline');
const prompts = readline.createInterface(process.stdin, process.stdout);

let done = false;

let board = new Board(); //initialized a new board
let robot = new Robot(undefined, undefined, undefined); //initializes a new toy robot

async function getCommand () {
    const command = await new Promise((resolve) =>{
        prompts.question('\n', (input) => {
            resolve(input);
      });
    })
    return command;
}

/**
 * The function performs the user command based on input provided
 * @param {*} command 
 */
const processCommand = (command) => {
    if (command.startsWith('PLACE')) {
        robot.place(board, command);
    } else if (command === 'MOVE') {
       robot.move();
    } else if (command === 'LEFT') {
       robot.turnLeft();
    } else if (command === 'RIGHT') {
       robot.turnRight();
    } else if (command === 'REPORT') {
        robot.report();
    } else if (command === 'EXIT') {
        done = true;
        console.log(MESSAGES.exit);
    }
    else {
        console.log(MESSAGES.invalidAction);
    }   
    return true;
}

/**
 * The function playToyRobot starts the command flow
 */
const playToyRobot = async () => {

    console.log(MESSAGES.start);

    while (!done) {
        const command = await getCommand();
        processCommand(command);
    }
    prompts.close();
}

playToyRobot();