import Ember from 'ember';


export default Ember.ArrayController.extend({
  queryParams: ['search'],
  search: 'o',  // HACK ! to ensure that it doesn't send empty search=
  actions: {

    clearSearch: function () {
      this.set('search','o'); // HACK ! to ensure that it doesn't send empty search=
    },

  }

});
