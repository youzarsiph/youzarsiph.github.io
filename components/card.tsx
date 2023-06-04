/**
 * Cards
 */

import React from "react";

const Card = (props: { children: React.ReactNode }) => (
  <div className="card">{props.children}</div>
);

export default Card;
