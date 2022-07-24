import React from "react";

// The Menu component is a stateless functional component.
export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  // HandleClick is a method that changes the src of the Video component.
  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }
  render() {
    return (
      // this.handleClick is the onClick handler for the buttons.
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
