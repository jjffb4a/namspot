import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiBoxComponent extends Component {
  @tracked query = '';
  @tracked appliedQuery = '';

  get filteredNames() {
    const filter = this.appliedQuery.toLowerCase();
    return this.args.names
      .filter((item) => item.text.toLowerCase().includes(filter))
      .map((item) => {
        let text = item.text;
        if (filter) {
          text = text.replace(
            new RegExp(`(${filter})`, 'ig'),
            '<mark>$1</mark>'
          );
        }
        return { id: item.id, html: text };
      });
  }

  @action
  updateQuery(val) {
    this.query = val;
  }

  @action
  applyQuery() {
    this.appliedQuery = this.query;
  }
}


// export default class UiBoxComponent extends Component {
//   get filteredNames() {
//     let query = String(this.args.query || '').toLowerCase();
//     console.log('Filtering with query:', this.args.query);
//     console.log('and :', this.args.query);
//     return this.args.names.map((item) => {
//       let text = item.text;
//       if (query && text.toLowerCase().includes(query)) {
//         text = text.replace(
//           new RegExp(`(${query})`, 'ig'),
//           '<mark>$1</mark>'
//         );
//       }
//       return { id: item.id, html: text };
//     });
//   }
// }

