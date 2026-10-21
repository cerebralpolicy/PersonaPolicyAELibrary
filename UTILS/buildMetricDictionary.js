const JSDOM = require('jsdom').JSDOM;
const { document } = (new JSDOM(`<!DOCTYPE html><html><body></body></html>`)).window;
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?;:'\"()[]{} ".split(""); // Split the string into an array of individual characters

var thisFileFolder = "C:\\Users\\coley\\OneDrive\\_FanFics\\ElaborateHamuBan\\Models\\NSFW_Animations\\Banhamu_1_AfterSchool\\AE_Scripts\\Helper Scripts";

// Create an empty html doc

class FontDefine {
    constructor(name, style) {
        this.name = name;
        this.style = style;
    }
    get key() {
        return `<${this.name}-${this.style}>`;
    }
}

function getBoundingInfo(text, font) {
    var canvas = getBoundingInfo.canvas || (getBoundingInfo.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return {
        width: metrics.width,
        ascent: metrics.actualBoundingBoxAscent,
        descent: metrics.actualBoundingBoxDescent,
        height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
    };
}

function getTextWidthSlope(char, fontName, fontWeight){
    // The width of a given character should be a linear function of the font size
    const sizes = [8, 10, 12, 14, 16, 18, 20];
    // First assert that we have a constant relationship between font size and width
    const widths = sizes.map(size => getBoundingInfo(char, getFont(fontName, size, fontWeight)).width);
    const slopes = [];
    for (let i = 1; i < widths.length; i++) {
        slopes.push((widths[i] - widths[i - 1]) / (sizes[i] - sizes[i - 1]));
    }
    // Get the slope that occurs the most frequently
    const slopeCounts = {};
    slopes.forEach(slope => {
        slopeCounts[slope] = (slopeCounts[slope] || 0) + 1;
    });
    let mostFrequentSlope = slopes[0];
    let maxCount = 0;
    for (const slope in slopeCounts) {
        if (slopeCounts[slope] > maxCount) {
            maxCount = slopeCounts[slope];
            mostFrequentSlope = parseFloat(slope);
        }
    }
    return mostFrequentSlope;
}

function getAscentSlope(char, fontName, fontWeight) {
    const sizes = [8, 10, 12, 14, 16, 18, 20];
    const ascents = sizes.map(size => getBoundingInfo(char, getFont(fontName, size, fontWeight)).ascent);
    const slopes = [];
    for (let i = 1; i < ascents.length; i++) {
        slopes.push((ascents[i] - ascents[i - 1]) / (sizes[i] - sizes[i - 1]));
    }
    const slopeCounts = {};
    slopes.forEach(slope => {
        slopeCounts[slope] = (slopeCounts[slope] || 0) + 1;
    });
    let mostFrequentSlope = slopes[0];
    let maxCount = 0;
    for (const slope in slopeCounts) {
        if (slopeCounts[slope] > maxCount) {
            maxCount = slopeCounts[slope];
            mostFrequentSlope = parseFloat(slope);
        }
    }
    return mostFrequentSlope;
}
function getDescentSlope(char, fontName, fontWeight) {
    const sizes = [8, 10, 12, 14, 16, 18, 20];
    const descents = sizes.map(size => getBoundingInfo(char, getFont(fontName, size, fontWeight)).descent);
    const slopes = [];
    for (let i = 1; i < descents.length; i++) {
        slopes.push((descents[i] - descents[i - 1]) / (sizes[i] - sizes[i - 1]));
    }
    const slopeCounts = {};
    slopes.forEach(slope => {
        slopeCounts[slope] = (slopeCounts[slope] || 0) + 1;
    });
    let mostFrequentSlope = slopes[0];
    let maxCount = 0;
    for (const slope in slopeCounts) {
        if (slopeCounts[slope] > maxCount) {
            maxCount = slopeCounts[slope];
            mostFrequentSlope = parseFloat(slope);
        }
    }
    return mostFrequentSlope;
}

function getTextSlopes(char, fontName, fontWeight) {
    return {
        widthSlope: getTextWidthSlope(char, fontName, fontWeight),
        ascentSlope: getAscentSlope(char, fontName, fontWeight),
        descentSlope: getDescentSlope(char, fontName, fontWeight)
    };
}


function getFont(fontName, fontSize, fontWeight) {
    return `${fontWeight} ${fontSize}px ${fontName}`;
}

var fontDictionary = {};

function serializeFontDictionary() {
    return JSON.stringify(fontDictionary, null, 4);
}

function buildSlopeDictionary(fontName, fontWeight) {
    var fontKey = new FontDefine(fontName, fontWeight).key;
    var dictionary = {};
    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        dictionary[char] = getTextSlopes(char, fontName, fontWeight);
    }
    fontDictionary[fontKey] = dictionary;
}

