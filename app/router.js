import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('qwizbooks', function() {
      this.route('new');
      this.route('detail', { path: ':qwizbook_id' });
  });

});

export default Router;
