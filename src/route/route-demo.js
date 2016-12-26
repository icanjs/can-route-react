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
  page: 'string',
  name: 'string'
});
route.data = new RouteMap({});

// Create a '/page' route.
route('{page}', {page: 'home'});
route('{page}/{name}', {page: 'home'});

route.ready();

function homeClicked () {
  route.data.set({
    page: 'home',
    name: undefined
  });
}
function aboutClicked () {
  route.data.page = 'about';
  route.data.name = undefined;
}
function contactClicked () {
  route.data.set({
    page: 'contact',
    name: 'marshall'
  });
}

const Home = () => {
  return (<div>Welcome Home!</div>);
};
const About = () => {
  return (<div>About Us</div>);
};
const ContactUs = ({children}) => {
  return (<div>{children}</div>);
};


ReactDOM.render(
  <div className='container'>
    <div>
      <a href='javascript://' onClick={homeClicked}>Home</a>
      <a href='javascript://' onClick={aboutClicked}>About</a>
      <a href='javascript://' onClick={contactClicked}>Contact Us</a>
    </div>
    <div>
      <Route data={{page: 'home'}} component={Home} />
      <Route path='/about' Component={About} >
        This text won't show, because the `About` component doesn't use %7Bchildren%7D.
      </Route>
      <Route data={{page: 'contact'}} Component={ContactUs} >
        Get in touch!
      </Route>
    </div>
  </div>,
  document.querySelector('[root=true]')
);
