import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  var time = params[0];
  return moment(time).format('LLL');
}

export default Ember.Helper.helper(formatDate);
