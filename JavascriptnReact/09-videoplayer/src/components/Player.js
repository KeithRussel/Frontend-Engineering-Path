import React from "react";
import { Video } from "./Video";
import { Menu } from "./Menu";

const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

// The VideoPlayer component is a container for the Video and Menu components.
export class Player extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the state of the component.
    this.state = { src: VIDEOS.fast };
    // Bind the chooseVideo method to the component.
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  // ChooseVideo is a method that changes the src of the Video component.
  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo],
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}
