import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    mediaUrls: { embedded: 'always' },
    choices: { embedded: 'always' }
  }
});