function indentor(indentLevel) {
    return "    ".repeat(indentLevel);
}

function innerCodeBuilder(lines, indentLevel) {
    // First apply the indentation to each line
    return lines.map(line => indentor(indentLevel) + line).join("\n");
}

class MethodDefinition {
    constructor(name, args = [], innerCodeLines = [], isStatic = false, isPrivate = false) {
        this.name = name;
        this.args = args;
        this.innerCodeLines = innerCodeLines;
        this.isStatic = isStatic;
        this.isPrivate = isPrivate;
    }
    toString(indentLevel = 0) {
        return methodBuilder(this.name, this.args, this.innerCodeLines, indentLevel, this.isStatic, this.isPrivate);
    }
}
function methodBuilder(functionName, args, innerCodeLines, indentLevel = 0, isStatic = false, isPrivate = false) {
    let methodString = `${indentor(indentLevel)}`;
    if (isStatic) {
        methodString += "static ";
    }
    if (isPrivate) {
        methodString += "#";
    }
    var declaration = `${functionName}(${args.join(", ")}) {\n`;
    methodString += declaration;
    var innerCode = innerCodeBuilder(innerCodeLines, indentLevel + 1);
    methodString += innerCode + "\n";
    var closingBrace = `${indentor(indentLevel)}}`;
    methodString += closingBrace;
    return methodString;
}
class PropertyDefinition {
    constructor(name, value, isStatic = false, isPrivate = false) {
        this.name = name;
        this.value = value;
        this.isStatic = isStatic;
        this.isPrivate = isPrivate;
    }
    toString(indentLevel = 0) {
        return propertyBuilder(this.name, this.value, indentLevel, this.isStatic, this.isPrivate);
    }
}
function propertyBuilder(propertyName, value, indentLevel = 0, isStatic = false, isPrivate = false) {
    let propertyString = `${indentor(indentLevel)}`;
    if (isStatic) {
        propertyString += "static ";
    }
    if (isPrivate) {
        propertyString += "#";
    }
    propertyString += `${propertyName} = ${value};`;
    return propertyString;
}

/**
 * Assembles a class string from the given class name, properties, and methods.
 * @param {string} className - The name of the class.
 * @param {PropertyDefinition[]} properties - Array of property definitions.
 * @param {MethodDefinition[]} methods - Array of method definitions.
 * @param {number} indentLevel - The indentation level for the class.
 * @returns {string} - The assembled class string.
 */
function assembleClass(className, properties = [], methods = [], indentLevel = 0) {
    let classString = `${indentor(indentLevel)}class ${className} {\n`;
    properties.forEach(prop => {
        classString += prop.toString(indentLevel + 1) + "\n";
    });
    methods.forEach(method => {
        classString += method.toString(indentLevel + 1) + "\n";
    });
    classString += `${indentor(indentLevel)}}`;
    return classString;
}

