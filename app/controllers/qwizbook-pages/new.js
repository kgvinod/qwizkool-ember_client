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
  // isMediaUrlsValid: Ember.arrayComputed(
  //   'mediaUrls', function() {
  //
  //     var urls = this.get('mediaUrls');
  //     for (var i = 0, len = this.get('mediaUrls.length'); i < len; i++) {
  //
  //       console.log( urls.objectAt[i].get('mediaUrl'));
  //     }
  //
  //     return true;
  //   }
  // ),
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


    }


}

});
