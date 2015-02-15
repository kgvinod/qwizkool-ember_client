import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbook-page'),
  answer:     DS.attr('boolean',{ defaultValue: false }),
  text:     DS.attr('string',{ defaultValue: "Enter Answer text" }),
  mediaType:     DS.attr('string',{ defaultValue: "None" }),
  mediaText:     DS.attr('string',{ defaultValue: "" }),
  mediaUrl:      DS.attr('string',{ defaultValue: "" }),
  wideMedia:     DS.attr('boolean',{ defaultValue: false }),
  
});
