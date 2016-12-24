import route from 'can-route';

/**
 * Normalizes provided URLs by removing slashes from start and finish.
 */
export function stripSlashes (location) {
  return location.replace(/^(\/*)|(\/*)$/g, '');
}

export function usingHashChangeRouting () {
  return route.url({}).indexOf('#!') >= 0;
}
