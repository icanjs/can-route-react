import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import View from './route.jsx';
import route from 'can-route';
import {stripSlashes, usingHashChangeRouting} from '../utils';

export const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
  },

  path: {
    type: 'string',
    get (lastSetVal) {
      return stripSlashes(lastSetVal);
    }
  },

  displayComponent: {
    type: 'boolean',
    value: false,
    get () {
      var currentPath = route.url(route.data.serialize());
      currentPath = stripSlashes(currentPath).replace('#!', '');
      return this.path === currentPath;
    }
  },

  component: {
    type: 'any',
    get (lastSetVal) {
      return lastSetVal || this.Component;
    }
  },
  Component: 'any'
});

export default connect(ViewModel, View);
