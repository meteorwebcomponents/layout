Package.describe({
    documentation: "README.md",
    git: "https://github.com/meteorwebcomponents/layout.git",
    name: "mwc:layout",
    summary: "mwc layout",
    version: "0.0.2"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0");

    api.addAssets("mwc-layout.html", ["client"]);

    api.use("templating", ["client"]);

    api.addFiles("body.html", ["client"]);
    api.addFiles("PolymerLayout.js", ["client"]);

    api.export("mwcLayout");
});
