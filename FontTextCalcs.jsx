{
    TextLayerInfo(targetLayer, padding_x = 0, padding_y = 0, roundness = 0) {
        var Alignment = function() {
            return {
                LEFT: 1,
                CENTER: 0,
                RIGHT: -1,
                FromJustification: function(j){
                    switch(j) {
                        case 'alignLeft':
                            return Alignment.LEFT;
                        case 'alignCenter':
                            return Alignment.CENTER;
                        case 'alignRight':
                            return Alignment.RIGHT;
                        default:
                            return Alignment.CENTER;
                    }
                }
            }
        }
        var FontDefine = function(name, style) {
            return {
                name: name,
                style: style,
                key: `<${name}-${style}>`
            }
        }
        var FontMetricDictionary = function() {
            return {
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
            }
        }
        var GetMaxLineWidth = function(fontDefine, fontSize, spacing, lines, strokeWidth = 0) {
            const fontKey = fontDefine.key;
            const fontDictionary = FontMetricDictionary();
            const fontMetrics = fontDictionary[fontKey];
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
                }
                lineWidth += spacing;
                if (lineWidth > maxLineWidth) {
                    maxLineWidth = lineWidth;
                }
            }
            return maxLineWidth + strokeWidth * 4;
        }
        var GetMaxFirstLineAscent = function(fontDefine, fontSize, lines) {
            const fontKey = fontDefine.key;
            const fontDictionary = FontMetricDictionary();
            const fontMetrics = fontDictionary[fontKey];
            if (!fontMetrics) {
                throw new Error(`Font definition not found: ${fontDefine}`);
            }
            if (lines.length === 0) {
                return 0;
            }
            const firstLine = lines[0];
            let maxAscentSlope = 0;
            for (let i = 0; i < firstLine.length; i++) {
                const char = firstLine[i];
                const charMetrics = fontMetrics[char];
                if (!charMetrics) {
                    throw new Error(`Character not found in font metrics: ${char}`);
                }
                const ascentSlope = charMetrics.ascentSlope;
                if (ascentSlope === undefined) {
                    throw new Error(`Character not found in font metrics: ${char}`);
                }
                if (ascentSlope > maxAscentSlope) {
                    maxAscentSlope = ascentSlope;
                }
            }
            return maxAscentSlope * fontSize;
        }
        var GetMaxLastLineDescent = function(fontDefine, fontSize, lines) {
            const fontKey = fontDefine.key;
            const fontDictionary = FontMetricDictionary();
            const fontMetrics = fontDictionary[fontKey];
            if (!fontMetrics) {
                throw new Error(`Font definition not found: ${fontDefine}`);
            }
            if (lines.length === 0) {
                return 0;
            }
            const lastLine = lines[lines.length - 1];
            let maxDescentSlope = 0;
            for (let i = 0; i < lastLine.length; i++) {
                const char = lastLine[i];
                const charMetrics = fontMetrics[char];
                if (!charMetrics) {
                    throw new Error(`Character not found in font metrics: ${char}`);
                }
                const descentSlope = charMetrics.descentSlope;
                if (descentSlope === undefined) {
                    throw new Error(`Character not found in font metrics: ${char}`);
                }
                if (descentSlope > maxDescentSlope) {
                    maxDescentSlope = descentSlope;
                }
            }
            return maxDescentSlope * fontSize;
        }
        var GetTextHeight = function(fontDefine, fontSize, leading, lines, useAscentDescent = true, strokeWidth = 0) {
            const baseHeight = Math.max(0, lines.length - 1) * leading;
            let height = baseHeight;
            if (useAscentDescent) {
                height += GetMaxFirstLineAscent(fontDefine, fontSize, lines);
                height += GetMaxLastLineDescent(fontDefine, fontSize, lines);
            }
            return height + strokeWidth * 2;

        }
        var TextBoundingBox = function(text, fontName, fontStyle, fontSize, leading, spacing, strokeWidth = 0, padding_x = 0, padding_y = 0) {
            var fontDefine = new FontDefine(fontName, fontStyle);
            var _lines = text.split(/\r\n|\r|\n/);
            var _width = GetMaxLineWidth(fontDefine, fontSize, spacing, _lines, strokeWidth) + padding_x * 2; // Left and right padding
            var _height = GetTextHeight(fontDefine, fontSize, leading, _lines, true, strokeWidth) + padding_y * 2; // Top and bottom padding
            var _textAnchor = [
                0 - _width / 2,
                0 - _height / 2
            ];
            var _cornerRadius = Math.min(_width/2, _height/2);
            var getAnchor = function(anchorX, anchorY) {
                return [
                    this.textAnchor[0] + this.width * anchorX,
                    this.textAnchor[1] + this.height * anchorY - this.strokeWidth
                ];
            };
            var roundCorners = function(roundness) {
                return this.cornerRadius * roundness;
            }
            return {
                lines: _lines,
                width: _width,
                height: _height,
                size: [_width, _height],
                textAnchor: _textAnchor,
                strokeWidth: strokeWidth,
                cornerRadius: _cornerRadius,
                GetAnchor: getAnchor,
                GetRoundCorners: roundCorners
            }
        }
        var layer = thisComp.layer(targetLayer);
        var _text = layer.text.sourceText.value;
        if (_text === undefined || _text === null) {
            throw new Error(`TextLayerInfo: Unable to retrieve text from layer "${targetLayer}"`);
        }
        var _textStyle = layer.text.sourceText.style;
        var _layerPosition = layer.transform.position.value;
        var _compCentre = [thisComp.width/2, thisComp.height/2];
        var _relativePosition = [_layerPosition[0] - _compCentre[0], _layerPosition[1] - _compCentre[1]];
        var _num_lines = _text.split(/\r\n|\r|\n/).length;
        var _fontCombinedName = _textStyle.font;
        var _fontName, _fontStyle;
        var s = _fontCombinedName.split("-");
        _fontName = s[0];
        _fontStyle = s[1];
        var _fontDefine = FontDefine(_fontName, _fontStyle);
        var _alignment = Alignment().FromJustification(_textStyle.justification);
        var _strokeWidth = _textStyle.applyStroke ? _textStyle.strokeWidth : 0;
        var _textBoundingBox = TextBoundingBox(_text, _fontName, _fontStyle, _textStyle.fontSize, _textStyle.leading, _textStyle.tracking, _textStyle.strokeWidth, padding_x, padding_y);
        var _roundedCorner = _textBoundingBox.GetRoundCorners(roundness);
        var _absoluteEdges = {
            left: _layerPosition[0] - _textBoundingBox.width/2,
            right: _layerPosition[0] + _textBoundingBox.width/2,
            top: _layerPosition[1] - _textBoundingBox.height/2,
            bottom: _layerPosition[1] + _textBoundingBox.height/2
        }
        var _relativeEdges = {
            left: _relativePosition[0] - _textBoundingBox.width/2,
            right: _relativePosition[0] + _textBoundingBox.width/2,
            top: _relativePosition[1] - _textBoundingBox.height/2,
            bottom: _relativePosition[1] + _textBoundingBox.height/2
        }
        return {
            fontDefine: _fontDefine,
            fontName: _fontName,
            fontStyle: _fontStyle,
            text: _text,
            textStyle: _textStyle,
            layerPosition: _layerPosition,
            relativePosition: _relativePosition,
            numLines: _num_lines,
            textAlignment: _alignment,
            textBoundingBox: _textBoundingBox,
            roundedCorners: _roundedCorner,
            absoluteEdges: _absoluteEdges,
            relativeEdges: _relativeEdges
        }
    },
    TwoLayerInfo(layer1Args, layer2Args) {
        const targetCentre = [ 1920, 1860 ];
        var TextLayerInfo = function(targetLayer, padding_x = 0, padding_y = 0, roundness = 0) {
                var Alignment = function() {
                    return {
                        LEFT: 1,
                        CENTER: 0,
                        RIGHT: -1,
                        FromJustification: function(j){
                            switch(j) {
                                case 'alignLeft':
                                    return Alignment.LEFT;
                                case 'alignCenter':
                                    return Alignment.CENTER;
                                case 'alignRight':
                                    return Alignment.RIGHT;
                                default:
                                    return Alignment.CENTER;
                            }
                        }
                    }
                }
                var FontDefine = function(name, style) {
                    return {
                        name: name,
                        style: style,
                        key: `<${name}-${style}>`
                    }
                }
                var FontMetricDictionary = function() {
                    return {
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
                    }
                }
                var GetMaxLineWidth = function(fontDefine, fontSize, spacing, lines, strokeWidth = 0) {
                    const fontKey = fontDefine.key;
                    const fontDictionary = FontMetricDictionary();
                    const fontMetrics = fontDictionary[fontKey];
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
                        }
                        lineWidth += spacing;
                        if (lineWidth > maxLineWidth) {
                            maxLineWidth = lineWidth;
                        }
                    }
                    return maxLineWidth + strokeWidth * 4;
                }
                var GetMaxFirstLineAscent = function(fontDefine, fontSize, lines) {
                    const fontKey = fontDefine.key;
                    const fontDictionary = FontMetricDictionary();
                    const fontMetrics = fontDictionary[fontKey];
                    if (!fontMetrics) {
                        throw new Error(`Font definition not found: ${fontDefine}`);
                    }
                    if (lines.length === 0) {
                        return 0;
                    }
                    const firstLine = lines[0];
                    let maxAscentSlope = 0;
                    for (let i = 0; i < firstLine.length; i++) {
                        const char = firstLine[i];
                        const charMetrics = fontMetrics[char];
                        if (!charMetrics) {
                            throw new Error(`Character not found in font metrics: ${char}`);
                        }
                        const ascentSlope = charMetrics.ascentSlope;
                        if (ascentSlope === undefined) {
                            throw new Error(`Character not found in font metrics: ${char}`);
                        }
                        if (ascentSlope > maxAscentSlope) {
                            maxAscentSlope = ascentSlope;
                        }
                    }
                    return maxAscentSlope * fontSize;
                }
                var GetMaxLastLineDescent = function(fontDefine, fontSize, lines) {
                    const fontKey = fontDefine.key;
                    const fontDictionary = FontMetricDictionary();
                    const fontMetrics = fontDictionary[fontKey];
                    if (!fontMetrics) {
                        throw new Error(`Font definition not found: ${fontDefine}`);
                    }
                    if (lines.length === 0) {
                        return 0;
                    }
                    const lastLine = lines[lines.length - 1];
                    let maxDescentSlope = 0;
                    for (let i = 0; i < lastLine.length; i++) {
                        const char = lastLine[i];
                        const charMetrics = fontMetrics[char];
                        if (!charMetrics) {
                            throw new Error(`Character not found in font metrics: ${char}`);
                        }
                        const descentSlope = charMetrics.descentSlope;
                        if (descentSlope === undefined) {
                            throw new Error(`Character not found in font metrics: ${char}`);
                        }
                        if (descentSlope > maxDescentSlope) {
                            maxDescentSlope = descentSlope;
                        }
                    }
                    return maxDescentSlope * fontSize;
                }
                var GetTextHeight = function(fontDefine, fontSize, leading, lines, useAscentDescent = true, strokeWidth = 0) {
                    const baseHeight = Math.max(0, lines.length - 1) * leading;
                    let height = baseHeight;
                    if (useAscentDescent) {
                        height += GetMaxFirstLineAscent(fontDefine, fontSize, lines);
                        height += GetMaxLastLineDescent(fontDefine, fontSize, lines);
                    }
                    return height + strokeWidth * 2;

                }
                var TextBoundingBox = function(text, fontName, fontStyle, fontSize, leading, spacing, strokeWidth = 0, padding_x = 0, padding_y = 0) {
                    var fontDefine = new FontDefine(fontName, fontStyle);
                    var _lines = text.split(/\r\n|\r|\n/);
                    var _width = GetMaxLineWidth(fontDefine, fontSize, spacing, _lines, strokeWidth) + padding_x * 2; // Left and right padding
                    var _height = GetTextHeight(fontDefine, fontSize, leading, _lines, true, strokeWidth) + padding_y * 2; // Top and bottom padding
                    var _textAnchor = [
                        0 - _width / 2,
                        0 - _height / 2
                    ];
                    var _cornerRadius = Math.min(_width/2, _height/2);
                    var getAnchor = function(anchorX, anchorY) {
                        return [
                            this.textAnchor[0] + this.width * anchorX,
                            this.textAnchor[1] + this.height * anchorY - this.strokeWidth
                        ];
                    };
                    var roundCorners = function(roundness) {
                        return this.cornerRadius * roundness;
                    }
                    return {
                        lines: _lines,
                        width: _width,
                        height: _height,
                        size: [_width, _height],
                        textAnchor: _textAnchor,
                        strokeWidth: strokeWidth,
                        cornerRadius: _cornerRadius,
                        GetAnchor: getAnchor,
                        GetRoundCorners: roundCorners
                    }
                }
                var layer = thisComp.layer(targetLayer);
                var _text = layer.text.sourceText.value;
                if (_text === undefined || _text === null) {
                    throw new Error(`TextLayerInfo: Unable to retrieve text from layer "${targetLayer}"`);
                }
                var _textStyle = layer.text.sourceText.style;
                var _layerPosition = layer.transform.position.value;
                var _compCentre = [thisComp.width/2, thisComp.height/2];
                var _relativePosition = [_layerPosition[0] - _compCentre[0], _layerPosition[1] - _compCentre[1]];
                var _num_lines = _text.split(/\r\n|\r|\n/).length;
                var _fontCombinedName = _textStyle.font;
                var _fontName, _fontStyle;
                var s = _fontCombinedName.split("-");
                _fontName = s[0];
                _fontStyle = s[1];
                var _fontDefine = FontDefine(_fontName, _fontStyle);
                var _alignment = Alignment().FromJustification(_textStyle.justification);
                var _strokeWidth = _textStyle.applyStroke ? _textStyle.strokeWidth : 0;
                var _textBoundingBox = TextBoundingBox(_text, _fontName, _fontStyle, _textStyle.fontSize, _textStyle.leading, _textStyle.tracking, _textStyle.strokeWidth, padding_x, padding_y);
                var _roundedCorner = _textBoundingBox.GetRoundCorners(roundness);
                var _absoluteEdges = {
                    left: _layerPosition[0] - _textBoundingBox.width/2,
                    right: _layerPosition[0] + _textBoundingBox.width/2,
                    top: _layerPosition[1] - _textBoundingBox.height/2,
                    bottom: _layerPosition[1] + _textBoundingBox.height/2
                }
                var _relativeEdges = {
                    left: _relativePosition[0] - _textBoundingBox.width/2,
                    right: _relativePosition[0] + _textBoundingBox.width/2,
                    top: _relativePosition[1] - _textBoundingBox.height/2,
                    bottom: _relativePosition[1] + _textBoundingBox.height/2
                }
                return {
                    fontDefine: _fontDefine,
                    fontName: _fontName,
                    fontStyle: _fontStyle,
                    text: _text,
                    textStyle: _textStyle,
                    layerPosition: _layerPosition,
                    relativePosition: _relativePosition,
                    numLines: _num_lines,
                    textAlignment: _alignment,
                    textBoundingBox: _textBoundingBox,
                    roundedCorners: _roundedCorner,
                    absoluteEdges: _absoluteEdges,
                    relativeEdges: _relativeEdges
                }
            }
        // Implementation for TwoLayerInfo goes here
        var layer1Info = TextLayerInfo(layer1Args[0], layer1Args[1] ? layer1Args[1] : 0, layer1Args[2] ? layer1Args[2] : 0, layer1Args[3] ? layer1Args[3] : 0);
        var layer2Info = TextLayerInfo(layer2Args[0], layer2Args[1] ? layer2Args[1] : 0, layer2Args[2] ? layer2Args[2] : 0, layer2Args[3] ? layer2Args[3] : 0);
        var farLeft = Math.min(layer1Info.absoluteEdges.left, layer2Info.absoluteEdges.left);
        var farRight = Math.max(layer1Info.absoluteEdges.right, layer2Info.absoluteEdges.right);
        var farTop = Math.min(layer1Info.absoluteEdges.top, layer2Info.absoluteEdges.top);
        var farBottom = Math.max(layer1Info.absoluteEdges.bottom, layer2Info.absoluteEdges.bottom);
        var trueCentre = [
            (farLeft + farRight) / 2,
            (farTop + farBottom) / 2
        ]
        var farRelativeLeft = Math.min(layer1Info.relativeEdges.left, layer2Info.relativeEdges.left);
        var farRelativeRight = Math.max(layer1Info.relativeEdges.right, layer2Info.relativeEdges.right);
        var farRelativeTop = Math.min(layer1Info.relativeEdges.top, layer2Info.relativeEdges.top);
        var farRelativeBottom = Math.max(layer1Info.relativeEdges.bottom, layer2Info.relativeEdges.bottom);
        var trueRelativeCentre = [
            (farRelativeLeft + farRelativeRight) / 2,
            (farRelativeTop + farRelativeBottom) / 2
        ];
        var _neededLayerShift = [
            targetCentre[0] - trueCentre[0],
            targetCentre[1] - trueCentre[1]
        ];
        return {
            layer1: layer1Info,
            layer2: layer2Info,
            neededLayerShift: _neededLayerShift
        };

    },
    Anchor_X() {
        return {
            L: 0,
            C: 0.5,
            R: 1
        }
    },
    Anchor_Y() {
        return {
            T: 0,
            C: 0.5,
            B: 1
        }
    }
    
}