import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('qwizbook');
  },
  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('qwizbooks/new');

      model.save().then(function(){
        _this.transitionTo('qwizbooks');
      });

    },
    cancel: function() {
      this.modelFor('qwizbooks/new').deleteRecord();
      this.transitionTo('qwizbooks');
    }
  }
});
