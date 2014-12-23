import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('qwizbookPage', {
      qwizbookSection: this.modelFor('qwizbookSections.edit'),
    });
  },
  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('qwizbooks.detail');

      model.save().then(function(){
        _this.transitionTo('qwizbookPages');
      });

    },
    cancel: function() {
      this.modelFor('qwizbookPages.new').deleteRecord();

      this.transitionTo('qwizbookPages');
    }
  }
});
