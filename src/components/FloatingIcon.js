import React, { Component } from "react";
export default class FloatingIcon extends Component {
  render() {
    return (
      <div className="floating-icon">
        <button onClick={this.props.handleClick}>
          {/* <img src={telIcon} alt="telephone" /> */}

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="48px"
            height="48px"
            viewBox="0 0 48 48"
            xmlSpace="preserve"
          >
            <path
             
              d="M45.906,34.869L35.35,31.523c-0.894-0.281-1.86-0.047-2.521,0.615l-3.781,3.78
		c-0.32,0.321-0.813,0.387-1.205,0.16c-1.487-0.856-4.963-2.97-8.957-6.964s-6.108-7.47-6.964-8.957
		c-0.226-0.393-0.162-0.883,0.158-1.203l3.571-3.571c0.792-0.792,1.073-1.956,0.735-3.024L13.131,2.094
		C12.736,0.847,11.579,0,10.271,0H7.848C5.573,0.03,0,6.864,0,11.323c0,2.684,0.91,12.352,12.613,24.055
		C24.324,47.09,33.993,48,36.677,48C41.136,48,47.97,42.428,48,40.139v-2.409C48,36.421,47.152,35.264,45.906,34.869"
            />
          </svg>
        </button>
      </div>
    );
  }
}
