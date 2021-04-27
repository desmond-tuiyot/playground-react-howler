import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import AudioPlayer from "./pages/AudioPlayer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>React howler</h1>
        <AudioPlayer />
      </div>
    </ThemeProvider>
  );
}

export default App;
