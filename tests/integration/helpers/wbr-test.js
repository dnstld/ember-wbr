import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | wbr', function(hooks) {
  setupRenderingTest(hooks);

  test('it returns the same url', async function(assert) {
    this.set(
      'inputValue',
      'https://github.com/dnstld/ember-wbr'
    );

    await render(hbs`{{wbr inputValue}}`);

    assert.equal(
      this.element.textContent.trim(),
      'https://github.com/dnstld/ember-wbr'
    );
  });
});
