import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //console.log(this.store.find('qwizbook',id).get('qwizbookSections'));
  //  return this.store.find('qwizbook',id).get('qwizbookSections');
  return this.modelFor('qwizbooks/detail').get('qwizbookSections');

  },

  actions: {
    addNewSection: function () {
      var model = this.modelFor('qwizbooks/detail');
      this.transitionTo('qwizbookSections.new', model);
    },

  }
});
