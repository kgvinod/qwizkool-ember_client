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
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
        return false;
      }
    }
  }
  
});
