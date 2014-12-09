import Ember from 'ember';

export default Ember.ArrayController.extend({

  isSectionAddFormEnabled: false,

  actions: {

    enableSectionAddForm: function () {
      this.set('isSectionAddFormEnabled',true);
    },
    disableSectionAddForm: function () {
      this.set('isSectionAddFormEnabled',false);
    },

  }
});
