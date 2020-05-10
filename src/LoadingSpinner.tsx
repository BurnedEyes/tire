import React from "react";
import "./LoadingSpinner.css";

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="Tire">
        <div className="Spoke">
          <div className="Spoke45">
            <div className="Spoke45">
              <div className="Spoke45"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingSpinner;
