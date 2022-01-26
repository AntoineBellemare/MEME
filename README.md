![MEME-2022_03](https://user-images.githubusercontent.com/49297774/151102306-3c10e827-45d8-4783-a560-400613e6db8f.png)

Bundle of Max4Live devices using EEG signal for dynamical audio-visual composition. It is designed to provide flexible mapping of real-time EEG signals for digital artists.

This bundle is primarilly intended to be coupled with the use of EEG_synth (https://github.com/hyruuk/eegsynth/tree/dev_cbc) and Muse headset.
The _EEG_stream_ module allows to receive the OSC messages and stream it to any other module that requires it.
If the user doesn't have a Muse headset, the module EEG_playback allows to stream pre-recorder EEG signals.
The modulation modules can be used without the live EEG stream.

## Simple use case

Insert the __EEG_stream__ module in any Ableton track and set the UDP port accordingly to your EEG_synth patch. The light will flash if data is received.

![EEG_stream](https://user-images.githubusercontent.com/49297774/151105209-fd701256-cc9b-4d87-8d34-5ba7588c75bf.png)

Insert the **EEG_mapper** or **EEG_mapper_multi** module in any Ableton track and choose the **feature** that you want **to map on any control parameter**

![EEG_mapper](https://user-images.githubusercontent.com/49297774/151104876-2b1f099b-cba5-4aca-a236-c1e4cee83a6b.png)

![EEG_mapper_multi](https://user-images.githubusercontent.com/49297774/151104881-e60cfab6-2d3e-419c-8259-fdd758731785.png)


## EEG_playback module

The **EEG_playback** module can replace the EEG_stream module when pre-recorded signals are used. When signal is streamed, all the other modules are able to receive the data they are expected.

![EEG_playback](https://user-images.githubusercontent.com/49297774/150669553-0d1533ef-7ea6-4e1e-9355-2a4efa24a73c.png)

## Cognitive accumulator/trigger

The **cognitive accumulator/trigger** is a module designed to **trigger events such as audio clips, or musical scenes**. The trigger happens when a specific EEG feature reaches a chosen threshold and stays above it for a certain amount of time, indicating that ‘’a state’’ has been detected. This module allows to navigate between musical scenes based on the detection of cognitive states. 

![image](https://user-images.githubusercontent.com/49297774/150669653-80abe0b5-b1c8-497e-ab6a-cf603d51866a.png)

## Brain decoder

The **Brain decoder** module uses **supervised machine learning classifiers**. By feeding data from different mental states, the algorithm learns to classify new data as belonging to one of the pre-learned state. By clicking on the ''feature engineering'' button, the choice of feature can be made.

## Biotuner modules

These modules interface the Biotuner Python toolbox (https://github.com/antoinebellemare/biotuner)
They allow to use **dynamical microtonal tunings** and **euclidean rhythms** derived from EEG signals for realtime musical composition.

The **Tuning Foraging** module allows **flexible control over biotunings**, whether by controlling how often the tuning changes, how many notes are in the tuning, as well as the degree of harmonic similarity between two successive tunings. 

![Tuning_foraging](https://user-images.githubusercontent.com/49297774/151102421-7a62b5f3-9b08-48af-b410-2398b50945fa.png)

The **MIDI_microtonality** module allows to **load tuning files** from .scl and .txt, as well as **write new tunings** directly in the module. It can also be coupled with the Tuning Foraging module to **receive tunings dynamically from the Biotuner**.

![MIDI_microtonality](https://user-images.githubusercontent.com/49297774/151101907-48febc60-ceb0-434a-a006-2d706b39c1c1.png)




