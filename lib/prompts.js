const inquirer = require('inquirer');
inquirer.registerPrompt('search-list', require('inquirer-search-list'));

class Prompt {
    // Colour names from https://htmlcolorcodes.com/color-names/
    static colour = {
        red: [
            "Indian Red",
            "Light Coral",
            "Salmon",
            "Dark Salmon",
            "Light Salmon",
            "Crimson",
            "Red",
            "Fire Brick",
            "Dark Red",
        ],
        pink: [
            "Pink",
            "Light Pink",
            "Hot Pink",
            "Deep Pink",
            "Medium Violet Red",
            "Pale Violet Red",
        ],
        orange: [
            "Light Salmon",
            "Coral",
            "Tomato",
            "Orange Red",
            "Dark Orange",
            "Orange",
        ],
        yellow: [
            "Gold",
            "Yellow",
            "Light Yellow",
            "Lemon Chiffon",
            "Light Goldenrod Yellow",
            "Papaya Whip",
            "Moccasin",
            "Peach Puff",
            "Pale Goldenrod",
            "Khaki",
            "Dark Khaki",
        ],
        purple: [
            "Lavender",
            "Thistle",
            "Plum",
            "Violet",
            "Orchid",
            "Fuschia",
            "Magenta",
            "Medium Orchid",
            "Medium Purple",
            "Rebecca Purple",
            "Blue Violet",
            "Dark Violet",
            "Dark Orchid",
            "Dark Magenta",
            "Purple",
            "Indigo",
            "Slate Blue",
            "Dark Slate Blue",
            "Medium Slate Blue",
        ],
        green: [
            "Green Yellow",
            "Chartreuse",
            "Lawn Green",
            "Lime",
            "Lime Green",
            "Pale Green",
            "Light Green",
            "Medium Spring Green",
            "Spring Green",
            "Medium Sea Green",
            "Sea Green",
            "Forest Green",
            "Green",
            "Dark Green",
            "Yellow Green",
            "Olive Drab",
            "Olive",
            "Dark Olive Green",
            "Medium Aquamarine",
            "Dark Sea Green",
            "Light Sea Green",
            "Dark Cyan",
            "Teal",
        ],
        blue: [
            "Aqua",
            "Cyan",
            "Light Cyan",
            "Pale Turquoise",
            "Aquamarine",
            "Turqoise",
            "Medium Turquoise",
            "Dark Turquoise",
            "Cadet Blue",
            "Steel Blue",
            "Light Steel Blue",
            "Powder Blue",
            "Light Blue",
            "Sky Blue",
            "Light Sky Blue",
            "Deep Sky Blue",
            "Dodger Blue",
            "Cornflower Blue",
            "Medium Slate Blue",
            "Royal Blue",
            "Blue",
            "Medium Blue",
            "Dark Blue",
            "Navy",
            "Midnight Blue",
        ],
        brown: [
            "Cornsilk",
            "Blanched Almond",
            "Bisquq",
            "Navajo White",
            "Wheat",
            "Burly Wood",
            "Tan",
            "Rosy Brown",
            "Sandy Brown",
            "Goldenrod",
            "Dark Goldenrod",
            "Peru",
            "Chocolate",
            "Saddle Brown",
            "Sienna",
            "Brown",
            "Maroon",
        ],
        white: [
            "White",
            "Snow",
            "Honey Dew",
            "Mint Cream",
            "Azure",
            "Alice Blue",
            "Ghost White",
            "White Smoke",
            "Sea Shell",
            "Beige",
            "Old Lace",
            "Floral White",
            "Ivory",
            "Antique White",
            "Linen",
            "Lavender Blush",
            "Misty Rose",
        ],
        gray: [
            "Gainsboro",
            "Light Grey",
            "Silver",
            "Dark Grey",
            "Gray",
            "Dim Gray",
            "Light Slate Gray",
            "Slate Gray",
            "Dark Slate Gray",
            "Black",
        ]
    }

    static createSelector() {
        const palette = [];
            for (const colour of Object.keys(Prompt.colour)) {
                // Generate the pallette to use for the selector menu dynamically
                Prompt.colour[colour].forEach(a => {
                    palette.push({name: a, value: Prompt.formatColour(a)});
                });
            }
            return palette;
    }

    static formatColour(colourString) {
        return colourString.replace(/ /g, '').toLowerCase();
    }

    static questions = {
        simple: [
            {
                name: "shape",
                message: "Choose the type of shape you want to make",
                type: "list",
                choices: [
                    "Square",
                    "Circle",
                    "Triangle"
                ]
            },
            {
                name: "shapeColour",
                message: "Select the colour you want to use for your shape\n (Type to filter results down for easier selection):",
                type: 'search-list',
                choices: Prompt.createSelector()
            },
            {
                name: "fontColour",
                message: "Select the colour you want to use for your text\n (Type to filter results down for easier selection):",
                type: 'search-list',
                choices: Prompt.createSelector()
            },
            {
                name: "text",
                message: "Specify up to 3 characters to add to your shape",
                type: 'input',
                validate: (input) => /^.{0,3}$/.test(input)
            }
        ]
        // Placeholder for advanced question set for future implementation
    }

    static async ask() {
        return inquirer.prompt(Prompt.questions.simple);
    }
}

module.exports = Prompt;