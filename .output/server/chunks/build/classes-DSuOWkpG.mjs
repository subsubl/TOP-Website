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
  __name: "classes",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Our Programs </h2><p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"> Whether you are a complete beginner or an aspiring pro, we have a class for you. </p></div><div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"><div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow"><div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48"><div class="bg-blue-300 w-full h-full flex items-center justify-center text-blue-800 font-bold text-lg">Adult Beginner</div></div><div class="flex-1 p-4 space-y-2 flex flex-col"><h3 class="text-lg font-medium text-gray-900">Adult Fundamentals</h3><p class="text-sm text-gray-500 flex-grow">Master the basics of grip, swing mechanics, and court movement. Perfect for those new to the sport.</p><div class="pt-4"><span class="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2">Mon/Wed</span><span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">6:00 PM</span></div></div></div><div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow"><div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48"><div class="bg-orange-300 w-full h-full flex items-center justify-center text-orange-800 font-bold text-lg">Cardio Tennis</div></div><div class="flex-1 p-4 space-y-2 flex flex-col"><h3 class="text-lg font-medium text-gray-900">Cardio Blast</h3><p class="text-sm text-gray-500 flex-grow">High-energy workout set to music. Burn calories while hitting hundreds of balls. No tennis experience required!</p><div class="pt-4"><span class="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-800 mr-2">Tue/Thu</span><span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">7:00 PM</span></div></div></div><div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow"><div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48"><div class="bg-green-300 w-full h-full flex items-center justify-center text-green-800 font-bold text-lg">Junior Academy</div></div><div class="flex-1 p-4 space-y-2 flex flex-col"><h3 class="text-lg font-medium text-gray-900">Future Stars (Ages 8-14)</h3><p class="text-sm text-gray-500 flex-grow">Developmental program focusing on technique, strategy, and sportsmanship.</p><div class="pt-4"><span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2">Sat</span><span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">9:00 AM</span></div></div></div></div><div class="mt-16 text-center"><p class="text-gray-600 mb-6">Don&#39;t see what you&#39;re looking for? We offer private lessons tailored to your needs.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book a Private Lesson → `);
          } else {
            return [
              createTextVNode(" Book a Private Lesson → ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/classes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=classes-DSuOWkpG.mjs.map
