import Properties from ".";
import { Component, ReactNode } from "react";

class Badge extends Component<Properties> {
  render(): ReactNode {
    let colors = {
      primary: "badge-primary",
      secondary: "badge-secondary",
    };

    let modifier: string;

    if (typeof this.props.color === "string") {
      if (this.props.color === "primary") {
        modifier = colors.primary;
      } else {
        modifier = colors.secondary;
      }
    } else {
      modifier = colors.primary;
    }

    return <span className={`badge ${modifier}`}>{this.props.children}</span>;
  }
}

export default Badge;
