import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Replay5OutlinedIcon from "@material-ui/icons/Replay5Outlined";
import Forward5OutlinedIcon from "@material-ui/icons/Forward5Outlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
// import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
// import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined';
// import VolumeMuteOutlinedIcon from '@material-ui/icons/VolumeMuteOutlined';
import { useAudioPlayer } from "react-use-audio-player";
import { useAudioPosition } from "react-use-audio-player";

import fraud from "../../assets/slashy-show.mp3";

const formatTime = (duration) => {
  let seconds = Math.floor(duration % 60);
  let minutes = Math.floor(duration / 60);
  minutes = minutes > 9 ? minutes : `0${minutes}`;

  return `${minutes}:${seconds}`;
};

const AudioPlayer = () => {
  const {
    togglePlayPause,
    ready,
    loading,
    playing,
    mute,
    volume,
  } = useAudioPlayer({
    src: fraud,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("playback ended"),
    preload: true,
  });
  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });

  const [currentVolume, setCurrentVolume] = useState(volume() || 0.5);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState(volume());

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <Grid container spacing={0} direction="column">
      <Grid item>
        <Slider
          value={position}
          onChange={(_, newValue) => seek(newValue)}
          min={0}
          max={duration}
          aria-label="progress bar"
        />
      </Grid>
      <Grid item container spacing={0}>
        <Grid item xs container justify="flex-start">
          <Typography variant="body2">
            <span role="current-time" aria-label="current time">
              {formatTime(position)}
            </span>
            /
            <span role="duration" aria-label="duration">
              {formatTime(duration)}
            </span>
          </Typography>
        </Grid>
        <Grid item xs container justify="center">
          <IconButton
            aria-label="replay"
            onClick={() => {
              seek(position < 5 ? 0 : position - 5);
            }}
          >
            <Replay5OutlinedIcon />
          </IconButton>
          <IconButton aria-label="play" onClick={togglePlayPause}>
            {playing ? (
              <PauseCircleOutlineOutlinedIcon />
            ) : (
              <PlayArrowOutlinedIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="forward"
            onClick={() => {
              seek(position + 5 > duration ? duration : position + 5);
            }}
          >
            <Forward5OutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item xs container justify="flex-end">
          <Grid item xs={2} container alignItems="center">
            <IconButton
              aria-label="volume"
              onClick={() => {
                if (volume() > 0) {
                  setVolumeBeforeMute(volume());
                  volume(0);
                  setCurrentVolume(0);
                } else {
                  setCurrentVolume(volumeBeforeMute);
                  volume(volumeBeforeMute);
                }
              }}
            >
              <VolumeUpOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} container alignItems="center">
            <Slider
              value={currentVolume}
              onChange={(_, newValue) => {
                console.log("here");
                volume(newValue);
                setCurrentVolume(newValue);
              }}
              min={0}
              step={0.001}
              max={1}
              aria-label="volume slider"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AudioPlayer;
