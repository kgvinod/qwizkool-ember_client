import Ember from 'ember';

export default Ember.ObjectController.extend({
  isMediaElementRequired: function() {

    var mediaType = this.get('mediaType');
    if (mediaType !== "None") {
      return true;
    }

    // clear the associated content if media type is none.
    this.set('mediaText',"");
    this.set('mediaUrl',"");

    return false;

  }.property('mediaType'),
  typeIsImage: function() {
    var type=this.get('mediaType');
    return (type === "Image");
  }.property('mediaType'),
  typeIsVideo: function() {
    var type=this.get('mediaType');
    return (type === "Video");
  }.property('mediaType'),
  typeIsAudio: function() {
    var type=this.get('mediaType');
    return (type === "Audio");
  }.property('mediaType'),
  typeIsVideoOrAudio: function() {
    var type=this.get('mediaType');
    return (type === "Video") || (type === "Audio");
  }.property('mediaType'),
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
