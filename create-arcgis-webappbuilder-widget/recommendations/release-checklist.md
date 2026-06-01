# Additional Recommendations

## Pre-Release Checks

- Test open/close cycles repeatedly to catch leaked handlers.
- Verify widget behavior with slow network and empty-service responses.
- Confirm panel resize behavior on common desktop resolutions.
- Validate both `stemapp` and, if applicable, `stemapp3d` compatibility claims.

## Configuration Reliability

- Keep defaults in `config.json` conservative and backward-compatible.
- Ensure `setting/getConfig` writes complete and valid config objects.
- Handle missing optional config keys safely in runtime code.

## Inter-Widget Communication

- If using `publishData` and `fetchDataByName`, filter sender names strictly.
- Do not assume target widgets are loaded; guard with availability checks.

## Performance

- Avoid heavy synchronous DOM updates in `startup`.
- Defer expensive work until widget open if possible.
- Cache expensive query results when practical.

## Documentation Hygiene

- Keep a short README in each custom widget with purpose and key config fields.
- Track localization owner/reviewer for non-English strings.
