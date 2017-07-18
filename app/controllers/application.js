import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(data) {
        let model = this.get('model').persones,
            person = this.get('store').createRecord('persone', data);

            console.log(model);
      }
  }
});
