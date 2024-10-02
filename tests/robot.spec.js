const Board = require('../src/board');
let Robot = require('../src/robot');

describe("Start Up", () => {
    test("A new toy robot should be initialised", () => {
        expect(new Robot()).not.toBeNull();
    });
});

describe("Place", () => {
    let robot;
    let board;

    beforeEach(() => {
        robot = new Robot();
        board = new Board();
    })

    test("Can place the toy robot on the board", () => {
        robot.place(board, "PLACE 0,0,NORTH");
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "NORTH" });
    });
});

describe("Move", () => {
    let robot;
    let board;

    beforeEach(() => {
        robot = new Robot();
        board = new Board();
    })

    test("Cannot move robot that isn't placed on the board", () => {
        expect(robot.move()).toBeFalsy();
    });

    test("Can move a robot that is on the board facing NORTH", () => {
        const location = {
            x: 0,
            y: 2,
            dir: "NORTH"
        };
        robot.place(board, "PLACE 0,1,NORTH");
        expect(robot.move()).toBeTruthy();
        expect(robot.report()).toEqual(location);
    });

    test("Can move a robot that is on the board facing EAST", () => {
        const location = {
            x: 1,
            y: 0,
            dir: "EAST"
        };
        robot.place(board, "PLACE 0,0,EAST");
        expect(robot.move()).toBeTruthy();
        expect(robot.report()).toEqual(location);
    });

    test("Can move a robot that is on the board facing SOUTH", () => {
        const location = {
            x: 1,
            y: 0,
            dir: "SOUTH"
        };
        robot.place(board, "PLACE 1,1,SOUTH");
        expect(robot.move()).toBeTruthy();
        expect(robot.report()).toEqual(location);
    });

    test("Can move a robot that is on the board facing WEST", () => {
        const location = {
            x: 0,
            y: 1,
            dir: "WEST"
        };
        robot.place(board, "PLACE 1,1,WEST");
        expect(robot.move()).toBeTruthy();
        expect(robot.report()).toEqual(location);
    });
});


describe("TurnLeft", () => {
    let robot;
    let board;

    beforeEach(() => {
        board = new Board();
        robot = new Robot();
    })

    test("Cannot turn left before the robot is placed", () => {
        expect(robot.turnLeft()).toBeFalsy();
    });

    test("Turning left changes from NORTH to WEST", () => {
        robot.place(board, "PLACE 0,0,NORTH");
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "WEST" });
    });

    test("Turning left changes from EAST to NORTH", () => {
        robot.place(board, "PLACE 0,0,EAST");
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "NORTH" });
    });

    test("Turning left changes from SOUTH to EAST", () => {
        robot.place(board, "PLACE 0,0,SOUTH");
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "EAST" });
    });

    test("Turning left changes from WEST to SOUTH", () => {
        robot.place(board, "PLACE 0,0,WEST");
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "SOUTH" });
    });

    test("Turning left * 4 times", () => {
        robot.place(board, "PLACE 3,3,NORTH");
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3, dir: "WEST" });
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3,  dir: "SOUTH" });
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3, dir: "EAST" });
        expect(robot.turnLeft()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3, dir: "NORTH" });
    });
});

describe("TurnRight", () => {
    let robot;
    let board;

    beforeEach(() => {
        robot = new Robot();
        board = new Board();
    })

    test("Cannot change direction of a bot that isn't placed", () => {
        expect(robot.turnRight()).toBeFalsy();
    });

    test("Turning right changes from NORTH to EAST", () => {
        robot.place(board, "PLACE 0,0,NORTH");
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "EAST" });
    });

    test("Turning right changes from EAST to SOUTH", () => {
        robot.place(board, "PLACE 0,0,EAST");
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "SOUTH" });
    });

    test("Turning right changes from SOUTH to WEST", () => {
        robot.place(board, "PLACE 0,0,SOUTH");
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "WEST" });
    });

    test("Turning right changes from WEST to NORTH", () => {
        robot.place(board, "PLACE 0,0,WEST");
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 0, y: 0, dir: "NORTH" });
    });

    test("Turning right * 4 times", () => {
        robot.place(board, "PLACE 3,3,NORTH");
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3, dir: "EAST" });
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3,  dir: "SOUTH" });
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3, dir: "WEST" });
        expect(robot.turnRight()).toBeTruthy();
        expect(robot.report()).toEqual({ x: 3, y: 3, dir: "NORTH" });
    });

});

describe("Report location of toy robot", () => {
    let robot;
    let board;

    beforeEach(() => {
        robot = new Robot();
        board = new Board();
    })

    test("Cannot report location of a robot before it is placed", () => {
        expect(robot.report()).toBeFalsy();
    });

    test("Can report location of a bot that is on the board", () => {
        const location = {
            x: 0,
            y: 0,
            dir: "NORTH"
        };
        robot.place(board, "PLACE 0,0,NORTH");
        expect(robot.report()).toEqual(location);
    });
});

describe("Incorrect position", () => {

    let robot;
    let board;

    beforeEach(() => {
        robot = new Robot();
        board = new Board();
    })

    test("Can handle incorrect input", () => {
        robot.place(board, "PLACE 5,-3,0");
        expect(robot.isInvalid()).toBeTruthy;
    });

    test("Can handle correct input", () => {
        robot.place(board, "PLACE 0,0,NORTH");
        expect(robot.isInvalid()).toBeFalsy;
    });

    test("Can handle incorrect move facing NORTH", () => {
        robot.place(board, "PLACE 4,2,NORTH");
        expect(robot.isInvalidMove()).toBeTruthy;
    });

    
    test("Can handle incorrect move facing EAST", () => {
        robot.place(board, "PLACE 2,4,EAST");
        expect(robot.isInvalidMove()).toBeTruthy;
    });

    
    test("Can handle incorrect move facing SOUTH", () => {
        robot.place(board, "PLACE 0,2,SOUTH");
        expect(robot.isInvalidMove()).toBeTruthy;
    });
    
    test("Can handle incorrect move facing WEST", () => {
        robot.place(board, "PLACE 2,0,WEST");
        expect(robot.isInvalidMove()).toBeTruthy;
    });

});
