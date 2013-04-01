// Set the require.js configuration for your application.
require.config({
  // This part may not be necessary depending on your setup.
  paths: {
    jquery: "/vendor/js/libs/jquery",
    backbone: "/vendor/js/libs/backbone",
    underscore: "/vendor/js/libs/underscore",
    layoutmanager: "/vendor/js/libs/backbone.layoutmanager"
  },

  // This part is definitely necessary regardless of your setup.
  shim: {
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },

    // Here we indicate that we need Backbone and all its dependencies,
    // we also want to bind the main object.
    layoutmanager: {
      deps: ["backbone"],
      exports: "Backbone.Layout"
    }
  }
});