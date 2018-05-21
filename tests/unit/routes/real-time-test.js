import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | real-time', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:real-time');
    assert.ok(route);
  });
});
