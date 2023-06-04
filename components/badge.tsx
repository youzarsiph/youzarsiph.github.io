/**
 * Badges
 */

import React from "react";

const Badge = (props: { color: string; children: React.ReactNode }) => (
  <span
    className={`badge ${
      props.color === "primary" ? "badge-primary" : "badge-secondary"
    }`}
  >
    {props.children}
  </span>
);

export default Badge;
