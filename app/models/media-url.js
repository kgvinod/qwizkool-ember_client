import DS from 'ember-data';

export default DS.Model.extend({
  qwizbookPage : DS.belongsTo('qwizbook-page'),
  type:     DS.attr('string',{ defaultValue: "Image" }),
  text:     DS.attr('string',{ defaultValue: "Qwiz Image" }),
  mediaUrl: DS.attr('string',{ defaultValue: "http://bala.qwizkool.com/assets/images/question-image.png" }),
  wideMedia:     DS.attr('boolean',{ defaultValue: false }),
});

// All urls need to be emded type
// Soundcloud url
// https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165018741&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true
// Vimeo url
// //player.vimeo.com/video/118046581?title=0&byline=0&portrait=0
// Youtube url
// https://www.youtube.com/embed/zpOULjyy-n8
