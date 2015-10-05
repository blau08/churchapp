import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        time: Date.now()
      };
      this.sendAction('addComment', params);
      this.set('name', "");
      this.set('description', "");
    }
  }
});