function buildFontTextCalcsClass(indentLevel = 0) {
    buildSlopeDictionary("Amrys","Bold");
    const properties = [
        new PropertyDefinition("FONT_DICTIONARY", JSON.stringify(fontDictionary, null, 4), true, true)
    ];
    const getMaxLineWidthMethod = new MethodDefinition("getMaxLineWidth", ["fontDefine","fontSize","spacing","lines"], [
        "const fontKey = fontDefine.key;",
        "const fontMetrics = this.#FONT_DICTIONARY[fontKey];",
        "if (!fontMetrics) {",
        "    throw new Error(`Font definition not found: ${fontDefine}`);",
        "}",
        "let maxLineWidth = 0;",
        "for (const text of lines) {",
        "    let lineWidth = 0;",
        "    for (let i = 0; i < text.length; i++) {",
        "        const char = text[i];",
        "        const charMetrics = fontMetrics[char];",
        "        if (!charMetrics) {",
        "            throw new Error(`Character not found in font metrics: ${char}`);",
        "        }",
        "        const charWidthSlope = charMetrics.widthSlope;",
        "        if (charWidthSlope === undefined) {",
        "            throw new Error(`Character not found in font metrics: ${char}`);",
        "        }",
        "        lineWidth += charWidthSlope * fontSize;",
        "        if (i < text.length - 1) {",
        "            lineWidth += spacing;",
        "        }",
        "    }",
        "    if (lineWidth > maxLineWidth) {",
        "        maxLineWidth = lineWidth;",
        "    }",
        "}",
        "return maxLineWidth;",
    ], true, false);
    const getMaxFirstLineAscentMethod = new MethodDefinition("getMaxFirstLineAscent", ["fontDefine","fontSize","lines"], [
        "const fontKey = fontDefine.key;",
        "const fontMetrics = this.#FONT_DICTIONARY[fontKey];",
        "if (!fontMetrics) {",
        "    throw new Error(`Font definition not found: ${fontDefine}`);",
        "}",
        "if (lines.length === 0) {",
        "    return 0;",
        "}",
        "const firstLine = lines[0];",
        "let maxAscent = 0;",
        "for (const char of firstLine) {",
        "    const charMetrics = fontMetrics[char];",
        "    if (!charMetrics) {",
        "        throw new Error(`Character not found in font metrics: ${char}`);",
        "    }",
        "    const charAscent = charMetrics.ascentSlope;",
        "    if (charAscent === undefined) {",
        "        throw new Error(`Character not found in font metrics: ${char}`);",
        "    }",
        "    if (charAscent > maxAscent) {",
        "        maxAscent = charAscent;",
        "    }",
        "}",
        "return maxAscent * fontSize;",
    ], true, false);
    const getMaxLastLineDescentMethod = new MethodDefinition("getMaxLastLineDescent", ["fontDefine","fontSize","lines"], [
        "const fontKey = fontDefine.key;",
        "const fontMetrics = this.#FONT_DICTIONARY[fontKey];",
        "if (!fontMetrics) {",
        "    throw new Error(`Font definition not found: ${fontDefine}`);",
        "}",
        "if (lines.length === 0) {",
        "    return 0;",
        "}",
        "const lastLine = lines[lines.length - 1];",
        "let maxDescent = 0;",
        "for (const char of lastLine) {",
        "    const charMetrics = fontMetrics[char];",
        "    if (!charMetrics) {",
        "        throw new Error(`Character not found in font metrics: ${char}`);",
        "    }",
        "    const charDescent = charMetrics.descentSlope;",
        "    if (charDescent === undefined) {",
        "        throw new Error(`Character not found in font metrics: ${char}`);",
        "    }",
        "    if (charDescent > maxDescent) {",
        "        maxDescent = charDescent;",
        "    }",
        "}",
        "return maxDescent * fontSize;",
    ], true, false);
    const getTextHeightMethod = new MethodDefinition("getTextHeight", ["fontDefine","fontSize","leading","lines", "useAscentDescent = false"], [
        "const baseHeight = Math.max(0, lines.length - 1) * leading;",
        "if (useAscentDescent) {",
        "    const maxAscent = this.getMaxFirstLineAscent(fontDefine, fontSize, lines);",
        "    const maxDescent = this.getMaxLastLineDescent(fontDefine, fontSize, lines);",
        "    return baseHeight + maxAscent + maxDescent;",
        "}",
        "return lines.length === 0 ? 0 : baseHeight + fontSize;"
    ], true, false);
    const methods = [getMaxLineWidthMethod, getMaxFirstLineAscentMethod, getMaxLastLineDescentMethod, getTextHeightMethod];
    return assembleClass("FontTextCalcs", properties, methods, indentLevel);
}

function exportToFile(content)
{
    const fs = require('fs');
    const filePath = `${thisFileFolder}\\FontTextCalcs.js`
    fs.writeFileSync(filePath, content);
}

exportToFile(buildFontTextCalcsClass());