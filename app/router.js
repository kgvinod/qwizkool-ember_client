import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {


  // Summary index view of the qwizbooks
  this.resource('qwizbooks', function() {
      // create a new qwizbook
      this.route('new');

      // Detail view of the qwizbook
      this.route('detail', { path: ':qwizbook_id' });

      // Qwiz view
      this.route('qwiz');

      // Edit the qwizbooks and its components
      this.route('edit', { path: ':qwizbook_id/edit' }, function() {
      });

      this.resource('qwizbookSections', { path: '/:qwizbook_id/qwizbookSections' },function() {
        // create qwizbook section
        this.route('new');
        this.route('edit', { path: ':qwizbookSection_id/edit' });
      });

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
  this.route('qwizbooks/edit');
  this.resource('QwizbookPages', function() { });
  this.route('QwizbookSections/new');
  this.route('QwizbookSections/edit');
});
*/
