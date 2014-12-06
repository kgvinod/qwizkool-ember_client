import Ember from 'ember';


export default Ember.ArrayController.extend({
  queryParams: ['search'],
  search: null,
  actions: {

    clearSearch: function () {
      this.set('search',null);
      console.log("Hello");
    },
    addQwizbook: function () {
      this.transitionToRoute('qwizbooks.new');
    },
    showDetail: function (qwizbook) {
      this.transitionToRoute('qwizbooks.detail',qwizbook);
    }

  }

});
