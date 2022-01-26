![MEME-2022_03](https://user-images.githubusercontent.com/49297774/151101793-c6b08013-232f-44fd-aee6-3b17578f600d.png)


# Modular EEG Mapping Echosystem (MEME)

Bundle of Max4Live devices using EEG signal for dynamical audio-visual composition. It is designed to provide flexible mapping of real-time EEG signals for digital artists.

This bundle is designed to be coupled with the use of EEG_synth (https://github.com/hyruuk/eegsynth/tree/dev_cbc) and Muse headset.
The _EEG_stream_ module allows to receive the OSC messages and stream it to any other module that requires it.
If the user doesn't have a Muse headset, the module EEG_playback allows to stream pre-recorder EEG signals.
The modulation modules can be used without the live EEG stream.

## Simple use case

Insert the _EEG_stream_ module in any Ableton track and set the UDP port accordingly to your EEG_synth patch

![image](https://user-images.githubusercontent.com/49297774/146255300-948aec1a-bf1f-4ff4-96e7-e0a0d4d262a7.png)

Insert the _EEG_mapper_ module in any Ableton track and choose the **feature** that you want to map on any control parameter

![image](https://user-images.githubusercontent.com/49297774/146256073-661efff6-66cb-4208-896c-c7f3c9f053c1.png)

## EEG_playback module

![EEG_playback](https://user-images.githubusercontent.com/49297774/150669553-0d1533ef-7ea6-4e1e-9355-2a4efa24a73c.png)

The EEG_playback module can replace the EEG_stream module when pre-recorded signals are used. When signal is streamed, all the other modules are able to receive the data they are expected.

## Cognitive accumulator/trigger

![image](https://user-images.githubusercontent.com/49297774/150669653-80abe0b5-b1c8-497e-ab6a-cf603d51866a.png)

The cognitive accumulator/trigger is a module designed to trigger events in the form of audio clips, or musical scenes. The trigger happens when a specific EEG feature reaches a chosen threshold and stays above it for a certain amount of time, indicating that ‘’a state’’ has been detected. This module allows to navigate between musical scenes based on the detection of cognitive states. 

## Brain decoder

The Brain decoder module uses supervised machine learning classifiers. By feeding data from different mental states, the algorithm learns to classify new data as belonging to one of the pre-learned state. By clicking on the ''feature engineering'' button, the choice of feature can be made.

## Biotuner modules

![MIDI_microtonality](https://user-images.githubusercontent.com/49297774/151101907-48febc60-ceb0-434a-a006-2d706b39c1c1.png)

These modules interface the Biotuner Python toolbox (https://github.com/antoinebellemare/biotuner)
They allow to use dynamical microtonal tunings and euclidean rhythms derived from EEG signals for realtime musical composition.
