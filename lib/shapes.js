const inquirer = require("inquirer");

class Shape {

    draw() {
        return "Not implemented";
    }

    static default = {
        canvas: {
            width: 300,
            height: 200
        },
        shapeColour: "#000000",
        font: {
            family: 'sans-serif',
            size: 60,
            colour: '#FFFFFF',
            anchor: 'middle',
            position: {
                x: 150,
                y: 125
            }
        }
    }
}

class Square extends Shape {

}

class Circle extends Shape {

}

class Triangle extends Shape {

}

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle
}