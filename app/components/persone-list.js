import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['persone-list-component'],
  persone: [],
  goal:[],
  actions: {
    onAddGoalToPersone() {

    },

    onAddPersone () {
      this.sendAction('save', {
        'id': this.get('persone').content.length + 1,
        'firstName': this.get('personeFirstName'),
        'lastName': this.get('personeLastName')
      });
    }
  }
});
