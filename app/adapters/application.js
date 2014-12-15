import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    url: 'http://localhost:3000',
    namespace: 'api',
    buildURL: function() {
      var url = this._super.apply(this, arguments);
      if (url.charAt(url.length -1) !== '/') {
        url += '/';
      }
      return url;
    },
});
