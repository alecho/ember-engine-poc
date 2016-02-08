import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.mount('routable-engines', { as: 'boom' });
});

export default Router;
