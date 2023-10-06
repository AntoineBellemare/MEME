inlets = 2;
outlets = 1;

var targetAddress = '';

function msg_int(v) {
    if (inlet === 1) {
        targetAddress = messagename;
    }
}

function msg_float(v) {
    if (inlet === 1) {
        targetAddress = messagename;
    }
}

function anything() {
    if (inlet === 0) {
        var inputAddress = messagename;
        var inputArgs = arrayfromargs(arguments);
        
        if (inputAddress === targetAddress) {
            outlet(0, inputAddress, inputArgs);
        }
    } else if (inlet === 1) {
        targetAddress = messagename;
    }
}
