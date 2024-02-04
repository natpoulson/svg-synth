const fs = require('fs');
const path = require('path');

const DEFAULT_PATH = path.join(__dirname, 'dist/output.svg')

function generateSVG(xmlString, outFile = DEFAULT_PATH) {
    // Match the file path in regex and select the capture group from the start to last instance of forward or backslash
    const testPath = (/(^.+(?:\/|\\)).+(\.svg)?$/).exec(outFile);
    let output = outFile;
    if (!fs.existsSync(testPath[1])) {
        // Override the output path with the default if the test reports the path is invalid
        output = DEFAULT_PATH;
    }
    if (testPath.length < 3) {
        // Add file extension if it wasn't found in the matches (the size will be 2 instead of 3 if this is the case)
        output += ".svg";
    }

    try {
        fs.writeFileSync(output, xmlString, {encoding: 'utf-8'});
    } catch(err) {
        throw new Error(err);
    }
    console.log(`Written to ${output} successfully.`);
}

module.exports = generateSVG;