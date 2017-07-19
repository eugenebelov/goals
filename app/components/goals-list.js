import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['goals-list-component'],
  goals: [],

  validations: {
   'goalTitle': {
     presence: true,
     length: { minimum: 3 }
   },
   'goalScore': {
     presence: true,
     numericality: true,
     onlyInteger: true,
     greaterThan: 1,
     lessThanOrEqualTo: 10
   }
  },

  actions: {
    onAddGoal () {

      // Validate before send
      this.validate().then(() => {
        // Send action to controller with data
        this.sendAction('saveGoal', {
          'title': this.get('goalTitle'),
          'score': this.get('goalScore')
        })
      }).catch(() => {
        console.log(this.get("errors"))
      });
    }
  },

  init: function() {
    // this call is necessary, don't forget it!
    this._super.apply(this, arguments);

    // Reset errors, after component is init
    this.set("errors", {});
  },
});
