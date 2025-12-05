import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CLfpeGmc.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { a as useLocalePath, _ as _export_sfc } from './server.mjs';
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

const _sfc_main$3 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-blue-900 overflow-hidden" }, _attrs))}><div class="absolute inset-0"><div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div><div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div><div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl"></div></div><div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center"><div class="md:w-1/2 text-left mb-12 md:mb-0"><h1 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"> Unleash Your Potential <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300"> On The Court </span></h1><p class="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed"> Join TOP – The premier destination for Paddle and Tennis excellence. Elevate your game, meet new friends, and enjoy the thrill of the sport. </p><div class="flex flex-col sm:flex-row gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/booking"),
        class: "inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-orange-500 hover:bg-orange-600 md:text-lg transition-transform hover:scale-105 shadow-lg"
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
        to: unref(localePath)("/classes"),
        class: "inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-blue-900 md:text-lg transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Classes `);
          } else {
            return [
              createTextVNode(" View Classes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="md:w-1/2 relative z-10"><div class="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"><img src="https://images.unsplash.com/photo-1622163642998-1ea36b1ad365?q=80&amp;w=2938&amp;auto=format&amp;fit=crop" alt="Paddle Court" class="w-full h-auto object-cover md:h-[500px]"></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-24 bg-white" }, _attrs))}><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-base text-orange-600 font-semibold tracking-wide uppercase">Why Choose TOP?</h2><p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"> More Than Just A Game </p><p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"> We provide a holistic experience that combines professional training with a vibrant community atmosphere. </p></div><div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"><div class="relative group"><div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div><div class="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"><div class="space-y-4"><div class="p-3 bg-blue-100 rounded-lg w-fit text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-xl font-bold text-gray-900">Expert Coaching</h3><p class="text-gray-600 leading-relaxed"> Learn from certified professionals who are passionate about your progress, whether you are picking up a racket for the first time or aiming for the pros. </p></div></div></div><div class="relative group"><div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div><div class="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"><div class="space-y-4"><div class="p-3 bg-orange-100 rounded-lg w-fit text-orange-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div><h3 class="text-xl font-bold text-gray-900">Premium Courts</h3><p class="text-gray-600 leading-relaxed"> Play on our 8 pristine, regulation-standard paddle courts and 4 clay tennis courts. Night lighting ensures the game never stops. </p></div></div></div><div class="relative group"><div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div><div class="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"><div class="space-y-4"><div class="p-3 bg-green-100 rounded-lg w-fit text-green-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div><h3 class="text-xl font-bold text-gray-900">Community Vibes</h3><p class="text-gray-600 leading-relaxed"> Be part of a vibrant club. We organize weekly socials, amateur tournaments, and events that make meeting new partners easy and fun. </p></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BenefitsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BenefitsSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "BenefitsSection" });
const _sfc_main$1 = {
  __name: "TestimonialsPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 py-24" }, _attrs))}><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl"> Loved by Locals </h2><p class="mt-4 text-xl text-gray-500"> See what our members have to say about their experience at TOP. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-white p-8 rounded-xl shadow-md border border-gray-100"><p class="text-gray-600 mb-6 italic">&quot;TOP transformed my backhand and my weekends! Best club in town with the friendliest staff.&quot;</p><div class="flex items-center"><div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">SJ</div><div class="ml-4"><div class="text-sm font-semibold text-gray-900">Sarah J.</div><div class="text-xs text-gray-500">Member since 2022</div></div></div></div><div class="bg-white p-8 rounded-xl shadow-md border border-gray-100"><p class="text-gray-600 mb-6 italic">&quot;The coaches are amazing with kids. My son loves his Saturday lessons and has improved so much.&quot;</p><div class="flex items-center"><div class="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">MT</div><div class="ml-4"><div class="text-sm font-semibold text-gray-900">Mike T.</div><div class="text-xs text-gray-500">Parent</div></div></div></div><div class="bg-white p-8 rounded-xl shadow-md border border-gray-100"><p class="text-gray-600 mb-6 italic">&quot;Great facilities. The lighting for night games is perfect and the booking system is super easy.&quot;</p><div class="flex items-center"><div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">DK</div><div class="ml-4"><div class="text-sm font-semibold text-gray-900">David K.</div><div class="text-xs text-gray-500">Frequent Player</div></div></div></div></div><div class="mt-12 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/references"),
        class: "text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read more stories → `);
          } else {
            return [
              createTextVNode(" Read more stories → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(BenefitsSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CB-B3dD7.mjs.map
