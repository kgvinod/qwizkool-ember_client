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
      var model=this.modelFor('qwizbookSections.edit').get('qwizbook');
      model.save().then(function(m){
        _this.transitionTo('qwizbooks.edit',m);
      });
    },
    cancel: function() {
      var qwizbook=this.modelFor('qwizbookSections.edit').get('qwizbook');
      this.transitionTo('qwizbooks.edit',qwizbook.id);
    },
    editPages: function () {
      this.transitionTo('qwizbookPages');
    },
  }
});
