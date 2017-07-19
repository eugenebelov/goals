import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    // Trigger save action from persone
    savePersone(data) {
      let person = this.get('store').createRecord('persone', data);
      person.save();
    },

    // Trigger saving action from goal
    saveGoal(data) {
      let goal = this.get('store').createRecord('goal', data);
      goal.save()
    }
  }
});
