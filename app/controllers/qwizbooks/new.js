import Ember from 'ember';

export default Ember.ObjectController.extend({

  isValid: Ember.computed(
    'title', function() {
      return !Ember.isEmpty(this.get('title'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(qwizbook){
        // this.get('model').save().then(function(qwizbook){
        //  _this.transitionToRoute('qwizbook.show', qwizbook);
          _this.transitionToRoute('qwizbooks');

        });

      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;

    },
    cancel: function() {
      this.transitionToRoute('qwizbooks');
      return true;
    }
  }

});
