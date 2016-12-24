# can-route-react

[![Build Status](https://travis-ci.org/icanjs/can-route-react.png?branch=master)](https://travis-ci.org/icanjs/can-route-react)

State-based routing with React components.

## What's included

`can-route-react` is a collection of React components that help with routing.  The components are modeled after the ones found in [React Router](https://github.com/ReactTraining/react-router).  Here's the current list of components:

- [The Route Component](#the-route-component) - Show or hide components based route data.
- The Link Component - Create links from route state. (coming soon)

## State-Based Routing

State-based routing decouples the URL from your application's routing.  Routing rules and URLs are created from a state object. It's easier to change URL schemes when needed. The [can-route](https://www.npmjs.com/package/can-route) module is the best state-based router available.

## Preparation
Before you can use the components, you'll need to setup can-route.  Here's a basic example:

```js
import route from 'can-route';
import DefineMap from 'can-define/map/map';

// Create a DefineMap to setup route attributes.
const RouteMap = DefineMap.extend({
  '*': {
    serialize: true
  },
  // Define `page` as a string type.
  page: 'string'
});
route.data = new RouteMap({});

// Create a '/page' route.
route('{page}', {page: 'home'});

route.ready();
```

## The Route Component

The `<Route>` component declaratively maps routes to the component hierarchy. It basically shows/hides a component based on the route attributes you provide:

```jsx
import {Route} from 'can-route-react';

// Create a basic Home component.
Home () { return (<div>Welcome Home!</div>); }

// The Home component will show when the route has a `page` attribute equal to "home".
<Route data={{page: 'home'}} component={Home} />
```

An alternate syntax allows you to show/hide a component based on the URL path. This is similar to React Router's [Route](https://github.com/ReactTraining/react-router/blob/master/docs/API.md#route) component.

```jsx
import {Route} from 'can-route-react';

// The Home component will show when the URL path is "/" or empty string.
<Route path='/' component={Home} />
```

> Pro Tip: While the `path` syntax works just fine, it's not a recommended practice in state-based routing.  It tightly couples your component to the URL.  If you change your URL scheme, you have to fix every place that uses that URL.

### Route Example

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'can-route-react';

// Handlers for the links
homeClicked () {
  route.data.page = 'home';
}
aboutClicked () {
  route.data.page = 'about';
}

// Components to pass into the Route component.
Home () => {
  return (<div>Welcome Home!'</div>);
};
About () => {
  return (<div>About Us</div>);
};

ReactDOM.render(
  <div className='container'>
    <div>
      <a href='javascript://' onClick={homeClicked}>Home</a>
      <a href='javascript://' onClick={aboutClicked}>About</a>
    </div>
    <div>
			{/* React Router compatible syntax is available. See Pro-tips. */}
      <Route path='/' component={Home} />
      <Route path='/about' Component={About} />
    </div>
  </div>,
  document.querySelector('[root=true]')
);
```
