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
        this.get('model').save();
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;

    },
    cancel: function() {
      console.log('+- cancel action in friends new controller');
      return true;
    }
  }

});
