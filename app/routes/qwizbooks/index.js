import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.find('qwizbook',params);
  },
  actions: {
    addQwizbook: function () {
      this.transitionTo('qwizbooks.new');
    },
    showDetail: function (qwizbook) {
      this.transitionTo('qwizbooks.detail',qwizbook);
    }

  }
});
