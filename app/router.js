import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('qwizbooks', function() {
      this.route('new');
  });

  this.route('qwizbooks/new');
});

export default Router;
