import Properties from ".";
import { Component, ReactNode } from "react";

class Container extends Component<Properties> {
  render(): ReactNode {
    return (
      <section className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-96">
        {this.props.children}
      </section>
    );
  }
}

export default Container;
