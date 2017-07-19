import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('persone-list', 'Integration | Component | persone list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{persone-list}}`);

  assert.ok(this.$().text().trim());

  // Template block usage:
  this.render(hbs`
    {{#persone-list}}
    {{/persone-list}}
  `);

  assert.ok(this.$().text().trim());
});
