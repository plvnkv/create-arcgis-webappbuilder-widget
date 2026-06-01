# Report (Dijit)

Reference: https://developers.arcgis.com/web-appbuilder/api-reference/report.htm

## When to use
- Build printable reports with map, table, and custom HTML sections.

## Recommendations
- Keep print data generation in one method for testability.
- Validate print service URL and permissions before runtime.

## Example

```javascript
define(['jimu/dijit/Report', 'jimu/dijit/PageUtils'], function(Report, PageUtils) {
  var report = new Report({
    printTaskUrl: 'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
    reportLayout: { pageSize: PageUtils.PageSizes.A4 }
  });
  report.print('My Report', [{ type: 'map', map: this.map }]);
});
```
