# EEG_m4l
Bundle of Max4Live devices to use EEG signal in dynamical audio-visual composition

This bundle is designed to be coupled with the use of EEG_synth (https://github.com/hyruuk/eegsynth/tree/dev_cbc)
The _EEG_stream_ module allows to receive the OSC messages and stream it to any other module that requires it.
The modulation modules can be used without the live EEG stream.

## Simple use case

Insert the _EEG_stream_ module in any Ableton track and set the UDP port accordingly to your EEG_synth patch

![image](https://user-images.githubusercontent.com/49297774/146255300-948aec1a-bf1f-4ff4-96e7-e0a0d4d262a7.png)

Insert the _EEG_mapper_ module in any Ableton track and choose the **feature** that you want to map on any control parameter

![image](https://user-images.githubusercontent.com/49297774/146256073-661efff6-66cb-4208-896c-c7f3c9f053c1.png)

