import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {

    startQwiz: function () {
      this.transitionToRoute('qwizbooks.qwiz');
    },
    editQwizbook: function (qwizbook) {
      this.transitionToRoute('qwizbooks.edit',qwizbook);
    }

  }
});
