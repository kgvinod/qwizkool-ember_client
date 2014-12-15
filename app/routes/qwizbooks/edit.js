import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('qwizbooks/detail');

      model.save().then(function(){
        _this.transitionTo('qwizbooks.detail', model);
      });

    },
    cancel: function() {
      var model = this.modelFor('qwizbooks/detail');
      this.transitionTo('qwizbooks.detail',model);
    },
    editSections: function () {
      var model = this.modelFor('qwizbooks/detail');
      console.log(model.id);
      this.transitionTo('qwizbookSections', model.id);
    },
  }
});
