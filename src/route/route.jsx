import React from 'react';

export default ({displayComponent, Component, children}) => {
  const isFunction = typeof Component === 'function';
  if (!isFunction && children) {
    console.error(`Component passed with props can't have children.`);
  }
  var ComponentOutput = isFunction ? <Component>{children}</Component> : Component;
  return displayComponent ? ComponentOutput : null;
};
