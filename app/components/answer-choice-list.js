import Ember from 'ember';

export default Ember.Component.extend({
  answerChoices:[],

  urlTypes: ["None","Image", "Video", "Audio"],

  actions: {
    removeItem: function(item) {
      this.sendAction('removeItem', item);
    }
  }
});
