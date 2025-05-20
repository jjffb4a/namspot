import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-box | Filtering', function (hooks) {
  setupRenderingTest(hooks);

  test('(3) filters names case-insensitively on trigger', async function (assert) {
    let actualQuery = '';
    this.set('names', [
      { id: '1', text: 'Alice' },
      { id: '2', text: 'Bob' },
      { id: '3', text: 'Clara' }
    ]);
    this.set('query', '');
    this.set('onSearch', (val) => {
      actualQuery = val;
      this.set('query', val);
    });

    await render(hbs`
      <UiBox
        @names={{this.names}}
        @query={{this.query}}
        @onSearch={{this.onSearch}}
      />
    `);

    await fillIn('input', 'clara ');
    await settled();

    assert.strictEqual(actualQuery, 'clara ');
    assert.dom('ul li').exists({ count: 1 });
    assert.dom('ul li').hasTextContaining('Clara');
  });
});

