import { screen, render } from "@testing-library/react";
import AudioPlayer from "../AudioPlayer";

// describe("audio player interface is rendered", () => {
//   test("audio controls are rendered", async () => {
//     render(<AudioPlayer />);

//     // test that progress bar is displayed
//     const progressBar = await screen.findByRole("slider", {
//       name: "progress bar",
//     });
//     expect(progressBar).toBeInTheDocument();

//     // current time and duration are rendered
//     const currentTime = await screen.findByRole("current-time", {
//       name: "current time",
//     });
//     const duration = await screen.findByRole("duration", { name: "duration" });
//     expect(currentTime).toBeInTheDocument();
//     expect(duration).toBeInTheDocument();

//     // test that play and seek buttons are displayed
//     const playButton = await screen.findByRole("button", { name: "play" });
//     const replay = await screen.findByRole("button", { name: "replay" });
//     const forward = await screen.findByRole("button", { name: "forward" });

//     expect(playButton).toBeInTheDocument();
//     expect(replay).toBeInTheDocument();
//     expect(forward).toBeInTheDocument();

//     // test that settings and volume buttons are displayed
//     // const settings = await screen.findByRole("button", { name: "more settings" });
//     const volume = await screen.findByRole("button", { name: "volume" });
//     const volumeSlider = await screen.findByRole("slider", {
//       name: "volume slider",
//     });
//     // expect(settings).toBeInTheDocument();
//     expect(volume).toBeInTheDocument();
//     expect(volumeSlider).toBeInTheDocument();
//   });
// });
