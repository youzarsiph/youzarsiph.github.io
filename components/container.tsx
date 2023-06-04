/**
 * Container
 */

import React from "react";

const Container = (props: { children: React.ReactNode }) => (
  <section className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-96">
    {props.children}
  </section>
);

export default Container;
