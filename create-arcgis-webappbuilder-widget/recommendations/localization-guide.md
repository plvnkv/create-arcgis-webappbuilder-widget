# Localization Recommendations (with Ukrainian)

## Baseline Structure

Use this minimum structure:

```text
nls/
  strings.js
  uk/
    strings.js
```

- `nls/strings.js` contains `root` (English) and language registration (`"uk": 1`).
- `nls/uk/strings.js` contains translated values for every user-facing key.

## Translation Workflow

1. Add or update keys in root English first.
2. Mirror every key in Ukrainian file.
3. Review in running UI for clipping, overlap, and truncation.
4. Validate placeholders (`{0}`, `{name}`) and punctuation consistency.

## Ukrainian Style Guidance

- Use clear, formal neutral UI language.
- Keep labels concise to prevent overflow in narrow panels.
- Prefer domain-consistent terms:
  - map: `карта`
  - layer: `шар`
  - widget: `віджет`
  - settings: `налаштування`
  - save: `зберегти`

## QA Checklist

- Every root key exists in `uk`.
- No untranslated English leftovers in widget or setting UI.
- Plural/quantity text reads naturally.
- Buttons and panel titles fit common widths.
- Error text is actionable and polite.
