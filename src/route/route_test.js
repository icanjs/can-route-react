/* global describe, it */
import 'steal-mocha';
import assert from 'assert';
import route from 'can-route';
import {ViewModel as RouteVM} from './route';

route('{page}', {page: 'home'});
route.ready();

describe('Route ViewModel attributes', function () {
  it('There is no Component by default.', function () {
    let vm = new RouteVM();
    assert(vm.Component === undefined);
    assert(vm.component === undefined);
  });

  it('There is no path by default.', function () {
    let vm = new RouteVM();
    assert(vm.path === undefined);
  });

  it('displayComponent is false by default.', function () {
    let vm = new RouteVM();
    assert(vm.displayComponent === false);
  });

  it('component is accessible by Component, as well.', function () {
    let vm = new RouteVM({
      component: 'test'
    });
    assert(vm.Component === 'test');
  });

  it('a matching path will cause the component to show.', function () {
    let vm = new RouteVM({
      path: '/'
    });
    assert(vm.displayComponent);
  });

  it('matching data will cause the component to show.', function () {
    let vm = new RouteVM({
      data: {
        page: 'home'
      }
    });
    assert(vm.displayComponent);
  });
});
