//mkdir -p app/modifiers && cat > app/modifiers/on-key-trigger-query.js <<'EOF'
import { modifier } from 'ember-modifier';

const TRIGGER_KEYS = ['Enter', ' ', 'Tab', ',', '.', ';', ':', '!', '?'];

export default modifier((element, [callback]) => {
  const handler = (e) => {
    if (TRIGGER_KEYS.includes(e.key)) {
      callback?.();
    }
  };

  element.addEventListener('keyup', handler);
  return () => element.removeEventListener('keyup', handler);
});
