import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookSection : DS.belongsTo('qwizbookSection'),
  type:     DS.attr('string',{ defaultValue: "Question" }),
  text:     DS.attr('string',{ defaultValue: "We lent our favorite Whisky glass to one of our friends and they just returned it. We need to mark the item as returned?" }),
  mediaUrls:  DS.hasMany('media-url'),
  choices:  DS.hasMany('choice'),
});
