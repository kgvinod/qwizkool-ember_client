import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookSection : DS.belongsTo('qwizbookSection'),
  type:     DS.attr('string',{ defaultValue: "Question" }),
  text:     DS.attr('string',{ defaultValue: "default text" }),
  mediaUrls:  DS.hasMany('media-url'),
  choices:  DS.hasMany('choice'),
});
