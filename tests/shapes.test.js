const { Shape, Square, Circle, Triangle } = require("../lib/shapes.js");

describe("Shapes", () => {
    describe("Shape", () => {
        const test = new Shape();
        it('has a colour property, and returns a default colour from empty declaration', () => {
            expect(test).toHaveProperty('shapeColour');
            expect(test.shapeColour).toEqual('#000000');
        });
        it('has a text property, and returns an empty string from empty declaration', () => {
            expect(test).toHaveProperty('text');
            expect(test.text).toBeFalsy();
        });
        it('has a font property, and returns a default font object from empty declaration', () => {
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
            test.text = "HELLO";
            expect(test.text).toBeFalsy();
            test.text = "HEY";
            expect(test.text).toEqual('HEY');
        });
        it('contains a draw() function that returns "Not implemented"', () => {
            expect(test.draw()).toEqual('Not implemented');
        });
        it('has a static render() method, which returns formatted SVG markup, and the formatted output of the passed Shape', () => {
            const testResult = Shape.render(new Shape(), 100, 300);
            expect(testResult).toEqual(
`<svg version="1.1" width="100" height="300" xmlns="http://www.w3.org/2000/svg">
Not implemented
</svg>`
            );
        });
    });
    describe("Square", () => {
        const test = new Square();
        it('inherits from Shape', () => {
            expect(test).toHaveProperty('shapeColour');
            expect(test).toHaveProperty('text');
            expect(test).toHaveProperty('font');
        });
        it('has a start property', () => {
            expect(test).toHaveProperty('start');
        });
        it('start property contains an x,y object with default co-ordinates', () => {
            expect(test.start).toMatchObject({x: 75, y: 25});
        });
        it('has a dimensions property', () => {
            expect(test).toHaveProperty('dimensions');
        });
        it('dimensions property contains an x,y object with default pixel sizes', () => {
            expect(test.dimensions).toMatchObject({x: 150, y: 150});
        });
        it('has a custom implementation of draw(), which returns a formatted XML string of both the square and text', () => {
            test.text = "SVG";
            expect(test.draw()).toEqual(
`<rect width="150" height="150" x="75" y="25" fill="#000000" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>`
            );
        });

    });
    describe("Circle", () => {
        const test = new Circle();
        it('inherits from Shape', () => {
            expect(test).toHaveProperty('shapeColour');
            expect(test).toHaveProperty('text');
            expect(test).toHaveProperty('font');
        });
        it('has a centre property', () => {
            expect(test).toHaveProperty('centre');
        });
        it('centre property contains an x,y object with default co-ordinates', () => {
            expect(test.centre).toMatchObject({x: 150, y: 100});
        });
        it('has a radius property', () => {
            expect(test).toHaveProperty('radius');
        });
        it('radius property contains a number with a default value', () => {
            expect(test.radius).toEqual(80);
        });
        it('has a custom implementation of draw(), which returns a formatted XML string of both the circle and text', () => {
            test.text = "SVG";
            expect(test.draw()).toEqual(
`<circle cx="150" cy="100" r="80" fill="#000000" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>`
            );
        });
    });
    describe("Triangle", () => {
        const test = new Triangle();
        it('inherits from Shape', () => {
            expect(test).toHaveProperty('shapeColour');
            expect(test).toHaveProperty('text');
            expect(test).toHaveProperty('font');
        });
        it('default instantiation overrides the default font size and position values', () => {
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
            expect(test).toHaveProperty('points');
        });
        it('points property contains three numbered properties with x,y co-ordinates as arrays', () => {
            expect(test.points).toMatchObject({
                1: [150, 25],
                2: [225, 175],
                3: [75, 175]
            })
        });
        it('has a custom implementation of draw(), which returns a formatted xml string of both the triangle and the text', () => {
            test.text = "SVG";
            expect(test.draw()).toEqual(
`<polygon points="150 25 225 175 75 175" fill="#000000" />
<text x="150" y="165" font-size="50" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>`
            )
        });
    });
})