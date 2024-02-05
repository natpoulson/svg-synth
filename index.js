const Prompt  = require('./lib/prompts');
const {Shape, Square, Circle, Triangle } = require('./lib/shapes');
const generate = require('./lib/generate');

Prompt.ask()
    .then(result => {
        let shape;
        switch(result.shape.toLowerCase()) {
            case 'square':
                shape = new Square();
                break;
            case 'circle':
                shape = new Circle();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
        }
        shape.shapeColour = result.shapeColour;
        shape.font = {colour: result.fontColour};
        shape.text = result.text;

        generate(Shape.render(shape), './dist/mytest.svg');
    });