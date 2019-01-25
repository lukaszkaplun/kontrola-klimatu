import React from "react";
import Waypoint from "react-waypoint";
export class InView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };
  }
  componentDidMount() {
    if (window) {
      window.addEventListener("resize", this.onEnter);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.onEnter);
    }
  }
  
  onEnter = ({ currentPosition, previousPosition, waypointTop }) => {
    if (currentPosition === Waypoint.inside) {
      this.setState({ isInView: true });
      console.log(currentPosition)
    }
    if (previousPosition === Waypoint.below) {
      this.setState({ isInView: true });
    }
  };


  render() {

    return (
      <div>
        <Waypoint 
       
    //    onEnter={this.onEnter}
    //       topOffset={"0px"}
    //       bottomOffset={"90%"}
          scrollableAncestor={window}
        >
          {this.props.children}
        </Waypoint>
      </div>
    );
  }
}