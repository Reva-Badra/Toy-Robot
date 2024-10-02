const { MINSIZE, MAXSIZE } = require('./constants');

module.exports = class Board {

    constructor() {
        this.minSize = MINSIZE;
        this.maxSize = MAXSIZE;
    }

    /**
     * Function checks if the input is within the valid location on the board
     * @param {*} num 
     */
    isInvalidLocation(num) {
        return isNaN(parseInt(num,10)) || num < this.minSize || num > this.maxSize;
    }
}