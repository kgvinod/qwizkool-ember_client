import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
          return this.store.find('qwizbook',params.qwizbook_id);
      },
  actions: {
    save: function() {
      var _this = this;
      var model = this.controller.get('model');
      model.save().then(function(m){
        _this.transitionTo('qwizbooks.detail', m);
      });

    },
    cancel: function() {
      var model = this.controller.get('model');
      model.rollback();
      this.transitionTo('qwizbooks.detail',model);
    },
    editSections: function () {
      this.transitionTo('qwizbookSections');
    },
    addNewSection: function (m) {
      this.transitionTo('qwizbookSections.new',m.id);
    },
    editQwizbookSection: function (section) {
      // qwizbookSections is rendered on the outlet of edit
      // hence directly refer to that route!!
      var qwizbook = this.controller.get('model');
      this.transitionTo('qwizbookSections.edit',qwizbook.id,section.id);
    }
  }
});
