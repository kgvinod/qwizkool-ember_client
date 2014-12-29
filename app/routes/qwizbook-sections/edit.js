import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    //TBD: Use the ID on the route to make sure the data is in store
    // Note sure this the correct approach.
    var promise = this.store.find('qwizbook',params.qwizbook_id);
    return this.store.find('qwizbookSection',params.qwizbookSection_id);

  },
  actions: {
    save: function() {
      var _this = this;
      var model=this.controller.get('model').get('qwizbook');
      model.save().then(function(m){
        _this.transitionTo('qwizbooks.edit',m);
      });
    },
    cancel: function() {
      var qwizbook=this.controller.get('model').get('qwizbook');
      var qwizbookSection=this.controller.get('model');
      qwizbookSection.rollback();
      this.transitionTo('qwizbooks.edit',qwizbook.id);
    },
    addNewPage: function () {
      var qwizbook=this.controller.get('model').get('qwizbook');
      var qwizbookSection=this.controller.get('model');
      this.transitionTo('qwizbookPages.new',qwizbook.id,qwizbookSection.id);
    },
    editQwizbookPage: function (page) {
      var qwizbook=this.controller.get('model').get('qwizbook');
      var qwizbookSection=this.controller.get('model');
      this.transitionTo('qwizbookPages.edit',qwizbook.id,qwizbookSection.id, page.id);
    }
  }
});
