inlets = 3;

// Initialize variables
var magnitudes = [];
var n_peaks = 5;
var nfft = 1024;
var sample_rate = 44100; // Assuming a sample rate of 44.1 kHz

// Function to find and return 'n' peak indices and their frequencies
function findPeaks(data, n, nfft) {
    var peaks = [];
    for (var i = 1; i < data.length - 1; i++) {
        if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
            peaks.push({index: i, value: data[i]});
        }
    }

    // Sort peaks by amplitude
    peaks.sort((a, b) => b.value - a.value);

    // Take the first 'n' peaks
    var peakIndices = peaks.slice(0, n).map(peak => peak.index);

    // Convert indices to frequencies
    var peakFrequencies = peakIndices.map(index => index * sample_rate / nfft);

    return peakFrequencies;
}

// Input handling depending on inlets
function list() {
    if (inlet === 0) {
        magnitudes = arrayfromargs(arguments);

        if (magnitudes.length === nfft) {
            var peakFrequencies = findPeaks(magnitudes, n_peaks, nfft);
            outlet(0, peakFrequencies);
        }
    }
}

function msg_int(v) {
    if (inlet === 1) {
        n_peaks = v;
    } else if (inlet === 2) {
        nfft = v;
    }
}
