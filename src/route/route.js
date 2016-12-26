import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import View from './route.jsx';
import route from 'can-route';
import isSubset from 'is-subset';
import isEmpty from 'lodash.isempty';
import {stripSlashes} from '../utils';

export const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
  },

  path: {
    type: 'string',
    get (lastSetVal) {
      if (lastSetVal) {
        return stripSlashes(lastSetVal);
      }
    }
  },

  displayComponent: {
    get () {
      let routeData = route.data.serialize();
      let data = this.data && this.data.serialize ? this.data.serialize() : this.data;
      if (data && !isEmpty(data)) {
        return isSubset(routeData, data);
      } else {
        var currentPath = route.url(route.data.serialize());
        if (currentPath) {
          currentPath = stripSlashes(currentPath).replace('#!', '');
        }
        return this.path === currentPath;
      }
    }
  },

  Component: {
    type: 'any',
    get (lastSetVal) {
      return lastSetVal || this.component;
    }
  },
  component: 'any'
});

export default connect(ViewModel, View);
