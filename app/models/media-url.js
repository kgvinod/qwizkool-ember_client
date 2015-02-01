import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbook-page'),
  type:     DS.attr('string',{ defaultValue: "Image" }),
  text:     DS.attr('string',{ defaultValue: "Qwiz Image" }),
  mediaUrl: DS.attr('string',{ defaultValue: "http://bala.qwizkool.com/assets/images/question-image.png" }),
  wideMedia:     DS.attr('boolean',{ defaultValue: false }),
});
