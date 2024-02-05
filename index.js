const Prompt  = require('./lib/prompts');
const {Shape, Square, Circle, Triangle } = require('./lib/shapes');
const generate = require('./lib/generate');

// Uses the Prompt module to prepare and serve inquirer questions
Prompt.ask()
    .then(result => {
        let shape;
        // Lowercase the shape response then create a new shape
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
        // Set the attributes from the simple prompts
        shape.colour = result.shapeColour;
        shape.font = {colour: result.fontColour};
        shape.text = result.text;

        // Synthesise the SVG using Shape.render and push the output to the default location
        generate(Shape.render(shape));
    });