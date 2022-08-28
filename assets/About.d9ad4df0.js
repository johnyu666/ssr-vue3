import { _ as __ssr_vue_processAssetPath } from "../entry-server.js";
import { B as Button } from "./button.3e0dac11.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "node:path";
import "vue-router";
__ssr_vue_processAssetPath;
const About_vue_vue_type_style_index_0_scoped_4b6753f8_lang = "";
const _sfc_main = {
  async setup() {
    const url = import.meta.url;
    return {
      msg: "About",
      url
    };
  },
  components: {
    Button
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<!--[--><h1 data-v-4b6753f8>${ssrInterpolate($setup.msg)}</h1><p class="import-meta-url" data-v-4b6753f8>${ssrInterpolate($setup.url)}</p>`);
  _push(ssrRenderComponent(_component_Button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CommonButton`);
      } else {
        return [
          createTextVNode("CommonButton")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4b6753f8"]]);
export {
  About as default
};
