import Ember from 'ember';

export default Ember.ObjectController.extend({
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
