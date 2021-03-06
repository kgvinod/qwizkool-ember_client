import Ember from 'ember';

export default Ember.Component.extend({
  urlTypes: ["Image", "Video", "Audio"],
  actions: {
    removeItem: function(item) {
      this.sendAction('removeItem', item);
    }
  }
});
