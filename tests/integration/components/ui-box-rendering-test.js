import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-box | Rendering', function (hooks) {
  setupRenderingTest(hooks);

  test('(1) it renders label, input, and list', async function (assert) {
    this.setProperties({
      names: [],
      query: '',
      onSearch: () => {}
    });

    await render(hbs`
      <UiBox
        @names={{this.names}}
        @query={{this.query}}
        @onSearch={{this.onSearch}}
      />
    `);

    assert.dom('label').hasText('Search:');
    assert.dom('input[placeholder="Try Alice, Bob, etc."]').exists();
    assert.dom('ul').exists();
  });
});
