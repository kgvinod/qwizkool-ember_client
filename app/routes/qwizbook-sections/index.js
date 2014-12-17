import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //console.log(this.store.find('qwizbook',id).get('qwizbookSections'));
    //  return this.store.find('qwizbook',id).get('qwizbookSections');
    return this.modelFor('qwizbooks.detail').get('qwizbookSections');

  },

  actions: {
    addNewSection: function () {
      var model = this.modelFor('qwizbooks/detail');
      this.transitionTo('qwizbookSections.new', model);
    },
    editQwizbookSection: function (section) {
      // qwizbookSections is rendered on the outlet of edit
      // hence directly refer to that route!!
      this.transitionTo('qwizbookSections.edit',section);
    }
  }
});
