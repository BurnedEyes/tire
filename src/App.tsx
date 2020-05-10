import React from "react";
import Panel from "./Panel";
import { PanelType } from "./PanelType";
import "./App.css";

class App extends React.Component<undefined, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: PanelType.Login,
    };
  }
  render() {
    return (
      <div className="App">
        <div className="Background"></div>
        <div
          onClick={() => {
            this.setState({ active: PanelType.Register });
          }}
        >
          <Panel
            type={PanelType.Register}
            initActive={this.state.active === PanelType.Register}
          />
        </div>
        <div
          onClick={() => {
            this.setState({ active: PanelType.Login });
          }}
        >
          <Panel
            type={PanelType.Login}
            initActive={this.state.active === PanelType.Login}
          />
        </div>
      </div>
    );
  }
}

type AppState = {
  active: PanelType;
};

export default App;
