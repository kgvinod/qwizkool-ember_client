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

  }.property('mediaType')
});
