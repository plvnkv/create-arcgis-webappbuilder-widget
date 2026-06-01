# AGENTS

This file defines how an AI coding agent should work in this repository.

## Primary Goal

Help users build and maintain ArcGIS Web AppBuilder 2.30 custom widgets using the skill:

- `create-arcgis-webappbuilder-widget`

## Scope

Apply this repository only to:
- ArcGIS Web AppBuilder widget development.
- Widget settings page patterns.
- Widget localization patterns, including Ukrainian.

Do not apply this repository guidance to:
- ArcGIS Experience Builder.
- Standalone ArcGIS JavaScript API app architecture.

## Source of Truth

Always use these files as authoritative guidance:

1. `create-arcgis-webappbuilder-widget/SKILL.md`
2. `create-arcgis-webappbuilder-widget/recommendations/style-guide.md`
3. `create-arcgis-webappbuilder-widget/recommendations/localization-guide.md`
4. `create-arcgis-webappbuilder-widget/templates/`
5. `create-arcgis-webappbuilder-widget/examples/README.md`
6. `create-arcgis-webappbuilder-widget/api-references/README.md`

If there is a conflict, follow this priority:

1. User request.
2. Existing project conventions in the target workspace.
3. SKILL.md guidance.
4. Recommendation docs and templates.

## Required Agent Workflow

For each user task:

1. Confirm this is a Web AppBuilder widget task.
2. Inspect existing widget files before making changes.
3. Select guidance source:
	- Use `examples/` for sample-driven implementation patterns.
	- Use `api-references/` for framework/dijit API usage decisions.
4. Preserve existing coding style unless user asks for refactor.
5. Keep changes minimal and focused on request.
6. Validate key consistency points before finishing.

## Widget Quality Rules

When generating or editing widget code, the agent should:

- Keep Dojo AMD module format.
- Use lifecycle methods correctly and include inheritance calls.
- Ensure listeners and handles are cleaned up.
- Scope CSS to widget root (`baseClass`) to avoid leakage.
- Keep manifest capability flags aligned with real files.
- Keep user-facing text in localization files, not hardcoded strings.

## Localization Rules

If localization is enabled:

- Maintain root keys in `nls/strings.js`.
- Keep language registration aligned with provided locales.
- Mirror keys in locale files (including `nls/uk/strings.js` if Ukrainian is used).
- Flag missing or stale translation keys.

## Output Expectations

Agent responses should include:

- What changed.
- Why it changed.
- Which files were modified.
- What validation was performed.
- Any remaining risks or manual checks.

## Recommended Agent Style

- Be concise and implementation-focused.
- Ask clarifying questions only when requirements are ambiguous.
- Do not invent project structure that is not present.
- Avoid unrelated refactoring.
- Prefer practical examples over abstract explanation.

