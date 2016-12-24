import React from 'react';
import ReactDOM from 'react-dom';
import route from 'can-route';
import DefineMap from 'can-define/map/map';
import Route from './route';

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

function homeClicked () {
  route.data.page = 'home';
}
function aboutClicked () {
  route.data.page = 'about';
}

const Home = () => {
  return (<div>Welcome Home!'</div>);
};
const About = () => {
  return (<div>About Us</div>);
};

ReactDOM.render(
  <div className='container'>
    <div>
      <a href='javascript://' onClick={homeClicked}>Home</a>
      <a href='javascript://' onClick={aboutClicked}>About</a>
    </div>
    <div>
      <Route path='/' component={Home} data={route.data} />
      <Route path='/about' Component={About} data={route.data} />
    </div>
  </div>,
  document.querySelector('[root=true]')
);
