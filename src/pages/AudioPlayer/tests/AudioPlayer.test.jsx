import { screen, render } from "@testing-library/react";
import AudioPlayer from "../AudioPlayer";

describe("audio player interface is rendered", () => {
  test("duration display are displayed", () => {
    render(<AudioPlayer />);

    // test that progress bar is displayed
    const progressBar = screen.getByRole("slider", { name: "progress bar" });
    expect(progressBar).toBeInTheDocument();

    // current time and duration are rendered
    const currentTime = screen.getByRole("current-time", {
      name: "current time",
    });
    const duration = screen.getByRole("duration", { name: "duration" });
    expect(currentTime).toBeInTheDocument();
    expect(duration).toBeInTheDocument();

    // test that play and seek buttons are displayed
    const playButton = screen.getByRole("button", { name: "play" });
    const replay = screen.getByRole("button", { name: "replay" });
    const forward = screen.getByRole("button", { name: "forward" });

    expect(playButton).toBeInTheDocument();
    expect(replay).toBeInTheDocument();
    expect(forward).toBeInTheDocument();

    // test that settings and volume buttons are displayed
    const settings = screen.getByRole("button", { name: "more settings" });
    const volume = screen.getByRole("button", { name: "volume" });
    expect(settings).toBeInTheDocument();
    expect(volume).toBeInTheDocument();
  });
});
