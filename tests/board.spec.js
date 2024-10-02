const Board = require('../src/board');

describe("Board", () => {
    
    test("Can instantiate a new board", () => {
        expect(new Board()).not.toBeNull();
    });
});

describe("Position outside the board", () => {
    
    test("returns false for allowed values (0 to 4)", () => {
        const board = new Board();
        expect(board.isInvalidLocation(2)).toBeFalsy();
    });
    
    test("returns true for non-allowed values", () => {
        const board = new Board();
        expect(board.isInvalidLocation(5)).toBeTruthy();
        expect(board.isInvalidLocation(-1)).toBeTruthy();
    });
});
