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
      var model=this.modelFor('qwizbookSections.new').get('qwizbook');      
      model.save().then(function(m){
        _this.modelFor('qwizbookSections.new').deleteRecord();
        _this.transitionTo('qwizbooks.edit',m);
      });

    },
    cancel: function() {
      var qwizbook=this.modelFor('qwizbookSections.new').get('qwizbook');
      this.modelFor('qwizbookSections.new').deleteRecord();
      this.transitionTo('qwizbooks.edit',qwizbook);
    }
  }
});
