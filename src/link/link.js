import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import View from './link.jsx';
import route from 'can-route';

export const ViewModel = DefineMap.extend({
  activeTab: {
    type: 'string',
    set (val) {
      if (this.routeAttr) {
        route.data[this.routeAttr] = val;
      }
      return val;
    }
  },

  routeAttr: 'string',

  setTab (tab) {
    return function () {
      this.activeTab = tab;
    }.bind(this);
  }
});

export default connect(ViewModel, View);
