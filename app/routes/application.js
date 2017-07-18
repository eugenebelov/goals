import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let _store = this.get('store');

    return Ember.RSVP.hash({
      persones: _store.findAll('persone'),
      goals: _store.findAll('goal')
    });
  }
});
