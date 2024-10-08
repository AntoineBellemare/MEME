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


Insert the **EEG_mapper** or **EEG_mapper_multi** module in any Ableton track and choose the **feature** that you want **to map on any control parameter**

<img src="https://user-images.githubusercontent.com/49297774/151845504-3863b0b5-da4d-46d0-bc55-561b9fbe43be.png" width="350">

<img src="https://user-images.githubusercontent.com/49297774/151845514-2d0bad5b-b66e-4a45-8597-d5ae684529dd.png" width="750">

## Utilities

The **EEG_playback** module can replace the EEG_stream module when pre-recorded signals are used. When signal is streamed, all the other modules are able to receive the data they are expected.
You can find data examples recorded using a Muse headband in the */data_examples* folder.
To open a datafile, you need to press on the load button and select the file (you will be asked to select the file twice; this behavior needs to be fixed).
Then, the speed parameter needs to be manipulated to control how fast the data is read. With the present files, you can set the speed to 1.15ms to reflect the original datastream sampling frequency.

<img src="https://user-images.githubusercontent.com/49297774/151845530-73d9de6e-d0eb-43ab-812f-b5784a88bf41.png" width="250">

## Modulators modules

### Cognitive accumulator/trigger

The **cognitive accumulator/trigger** is a module designed to **trigger events such as audio clips, or musical scenes**. The trigger happens when a specific EEG feature reaches a chosen threshold and stays above it for a certain amount of time, indicating that ‘’a state’’ has been detected. This module allows to navigate between musical scenes based on the detection of cognitive states. 

<img src="https://user-images.githubusercontent.com/49297774/151845549-7886d0d9-c4ca-4b3c-a5c6-8220d1152fac.png" width="400">

### Quantizer-Smoother-Pitchbend

The **quantizer-smoother-pitchbend** works as both a smoother and a sample-and-hold. It whether computes the average or take a snapshot of an incoming each specified amount of time. The ramptime value indicates the time necessary to ramp to the next value. When _pitch_ is set to _ON_, output values are directly routed to the pitchbend cc value. The quantize option allows to constraint the output value according to predetermined tunings. The Biotuner option allows to use dynamical biotunings as a reference tuning for pitchbend.   

<img src="https://user-images.githubusercontent.com/49297774/151844355-782082f3-3d1f-4c7a-9630-c87409c01cea.png" width="500">

### Thresholder

The **thresholder** is a module designed to **trigger MIDI notes** when a specific EEG feature crosses a predetermined threshold.

<img src="https://user-images.githubusercontent.com/49297774/153027660-8c354a89-a90f-41f6-9c4e-9b120791f3ad.png" width="250">

## Machine learning modules

### Brain decoder

The **Brain decoder** module uses **supervised machine learning classifiers**. By feeding data from different mental states, the algorithm learns to classify new data as belonging to one of the pre-learned state. By clicking on the ''features'' button, the choice of feature can be made.

### Fuzzy Adaptive Resonance Neural Network

The **Fuzzy Adaptive Resonance Neural Network** module uses **unsupervised machine learning** in the form of **self-organizing neural networks** that allow to perform **realtime clustering**. By clicking on the ''features'' button, the choice of feature can be made. This module can be use to **modelize pathways in the state space of brain signal**. 

<img src="https://user-images.githubusercontent.com/49297774/152665319-aa3f7076-af02-47ad-8c3f-f349a5f6e24b.png" width="750">

## Biotuner modules

These modules interface the Biotuner Python toolbox (https://github.com/antoinebellemare/biotuner)
They allow to use **dynamical microtonal tunings** and **euclidean rhythms** derived from EEG signals for realtime musical composition.

### Tuning Foraging

The **Tuning Foraging** module allows **flexible control over biotunings**, whether by controlling how often the tuning changes, how many notes are in the tuning, as well as the degree of harmonic similarity between two successive tunings. 

<img src="https://user-images.githubusercontent.com/49297774/151845582-93dc7509-00aa-4430-876f-2fa14d691c2a.png" width="750">

### MIDI_microtonality

The **MIDI_microtonality** module allows to **load tuning files** from .scl and .txt, as well as **write new tunings** directly in the module. It can also be coupled with the Tuning Foraging module to **receive tunings dynamically from the Biotuner**.

<img src="https://user-images.githubusercontent.com/49297774/151845607-9367cadd-68ee-4c19-ae4a-8ad99d942e21.png" width="500">

### Biotuner-Euclid

The **Biotuner-Euclid** module produces euclidian polyrhythms based on EEG signal harmonic ratios. It can easily be coupled with _EEG_mapper_ module by mapping EEG features on sustains, rate of change or complexity values. It takes MIDI notes as input, and can therefore be integrated in an instrument rack with the _MIDI_microtonality_ and _Tuning_foraging_ modules to use bioharmonies in frequency and time domains simultaneously. 

<img src="https://user-images.githubusercontent.com/49297774/151903162-c7d53f09-d798-43b5-84b1-bb8ab0bcde5e.png" width="900">



