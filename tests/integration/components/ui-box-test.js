import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-box', function (hooks) {
  setupRenderingTest(hooks);

  test('1️⃣ renders input field and static elements', async function (assert) {
    this.setProperties({
      names: [],
      query: '',
      onSearch: () => {}
    });

    await render(hbs`
      <UiBox @names={{this.names}} @query={{this.query}} @onSearch={{this.onSearch}} />
    `);

    assert.dom('label').hasText('Search:', 'Label is correct');
    assert.dom('input').exists('Input is rendered');
    assert.dom('ul').exists('Empty list is rendered');
  });

  test('2️⃣ renders a full list of names when no filter is active', async function (assert) {
    this.setProperties({
      query: '',
      onSearch: () => {},
      names: [
        { id: '1', text: 'Alice' },
        { id: '2', text: 'Bob' },
        { id: '3', text: 'Clara' }
      ]
    });

    await render(hbs`
      <UiBox @names={{this.names}} @query={{this.query}} @onSearch={{this.onSearch}} />
    `);

    assert.dom('ul li').exists({ count: 3 }, 'All 3 names are shown');
  });

  test('3️⃣ filters list based on case-insensitive query', async function (assert) {
    this.setProperties({
      query: 'clara',
      onSearch: () => {},
      names: [
        { id: '1', text: 'Alice' },
        { id: '2', text: 'Clara' },
        { id: '3', text: 'Bob' }
      ]
    });

    await render(hbs`
      <UiBox @names={{this.names}} @query={{this.query}} @onSearch={{this.onSearch}} />
    `);

    assert.dom('ul li').exists({ count: 1 }, 'Only matching name is shown');
    assert.dom('ul li').includesText('Clara');
  });

  test('4️⃣ highlights matched text in <mark>', async function (assert) {
    this.setProperties({
      query: 'bob',
      onSearch: () => {},
      names: [
        { id: '1', text: 'Alice' },
        { id: '2', text: 'Bob and Eva' }
      ]
    });

    await render(hbs`
      <UiBox @names={{this.names}} @query={{this.query}} @onSearch={{this.onSearch}} />
    `);

    assert.ok(
      this.element.querySelector('ul li')?.innerHTML.includes('<mark>Bob</mark>'),
      'Matched part is wrapped in <mark>'
    );
  });

  test('5️⃣ reacts to input changes via @onSearch callback', async function (assert) {
    let capturedQuery = '';
    this.set('names', [
      { id: '1', text: 'Clara' },
      { id: '2', text: 'Eva' }
    ]);
    this.set('query', '');
    this.set('onSearch', (val) => {
      capturedQuery = val;
      this.set('query', val);
    });

    await render(hbs`
      <UiBox @names={{this.names}} @query={{this.query}} @onSearch={{this.onSearch}} />
    `);

    await fillIn('input', 'Clara');
    await settled();

    assert.strictEqual(capturedQuery, 'Clara', 'Callback captured the typed query');
    assert.dom('ul li').exists({ count: 1 }, 'Filter applied based on typed query');
    assert.dom('ul li').includesText('Clara');
  });
});
