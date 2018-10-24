"use strict";

/*
Copyright [2014] [Diagramo]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**Figure set declaration*/
figureSets["basic"] = {
    name: 'Basic',
    description : 'A basic set of figures',
    figures: [
        {figureFunction: "Square", image: "square.png"},
        {figureFunction: "Circle", image: "circle.png"},
        {figureFunction: "RoundedRectangle", image: "rounded_rectangle.png"},
        {figureFunction: "Diamond", image: "diamond.png"},
        {figureFunction: "Parallelogram", image: "parallelogram.png"},
        {figureFunction: "RightTriangle", image: "right_triangle.png"},
        {figureFunction: "Pentagon", image: "pentagon.png"},
        {figureFunction: "Hexagon", image: "hexagon.png"},
        {figureFunction: "Octogon", image: "octogon.png"},
        {figureFunction: "Text", image: "text.png"},
        {figureFunction: "Picture", image: "picture.png"},
        {figureFunction: "Arrow", image: "arrow.png"}
    ]
};

/**Object with default values for figures*/
var FigureDefaults = {
    /**Size of figure's segment*/
    segmentSize : 70,

    /**Size of figure's short segment*/
    segmentShortSize : 40,

    /**Size of radius*/
    radiusSize : 35,

    /**Size of offset for parallels
    * For example: for parallelogram it's projection of inclined line on X axis*/
    parallelsOffsetSize : 40,

    /**Corner radius
    * For example: for rounded rectangle*/
    corner : 10,

    /**Corner roundness
    * Value from 0 to 10, where 10 - it's circle radius.*/
    cornerRoundness : 8,

    /**Color of lines*/
    strokeStyle : "#000000",

    /**Color of fill*/
    fillStyle : "#ffffff",

    /**Text size*/
    textSize : 12,

    /**Text label*/
    textStr : "Text",

    /**Text font*/
    textFont : "Arial",

    /**Color of text*/
    textColor : "#000000"
};

function figure_Square(x,y)
{
    var r = new Polygon();
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize));
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize));
    var f=new Figure("Square");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS));
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.addPrimitive(r);

    var t2 = new Text(STRING_TEXT, x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10,y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y),ConnectionPoint.TYPE_FIGURE);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 - 10, y + FigureDefaults.segmentSize),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2, y + FigureDefaults.segmentSize),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y + FigureDefaults.segmentSize),ConnectionPoint.TYPE_FIGURE);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize / 2 - 10),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize / 2),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize, y + FigureDefaults.segmentSize / 2 + 10),ConnectionPoint.TYPE_FIGURE);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize / 2 - 10),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize / 2),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize / 2 + 10),ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Circle(x,y)
{

    var f = new Figure("Circle");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;


    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    var c = new Arc(x, y, FigureDefaults.radiusSize, 0, 360, false, 0);

    f.addPrimitive(c);
    var t2 = new Text(STRING_TEXT, x, y, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.radiusSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - FigureDefaults.radiusSize, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - FigureDefaults.radiusSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Diamond(x,y)
{

    var r = new Polygon();
    r.addPoint(new Point(x, y - FigureDefaults.segmentSize/2));
    r.addPoint(new Point(x + FigureDefaults.segmentShortSize / 3*2, y));
    r.addPoint(new Point(x, y + FigureDefaults.segmentSize/2));
    r.addPoint(new Point(x - FigureDefaults.segmentShortSize/3*2, y));
    var f=new Figure("Diamond");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH))
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.addPrimitive(r);

    var t2 = new Text(STRING_TEXT, x, y, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentShortSize/3*2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - FigureDefaults.segmentShortSize/3*2, y), ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}

function figure_Parallelogram(x,y)
{
    
    var f = new Figure("Diamond");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));


    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    var r = new Polygon();
    r.addPoint(new Point(x + 10, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize + 10, y));
    r.addPoint(new Point(x + FigureDefaults.segmentSize + FigureDefaults.parallelsOffsetSize, y + FigureDefaults.segmentShortSize));
    r.addPoint(new Point(x + FigureDefaults.parallelsOffsetSize, y + FigureDefaults.segmentShortSize));
    
    f.addPrimitive(r);

    var t2 = new Text(STRING_TEXT, x + FigureDefaults.segmentSize/2 + FigureDefaults.parallelsOffsetSize/2 + 5, y + FigureDefaults.segmentShortSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + 10, y),ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize + 10, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize + FigureDefaults.parallelsOffsetSize, y + FigureDefaults.segmentShortSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.parallelsOffsetSize, y + FigureDefaults.segmentShortSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize + FigureDefaults.parallelsOffsetSize / 2 + 5, y + FigureDefaults.segmentShortSize / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.parallelsOffsetSize / 2 + 5, y + FigureDefaults.segmentShortSize / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + FigureDefaults.parallelsOffsetSize, y + FigureDefaults.segmentShortSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + 10, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + FigureDefaults.segmentSize / 2 + FigureDefaults.parallelsOffsetSize/2 + 2, y + FigureDefaults.segmentShortSize/2), ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}

