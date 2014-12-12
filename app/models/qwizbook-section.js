import DS from 'ember-data';

export default DS.Model.extend({
  title:          DS.attr('string'),
  isStarting:     DS.attr('boolean',{ defaultValue: false }),
  qwizbook  :     DS.belongsTo('qwizbook'),
  qwizbookPages:  DS.hasMany('qwizbook-page')
});
