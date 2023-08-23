import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgcolor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgcolor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}> {this.props.text} </p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(0,0,255)"; //blue
    this.bgcolor = "rgb(220,220,255)"; //light blue
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255, 0, 0)"; //red
    this.bgcolor = "rgb(255, 220, 220)"; //light red
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(255,128,0"; //orange
    this.bgcolor = "rgb(255,206,153"; //light orange
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
