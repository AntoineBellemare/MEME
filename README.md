<p align="center">
  <img src="https://user-images.githubusercontent.com/49297774/151102306-3c10e827-45d8-4783-a560-400613e6db8f.png" width="350">
</p>

Bundle of **Max4Live devices** using **EEG signal** for **dynamical audio-visual composition**. It is designed to provide **flexible mapping of real-time EEG signals for digital artists**

This bundle is primarilly intended to be coupled with the use of EEG_synth (https://github.com/hyruuk/eegsynth/tree/dev_cbc) and Muse headset.
The _EEG_stream_ module allows to receive the OSC messages and stream it to any other module that requires it.
If the user doesn't have a Muse headset, the module EEG_playback allows to stream pre-recorded EEG signals.
The modulation modules can be used without the live EEG stream.

## Simple use case

Insert the __EEG_stream__ module in any Ableton track and set the UDP port accordingly to your EEG_synth patch. The light will flash if data is received.

![Capture d’écran 2024-10-08 094611](https://github.com/user-attachments/assets/c4f93eed-ebd4-4c31-ad0f-91393f549d68)


Insert the **Multi-mapper-MIDI** or **Multi-mapper-AUDIO** modules in any Ableton track and write the **OSC address** that you want **to map on any control parameter**

![Capture d’écran 2024-10-08 094600](https://github.com/user-attachments/assets/1fb85757-c9b0-49fc-8a47-d0ebbaec920b)
![Capture d’écran 2024-10-08 094535](https://github.com/user-attachments/assets/9e8806ba-0d98-4722-a6a5-cea1ac253d07)


## Utilities

The **EEG_playback** module can replace the EEG_stream module when pre-recorded signals are used. When signal is streamed, all the other modules are able to receive the data they are expected.
You can find data examples recorded using a Muse headband in the */data_examples* folder.
To open a datafile, you need to press on the load button and select the file (you will be asked to select the file twice; this behavior needs to be fixed).
Then, the speed parameter needs to be manipulated to control how fast the data is read. With the present files, you can set the speed to 1.15ms to reflect the original datastream sampling frequency.

<img src="https://user-images.githubusercontent.com/49297774/151845530-73d9de6e-d0eb-43ab-812f-b5784a88bf41.png" width="250">

## Modulators modules

### Cognitive accumulator/trigger

The **cognitive accumulator/trigger** is a module designed to **trigger events such as audio clips, or musical scenes**. The trigger happens when a specific EEG feature reaches a chosen threshold and stays above it for a certain amount of time, indicating that ‘’a state’’ has been detected. This module allows to navigate between musical scenes based on the detection of cognitive states. 

![Capture d’écran 2024-10-08 095700](https://github.com/user-attachments/assets/25d7d33a-a590-42db-827e-c5a05afc5d81)

### Quantizer-Smoother-Pitchbend

The **quantizer-smoother-pitchbend** works as both a smoother and a sample-and-hold. It whether computes the average or take a snapshot of an incoming each specified amount of time. The ramptime value indicates the time necessary to ramp to the next value. When _pitch_ is set to _ON_, output values are directly routed to the pitchbend cc value. The quantize option allows to constraint the output value according to predetermined tunings. The Biotuner option allows to use dynamical biotunings as a reference tuning for pitchbend.   

![Capture d’écran 2024-10-08 095739](https://github.com/user-attachments/assets/0aea9e45-afb4-41a5-8297-8b9bbea636bd)

### Thresholder

The **thresholder** is a module designed to **trigger MIDI notes** when a specific feature crosses a predetermined threshold.

![Capture d’écran 2024-10-08 101555](https://github.com/user-attachments/assets/4389f274-7455-4078-bba9-a6d32e5ab1b5)

<!--### ## Machine learning modules

Brain decoder

The **Brain decoder** module uses **supervised machine learning classifiers**. By feeding data from different mental states, the algorithm learns to classify new data as belonging to one of the pre-learned state. By clicking on the ''features'' button, the choice of feature can be made.

### Fuzzy Adaptive Resonance Neural Network

The **Fuzzy Adaptive Resonance Neural Network** module uses **unsupervised machine learning** in the form of **self-organizing neural networks** that allow to perform **realtime clustering**. By clicking on the ''features'' button, the choice of feature can be made. This module can be use to **modelize pathways in the state space of brain signal**. 

<img src="https://user-images.githubusercontent.com/49297774/152665319-aa3f7076-af02-47ad-8c3f-f349a5f6e24b.png" width="750">
-->

## Biotuner modules

These modules interface the Biotuner Python toolbox (https://github.com/antoinebellemare/biotuner)
They allow to use **dynamical microtonal tunings**, **modulations based on peak frequencies** and **euclidean rhythms** derived from biosignals for realtime musical composition.

### Scale Foraging

The **Scale Foraging** module allows **flexible control over biotunings**, whether by controlling how often the tuning changes, how many notes are in the tuning, as well as the degree of harmonic similarity between two successive tunings. 

![Capture d’écran 2024-10-08 102632](https://github.com/user-attachments/assets/55e8a874-ebf8-4a6c-87ab-78f255c858f6)

### MIDI-microtonality

The **MIDI-microtonality** module allows to **load tuning files** from .scl and .txt, as well as **write new tunings** directly in the module. It can also be coupled with the Tuning Foraging module to **receive tunings dynamically from the Biotuner**.

![Capture d’écran 2024-10-08 102640](https://github.com/user-attachments/assets/0920d9e1-be46-4266-b574-985a9e82057b)

### Biotuner Chords

The **BT-peaks-chord** module maps frequency peaks to notes, with controls for octave shift. Specify the OSC address of the incoming list of peaks to enable real-time chord generation based on biosignals.

![Capture d’écran 2024-10-08 102005](https://github.com/user-attachments/assets/6747feed-ae30-4869-a671-c8953d6051c0)

### Low-Frequency Oscillators (LFOs) based on Spectral Peaks 

The **BT-LFO** module generates LFOs based on spectral peaks detected in biosignals. These LFOs can be mapped to various parameters in real-time musical compositions.

#### Key Features

- **Dynamic Peak Modulation**: Two spectral peaks from biosignals are mapped onto LFOs, each with adjustable depth and frequency ranges.
- **Smooth Control**: Control the smoothness of each LFO waveform, adjusting how quickly the modulation responds to changes.
- **(Sub)harmonic Modulations**: Toggle and adjust harmonic and subharmonic modulations, allowing for rich, complex waveform generation influenced by biosignals.
- **Frequency Range Control**: Set minimum and maximum frequency limits to tailor the LFO’s impact on the audio parameters.

![Capture d’écran 2024-10-08 102535](https://github.com/user-attachments/assets/59be8093-37e9-4cd5-b751-e23f57edfc14)

### Biotuner-Euclid

The **Biotuner-Euclid** module produces euclidian polyrhythms based on EEG signal harmonic ratios. It can easily be coupled with _EEG_mapper_ module by mapping EEG features on sustains, rate of change or complexity values. It takes MIDI notes as input, and can therefore be integrated in an instrument rack with the _MIDI_microtonality_ and _Tuning_foraging_ modules to use bioharmonies in frequency and time domains simultaneously. 

<img src="https://user-images.githubusercontent.com/49297774/151903162-c7d53f09-d798-43b5-84b1-bb8ab0bcde5e.png" width="900">



