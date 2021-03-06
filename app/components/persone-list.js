import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['persone-list-component'],
  persone: [],
  personeGoal:[],

  validations: {
   'personeFirstName': {
     presence: true,
     length: { minimum: 3 }
   },
   'personeLastName': {
     presence: true,
     length: { minimum: 3 }
   }
  },

  init: function() {
    // this call is necessary, don't forget it!
    this._super.apply(this, arguments);

    // Reset errors, after component is init
    this.set("errors", {})
  },

  actions: {
    // Add multiple goals for Persone
    onAddGoalToPersone() {
      this.personeGoal.push(this.get('selection'))
    },

    // Send action to controller
    onAddPersone () {

      // Validate before send
      this.validate().then(() => {
        this.sendAction('savePersone', {
          'firstName': this.get('personeFirstName'),
          'lastName': this.get('personeLastName'),
          'goals': this.get('personeGoal')
        });

        this.personeGoal = [];
      }).catch(() => {
        console.log(this.get("errors"))
      });
    },

    change: function () {
      let selectedIndex = this.$('select')[0].selectedIndex;
      let content = this.get('goals').objectAt(selectedIndex);
      this.set('selection', content);
    }
  }
});
