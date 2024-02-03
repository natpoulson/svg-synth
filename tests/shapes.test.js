const { Shape, Square, Circle, Triangle } = require("../lib/shapes.js");

describe("Shapes", () => {
    describe("Shape", () => {
        it('has a shapeColour property, and returns a default colour from empty declaration', () => {
            const test = new Shape();
            expect(test).toHaveProperty('shapeColour');
            expect(test.shapeColour).toBe('#000000');
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
                colour: '#FFFFFF',
                anchor: 'middle',
                position: {
                    x: 150,
                    y: 125
                }
            });
        });
        it('has a font setter, which configures the values of the text size, position, and alignment', () => {
            const test = new Shape();
            test.font = {family: 'Courier New', size: 50};
            expect(test.font).toMatchObject({
                family: 'Courier New',
                size: 50,
                colour: '#FFFFFF',
                anchor: 'middle',
                position: {
                    x: 150,
                    y: 125
                }
            });
        });
        it(`has a text setter, which only updates if there's 3 letters or less`, () => {
            const test = new Shape();
            test.text = "HELLO";
            expect(test.text).toBeFalsy();
            test.text = "HEY";
            expect(test.text).toBe('HEY');
        });
        it('contains a draw() function that returns "Not implemented"', () => {
            const test = new Shape();
            expect(test.draw()).toBe('Not implemented');
        });
        it('has a static render() method, which returns formatted SVG markup, and the formatted output of the passed Shape', () => {
            const testResult = Shape.render(new Shape(), 100, 300);
            expect(testResult).toBe(
`<svg version="1.1" width="100" height="300" xmlns="http://www.w3.org/2000/svg">
Not Implented
</svg>`
            );
        });
    });
    describe("Square", () => {
        it('inherits from Shape', () => {
            const test = new Square();
            expect(test).toHaveProperty('shapeColour');
            expect(test).toHaveProperty('textColour');
            expect(test).toHaveProperty('text');
            expect(test).toHaveProperty('font');
        });
        it('has a start property', () => {
            const test = new Square();
            expect(test).toHaveProperty('start');
        });
        it('start property contains an x,y object with default co-ordinates', () => {
            const test = new Square();
            expect(test.start).toMatchObject({x: 75, y: 25});
        });
        it('has a dimensions property', () => {
            const test = new Square();
            expect(test).toHaveProperty('dimensions');
        });
        it('dimensions property contains an x,y object with default pixel sizes', () => {
            const test = new Square();
            expect(test.dimensions).toMatchObject({x: 150, y: 150});
        });
        it('has a custom implementation of draw(), which returns a formatted XML string of both the square and text', () => {
            const test = new Square();
            test.text = "SVG";
            expect(test.draw()).toBe(
`<rect width="150" height="150" x="75" y="25" fill="#000000" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>`
            );
        });

    });
    describe("Circle", () => {
        it('inherits from Shape', () => {
            const test = new Circle();
            expect(test).toHaveProperty('shapeColour');
            expect(test).toHaveProperty('textColour');
            expect(test).toHaveProperty('text');
            expect(test).toHaveProperty('font');
        });
        it('has a centre property', () => {
            const test = new Circle();
            expect(test).toHaveProperty('centre');
        });
        it('centre property contains an x,y object with default co-ordinates', () => {
            const test = new Circle();
            expect(test.centre).toMatchObject({x: 150, y: 100});
        });
        it('has a radius property', () => {
            const test = new Circle();
            expect(test).toHaveProperty('radius');
        });
        it('radius property contains a number with a default value', () => {
            const test = new Circle();
            expect(test.radius).toBe(80);
        });
        it('has a custom implementation of draw(), which returns a formatted XML string of both the circle and text', () => {
            const test = new Circle();
            test.text = "SVG";
            expect(test.draw()).toBe(
`<circle cx="150" cy="100" r="80" fill="#000000" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>`
            );
        });
    });
    describe("Triangle", () => {
        it('inherits from Shape', () => {
            const test = new Triangle();
            expect(test).toHaveProperty('shapeColour');
            expect(test).toHaveProperty('textColour');
            expect(test).toHaveProperty('text');
            expect(test).toHaveProperty('font');
        });
        it('default instantiation overrides the default font size and position values', () => {
            const test = new Triangle();
            expect(test.font).toMatchObject({
                family: 'sans-serif',
                size: 50,
                colour: '#FFFFFF',
                anchor: 'middle',
                position: {
                    x: 150,
                    y: 165
                }
            });
        });
        it('has a points property', () => {
            const test = new Triangle();
            expect(test).toHaveProperty('points');
        });
        it('points property contains three numbered properties with x,y co-ordinates as arrays', () => {
            const test = new Triangle();
            expect(test.points).toMatchObject({
                1: [150, 25],
                2: [225, 175],
                3: [75, 175]
            })
        });
        it('has a custom implementation of draw(), which returns a formatted cml string of both the triangle and the text', () => {
            const test = new Triangle();
            test.text = "SVG";
            expect(test.draw()).toBe(
`<polygon points="150 25 225 175 75 175" fill="#0000FF" />
<text x="150" y="165" font-size="50" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>`
            )
        });
    });
})