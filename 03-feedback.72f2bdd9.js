function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function w(){var e=v();if(j(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?p(n,i-(e-c)):n}(e))}function S(e){return f=void 0,g&&o?b(e):(o=r=void 0,a)}function O(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=m(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(m(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:S(v())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");!function(){let e=localStorage.getItem("localStorageKey");e&&(e=JSON.parse(e),console.log(e),Object.entries(e).forEach((([e,t])=>{b.elements[e].value=t})))}(),b.addEventListener("input",e(t)((function(){const e=new FormData(b);let t={};e.forEach(((e,n)=>t[n]=e)),localStorage.setItem(localStorageKey,JSON.stringify(t))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(localStorageKey);let t={};new FormData(b).forEach(((e,n)=>t[n]=e)),console.log(t),b.reset()}));
//# sourceMappingURL=03-feedback.72f2bdd9.js.map