import Ember from 'ember';


export default Ember.ArrayController.extend({
  queryParams: ['search'],
  search: null,
  actions: {

    clearSearch: function () {
      this.set('search',null);
      console.log("Hello");
    }


  }

});
