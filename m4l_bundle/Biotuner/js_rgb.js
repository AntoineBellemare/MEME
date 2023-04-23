// display_color.js

var red = 0;
var green = 0;
var blue = 0;

function paint() {
    with (sketch) {
        glclearcolor(red / 255, green / 255, blue / 255, 1);
        glclear();
        glcolor(0, 0, 0, 1);
        moveto(-1, -1);
        lineto(1, -1);
        lineto(1, 1);
        lineto(-1, 1);
        closepath();
        fill();
    }
}

function list(r, g, b) {
    red = r;
    green = g;
    blue = b;
    refresh();
}

function onload() {
    setinletassist(0, "list: r g b");
}
