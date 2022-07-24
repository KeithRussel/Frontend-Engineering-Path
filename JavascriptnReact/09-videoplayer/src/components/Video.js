import React from "react";

// The Video component is a stateless functional component.
export class Video extends React.Component {
  render() {
    return (
      // this.props.src is the src of the video.
      <div>
        <video src={this.props.src} controls autostart autoPlay muted />
      </div>
    );
  }
}
