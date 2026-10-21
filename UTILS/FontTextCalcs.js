class FontTextCalcs {
    static #FONT_DICTIONARY = {
    "<Amrys-Bold>": {
        "0": {
            "widthSlope": 0.5810546875,
            "ascentSlope": 0.6611328125,
            "descentSlope": 0.0068359375
        },
        "1": {
            "widthSlope": 0.36376953125,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.00146484375
        },
        "2": {
            "widthSlope": 0.52197265625,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.00146484375
        },
        "3": {
            "widthSlope": 0.51220703125,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.0048828125
        },
        "4": {
            "widthSlope": 0.5751953125,
            "ascentSlope": 0.666015625,
            "descentSlope": 0.0029296875
        },
        "5": {
            "widthSlope": 0.51708984375,
            "ascentSlope": 0.65380859375,
            "descentSlope": 0.00439453125
        },
        "6": {
            "widthSlope": 0.56689453125,
            "ascentSlope": 0.66015625,
            "descentSlope": 0.005859375
        },
        "7": {
            "widthSlope": 0.47705078125,
            "ascentSlope": 0.65185546875,
            "descentSlope": 0.00390625
        },
        "8": {
            "widthSlope": 0.5498046875,
            "ascentSlope": 0.66015625,
            "descentSlope": 0.0107421875
        },
        "9": {
            "widthSlope": 0.55615234375,
            "ascentSlope": 0.66015625,
            "descentSlope": 0.005859375
        },
        "a": {
            "widthSlope": 0.47705078125,
            "ascentSlope": 0.462890625,
            "descentSlope": 0.0087890625
        },
        "b": {
            "widthSlope": 0.53076171875,
            "ascentSlope": 0.69189453125,
            "descentSlope": 0.01220703125
        },
        "c": {
            "widthSlope": 0.43212890625,
            "ascentSlope": 0.4638671875,
            "descentSlope": 0.01220703125
        },
        "d": {
            "widthSlope": 0.54296875,
            "ascentSlope": 0.69189453125,
            "descentSlope": 0.009765625
        },
        "e": {
            "widthSlope": 0.46630859375,
            "ascentSlope": 0.46484375,
            "descentSlope": 0.0107421875
        },
        "f": {
            "widthSlope": 0.35107421875,
            "ascentSlope": 0.69189453125,
            "descentSlope": 0.001953125
        },
        "g": {
            "widthSlope": 0.52392578125,
            "ascentSlope": 0.47021484375,
            "descentSlope": 0.24169921875
        },
        "h": {
            "widthSlope": 0.544921875,
            "ascentSlope": 0.69189453125,
            "descentSlope": 0.0029296875
        },
        "i": {
            "widthSlope": 0.255859375,
            "ascentSlope": 0.68408203125,
            "descentSlope": 0.0029296875
        },
        "j": {
            "widthSlope": 0.24609375,
            "ascentSlope": 0.68408203125,
            "descentSlope": 0.2099609375
        },
        "k": {
            "widthSlope": 0.52490234375,
            "ascentSlope": 0.69189453125,
            "descentSlope": 0.0029296875
        },
        "l": {
            "widthSlope": 0.2578125,
            "ascentSlope": 0.69189453125,
            "descentSlope": 0.0029296875
        },
        "m": {
            "widthSlope": 0.77880859375,
            "ascentSlope": 0.46484375,
            "descentSlope": 0.00146484375
        },
        "n": {
            "widthSlope": 0.5419921875,
            "ascentSlope": 0.46484375,
            "descentSlope": 0.0029296875
        },
        "o": {
            "widthSlope": 0.53076171875,
            "ascentSlope": 0.46630859375,
            "descentSlope": 0.0087890625
        },
        "p": {
            "widthSlope": 0.533203125,
            "ascentSlope": 0.46484375,
            "descentSlope": 0.234375
        },
        "q": {
            "widthSlope": 0.52490234375,
            "ascentSlope": 0.462890625,
            "descentSlope": 0.2373046875
        },
        "r": {
            "widthSlope": 0.365234375,
            "ascentSlope": 0.46484375,
            "descentSlope": 0.00146484375
        },
        "s": {
            "widthSlope": 0.4111328125,
            "ascentSlope": 0.4638671875,
            "descentSlope": 0.01025390625
        },
        "t": {
            "widthSlope": 0.39794921875,
            "ascentSlope": 0.5849609375,
            "descentSlope": 0.01025390625
        },
        "u": {
            "widthSlope": 0.52783203125,
            "ascentSlope": 0.4609375,
            "descentSlope": 0.01123046875
        },
        "v": {
            "widthSlope": 0.47607421875,
            "ascentSlope": 0.4619140625,
            "descentSlope": 0.0048828125
        },
        "w": {
            "widthSlope": 0.75,
            "ascentSlope": 0.4619140625,
            "descentSlope": 0.0048828125
        },
        "x": {
            "widthSlope": 0.48388671875,
            "ascentSlope": 0.4638671875,
            "descentSlope": 0.0078125
        },
        "y": {
            "widthSlope": 0.47900390625,
            "ascentSlope": 0.4619140625,
            "descentSlope": 0.2333984375
        },
        "z": {
            "widthSlope": 0.48095703125,
            "ascentSlope": 0.4619140625,
            "descentSlope": 0.00634765625
        },
        "A": {
            "widthSlope": 0.6220703125,
            "ascentSlope": 0.6640625,
            "descentSlope": 0.00390625
        },
        "B": {
            "widthSlope": 0.56201171875,
            "ascentSlope": 0.6611328125,
            "descentSlope": 0.0029296875
        },
        "C": {
            "widthSlope": 0.60400390625,
            "ascentSlope": 0.6611328125,
            "descentSlope": 0.0107421875
        },
        "D": {
            "widthSlope": 0.64794921875,
            "ascentSlope": 0.658203125,
            "descentSlope": 0
        },
        "E": {
            "widthSlope": 0.54296875,
            "ascentSlope": 0.658203125,
            "descentSlope": 0
        },
        "F": {
            "widthSlope": 0.4931640625,
            "ascentSlope": 0.65869140625,
            "descentSlope": 0.0029296875
        },
        "G": {
            "widthSlope": 0.65380859375,
            "ascentSlope": 0.66015625,
            "descentSlope": 0.0107421875
        },
        "H": {
            "widthSlope": 0.666015625,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.00146484375
        },
        "I": {
            "widthSlope": 0.27978515625,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.00146484375
        },
        "J": {
            "widthSlope": 0.28076171875,
            "ascentSlope": 0.65869140625,
            "descentSlope": 0.20263671875
        },
        "K": {
            "widthSlope": 0.63916015625,
            "ascentSlope": 0.65869140625,
            "descentSlope": 0.00439453125
        },
        "L": {
            "widthSlope": 0.54296875,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.00146484375
        },
        "M": {
            "widthSlope": 0.85205078125,
            "ascentSlope": 0.65576171875,
            "descentSlope": 0.001953125
        },
        "N": {
            "widthSlope": 0.64599609375,
            "ascentSlope": 0.65869140625,
            "descentSlope": 0.01318359375
        },
        "O": {
            "widthSlope": 0.712890625,
            "ascentSlope": 0.6640625,
            "descentSlope": 0.0087890625
        },
        "P": {
            "widthSlope": 0.52783203125,
            "ascentSlope": 0.66015625,
            "descentSlope": 0.001953125
        },
        "Q": {
            "widthSlope": 0.71484375,
            "ascentSlope": 0.6640625,
            "descentSlope": 0.173828125
        },
        "R": {
            "widthSlope": 0.54931640625,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.0048828125
        },
        "S": {
            "widthSlope": 0.4873046875,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.009765625
        },
        "T": {
            "widthSlope": 0.55615234375,
            "ascentSlope": 0.6630859375,
            "descentSlope": 0.001953125
        },
        "U": {
            "widthSlope": 0.6171875,
            "ascentSlope": 0.658203125,
            "descentSlope": 0.009765625
        },
        "V": {
            "widthSlope": 0.61279296875,
            "ascentSlope": 0.662109375,
            "descentSlope": 0.00390625
        },
        "W": {
            "widthSlope": 0.93310546875,
            "ascentSlope": 0.662109375,
            "descentSlope": 0.005859375
        },
        "X": {
            "widthSlope": 0.56689453125,
            "ascentSlope": 0.666015625,
            "descentSlope": 0.0107421875
        },
        "Y": {
            "widthSlope": 0.55322265625,
            "ascentSlope": 0.6611328125,
            "descentSlope": 0.0029296875
        },
        "Z": {
            "widthSlope": 0.60205078125,
            "ascentSlope": 0.66015625,
            "descentSlope": 0.005859375
        },
        ".": {
            "widthSlope": 0.23681640625,
            "ascentSlope": 0.14111328125,
            "descentSlope": 0.0068359375
        },
        ",": {
            "widthSlope": 0.23681640625,
            "ascentSlope": 0.130859375,
            "descentSlope": 0.1669921875
        },
        "!": {
            "widthSlope": 0.27001953125,
            "ascentSlope": 0.669921875,
            "descentSlope": 0.0068359375
        },
        "?": {
            "widthSlope": 0.42578125,
            "ascentSlope": 0.6708984375,
            "descentSlope": 0.00732421875
        },
        ";": {
            "widthSlope": 0.23388671875,
            "ascentSlope": 0.4638671875,
            "descentSlope": 0.14990234375
        },
        ":": {
            "widthSlope": 0.23681640625,
            "ascentSlope": 0.4638671875,
            "descentSlope": 0
        },
        "'": {
            "widthSlope": 0.21923828125,
            "ascentSlope": 0.68115234375,
            "descentSlope": -0.42822265625
        },
        "\"": {
            "widthSlope": 0.40185546875,
            "ascentSlope": 0.68115234375,
            "descentSlope": -0.42822265625
        },
        "(": {
            "widthSlope": 0.2890625,
            "ascentSlope": 0.7548828125,
            "descentSlope": 0.115234375
        },
        ")": {
            "widthSlope": 0.2890625,
            "ascentSlope": 0.7548828125,
            "descentSlope": 0.115234375
        },
        "[": {
            "widthSlope": 0.31494140625,
            "ascentSlope": 0.76123046875,
            "descentSlope": 0.1201171875
        },
        "]": {
            "widthSlope": 0.31494140625,
            "ascentSlope": 0.76123046875,
            "descentSlope": 0.1201171875
        },
        "{": {
            "widthSlope": 0.3251953125,
            "ascentSlope": 0.76708984375,
            "descentSlope": 0.11083984375
        },
        "}": {
            "widthSlope": 0.3251953125,
            "ascentSlope": 0.76708984375,
            "descentSlope": 0.11083984375
        },
        " ": {
            "widthSlope": 0.23876953125,
            "ascentSlope": 0,
            "descentSlope": 0
        }
    }
};
    static getMaxLineWidth(fontDefine, fontSize, spacing, lines) {
        const fontKey = fontDefine.key;
        const fontMetrics = this.#FONT_DICTIONARY[fontKey];
        if (!fontMetrics) {
            throw new Error(`Font definition not found: ${fontDefine}`);
        }
        let maxLineWidth = 0;
        for (const text of lines) {
            let lineWidth = 0;
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const charMetrics = fontMetrics[char];
                if (!charMetrics) {
                    throw new Error(`Character not found in font metrics: ${char}`);
                }
                const charWidthSlope = charMetrics.widthSlope;
                if (charWidthSlope === undefined) {
                    throw new Error(`Character not found in font metrics: ${char}`);
                }
                lineWidth += charWidthSlope * fontSize;
                if (i < text.length - 1) {
                    lineWidth += spacing;
                }
            }
            if (lineWidth > maxLineWidth) {
                maxLineWidth = lineWidth;
            }
        }
        return maxLineWidth;
    }
    static getMaxFirstLineAscent(fontDefine, fontSize, lines) {
        const fontKey = fontDefine.key;
        const fontMetrics = this.#FONT_DICTIONARY[fontKey];
        if (!fontMetrics) {
            throw new Error(`Font definition not found: ${fontDefine}`);
        }
        if (lines.length === 0) {
            return 0;
        }
        const firstLine = lines[0];
        let maxAscent = 0;
        for (const char of firstLine) {
            const charMetrics = fontMetrics[char];
            if (!charMetrics) {
                throw new Error(`Character not found in font metrics: ${char}`);
            }
            const charAscent = charMetrics.ascentSlope;
            if (charAscent === undefined) {
                throw new Error(`Character not found in font metrics: ${char}`);
            }
            if (charAscent > maxAscent) {
                maxAscent = charAscent;
            }
        }
        return maxAscent * fontSize;
    }
    static getMaxLastLineDescent(fontDefine, fontSize, lines) {
        const fontKey = fontDefine.key;
        const fontMetrics = this.#FONT_DICTIONARY[fontKey];
        if (!fontMetrics) {
            throw new Error(`Font definition not found: ${fontDefine}`);
        }
        if (lines.length === 0) {
            return 0;
        }
        const lastLine = lines[lines.length - 1];
        let maxDescent = 0;
        for (const char of lastLine) {
            const charMetrics = fontMetrics[char];
            if (!charMetrics) {
                throw new Error(`Character not found in font metrics: ${char}`);
            }
            const charDescent = charMetrics.descentSlope;
            if (charDescent === undefined) {
                throw new Error(`Character not found in font metrics: ${char}`);
            }
            if (charDescent > maxDescent) {
                maxDescent = charDescent;
            }
        }
        return maxDescent * fontSize;
    }
    static getTextHeight(fontDefine, fontSize, leading, lines, useAscentDescent = false) {
        const baseHeight = Math.max(0, lines.length - 1) * leading;
        if (useAscentDescent) {
            const maxAscent = this.getMaxFirstLineAscent(fontDefine, fontSize, lines);
            const maxDescent = this.getMaxLastLineDescent(fontDefine, fontSize, lines);
            return baseHeight + maxAscent + maxDescent;
        }
        return lines.length === 0 ? 0 : baseHeight + fontSize;
    }
}