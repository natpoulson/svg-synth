const {Square} = require('../lib/shapes.js');
const generateSVG = require('../lib/generate.js');
const fs = require('fs');
const path = require('path');

describe('SVG File Generation', () => {
    it('a file called "testOutput.svg" should be created when generateSVG() is called', () => {
        const mockSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="150" height="150" x="75" y="25" fill="#0000FF" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>
</svg>`;
        const testPath = path.join(__dirname, 'dist/testOutput.svg');
        generateSVG(mockSVG, testPath);
        expect(fs.existsSync(testPath)).toEqual(true);
    });
    it('the contents of "testOutput.svg" should match the output of Shape.render()', () => {
        const testShape = new Square();
        testShape.text = "SVG";
        const render = Shape.render(testShape);

        const testPath = path.join(__dirname, 'dist/testOutput.svg');
        generateSVG(render, testPath);

        const testFile = fs.readFileSync(testPath, {encoding: 'utf-8'});
        expect(testFile).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="150" height="150" x="75" y="25" fill="#000000" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">SVG</text>
</svg>`
        );
    });
});