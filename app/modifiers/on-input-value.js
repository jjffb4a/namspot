// app/modifiers/on-input-value.js
import { modifier } from 'ember-modifier';

export default modifier((element, [callback]) => {
  element.addEventListener('input', (e) => {
    callback?.(e.target.value);
  });
});


// import { modifier } from 'ember-modifier';

// export default modifier(function onInputValue(element, [fn]) {
//   function handler(e) {
//     fn(e.target.value);
//   }

//   element.addEventListener('input', handler);
//   return () => element.removeEventListener('input', handler);
// });



/*
import { modifier } from 'ember-modifier';

export default modifier((element: HTMLInputElement, [fn]: [(v: string) => void]) => {
  const handler = (e: Event) => {
    fn((e.target as HTMLInputElement).value);
  };

  element.addEventListener('input', handler);
  return () => element.removeEventListener('input', handler);
});
*/