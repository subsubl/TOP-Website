import { _ as __nuxt_component_0 } from './nuxt-link-CLfpeGmc.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useLocalePath } from './server.mjs';
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

const _sfc_main = {
  __name: "prices",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 py-16 px-4 mb-20 sm:px-6 lg:px-8 lg:py-24" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="text-center sm:flex sm:flex-col sm:align-center"><h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1><p class="mt-5 text-xl text-gray-500 sm:text-center"> Simple, transparent pricing for everyone. Join the club that fits your lifestyle. </p></div><div class="mt-12 bg-white shadow overflow-hidden sm:rounded-lg"><div class="px-4 py-5 sm:px-6 bg-blue-600"><h3 class="text-lg leading-6 font-medium text-white">Service Rates</h3><p class="mt-1 max-w-2xl text-sm text-blue-100">Standard rates for courts and coaching.</p></div><div class="border-t border-gray-200"><dl><div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500">Court Rental (Peak)</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between"><span>$40 / hour</span><span class="text-gray-500 italic">Weekdays 5pm-10pm, Weekends</span></dd></div><div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500">Court Rental (Off-Peak)</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between"><span>$25 / hour</span><span class="text-gray-500 italic">Weekdays 8am-5pm</span></dd></div><div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500">Private Lesson</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between"><span>$70 / hour</span><span class="text-gray-500 italic">1-on-1 with Senior Coach</span></dd></div><div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500">Group Class (Drop-in)</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between"><span>$25 / session</span><span class="text-gray-500 italic">Max 6 players</span></dd></div><div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500">10-Class Pass</dt><dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between"><span>$220</span><span class="text-gray-500 italic">Valid for 3 months</span></dd></div></dl></div></div><div class="mt-10 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book Now `);
          } else {
            return [
              createTextVNode(" Book Now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=prices-Bx_P1PFv.mjs.map
