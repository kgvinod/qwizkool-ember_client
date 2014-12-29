import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    var newSection=this.store.createRecord('qwizbookSection');
    this.store.find('qwizbook',params.qwizbook_id).then(function(m){
      newSection.set('qwizbook', m);
    })

    return newSection;
  },
  actions: {
    save: function() {
      var _this = this;
      var model=this.controller.get('model').get('qwizbook');
      model.save().then(function(m){
        _this.controller.get('model').deleteRecord();
        _this.transitionTo('qwizbooks.edit',m);
      });

    },
    cancel: function() {
      var qwizbook=this.controller.get('model').get('qwizbook');
      this.controller.get('model').deleteRecord();
      this.transitionTo('qwizbooks.edit',qwizbook);
    }
  }
});
