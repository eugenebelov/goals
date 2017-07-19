import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('goal', 'Unit | Model | goal', {
  // Specify the other units that are required for this test.
  needs: ['model:persone']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own a persone', function(assert) {
  const Goal = this.store().modelFor('goal');
  const relationship = Ember.get(Goal, 'relationshipsByName').get('persones');

  assert.equal(relationship.key, 'persones', 'has relationship with profile');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongsTo');
});
