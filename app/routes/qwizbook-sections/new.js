import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('qwizbookSection', {
      qwizbook: this.modelFor('qwizbooks/detail'),
    });
  },
  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('qwizbooks/detail');

      model.save().then(function(){
        _this.transitionTo('qwizbookSections');
      });

    },
    cancel: function() {
      this.transitionTo('qwizbookSections');
      return true;
    }
  }
});
