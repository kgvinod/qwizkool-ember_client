import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbookPage'),
  type:     DS.attr('string',{ defaultValue: "Image" }),
  text:     DS.attr('string',{ defaultValue: "Qwiz Image" }),
  mediaUrl:      DS.attr('string',{ defaultValue: "/assets/images/question-image.png" }),
});