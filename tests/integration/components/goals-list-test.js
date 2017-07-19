import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goals-list', 'Integration | Component | goals list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{goals-list}}`);

  assert.ok(this.$().text().trim());

  // Template block usage:
  this.render(hbs`
    {{#goals-list}}
    {{/goals-list}}
  `);

  assert.ok(this.$().text().trim());
});