function figure_Picture(x,y)
{
    var f = new Figure("FamilyCard");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    var url = "data:image/png;base64,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";
    
    var ifig = new ImageFrame(url, x, y, true);
    ifig.debug = true;
    f.addPrimitive(ifig);
    f.properties.push(new BuilderProperty('URL or base 64 image:', 'primitives.0.url', BuilderProperty.TYPE_URL));
    
    f.finalise();
    return f;
}

function figure_RightTriangle(x,y)
{

    var t = new Polygon();
    t.addPoint(new Point(x, y));
    t.addPoint(new Point(x + FigureDefaults.segmentShortSize, y + FigureDefaults.segmentSize));
    t.addPoint(new Point(x, y + FigureDefaults.segmentSize));

    var e = new Figure("RightTriangle");
    e.style.fillStyle = FigureDefaults.fillStyle;
    e.style.strokeStyle = FigureDefaults.strokeStyle;

    e.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    e.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    e.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    e.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    e.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    e.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    e.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    e.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    e.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));//f.properties.push(new BuilderProperty('Vertical Alignment ', 'primitives.1.valign', Text.VALIGNMENTS);
    e.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    var t2 = new Text(STRING_TEXT, x + FigureDefaults.segmentShortSize/3, y + FigureDefaults.segmentSize*0.70, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    e.addPrimitive(t);
    e.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(e.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id, new Point(x + FigureDefaults.segmentShortSize, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id, new Point(x, y + FigureDefaults.segmentSize), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(e.id, new Point(x + FigureDefaults.segmentShortSize/2, y + FigureDefaults.segmentSize/2), ConnectionPoint.TYPE_FIGURE);


    e.finalise();
    return e;
}

function figure_Pentagon(x,y)
{
    var r = new Polygon();
    var l = FigureDefaults.radiusSize;
    /*r.addPoint(new Point(x + (l * Math.cos(180/Math.PI*72)), y - (l * Math.sin(180/Math.PI*72))));
    r.addPoint(new Point(x - (l * Math.cos(180/Math.PI*36)), y + (l * Math.sin(180/Math.PI*36))));
    r.addPoint(new Point(x + l, y));
    r.addPoint(new Point(x - (l * Math.cos(180/Math.PI*36)), y - (l * Math.sin(180/Math.PI*36))));
    r.addPoint(new Point(x + (l * Math.cos(180/Math.PI*72)), y + (l * Math.sin(180/Math.PI*72))));*/
    for (var i = 0; i < 5; i++){
        r.addPoint(new Point(x - l * Math.sin(2 * Math.PI * i / 5), y - l * Math.cos(2 * Math.PI * i / 5)));
    }
    var f=new Figure("Pentagon");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.addPrimitive(r);

    /**
     * Alex: - Why divided by 11?
     * Artyom: - Value found in experimental way: in Pentagon (x,y) point is a 
     *  little above center, in little piece of radius - for R/11 it works.*/
    var t2 = new Text(STRING_TEXT, x, y - FigureDefaults.radiusSize/11, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    for (var i = 0; i < 5; i++){
        CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - l * Math.sin(2 * Math.PI * i / 5), y - l * Math.cos(2 * Math.PI * i / 5)),ConnectionPoint.TYPE_FIGURE);
    }
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x,y),ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}

function figure_Hexagon(x,y)
{
    var r = new Polygon();
    var l = FigureDefaults.segmentShortSize/4*3+2;
    r.addPoint(new Point(x, y + l));
    r.addPoint(new Point(x + l, y + l / 2));//(l * (Math.sqrt(3 / 2)))
    r.addPoint(new Point(x + l, y - l / 2));//(l * (Math.sqrt(3 / 2)))
    r.addPoint(new Point(x, y - l));
    r.addPoint(new Point((x - l), y - l / 2));//(l * (Math.sqrt(3 / 2)))
    r.addPoint(new Point((x - l), y + l / 2));//(l * (Math.sqrt(3 / 2)))
    var f=new Figure("Hexagon");

    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    f.addPrimitive(r);

    var t2 = new Text(STRING_TEXT, x, y, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l, y - l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - l, y - l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - l, y + l / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}

function figure_Octogon(x,y)
{
    var r = new Polygon();

    var l = FigureDefaults.segmentShortSize/3*2;
    var a = l/Math.sqrt(2);
    r.addPoint(new Point(x, y));
    r.addPoint(new Point(x + l, y));
    r.addPoint(new Point(x + l + a, y + a));
    r.addPoint(new Point(x + l + a, y + a + l));
    r.addPoint(new Point(x + l, y + a + l + a));
    r.addPoint(new Point(x, y + a + l + a));
    r.addPoint(new Point(x - a, y + a + l));
    r.addPoint(new Point(x - a, y + a));

    var f = new Figure("Octogon");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));

    f.addPrimitive(r);

    var t2 = new Text(STRING_TEXT, x + l/2, y + (l+a+a)/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l + a, y + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l + a, y + a + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l, y + a + l + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + a + l + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - a, y + a + l), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - a, y + a), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + l / 2, y + (l+a+a)/2), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}





