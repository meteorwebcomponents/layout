Synthesis({

  activeChange: function(newValue, oldValue) {
    if (newValue === false && oldValue === true) {
      var region = Object.keys(this.opt);

      for (var A = 0; A < region.length; A++) {
        var element = this.querySelectorAll('*[region="' + region[A] + '"]');

        for (Z = 0; Z < element.length; Z++) {
          element[Z].innerHTML = "";
        }
      }
    }
  },

  is: "mwc-layout",

  properties: {
    active: {
      notify: true,
      observer: "activeChange",
      reflectToAttribute: true,
      type: Boolean,
      value: false
    },
    opt: {
      type: Object
    }
  },

  render: function(opt) {
    var region = Object.keys(opt);

    for (var A = 0; A < region.length; A++) {
      if (typeof(opt[region[A]]) === "object") {
        var element = this.querySelectorAll('*[region="' + region[A] + '"]');

        for (Z = 0; Z < element.length; Z++) {
          element[Z].innerHTML = "";

          Polymer.dom(element[Z]).appendChild(opt[region[A]]);
        }
      } else {
        if (document.createElement(opt[region[A]]).constructor !== HTMLElement) {
          var element = this.querySelectorAll('*[region="' + region[A] + '"]');

          for (Z = 0; Z < element.length; Z++) {
            element[Z].innerHTML = "";

            Polymer.dom(element[Z]).appendChild(document.createElement(opt[region[A]]));
          }
        } else {
          console.log(opt[region[A]] + " not registered");
        }
      }
    }

    this.opt = opt;
  }

});

