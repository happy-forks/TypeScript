/// <reference path="fourslash.ts" />

//// {| "itemName": "c", "kind": "const", "parentName": "<global>" |}const c = 0;

test.markers().forEach(marker => {
    verify.navigationBarContains(
        marker.data.itemName,
        marker.data.kind,
        marker.fileName,
        marker.data.parentName,
        marker.data.isAdditionalRange,
        marker.position);
});