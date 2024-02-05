class Shape {
    // Note the use of structuredClone(), this is the only way to deep copy the objects in the static properties while keeping it part of Shape, since otherwise it assigns a direct reference
    // In early tests this resulted in changes made to the font from earlier tests carrying over, and breaking subsequent tests
    constructor(shapeColour = Shape.default.colour, font = structuredClone(Shape.default.font)) {
        this._text = '';
        this.colour = shapeColour;
        this._font = font;
    }

    get text() {
        return this._text;
    }

    // Only updates the internal text value if the length is appropriate
    set text(newText) {
        if (typeof newText === "string" && newText.length <= 3) {
            this._text = newText;
        }
    }

    get font() {
        return this._font;
    }

    // Iterates through the properties in the object passed, and if it finds a key match, updates the associated property
    // This allows for partial objects to be passed through, eliminating the need for declaring an entire font object
    set font(settings) {
        if (typeof settings !== 'object') {
            return;
        }
        const settingKeys = Object.keys(settings);
        for (const property of settingKeys) {
            switch(property) {
                case 'family':
                    this._font.family = settings[property];
                    break;
                case 'size':
                    this._font.size = settings[property];
                    break;
                case 'colour':
                    this._font.colour = settings[property];
                    break;
                case 'anchor':
                    this._font.anchor = settings[property];
                    break;
                case 'position':
                    this._font.position.x = settings[property].x;
                    this._font.position.y = settings[property].y;
                    break;
            }
        }
    }

    // Expected to be overwritten, this is the JS equivalent of an interface
    draw() {
        return "Not implemented";
    }

    // Defaults object, for initialising all shape values.
    static default = {
        canvas: {
            width: 300,
            height: 200
        },
        colour: "#000000",
        font: {
            family: 'sans-serif',
            size: 60,
            colour: '#FFFFFF',
            anchor: 'middle',
            position: {
                x: 150,
                y: 125
            }
        },
        square: {
            start: {
                x: 75,
                y: 25
            },
            dimensions: {
                x: 150,
                y: 150
            }
        },
        circle: {
            centre: {
                x: 150,
                y: 100
            },
            radius: 80
        },
        triangle: {
            points: {
                1: [150, 25],
                2: [225, 175],
                3: [75, 175]
            },
            font: {
                size: 50,
                position: {
                    x: 150,
                    y: 165
                }
            }
        }
    }

    static render(shape, width = 300, height = 200) {

        // internal type helper for sanitising passed values to width and height
        const typeCheck = (item) => {
            switch(typeof item) {
                case 'string':
                    return Number.parseInt(item);
                case 'number':
                    return item;
                default:
                    return undefined;
            }
        }

        // Set the value of width and height with sanitised values, or use defaults if failed
        const checkedWidth = typeCheck(width) !== undefined 
            ? width 
            : Shape.default.canvas.width;
        const checkedHeight = typeCheck(height) !== undefined 
            ? height 
            : Shape.default.canvas.height;

        // Return synthesised string for the SVG including the passed shape's markup
        return `<svg version="1.1" width="${checkedWidth}" height="${checkedHeight}" xmlns="http://www.w3.org/2000/svg">\n${shape.draw()}\n</svg>`;
    }
}

class Square extends Shape {
    constructor(start = structuredClone(Shape.default.square.start), 
                dimensions = structuredClone(Shape.default.square.dimensions), 
                shapeColour = Shape.default.colour,
                font = structuredClone(Shape.default.font)) {
        super(shapeColour, font);
        this._start = start;
        this._dimensions = dimensions;
    }

    get start() {
        return this._start;
    }

    get dimensions() {
        return this._dimensions;
    }

    draw() {
        return `<rect width="${this.dimensions.x}" height="${this.dimensions.y}" x="${this.start.x}" y="${this.start.y}" fill="${this.colour}" />\n<text x="${this.font.position.x}" y="${this.font.position.y}" font-size="${this.font.size}" text-anchor="${this.font.anchor}" fill="${this.font.colour}" font-family="${this.font.family}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(centre = structuredClone(Shape.default.circle.centre),
                radius = structuredClone(Shape.default.circle.radius),
                shapeColour = Shape.default.colour,
                font = structuredClone(Shape.default.font)) {
        super(shapeColour, font);
        this._centre = centre;
        this.radius = radius;
    }

    get centre() {
        return this._centre;
    }

    draw() {
        return `<circle cx="${this.centre.x}" cy="${this.centre.y}" r="${this.radius}" fill="${this.colour}" />\n<text x="${this.font.position.x}" y="${this.font.position.y}" font-size="${this.font.size}" text-anchor="${this.font.anchor}" fill="${this.font.colour}" font-family="${this.font.family}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(points = structuredClone(Shape.default.triangle.points),
                shapeColour = Shape.default.colour,
                font = structuredClone(Shape.default.triangle.font)) {
        super(shapeColour, font);
        this._points = points;
        this.font = font; // Triangle has different font attributes to make sure it fits
    }

    get points() {
        return this._points;
    }

    // Extract a points object, then parse, iteration count forced to 3
    set points(points = Shape.default.triangle.points){
        const pointSet = Object.keys(points);
        for (let i = 1; i <= 3; i++) {
            this._points[pointSet[i]] = points[pointSet[i]];
        }
    }

    draw() {
        return `<polygon points="${this.points[1].join(' ')} ${this.points[2].join(' ')} ${this.points[3].join(' ')}" fill="${this.colour}" />\n<text x="${this.font.position.x}" y="${this.font.position.y}" font-size="${this.font.size}" text-anchor="${this.font.anchor}" fill="${this.font.colour}" font-family="${this.font.family}">${this.text}</text>`
    }
}

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle
}