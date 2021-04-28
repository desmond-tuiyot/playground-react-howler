import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import { useAudioPlayer } from "react-use-audio-player";
import { useAudioPosition } from "react-use-audio-player";

import PlaySeek from "../../components/PlaySeek";
import ProgressBar from "../../components/ProgressBar";
import Time from "../../components/Time";
import Volume from "../../components/Volume";
import fraud from "../../assets/slashy-show.mp3";
import useVolumeAndMute from "./hooks/useVolumeAndMute";

const AudioPlayer = () => {
  const { togglePlayPause, ready, loading, playing, volume } = useAudioPlayer({
    src: fraud,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("playback ended"),
    preload: true,
  });
  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });

  const [currentVolume, muteVolume, setVolume] = useVolumeAndMute(volume);

  //   const [currentVolume, setCurrentVolume] = useState(volume() || 0.5);
  //   const [volumeBeforeMute, setVolumeBeforeMute] = useState(volume());

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <Grid container spacing={0} direction="column">
      <Grid item>
        <ProgressBar position={position} duration={duration} seek={seek} />
      </Grid>
      <Grid item container spacing={0}>
        <Grid item xs container justify="flex-start">
          <Time position={position} duration={duration} />
        </Grid>
        <Grid item xs container justify="center">
          <PlaySeek
            seek={seek}
            position={position}
            duration={duration}
            togglePlayPause={togglePlayPause}
            playing={playing}
          />
        </Grid>
        <Grid item xs>
          <Volume
            currentVolume={currentVolume}
            muteVolume={muteVolume}
            setVolume={setVolume}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AudioPlayer;
