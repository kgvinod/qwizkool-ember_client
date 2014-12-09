import DS from 'ember-data';

export default DS.Model.extend({
  title:          DS.attr('string'),
  isStarting:     DS.attr('boolean'),
  qwizbookPages:  DS.hasMany('qwizbook-page')
});
