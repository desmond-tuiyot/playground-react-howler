import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";

import { useAudioPlayer } from "react-use-audio-player";
import { useAudioPosition } from "react-use-audio-player";
import PlaySeek from "../../components/PlaySeek";
import ProgressBar from "../../components/ProgressBar";
import Time from "../../components/Time";
import Volume from "../../components/Volume";
import fraud from "../../assets/fraud.mp3";
import omoshiroi from "../../assets/omoshiroi.mp3";
import slashy from "../../assets/slashy-show.mp3";
import useVolumeAndMute from "./hooks/useVolumeAndMute";

const AudioPlayer = () => {
  const [src, setSrc] = useState(fraud);
  const { togglePlayPause, ready, loading, playing, volume } = useAudioPlayer({
    src,
    format: "mp3",
    autoplay: false,
    onend: () => console.log("playback ended"),
    preload: true,
  });
  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });

  const [currentVolume, muteVolume, setVolume] = useVolumeAndMute(volume);

  // if (!ready && !loading) return <div>No audio to play</div>;
  // if (loading) return <div>Loading audio</div>;

  return (
    <Container maxWidth="sm">
      <Grid container spacing={0} direction="column">
        <Grid item>
          {loading ? (
            <Skeleton variant="rect" />
          ) : (
            <ProgressBar position={position} duration={duration} seek={seek} />
          )}
        </Grid>
        <Grid item container spacing={0} alignItems="center">
          <Grid item xs container justify="flex-start">
            {loading ? (
              <Skeleton variant="rect" width={20} />
            ) : (
              <Time position={position} duration={duration} />
            )}
          </Grid>
          <Grid item xs container justify="center">
            {loading ? (
              <Skeleton />
            ) : (
              <PlaySeek
                seek={seek}
                position={position}
                duration={duration}
                togglePlayPause={togglePlayPause}
                playing={playing}
              />
            )}
          </Grid>
          <Grid item xs>
            {loading ? (
              <Skeleton />
            ) : (
              <Volume
                currentVolume={currentVolume}
                muteVolume={muteVolume}
                setVolume={setVolume}
              />
            )}
          </Grid>
        </Grid>
        <Grid item container spacing={1} justify="center">
          <Grid item>
            <Button variant="outlined" fullWidth onClick={() => setSrc(fraud)}>
              Play Fraud
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setSrc(omoshiroi)}
            >
              Play Omoshiroi
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" fullWidth onClick={() => setSrc(slashy)}>
              Play The Slashy Show
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AudioPlayer;
