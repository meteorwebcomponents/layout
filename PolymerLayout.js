var PolymerLayout = function() {
    this.currentLayout = null;
};

// layout[String]
// opt[Object] one-level deep
// forceRender[Boolean]

PolymerLayout.prototype.render = function(layout, opt, forceRender) {
    if (document.querySelector('mwc-layout[id="' + layout + '"]')) {
        if (this.currentLayout != layout || forceRender) {
            if (this.currentLayout) {
                document.querySelector('mwc-layout[id="' + this.currentLayout + '"]').active = false
            }

            document.querySelector('mwc-layout[id="' + layout + '"]').render(Object.prototype.toString.call(opt) == "[object Object]" ? opt : {});

            document.querySelector('mwc-layout[id="' + layout + '"]').active = true;

            this.currentLayout = layout;
        }
    }
};

mwcLayout = new PolymerLayout();
