var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "../vendor/jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "../vendor/jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "backbone.layoutmanager",
            "location": "../vendor/jam/backbone.layoutmanager",
            "main": "backbone.layoutmanager.js"
        },
        {
            "name": "lodash",
            "location": "../vendor/jam/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "backbone",
            "location": "../vendor/jam/backbone",
            "main": "backbone.js"
        }
    ],
    "version": "0.2.11",
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone.layoutmanager": {
            "deps": [
                "jquery",
                "backbone",
                "underscore"
            ],
            "exports": "Backbone.LayoutManager"
        },
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}