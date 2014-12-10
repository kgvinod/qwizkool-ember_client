import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookSection : DS.belongsTo('qwizbookSection'),
  type:     DS.attr('string'),
});
