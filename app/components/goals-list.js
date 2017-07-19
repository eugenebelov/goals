import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['goals-list-component'],
  goals: [],
  actions: {
    onAddGoal () {
      this.sendAction('addGoal', {
        'title': this.get('goalTitle'),
        'score': this.get('goalScore')
      })
    }
  }
});
