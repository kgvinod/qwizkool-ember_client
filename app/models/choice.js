import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbookPage'),
  answer:     DS.attr('boolean',{ defaultValue: false }),
  text:     DS.attr('string',{ defaultValue: "default text" }),
  mediaUrls:  DS.hasMany('media-url'),  
});
