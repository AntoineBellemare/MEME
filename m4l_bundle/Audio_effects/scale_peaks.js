// Define number of inlets and outlets
inlets = 2;
outlets = 1;

// Create variables to hold the list and range
var numList = [];
var range = [0, 0];

// Function triggered when a list is received in inlet 0
function list() {
    if (inlet === 0) {
        numList = arrayfromargs(arguments);
        if (range[0] !== 0 && range[1] !== 0) {
            outputProcessedArray();
        }
    } else if (inlet === 1) {
        // If we get a list in the second inlet, let's assume it's the range
        range = arrayfromargs(arguments);
        if (numList.length > 0) {
            outputProcessedArray();
        }
    }
}

// Function to process the list
function processList(list, x, y) {
    var processedList = [];
    for (var i = 0; i < list.length; i++) {
        var num = list[i];
        while (num > y) {
            num /= 2;
        }
        while (num < x) {
            num *= 2;
        }
        processedList.push(num);
    }
    return processedList;
}

// Function to send the processed list to the outlet
function outputProcessedArray() {
    var processed = processList(numList, range[0], range[1]);
    outlet(0, processed);
}
