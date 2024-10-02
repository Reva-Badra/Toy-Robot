const { TURNLEFT, TURNRIGHT, DIRECTIONS, MESSAGES } = require('./constants');

module.exports = class Robot {

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.dir = direction;
    }

    /**
     * Places the toy robot on the board based on the position given in the command
     * @param {*} board 
     * @param {*} command 
     */
    place(board, command) {
        try {
            let vals = command.split(' ');
            let inputValueString = vals[1];
            let inputValues = inputValueString.split(',');
            
            if(board.isInvalidLocation(inputValues[0])) {
                console.log(MESSAGES.invalidX); 
                return;
            }
    
            if(board.isInvalidLocation(inputValues[1])) {
                console.log(MESSAGES.invalidY); 
                return;
            }
            
            if(DIRECTIONS.indexOf(inputValues[2]) == -1) {
                console.log(MESSAGES.invalidDir);
                return;
            }

            this.x = parseInt(inputValues[0]);  //Assigns the x coordinate
            this.y = parseInt(inputValues[1]); //Assigns the y coordinate
            this.dir = inputValues[2]; //Assigns the direction
            
            console.log(MESSAGES.successPlacement);
            console.log(MESSAGES.action);
        } catch (ex) {
            //Catches input errors
            console.log(MESSAGES.invalidPlacement);
        }
    }

    /**
     * Function returns true if the input is undefined
     */
    isInvalid() {
        if(this.x == undefined 
            || this.y == undefined 
            || this.dir == undefined) {
            console.log(MESSAGES.invalidReport);
            return true;
        }
        return false;
    }

    /**
     * Function returns true is the move is invalid
     */
    isInvalidMove() {
        if((this.dir === 'NORTH' && this.y == 4) 
        || (this.dir === 'SOUTH' && this.y == 0) 
        || (this.dir === 'EAST' && this.x == 4) 
        || (this.dir === 'WEST' && this.x == 0)) {
            console.log(MESSAGES.invalidMove);
            return true;
        }
        return false;
    }
    
    /**
     * Checks the validity and Moves the toy robot one square in the direction set
     */
    move() {
        if(this.isInvalid() || this.isInvalidMove()) return;

        if (this.dir === 'NORTH') {
            this.y++;
        } else if (this.dir === 'SOUTH') {
            this.y--;
        } else if (this.dir === 'EAST') { 
            this.x++;
        } else if (this.dir === 'WEST') {
            this.x--;
        } 
        console.log(MESSAGES.successMove);
        return true;
    }
    
    /**
     * Checks the validity and turns the toy robot to the left
     */
    turnLeft() {
        if(this.isInvalid()) return;

        this.dir = TURNLEFT[this.dir];
        console.log(MESSAGES.successTurnLeft);
        return true;
    }
    
    /**
     * Checks the validity and turns the toy robot to the right
     */
    turnRight() {
        if(this.isInvalid()) return;

        this.dir = TURNRIGHT[this.dir];
        console.log(MESSAGES.successTurnRight);
        return true;
    }
    
    /**
     * Checks the validity and returns the current position of the toy robot
     */
    report() {
        if(this.isInvalid()) return;

        console.log(this.x + ',' + this.y + ',' + this.dir);
        return { x: this.x, y: this.y, dir: this.dir };
    }
}