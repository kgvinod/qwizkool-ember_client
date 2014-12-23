import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('qwizbookSections.edit').get('qwizbookPages');
  },
  actions: {

    addNewPage: function () {
      this.transitionTo('qwizbookPages.new');
    },
    editQwizbookPage: function (page) {
      this.transitionTo('qwizbookPages.edit',page);
    }
  }
});
