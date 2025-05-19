# Namspot App

## Purpose
This Ember app provides a simple UI to search through a list of names.

## Functionality
- Renders a search input and a dynamic list of names
- Highlights matched parts of names while typing
- Filters the list only after typing a defined trigger character (e.g., space, comma, Enter)
- Uses Glimmer component with passed-in `@names`, `@query`, and `@onSearch`
- Designed for clarity, accessibility, and testability

## Developer Notes
- To run tests: `pnpm exec ember test --filter="ui-box"`
- Uses basic CSS for layout (no Tailwind)
- Modifier: `on-input-value` handles binding
