import DS from 'ember-data';

//var attr = DS.attr;

export default DS.Model.extend({
  title:  DS.attr('string'),
  subtitle:  DS.attr('string'),
  owner:  DS.attr('string'),
  description:  DS.attr('string'),
  createdOn:  DS.attr('date',{
    defaultValue: function() { return new Date(); }}),
  public:  DS.attr('boolean'),
  sharingEnabled:  DS.attr('boolean'),

});