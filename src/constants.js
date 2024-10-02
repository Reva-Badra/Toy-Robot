const messages = {
    start: 'PLACE the toy robot on the 5 x 5 table',
    action: 'Choose LEFT/RIGHT/MOVE/REPORT/EXIT',
    invalidPlacement: 'Invalid placement',
    invalidAction: 'Invalid action',
    invalidX: 'Invalid x position',
    invalidY: 'Invalid y position',
    invalidDir: 'Invalid direction',
    invalidMove: 'Invalid move',
    invalidReport: 'Please place the toy robot in a valid position first',
    successPlacement: 'Toy robot placed!',
    successMove: 'Toy robot moved!',
    successTurnRight: 'Toy robot turned right!',
    successTurnLeft: 'Toy robot turned left!',
    exit: 'Game over!!!'
}

const turnLeft = { 'NORTH':'WEST', 'SOUTH':'EAST', 'EAST':'NORTH', 'WEST':'SOUTH' };

const turnRight = { 'NORTH':'EAST', 'SOUTH':'WEST', 'EAST':'SOUTH', 'WEST':'NORTH' };

const directions = [ 'NORTH', 'SOUTH', 'EAST', 'WEST'];

exports.MESSAGES = messages;

exports.TURNLEFT = turnLeft;
exports.TURNRIGHT = turnRight;
exports.DIRECTIONS =  directions;

exports.MINSIZE = 0;
exports.MAXSIZE = 4;