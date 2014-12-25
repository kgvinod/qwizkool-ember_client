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

  isValid: Ember.computed(
    'text', function() {
      return !Ember.isEmpty(this.get('text'));
    }
  ),
  isMediaUrlsValid: Ember.computed(
    'mediaUrls', function() {

      var urls = this.get('mediaUrls');
      for (var i = 0, len = this.get('mediaUrls.length'); i < len; i++) {

        console.log( urls.objectAt[i].get('mediaUrl'));
      }

      return true;
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid') && this.get('isMediaUrlsValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
        return false;
      }
    },
    tid:function ()
  {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  },
    addNewMediaElements:function() {
      var mediaElement = this.get('store').createRecord('mediaUrl', {
        qwizbookPage: null,
      });

      this.get('mediaUrls').pushObject(mediaElement);

    }
  }

});
