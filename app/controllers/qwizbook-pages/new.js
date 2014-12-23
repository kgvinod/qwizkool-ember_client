import Ember from 'ember';

export default Ember.ObjectController.extend({
  types: ["Question", "Reinforcement", "Reference"],
  isValid: Ember.computed(
    'text', function() {
      return !Ember.isEmpty(this.get('text'));
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
