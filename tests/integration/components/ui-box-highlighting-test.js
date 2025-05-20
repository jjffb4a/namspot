import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-box | Highlighting', function (hooks) {
  setupRenderingTest(hooks);

  test('(2) it highlights matches with <mark>', async function (assert) {
    this.setProperties({
      names: [
        { id: '1', text: 'Bob and Alice' },
        { id: '2', text: 'Clara and Eva' }
      ],
      query: 'bob ',
      onSearch: () => {}
    });

    await render(hbs`
      <UiBox
        @names={{this.names}}
        @query={{this.query}}
        @onSearch={{this.onSearch}}
      />
    `);

    const item = this.element.querySelector('ul li');
    assert.ok(item?.innerHTML.includes('<mark>Bob</mark>'), 'Bob is highlighted');
  });
});
