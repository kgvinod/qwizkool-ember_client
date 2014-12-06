import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('qwizbooks', function() {
      this.route('new');
      this.route('detail', { path: ':qwizbook_id' }, function() {
      });
      this.route('qwiz',function() {});
      
  });

});

export default Router;

/*
// List all qwizbooks
this.resource('qwizbooks', function() {

  // create qwizbook
  this.route('new');

  // show detailed view of qwizbook
  this.route('detail', { path: ':qwizbook_id' }, function() {

    // show detailed view of qwizbook
    this.route('qwiz', function() {});

  });

  // Edit the qwizbooks and its components
  this.route('edit', { path: ':qwizbook_id/edit' }, function() {
    // List sections
    this.resource('qwizbookSections',function() {
      // edit sections
      this.route('edit', { path: ':qwizbookSection_id/edit' }, function() {
        // list pages
        this.resource('qwizbookPages',function() {
          // edit pages
          this.route('edit', { path: ':qwizbookPage_id/edit' }, function() {})

        });
      });

    });
  });


  this.route('qwizbooks/qwiz');
});
*/
