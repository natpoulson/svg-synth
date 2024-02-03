const { Shape, Square, Circle, Triangle } = require("../lib/shapes.js");

describe("Shapes", () => {
    describe("Shape", () => {
        it('has a shapeColour property, and returns a default colour from empty declaration', () => {
            const test = new Shape();
            expect(test).toHaveProperty('shapeColour');
            expect(test.shapeColour).toBe('#000000');
        });
        it('has a textColour property, and returns a default colour from empty declaration', () => {
            const test = new Shape();
            expect(test).toHaveProperty('textColour');
            expect(test.textColour).toBe('#FFFFFF');
        });
        it('has a text property, and returns an empty string from empty declaration', () => {
            const test = new Shape();
            expect(test).toHaveProperty('text');
            expect(test.text).toBeFalsy();
        });
        it('has a font property, and returns a default font object from empty declaration', () => {
            const test = new Shape();
            expect(test).toHaveProperty('font');
            expect(test.font).toMatchObject({
                family: 'sans-serif',
                size: 60,
                anchor: 'middle',
                position: {
                    x: 150,
                    y: 125
                }
            });
        });
        it('has a font setter, which configures the values of the text size, position, and alignment', () => {

        });
        it(`has a text setter, which only updates if there's 3 letters or less`, () => {

        });
        it('contains a draw() function that returns "Not implemented"', () => {

        });
        it('has a static render() method for generating an SVG tag, which accepts a Shape instance, and optiona width and height arguments', () => {

        });
        it('render() returns a formatted string containing the SVG tag, and the formatted output of the passed Shape', () => {

        });
    });
    describe("Square", () => {
        it('inherits from Shape', () => {

        });
        it('has a start property', () => {

        });
        it('start property contains an x,y object with default co-ordinates', () => {

        });
        it('has a dimensions property', () => {

        });
        it('dimensions property contains an x,y object with default pixel sizes', () => {

        });
        it('has a custom implementation of draw(), which returns a formatted XML string of both the square and text', () => {

        });

    });
    describe("Circle", () => {
        it('inherits from Shape', () => {

        });
        it('has a centre property', () => {

        });
        it('centre property contains an x,y object with default co-ordinates', () => {

        });
        it('has a radius property', () => {

        });
        it('radius property contains a number with a default value', () => {

        });
        it('has a custom implementation of draw(), which returns a formatted XML string of both the circle and text', () => {

        });
    });
    describe("Triangle", () => {
        it('inherits from Shape', () => {

        });
        it('default instantiation overrides the default font size and position values', () => {

        });
        it('has a points property', () => {

        });
        it('points property contains three numbered properties with x,y co-ordinates as arrays', () => {

        });
        it('has a custom implementation of draw(), which returns a formatted cml string of both the triangle and the text', () => {

        });
    });
})