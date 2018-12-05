var robot = require("robotjs");

robot.setMouseDelay(2);

var screenSize = robot.getScreenSize();
var height = screenSize.height / 2;
var width = screenSize.width;

for (var x = 20; x < width; x++) {
    y = height;
    robot.moveMouse(x, y);
}