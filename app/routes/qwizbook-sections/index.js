import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Get from the parent routes model
    return this.modelFor('qwizbooks/edit').get('qwizbookSections');
  }
});
