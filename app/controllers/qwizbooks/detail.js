import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {

    startQwiz: function () {
      this.transitionToRoute('qwizbooks.qwiz');
    }

  }
});
