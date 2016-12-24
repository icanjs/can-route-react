import React from 'react';

export default ({displayComponent, component}) => {
  var Component = component;
  return displayComponent ? (<Component />) : null;
};
