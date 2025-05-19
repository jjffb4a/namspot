import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked search = '';

  names = [
    { id: '1', text: 'Alice went to Berlin' },
    { id: '2', text: 'Clara likes Ember.js' },
    { id: '3', text: 'Bob and Eva at the park' }
  ];

  @action
  updateSearch(value) {
    this.search = value;
  }
}
