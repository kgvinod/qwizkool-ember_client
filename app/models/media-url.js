import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbookPage'),
  type:     DS.attr('string',{ defaultValue: "text" }),
  text:     DS.attr('string',{ defaultValue: "qwizkool" }),
  uri:      DS.attr('string',{ defaultValue: "www.qwizkool.com" }),
});
