import Properties from ".";
import { Component, ReactNode } from "react";

class Card extends Component<Properties> {
  render(): ReactNode {
    return <div className="card">{this.props.children}</div>;
  }
}

export default Card;
