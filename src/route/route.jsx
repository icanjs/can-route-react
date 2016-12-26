import React from 'react';

export default ({displayComponent, Component, children}) => {
  return displayComponent ? (<Component>{children}</Component>) : null;
};
