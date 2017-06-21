(function () {
    var customConfig = {
        paths: {
            "github:*": "./jspm_packages/github/*",
            "npm:*": "./jspm_packages/npm/*"
        },

        packages: {
            "app": {
                "defaultExtension": "ts"
            }
        },

        meta: {
            "*.scss": { "loader": "sass" },
            "*.sass": { "loader": "sass" },

            "http://*": {
                "build": false
            },

            "ng-forward": {
                "deps": [
                  "reflect-metadata",
                  "angular"
                ]
            },

            "angular": {
                "deps": [
                    "jquery"
                ]
            }
        },

        map: {
            'app': './jspmAssets/app'
        }
    };

    // Register with System.js if this is running in the browser (script tag)
    if (typeof (System) !== "undefined") {
        System.config(customConfig);
    }

    // Export the JSON config for gulp bundling (require)
    if (typeof (module) !== "undefined") {
        module.exports = customConfig;
    }
})();