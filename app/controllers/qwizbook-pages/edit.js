import Ember from 'ember';

export default Ember.ObjectController.extend({
  types: ["Question", "Reinforcement", "Reference"],
  actions: {
    save: function() {
      return true;
    },
    cancel: function() {
      this.get('model').rollback();
      return true;
    }
  }
});
