import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeItem: function(item) {
      this.sendAction('removeItem', item);
    }
  }
});
