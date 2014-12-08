import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {

    startQwiz: function () {
      this.transitionToRoute('qwizbooks.qwiz');
    },

    editQwizbook: function (qwizbook) {
      // qwizbookSections is rendered on the outlet of edit
      // hence directly refer to that route!!
      this.transitionToRoute('qwizbookSections',qwizbook);
    }

  }
});
