import { ThemeProvider } from "@material-ui/core/styles";
import { AudioPlayerProvider } from "react-use-audio-player";

import theme from "./theme";
import AudioPlayer from "./pages/AudioPlayer";
import Heading from "./components/Heading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Heading />
        <AudioPlayerProvider>
          <AudioPlayer />
        </AudioPlayerProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
