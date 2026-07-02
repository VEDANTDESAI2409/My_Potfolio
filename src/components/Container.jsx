import React from "react";

export default function Container({ as: Component = "section", className = "", children, ...props }) {
  return (
    <Component className={`layout-container ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
