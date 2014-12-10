import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('qwizbooks/detail');

      model.save().then(function(){
        _this.transitionTo('qwizbooks');
      });

    },
    cancel: function() {
      this.transitionTo('qwizbooks');
      return true;
    }
  }
});
