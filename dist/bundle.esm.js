//
//
//
//
//
//

var script = {
    name: "app",
    data: function data() {
        return {
            name: "lph",
            age: 18
        };
    },

    methods: {
        hello: function hello() {
            console.log("hello world");
        }
    }
};

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "app" }, [_vm._v("\n    app\n")]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-89ed8708_0", { source: "\n.tour .tour-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n.tour .tour-overlap {\n  position: fixed;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-box-shadow: 0 0 0 9999px rgba(0,0,0,0.8);\n  box-shadow: 0 0 0 9999px rgba(0,0,0,0.8);\n}\n.tour .tour-arrow {\n  position: absolute;\n  left: 50%;\n  width: 50px;\n  height: 65px;\n  margin-left: -25px;\n}\n.tour .tour-text {\n  position: absolute;\n  margin: 57px 5px;\n  padding: 0.5em;\n  border: 1px solid #fff;\n  border-radius: 1.5em;\n  color: #fff;\n  font-size: 18px;\n  white-space: nowrap;\n}\n.tour .tour-text.top {\n  bottom: 100%;\n}\n.tour .tour-text.top .tour-arrow {\n  bottom: -57px;\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.tour .tour-text.bottom {\n  top: 100%;\n}\n.tour .tour-text.bottom .tour-arrow {\n  top: -57px;\n}\n.tour .tour-text.left {\n  left: 0;\n}\n.tour .tour-text.left .tour-arrow {\n  left: 0;\n  margin: 0;\n}\n.tour .tour-text.right {\n  right: 0;\n}\n.tour .tour-text.right .tour-arrow {\n  left: auto;\n  margin: 0;\n  right: 0;\n}\n.tour .tour-cancel {\n  position: absolute;\n  bottom: 1em;\n  left: 50%;\n  width: 30%;\n  margin-left: -15%;\n}\n.tour .tour-cancel.top {\n  top: 1em;\n  bottom: auto;\n}\n.tour .tour-cancel-btn {\n  display: block;\n  width: 100%;\n}\n", map: { "version": 3, "sources": ['C:\\Users\\lipeihan\\Desktop\\rollup/C:\\Users\\lipeihan\\Desktop\\rollup/C:\\Users\\lipeihan\\Desktop\\rollup\\app.vue', "app.vue"], "names": [], "mappings": ";AA4BA;EC3BE,gBAAgB;EAChB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EDyBX,aAAA;CCvBC;ADwBD;EACA,gBAAA;EASA,6BAAA;EAAA,0BAAA;EAAA,wBAAA;EAAA,yBAAA;EARA,qBAAA;EAUA,iDAAA;EARA,yCAAA;CClBC;ADkBD;EChBE,mBAAmB;EACnB,UAAU;EDMZ,YAAA;EACA,aAAA;EAWA,mBAAA;CCdC;ADeD;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;ECbE,uBAAuB;EDuBzB,qBAAA;EAPA,YAAA;EACA,gBAAA;EACA,oBAAA;CCbC;ADcD;EACA,aAAA;CCZC;ADaD;EACA,cAAA;EARA,kCAAA;EAAA,+BAAA;EAAA,6BAAA;EAAA,8BAAA;EARA,0BAAA;CCUC;ADQD;EACA,UAAA;CCNC;ADOD;EACA,WAAA;CCLC;ADMD;EACA,QAAA;CCJC;ADKD;EACA,QAAA;EACA,UAAA;CCHC;ADID;EACA,SAAA;CCFC;ADGD;EACA,WAAA;EACA,UAAA;EACA,SAAA;CCDC;ADED;ECAE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EDAZ,WAAA;EACA,kBAAA;CCEC;ADDD;EACA,SAAA;EACA,aAAA;CCGC;ADFD;ECIE,eAAe;EDFjB,YAAA;CCIC", "file": "app.vue", "sourcesContent": [null, ".tour .tour-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n.tour .tour-overlap {\n  position: fixed;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-box-shadow: 0 0 0 9999px rgba(0,0,0,0.8);\n  box-shadow: 0 0 0 9999px rgba(0,0,0,0.8);\n}\n.tour .tour-arrow {\n  position: absolute;\n  left: 50%;\n  width: 50px;\n  height: 65px;\n  margin-left: -25px;\n}\n.tour .tour-text {\n  position: absolute;\n  margin: 57px 5px;\n  padding: 0.5em;\n  border: 1px solid #fff;\n  border-radius: 1.5em;\n  color: #fff;\n  font-size: 18px;\n  white-space: nowrap;\n}\n.tour .tour-text.top {\n  bottom: 100%;\n}\n.tour .tour-text.top .tour-arrow {\n  bottom: -57px;\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.tour .tour-text.bottom {\n  top: 100%;\n}\n.tour .tour-text.bottom .tour-arrow {\n  top: -57px;\n}\n.tour .tour-text.left {\n  left: 0;\n}\n.tour .tour-text.left .tour-arrow {\n  left: 0;\n  margin: 0;\n}\n.tour .tour-text.right {\n  right: 0;\n}\n.tour .tour-text.right .tour-arrow {\n  left: auto;\n  margin: 0;\n  right: 0;\n}\n.tour .tour-cancel {\n  position: absolute;\n  bottom: 1em;\n  left: 50%;\n  width: 30%;\n  margin-left: -15%;\n}\n.tour .tour-cancel.top {\n  top: 1em;\n  bottom: auto;\n}\n.tour .tour-cancel-btn {\n  display: block;\n  width: 100%;\n}\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = 'C:\\Users\\lipeihan\\Desktop\\rollup\\app.vue';

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var app = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

export default app;
