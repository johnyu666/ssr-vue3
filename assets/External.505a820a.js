import "../entry-server.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, resolveComponent } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "node:path";
import "vue-router";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>Example external component content</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/example-external-component/ExampleExternalComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ExampleExternalComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    ExampleExternalComponent
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExampleExternalComponent = resolveComponent("ExampleExternalComponent");
  _push(ssrRenderComponent(_component_ExampleExternalComponent, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/External.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const External = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  External as default
};