function figure_Text(x,y)
{

    var f = new Figure('Text');
    f.style.fillStyle = FigureDefaults.fillStyle;

    f.properties.push(new BuilderProperty('Text', 'primitives.0.str', BuilderProperty.TYPE_TEXT));

    //when we change textSize we need to transform the connectionPoints, 
    //this is the only time connecitonPoints get transformed for text

    f.properties.push(new BuilderProperty('Text Size ', 'primitives.0.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.0.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.0.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.0.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.0.style.fillStyle', BuilderProperty.TYPE_COLOR));

    var t2 = new Text(STRING_TEXT, x, y + FigureDefaults.radiusSize/2, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);
    
    //	lets set up our connection points to be right on the bounds
	//  var bounds = f.getBounds();
	//  var width = bounds[2] - bounds[0];
	//  var height = bounds[3] - bounds[1];
	//  CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[0] + width/2, bounds[1] - 2), ConnectionPoint.TYPE_FIGURE);
	//  CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[0] + width/2, bounds[3] + 2), ConnectionPoint.TYPE_FIGURE);
	//  CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[0] - 2, bounds[1] + height/2), ConnectionPoint.TYPE_FIGURE);
	//  CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(bounds[2] + 2, bounds[1] + height/2), ConnectionPoint.TYPE_FIGURE);

    f.finalise();
    return f;
}

function figure_RoundedRectangle(x,y)
{
    var f = new Figure("RoundedRectangle");
    f.style.fillStyle = FigureDefaults.fillStyle;
    f.style.strokeStyle = FigureDefaults.strokeStyle;
    f.style.lineWidth = 2;
    f.style.lineStyle = Style.LINE_STYLE_CONTINOUS;

    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size ', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font ', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment ', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Underlined', 'primitives.1.underlined', BuilderProperty.TYPE_TEXT_UNDERLINED));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));

    f.properties.push(new BuilderProperty(STRING_BACKGROUND_COLOR, 'style.fillStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_COLOR, 'style.strokeStyle', BuilderProperty.TYPE_COLOR));
    f.properties.push(new BuilderProperty(STRING_BORDER_WIDTH, 'style.lineWidth',BuilderProperty.TYPE_LINE_WIDTH));
    f.properties.push(new BuilderProperty(STRING_BORDER_STYLE, 'style.lineStyle',BuilderProperty.TYPE_LINE_STYLE));
    
    var p = new Path();
    var hShrinker = 10;
    var vShrinker = 6;
    var l1 = new Line(new Point(x + hShrinker, y + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker, y + vShrinker));

    var c1 = new QuadCurve(new Point(x + FigureDefaults.segmentSize - hShrinker, y + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner/FigureDefaults.cornerRoundness + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + vShrinker))

    var l2 = new Line(new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker));

    var c2 = new QuadCurve(new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker),
        new Point(x + FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10)),
        new Point(x + FigureDefaults.segmentSize - hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner))

    var l3 = new Line(new Point(x + FigureDefaults.segmentSize - hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner),
        new Point(x + hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner));

    var c3 = new QuadCurve(
        new Point(x + hShrinker, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner),
        new Point(x + hShrinker - FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner*(FigureDefaults.cornerRoundness/10)),
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker))

    var l4 = new Line(new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker),
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + vShrinker));

    var c4 = new QuadCurve(
        new Point(x + hShrinker - FigureDefaults.corner, y + FigureDefaults.corner + vShrinker),
        new Point(x + hShrinker - FigureDefaults.corner*(FigureDefaults.cornerRoundness/10), y + vShrinker),
        new Point(x + hShrinker, y + vShrinker))

    p.addPrimitive(l1);
    p.addPrimitive(c1);
    p.addPrimitive(l2);
    p.addPrimitive(c2);
    p.addPrimitive(l3);
    p.addPrimitive(c3);
    p.addPrimitive(l4);
    p.addPrimitive(c4);
    f.addPrimitive(p);

    var t2 = new Text(STRING_TEXT, x + FigureDefaults.segmentSize/2, y + FigureDefaults.segmentShortSize/2 + FigureDefaults.corner, FigureDefaults.textFont, FigureDefaults.textSize);
    t2.style.fillStyle = FigureDefaults.textColor;

    f.addPrimitive(t2);

    var wid = FigureDefaults.segmentSize - hShrinker + FigureDefaults.corner;
    var height = FigureDefaults.corner + FigureDefaults.segmentShortSize - vShrinker + FigureDefaults.corner;

    //top
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 - 10, y + vShrinker), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2, y + vShrinker), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 + 10, y + vShrinker), ConnectionPoint.TYPE_FIGURE);

    //right
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid, y + height / 2 + 10), ConnectionPoint.TYPE_FIGURE);

    //bottom
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 - 10, y + height), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2, y + height), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + wid / 2 + 10, y + height), ConnectionPoint.TYPE_FIGURE);

    //left
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 2 - 10), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + height / 2 + 10), ConnectionPoint.TYPE_FIGURE);
    f.finalise();
    return f;
}