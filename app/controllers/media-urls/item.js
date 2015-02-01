import Ember from 'ember';

export default Ember.ObjectController.extend({
  typeIsImage: function() {
    var type=this.get('type');
    return (type === "Image");
  }.property('type'),
  typeIsVideo: function() {
    var type=this.get('type');
    return (type === "Video");
  }.property('type'),
  typeIsAudio: function() {
    var type=this.get('type');
    return (type === "Audio");
  }.property('type'),
  typeIsVideoOrAudio: function() {
    var type=this.get('type');
    return (type === "Video") || (type === "Audio");
  }.property('type'),
  isValid: Ember.computed(
    'mediaUrl', function() {
      return !Ember.isEmpty(this.get('mediaUrl'));
    }
  ),
  isWideMedia: function() {
    var isWide=this.get('wideMedia');
    return isWide;
  }.property('wideMedia'),


});
