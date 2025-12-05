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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" }, _attrs))}><div class="relative max-w-xl mx-auto"><div class="text-center"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Book a Court or Class </h2><p class="mt-4 text-lg leading-6 text-gray-500"> Ready to play? Fill out the form below and we will get back to you with availability. </p></div><div class="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-inner"><form action="#" method="POST" class="grid grid-cols-1 gap-y-6"><div><label for="full-name" class="block text-sm font-medium text-gray-700">Full name</label><div class="mt-1"><input type="text" name="full-name" id="full-name" autocomplete="name" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" placeholder="John Doe"></div></div><div><label for="email" class="block text-sm font-medium text-gray-700">Email</label><div class="mt-1"><input type="email" name="email" id="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" placeholder="john@example.com"></div></div><div><label for="activity" class="block text-sm font-medium text-gray-700">Activity</label><div class="mt-1"><select id="activity" name="activity" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"><option>Court Rental - Paddle</option><option>Court Rental - Tennis</option><option>Private Lesson</option><option>Group Class</option></select></div></div><div><label for="message" class="block text-sm font-medium text-gray-700">Message / Preferred Time</label><div class="mt-1"><textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" placeholder="I would like to book a court for this Saturday morning..."></textarea></div></div><div><button type="button" class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"> Submit Request </button></div></form><div class="mt-6 text-center text-sm text-gray-500"><p>Note: This is a demo booking request.</p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/booking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { booking as default };
//# sourceMappingURL=booking-C3wPFNlc.mjs.map
