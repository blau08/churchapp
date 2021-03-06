import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('led');
  this.route('h2o');
  this.route('scheduleLED');
});

export default Router;
