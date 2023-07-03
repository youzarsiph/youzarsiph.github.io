/**
 * Badges
 */

import React from "react";

const Badge = (props: { children: React.ReactNode }) => (
  <span className="badge">{props.children}</span>
);

export default Badge;
