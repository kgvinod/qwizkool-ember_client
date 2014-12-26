import Ember from 'ember';

export default Ember.ObjectController.extend({
  types: ["Question", "Reinforcement", "Reference"],

  typeIsQuestion: function() {
    var type=this.get('type');
    return (type === "Question");
  }.property('type'),
  typeIsReinforcement: function() {
    var type=this.get('type');
    return (type === "Reinforcement");
  }.property('type'),
  typeIsReference: function() {
    var type=this.get('type');
    return (type === "Reference");
  }.property('type'),
  actions: {
    save: function() {
      return true;
    },
    cancel: function() {
      this.get('model').rollback();
      return true;
    },
    addNewMediaElements:function() {
      var mediaElement = this.get('store').createRecord('mediaUrl', {
        qwizbookPage: this.get('model'),
      });

      this.get('mediaUrls').pushObject(mediaElement);

    }
  }
});
