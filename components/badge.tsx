import Properties from ".";
import { Component, ReactNode } from "react";

class Badge extends Component<Properties> {
  render(): ReactNode {
    let colors = {
      primary: "badge-primary",
      secondary: "badge-secondary",
    };

    return (
      <span className={`badge ${colors[this.props.color]}`}>
        {this.props.children}
      </span>
    );
  }
}

export default Badge;
