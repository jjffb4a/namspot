# Tests Overview

This directory contains integration tests for the `<UiBox>` component.

## Purpose
The tests verify:
- Rendering of static elements (label, input, list)
- Filtering of names based on the query
- Highlighting of matched substrings via `<mark>`
- Input binding and reactivity via `@onSearch` callback
- Character-triggered filtering logic (e.g., filtering on Enter, not on every keystroke)

## Notes
- Uses a custom `on-input-value` modifier to handle native input events.
- Test files:
  - `ui-box-atomic-test.js` – atomic, focused cases
  - `ui-box-test.js` – combined workflow test
