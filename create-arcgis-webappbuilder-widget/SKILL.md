---
name: create-arcgis-webappbuilder-widget
description: Use when developing or maintaining ArcGIS Web AppBuilder 2.30 custom widgets and deciding widget structure, lifecycle usage, styling conventions, and localization setup including Ukrainian.
---

# ArcGIS Web AppBuilder Widget Development Skill

## Overview

This skill is a practical reference for creating and reviewing custom widgets for ArcGIS Web AppBuilder 2.30.
It emphasizes folder structure, Dojo/AMD lifecycle discipline, scoped styling, and reliable localization.

## When to Use

Use this skill when:
- Creating a new custom widget under `client/stemapp/widgets`.
- Migrating or cleaning an existing widget to align with v2.30 conventions.
- Adding a settings page (`setting/`) or localization (`nls/`).
- Requiring Ukrainian (`uk`) translations and translation QA checks.

Do not use this skill for Experience Builder or ArcGIS JS API standalone apps.

## Quick Start

1. Copy the baseline scaffold from `templates/` in this skill.
2. Update `manifest.json` with correct capabilities (`2D`, `3D`, `properties`).
3. Implement widget lifecycle in `Widget.js`: `postCreate`, `startup`, `onOpen`, `onClose`, `destroy`.
4. Add strings to `nls/strings.js`, then add Ukrainian in `nls/uk/strings.js`.
5. Keep CSS selectors scoped with `baseClass` (for example, `.jimu-widget-yourwidget`).
6. If `hasConfig: true`, add `setting/Setting.js` and `setting/Setting.html`.

## Sample-Based Recommendations

For implementation patterns derived from official ArcGIS sample code, use the local examples library:

- [examples/README.md](examples/README.md) (index)
Each example file includes:
- Reference URL to the official sample.
- Recommended adaptation for this skill and WAB 2.30 workflows.
- Minimal code pattern for faster implementation.
- Validation checklist to reduce regressions.

## API Reference Recommendations

For API-specific implementation guidance, use:

- [api-references/README.md](api-references/README.md) (index)

The `api-references/` folder includes one recommendation file per official framework and dijit API reference link.
Each file contains:
- The official reference URL.
- Usage context and implementation recommendations.
- Minimal code snippets for fast adaptation.

## Recommended Structure

```text
MyWidget/
  manifest.json
  Widget.js
  Widget.html
  config.json
  css/
    style.css
  images/
    icon.png
  nls/
    strings.js
    uk/
      strings.js
  setting/               # only when hasConfig is true
    Setting.js
    Setting.html
```

Use ready-to-adapt files in `templates/`.

## Key Patterns to Avoid

- Missing setting localization import: `setting/Setting.js` should import `dojo/i18n!./nls/strings`.
- Unguarded async callbacks: always check `this.destroyed` before DOM updates.
- Untested 3D claim: if `"3D": true`, verify behavior in `client/stemapp3d`.
- Inconsistent manifest flags and files: keep properties aligned with existing files.

## Style Recommendations

See [recommendations/style-guide.md](recommendations/style-guide.md).
Core rules:
- AMD `define([...], function(...) {})` modules only.
- Always call `this.inherited(arguments);` in lifecycle overrides.
- Manage handles with `this.own(...)` to avoid leaks.
- Keep DOM updates explicit and avoid global selectors.
- Keep CSS scoped to `baseClass` to prevent theme collisions.

## Localization Recommendations

See [recommendations/localization-guide.md](recommendations/localization-guide.md).
Core rules:
- English source in `nls/strings.js` root block.
- Register locale with `"uk": 1`.
- Put Ukrainian translation in `nls/uk/strings.js`.
- Do not hardcode user-facing strings in `Widget.js` or `Setting.js`.
- Prefer neutral, short UI labels to reduce overflow in translated layouts.

## Release Recommendations

See [recommendations/release-checklist.md](recommendations/release-checklist.md).
Core checks:
- Verify lifecycle cleanup and open/close stability.
- Validate runtime behavior with slow/empty data responses.
- Confirm config compatibility and safe handling of missing optional keys.
- Recheck compatibility claims for `stemapp` and `stemapp3d` when applicable.

## Common Mistakes

- Manifest flags and actual files out of sync (for example `hasSettingPage: true` without `setting/`).
- Missing `this.inherited(arguments)` causing incomplete widget initialization.
- Event handlers not disposed, producing duplicate events after reopen.
- CSS rules not scoped to widget root, breaking other widgets.
- Added localized keys in root file but missing `uk` entry or stale translation keys.

## Official References

- Guide: https://developers.arcgis.com/web-appbuilder/guide
- API Reference: https://developers.arcgis.com/web-appbuilder/api-reference
- Samples: https://developers.arcgis.com/web-appbuilder/sample-code
