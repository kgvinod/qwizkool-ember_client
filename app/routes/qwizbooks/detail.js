import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    startQwiz: function (qwizbook) {
      this.transitionTo('qwizbooks.qwiz',qwizbook);
    },

    editQwizbook: function (qwizbook) {
      // qwizbookSections is rendered on the outlet of edit
      // hence directly refer to that route!!
      this.transitionTo('qwizbooks.edit',qwizbook.id);
    }

  }
});
