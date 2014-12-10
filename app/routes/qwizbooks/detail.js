import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return this.store.find('qwizbook',params.qwizbook_id);
  },
  actions: {

    startQwiz: function () {
      this.transitionTo('qwizbooks.qwiz');
    },

    editQwizbook: function (qwizbook) {
      // qwizbookSections is rendered on the outlet of edit
      // hence directly refer to that route!!
      this.transitionTo('qwizbookSections',qwizbook);
    }

  }
});
