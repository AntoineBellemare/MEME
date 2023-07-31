inlets = 3;
outlets = 3;

var hsv = [0, 0, 0];

function msg_float(value) {
    hsv[inlet] = value;
    var rgb = hsvToRgb.apply(null, hsv);
    outlet(0, rgb[0]);
    outlet(1, rgb[1]);
    outlet(2, rgb[2]);
}

function hsvToRgb(h, s, v) {
    var f = function(n, k) {
        k = (n + h * 6) % 6;
        return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    };
    return [f(5), f(3), f(1)];
}

// Force update inlets and outlets
inlets = 3;
outlets = 3;