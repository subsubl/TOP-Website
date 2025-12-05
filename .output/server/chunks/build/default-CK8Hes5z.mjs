import { mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CLfpeGmc.mjs';
import { a as useLocalePath, b as useSwitchLocalePath } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$2 = {
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const switchLocalePath = useSwitchLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-sm sticky top-0 z-50" }, _attrs))}><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"><div class="flex-shrink-0 flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "font-bold text-2xl text-blue-600 tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` TOP <span class="text-orange-500"${_scopeId}>.</span>`);
          } else {
            return [
              createTextVNode(" TOP "),
              createVNode("span", { class: "text-orange-500" }, ".")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="hidden md:flex space-x-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/classes"),
        class: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.classes"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.classes")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.booking"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.booking")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/prices"),
        class: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.prices"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.prices")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/references"),
        class: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.references"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.references")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="hidden md:flex items-center space-x-4"><div class="flex space-x-2 text-sm font-medium text-gray-500">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(switchLocalePath)("en"),
        class: { "text-blue-600": _ctx.$i18n.locale === "en" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`EN`);
          } else {
            return [
              createTextVNode("EN")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>|</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(switchLocalePath)("es"),
        class: { "text-blue-600": _ctx.$i18n.locale === "es" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ES`);
          } else {
            return [
              createTextVNode("ES")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.booking"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.booking")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden flex items-center"><button class="text-gray-500 hover:text-gray-700 focus:outline-none"><span class="sr-only">Open main menu</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white pt-12 pb-8" }, _attrs))}><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="col-span-1 md:col-span-1"><span class="font-bold text-2xl tracking-tight text-white mb-4 block"> TOP<span class="text-orange-500">.</span></span><p class="text-gray-400 text-sm"> Elevating your game on and off the court. Join the community today. </p></div><div><h3 class="text-lg font-semibold mb-4 text-orange-400">School</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/coaches"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Coaches`);
          } else {
            return [
              createTextVNode("Our Coaches")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/careers"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Careers`);
          } else {
            return [
              createTextVNode("Careers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-4 text-orange-400">Programs</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/classes"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Adult Classes`);
          } else {
            return [
              createTextVNode("Adult Classes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/classes"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Junior Academy`);
          } else {
            return [
              createTextVNode("Junior Academy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Private Lessons`);
          } else {
            return [
              createTextVNode("Private Lessons")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Court Rental`);
          } else {
            return [
              createTextVNode("Court Rental")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-4 text-orange-400">Contact</h3><ul class="space-y-2 text-sm text-gray-400"><li class="flex items-start"><span class="mr-2">📍</span> 123 Sports Avenue, Active City </li><li class="flex items-center"><span class="mr-2">📞</span> +1 (555) 012-3456 </li><li class="flex items-center"><span class="mr-2">✉️</span> hello@top-school.com </li></ul></div></div><div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} TOP Paddle &amp; Tennis School. All rights reserved. </div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CK8Hes5z.mjs.map
