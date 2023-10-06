inlets = 1;
outlets = 1;

function list() {
    var inputList = arrayfromargs(arguments);
    var outputList = [];
    
    for (var i = 0; i < inputList.length; i++) {
        for (var j = 0; j < inputList.length; j++) {
            if (i !== j) {
                var ratio = inputList[i] / inputList[j];
                if (ratio > 1) {
                    outputList.push(ratio);
                }
            }
        }
    }
    
    outlet(0, outputList);
}
