import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.store.find('qwizbook',params.qwizbook_id);
    return this.store.find('qwizbookPage',params.qwizbookPage_id);
  },
  actions: {

    save: function() {
      var _this = this;
      var qwizbookSection=this.controller.get('model').get('qwizbookSection');
      var qwizbook= qwizbookSection.get('qwizbook');
      qwizbook.save().then(function(m){
        _this.transitionTo('qwizbookSections.edit',m.id,qwizbookSection.id);
      });
    },
    cancel: function() {
      var qwizbookSection=this.controller.get('model').get('qwizbookSection');
      var qwizbook= qwizbookSection.get('qwizbook');
      this.controller.get('model').rollback();
      this.transitionTo('qwizbookSections.edit',qwizbook.id,qwizbookSection.id);
    }
  }
});
