import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  needs: ['model:persone', 'model:goal']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('Save persone', function(assert) {
  let controller = this.subject();
  let persone = null;
  let goal = null;


  Ember.run(function () {
    persone = controller.get('store').createRecord('persone');
  });

  controller.set('model', persone);

  assert.ok(controller.get('model'));

  Ember.run(function () {
    goal = controller.get('store').createRecord('goal');
  });

  controller.set('model', goal);

  assert.ok(controller.get('model'));
});

// savePersone
// saveGoal
