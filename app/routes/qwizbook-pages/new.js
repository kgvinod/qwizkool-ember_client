import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var _this=this;
    var newPage=this.store.createRecord('qwizbookPage');
    this.store.find('qwizbook',params.qwizbook_id).then(function(m){
      _this.store.find('qwizbookSection',params.qwizbookSection_id).then(function(section){
        newPage.set('qwizbookSection', section);
    });
    })

    return newPage;
  },
  actions: {
    save: function() {
      var _this = this;
      var qwizbookSection=this.controller.get('model').get('qwizbookSection');
      var qwizbook= qwizbookSection.get('qwizbook');
      qwizbook.save().then(function(m){
        _this.controller.get('model').deleteRecord();
        _this.transitionTo('qwizbookSections.edit',m.id,qwizbookSection.id);
      });
    },
    cancel: function() {
      var qwizbookSection=this.controller.get('model').get('qwizbookSection');
      var qwizbook= qwizbookSection.get('qwizbook');
      this.controller.get('model').deleteRecord();
      this.transitionTo('qwizbookSections.edit',qwizbook.id,qwizbookSection.id);
    }
  }
});
