import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['persone-list-component'],
  persone: [],
  personeGoal:[],
  actions: {
    onAddGoalToPersone() {
      console.log(this.get('selection').get('title'))
      this.personeGoal.push(this.get('selection'))
    },

    onAddPersone () {
      this.sendAction('save', {
        'id': this.get('persone').content.length + 1,
        'firstName': this.get('personeFirstName'),
        'lastName': this.get('personeLastName'),
        'goals': this.get('personeGoal')
      });
    },
    change: function () {
      let selectedIndex = this.$('select')[0].selectedIndex;
      let content = this.get('goals').objectAt(selectedIndex);
      this.set('selection', content);
    }
  }
});
