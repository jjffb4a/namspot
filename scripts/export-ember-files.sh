#!/bin/bash

OUTPUT_FILE="all-ember-files.txt"
ROOT_DIR=$(pwd)

# File types to include
EXTENSIONS="js ts hbs css scss html json"

# Start fresh
echo "📦 Ember App Dump from $ROOT_DIR" > "$OUTPUT_FILE"
echo "======================================" >> "$OUTPUT_FILE"

# Loop over each file type
for ext in $EXTENSIONS; do
  find . -type f -name "*.${ext}" ! -path "*/node_modules/*" | while read -r file; do
    echo -e "\n\n📄 File: $file\n$(printf '─%.0s' {1..80})" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
  done
done

echo -e "\n✅ Done. Saved to: $OUTPUT_FILE"
