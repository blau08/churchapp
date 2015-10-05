import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('comment');
  },
  actions: {
    addComment(params) {
      var comment = this.store.createRecord('comment', params);
      comment.save();
    }
  }
});
