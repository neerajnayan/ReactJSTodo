import React from 'react';

// This component is no longer in use as
// FilterLink component is updated to use react-router Link component
// See FilterLink.js
const Link = ({
  active,
  children,
  onClick
  }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
      >
      {children}
    </a>
  );
};

export default Link;