import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8"><div class="text-center"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> What Our Players Are Saying </h2><p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"> Don&#39;t just take our word for it. Hear from the TOP community. </p></div><div class="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"><div class="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"><div class="flex-grow"><p class="text-lg text-gray-600 italic">&quot;I&#39;ve been to many clubs, but the atmosphere at TOP is unmatched. The staff genuinely cares about your experience and the courts are always in perfect condition.&quot;</p></div><div class="mt-6 flex items-center"><div class="flex-shrink-0"><span class="inline-block h-10 w-10 rounded-full bg-blue-500 overflow-hidden shadow-sm"><svg class="h-full w-full text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span></div><div class="ml-4"><div class="text-base font-medium text-gray-900">Elena R.</div></div></div></div><div class="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"><div class="flex-grow"><p class="text-lg text-gray-600 italic">&quot;A fantastic place to meet people. I moved here recently and found my tennis partners at TOP. The social mixers are a must!&quot;</p></div><div class="mt-6 flex items-center"><div class="flex-shrink-0"><span class="inline-block h-10 w-10 rounded-full bg-orange-500 overflow-hidden shadow-sm"><svg class="h-full w-full text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span></div><div class="ml-4"><div class="text-base font-medium text-gray-900">Liam N.</div></div></div></div><div class="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"><div class="flex-grow"><p class="text-lg text-gray-600 italic">&quot;My daughter joined the junior academy last year and her confidence has soared. The coaches are supportive and very skilled.&quot;</p></div><div class="mt-6 flex items-center"><div class="flex-shrink-0"><span class="inline-block h-10 w-10 rounded-full bg-green-500 overflow-hidden shadow-sm"><svg class="h-full w-full text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span></div><div class="ml-4"><div class="text-base font-medium text-gray-900">Sophia K.</div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/references.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const references = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { references as default };
//# sourceMappingURL=references-BtlSrT9t.mjs.map
