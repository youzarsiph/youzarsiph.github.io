/**
 * Container
 */

import React from "react";

const Container = (props: { children: React.ReactNode }) => (
  <section className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
    {props.children}
  </section>
);

export default Container;
