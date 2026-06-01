# 15. Change URL of ArcGIS API for JavaScript

Reference: https://developers.arcgis.com/web-appbuilder/sample-code/change-url-of-arcgis-api-for-javascript.htm

## Use when

- Switching to private CDN, on-prem host, or controlled ArcGIS JS API endpoint.

## Adaptation recommendations

- Update `apiUrl` in `env.js` (and equivalent 3D env file when needed).
- Keep version compatibility with your Web AppBuilder release.
- Prefer HTTPS endpoints and monitor certificate validity.
- Smoke-test builder and runtime after changing URL.

## Minimal code pattern

```js
// env.js
window.apiUrl = 'https://your-host.example.com/arcgis-js-api/3.44';
```

## Validation checklist

- Builder starts without script load errors.
- Runtime map and widgets load fully.
- Browser network log shows API requests from new host.
- No mixed-content warnings in HTTPS deployments.
