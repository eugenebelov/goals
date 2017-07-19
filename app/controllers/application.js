import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    
    save(data) {
      let person = this.get('store').createRecord('persone', data);
      // let goals = this.get('store').createRecord('goal', data.goals)

      // person.get('goals').pushObject(goals)
      // console.log(data.goals)
      person.save();
    },

    addGoal(data) {
      let goal = this.get('store').createRecord('goal', data);
      goal.save()
    }
  }
});
