# API Reference Recommendations

This folder provides practical implementation notes for ArcGIS Web AppBuilder API reference pages.

Each file includes:
- When to use the API.
- Safe implementation recommendations for WAB 2.30.
- Minimal code snippets you can adapt quickly.
- Link to the official reference page.

## Framework API

1. [01-css-framework.md](./01-css-framework.md)
2. [02-feature-action-manager.md](./02-feature-action-manager.md)
3. [03-filter-manager.md](./03-filter-manager.md)
4. [04-layer-info.md](./04-layer-info.md)
5. [05-layer-infos.md](./05-layer-infos.md)
6. [06-layer-node.md](./06-layer-node.md)
7. [07-layer-structure.md](./07-layer-structure.md)
8. [08-panel-manager.md](./08-panel-manager.md)
9. [09-utils.md](./09-utils.md)
10. [10-widget-manager.md](./10-widget-manager.md)

## Dijit API

11. [11-coordinate-control.md](./11-coordinate-control.md)
12. [12-feature-layer-chooser-from-map.md](./12-feature-layer-chooser-from-map.md)
13. [13-feature-layer-service-browser.md](./13-feature-layer-service-browser.md)
14. [14-feature-set-chooser-for-single-layer.md](./14-feature-set-chooser-for-single-layer.md)
15. [15-filter-dijit.md](./15-filter-dijit.md)
16. [16-image-chooser.md](./16-image-chooser.md)
17. [17-item-selector.md](./17-item-selector.md)
18. [18-layer-chooser-from-map.md](./18-layer-chooser-from-map.md)
19. [19-renderer-chooser.md](./19-renderer-chooser.md)
20. [20-report-dijit.md](./20-report-dijit.md)
21. [21-snapshot.md](./21-snapshot.md)
22. [22-symbol-chooser.md](./22-symbol-chooser.md)

## Usage pattern for this skill

When implementing or reviewing a widget:
1. Open the related API file in this folder.
2. Apply the recommended guards and lifecycle notes.
3. Adapt the snippet to your widget naming, `baseClass`, and localization keys.
4. Validate with the checklist in `../recommendations/release-checklist.md`.
