import DS from 'ember-data';

//var attr = DS.attr;

export default DS.Model.extend({
  title:     DS.attr('string'),
  subtitle:  DS.attr('string'),
  owner:     DS.attr('string'),
  description:  DS.attr('string',{defaultValue: "A qwizbook"}),
  category:     DS.attr('string',{defaultValue: "uncategorized"}),
  tags:         DS.attr('string',{defaultValue: "quiz qwiz"}),
  createdOn:    DS.attr('date',{
    defaultValue: function() { return new Date(); }}),
  public:          DS.attr('boolean'),
  sharedWith:  DS.attr('string',{defaultValue: "none"}),
  sharingEnabled:          DS.attr('boolean'),

  qwizbookSections: DS.hasMany('qwizbook-section')
});
