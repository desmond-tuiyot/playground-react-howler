import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Replay5OutlinedIcon from "@material-ui/icons/Replay5Outlined";
import Forward5OutlinedIcon from "@material-ui/icons/Forward5Outlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
// import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
// import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
// import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined';
// import VolumeMuteOutlinedIcon from '@material-ui/icons/VolumeMuteOutlined';

const AudioPlayer = () => {
  return (
    <Grid container spacing={0} direction="column">
      <Grid item>
        <Slider value={0} onChange={() => {}} aria-label="progress bar" />
      </Grid>
      <Grid item container spacing={0}>
        <Grid item xs container justify="flex-start">
          <Typography variant="body2">
            <span role="current-time" aria-label="current time">
              00:00
            </span>
            /
            <span role="duration" aria-label="duration">
              20:00
            </span>
          </Typography>
        </Grid>
        <Grid item xs container justify="center">
          <IconButton aria-label="replay">
            <Replay5OutlinedIcon />
          </IconButton>
          <IconButton aria-label="play">
            <PlayArrowOutlinedIcon />
          </IconButton>
          <IconButton aria-label="forward">
            <Forward5OutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item xs container justify="flex-end">
          <IconButton aria-label="more settings">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton aria-label="volume">
            <VolumeUpOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AudioPlayer;
