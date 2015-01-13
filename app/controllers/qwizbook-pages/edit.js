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
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
        return false;
      }
    },

    addNewMediaElements:function() {
      var _this=this;

      var mediaElement = this.store.createRecord('mediaUrl', {
        qwizbookPage: _this.get('model'),
      });
      this.get('mediaUrls').addObject(mediaElement);


    },

    addNewChoiceElements:function() {
      var _this=this;

      var choiceElement = this.store.createRecord('choice', {
        qwizbookPage: _this.get('model'),
      });
      this.get('choices').addObject(choiceElement);

    },

    cancel: function() {
      this.get('model').rollback();
      return true;
    },

  }
});
