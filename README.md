# ArcGIS Web AppBuilder Widget Agent Skill

This repository contains a reusable skill for AI coding agents that work with custom widgets in ArcGIS Web AppBuilder 2.30.

The main goal is to help an agent produce widget code that is:
- Correct for Web AppBuilder structure and lifecycle.
- Maintainable (clean Dojo/AMD patterns, scoped CSS, clear manifest settings).
- Localization-ready (including Ukrainian language support).

## What This Skill Is For

Use this skill when you need an agent to:
- Create a new custom widget in `client/stemapp/widgets`.
- Add or fix a widget settings page (`setting/`).
- Add or validate localization files (`nls/`, including `uk`).
- Review an existing widget for common ArcGIS WAB mistakes.

Do not use this skill for:
- ArcGIS Experience Builder.
- Standalone ArcGIS JavaScript API applications.

## What Is Included

- `create-arcgis-webappbuilder-widget/SKILL.md`
	Core guidance for widget development in WAB 2.30.
- `create-arcgis-webappbuilder-widget/templates/`
	Starter files and structure you can copy into new widgets.
- `create-arcgis-webappbuilder-widget/recommendations/style-guide.md`
	Style and lifecycle best practices.
- `create-arcgis-webappbuilder-widget/recommendations/localization-guide.md`
	Localization workflow and Ukrainian translation guidance.
- `create-arcgis-webappbuilder-widget/examples/`
	Sample-driven recommendations mapped to official Web AppBuilder sample code.
- `create-arcgis-webappbuilder-widget/api-references/`
	API reference recommendations for framework and dijit docs with minimal snippets.

## How To Use This Skill

1. Open your ArcGIS Web AppBuilder workspace.
2. Ask your coding agent to use `create-arcgis-webappbuilder-widget`.
3. Describe your widget goal (for example: create widget, fix lifecycle issue, add setting page, add Ukrainian translation).
4. Ask the agent to apply templates and validate folder/file consistency.
5. Ask the agent to use `examples/` when the task matches an official sample workflow.
6. Ask the agent to use `api-references/` when the task depends on framework or dijit API details.
7. Run and test in your WAB environment (2D and 3D if your widget claims both).

## Reference Libraries

- Examples index: `create-arcgis-webappbuilder-widget/examples/README.md`
- API references index: `create-arcgis-webappbuilder-widget/api-references/README.md`

Use `examples/` for end-to-end implementation patterns.
Use `api-references/` for targeted API usage and configuration decisions.

## Recommended Prompts

Use prompts like these with your coding agent:

- "Use create-arcgis-webappbuilder-widget to create a new widget named ParcelSearch with setting page and localization support."
- "Use this skill to review my widget and fix lifecycle and event cleanup issues."
- "Apply this skill to add Ukrainian translations and check for missing localization keys."
- "Use the skill template and align manifest.json flags with actual widget files."

## Expected Output From Agent

When this skill is used correctly, the agent should produce:
- A valid widget folder structure.
- Consistent `manifest.json` flags.
- Lifecycle-safe `Widget.js` code (including cleanup patterns).
- Scoped CSS under widget `baseClass`.
- Correct `nls` setup with English root and optional Ukrainian translations.

## Quick Validation Checklist

Before accepting the result, check:
- Manifest flags match real files (`setting/`, `nls/`, 2D/3D capability).
- No global CSS leakage outside widget scope.
- `this.inherited(arguments);` is present in lifecycle overrides.
- Event handlers are owned and cleaned up.
- Every root localization key exists in Ukrainian file when `uk` is enabled.

## Compatibility

- Target platform: ArcGIS Web AppBuilder 2.30.
- Module format: Dojo AMD (`define([...], function(...) {})`).

## References

- https://developers.arcgis.com/web-appbuilder/guide
- https://developers.arcgis.com/web-appbuilder/api-reference
- https://developers.arcgis.com/web-appbuilder/sample-code

