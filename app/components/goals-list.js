import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['goals-list-component'],
  goals: [],
  validations: {
   'goalTitle': {
     presence: true,
     length: { minimum: 3 }
   }
  },
  actions: {
    onAddGoal () {
      this.sendAction('addGoal', {
        'title': this.get('goalTitle'),
        'score': this.get('goalScore')
      })
    }
  },

  init: function() {
    // this call is necessary, don't forget it!
    this._super.apply(this, arguments);

    console.log(this.set("errors", {}))
  },
});
