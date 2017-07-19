import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('persone', 'Unit | Model | persone', {
  // Specify the other units that are required for this test.
  needs: ['model:goal']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own a goals', function(assert) {
  const Persone = this.store().modelFor('persone');
  const relationship = Ember.get(Persone, 'relationshipsByName').get('goals');

  assert.equal(relationship.key, 'goals', 'has relationship with profile');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongsTo');
});
