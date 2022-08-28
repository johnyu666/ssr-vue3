import { _ as __ssr_vue_processAssetPath } from "../entry-server.js";
import { createStore } from "vuex";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "node:path";
import "vue-router";
__ssr_vue_processAssetPath;
const Store_vue_vue_type_style_index_0_scoped_91e93cb7_lang = "";
const _sfc_main = {
  async setup() {
    const store = createStore({
      state: {
        foo: "bar"
      }
    });
    return store.state;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${ssrRenderAttrs(_attrs)} data-v-91e93cb7>${ssrInterpolate(_ctx.foo)}</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Store = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-91e93cb7"]]);
export {
  Store as default
};
