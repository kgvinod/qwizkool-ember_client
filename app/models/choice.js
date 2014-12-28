import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbook-page'),
  answer:     DS.attr('boolean',{ defaultValue: false }),
  text:     DS.attr('string',{ defaultValue: "default text" }),
  mediaUrl:  DS.hasMany('media-url'),
});
