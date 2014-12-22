import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('qwizbooks.detail').get('qwizbookSections');
  },

  actions: {
    addNewSection: function () {
      this.transitionTo('qwizbookSections.new');
    },
    editQwizbookSection: function (section) {
      // qwizbookSections is rendered on the outlet of edit
      // hence directly refer to that route!!
      this.transitionTo('qwizbookSections.edit',section);
    }
  }
});
