import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    menuToggle() {
      $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
  },
    menuClose() {
      $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
      });
    }
  }
});
