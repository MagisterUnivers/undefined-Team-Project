!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},n.parcelRequired7c6=c),c.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},o=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=c("8NIkP"))&&n.__esModule?n:{default:n}})),c.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),c.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),c.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),c.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=c("8NIkP"))&&n.__esModule?n:{default:n}})),c.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),o[e]=t),t}})),c("iE7OH").register(JSON.parse('{"EVgbq":"index.1b67064f.js","dJgAb":"mobile_not-found-280.2477c70c.png","2sSFK":"mobile_not-found-560.a4fbedec.png","4sgtB":"tablet_not-found-345.4a5eb24c.png","5hJ3C":"tablet_not-found-690.e022b24e.png","iQ4Zt":"desktop_not-found-345.4090a7c6.png","5z68B":"desktop_not-found-690.b26cda16.png","jvL0n":"index.2b89ff6e.css","2JBby":"fav_ingredients.01461749.js","dV49o":"fav_cocktails.6c212ddd.js"}'));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return a.default(e)||s.default(e)||l.default(e)||u.default()};var a=d(c("kMC0W")),s=d(c("7AJDX")),u=d(c("8CtQK")),l=d(c("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f,p,m,h,v,_,g,b,y,k,E,w,x,L;w="theme",x=function(e){document.body.setAttribute("data-theme",e),localStorage.setItem(w,e),L("dark"===e)},L=function(e){document.querySelectorAll(".switcher_theme_button input").forEach((function(t){t.checked=e}))},p=null!==(f=localStorage.getItem(w))&&void 0!==f?f:"light",x(p),m={target:"body",childQuerySelector:".switcher_theme_button input, .switcher_theme_button .switcher_theme_toggle",event:"click",callback:function(){var e=document.body.getAttribute("data-theme");x("dark"===e?"light":"dark")}},h=m.target,v=m.childQuerySelector,_=m.event,g=m.callback,y=!(b="string"==typeof h)&&h instanceof HTMLElement,k=t(i)(b?document.querySelectorAll(h):y?[h]:h),E=function(e){v?e.target.matches(v)&&g(e):g(e)},k.forEach((function(e){e.addEventListener(_,E)})),document.querySelectorAll(".hero__btn").forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelectorAll(".hero__btn--active");if(e.classList.contains("hero__btn--active"))e.classList.remove("hero__btn--active");else{if(1===t.length)t[0].classList.remove("hero__btn--active");e.classList.add("hero__btn--active")}}))}));var S=c("bpxeT"),C=c("2TvXO"),H=c("4s6iC");function A(){return(A=t(S)(t(C).mark((function e(){var n,r,o;return t(C).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",n=window.innerWidth<768?3:window.innerWidth<1280?6:9,e.prev=3,e.next=6,Promise.all(Array.from({length:n},(function(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")})));case 6:return r=e.sent,e.next=9,Promise.all(r.map((function(e){if(e.ok)return e.json();throw new Error(e.status)})));case 9:o=e.sent,document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",document.querySelector(".random-cocktail__list").innerHTML=M(o),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("Error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function M(e){return e.reduce((function(e,t){return localStorage.getItem("favCocktails").includes("".concat(t.drinks[0].idDrink))?e+'<li class="random-cocktail__item" id="'.concat(t.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(t.drinks[0].strDrinkThumb,'" alt="').concat(t.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(t.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(H.LEARN_MORE_BTN).concat(H.REMOVE_BTN,"</div></li></div></div>"):e+'<li class="random-cocktail__item" id="'.concat(t.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(t.drinks[0].strDrinkThumb,'" alt="').concat(t.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(t.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(H.LEARN_MORE_BTN).concat(H.ADD_BTN,"</div></li></div></div>")}),"")}window.onload=function(){return A.apply(this,arguments)}();var q={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};q.selected.addEventListener("click",(function(){q.optionsContainer.classList.toggle("active")})),q.optionsList.forEach((function(e){e.addEventListener("click",(function(){q.selected.innerHTML=e.querySelector("label").innerHTML,q.optionsContainer.classList.remove("active")}))}));var O;S=c("bpxeT"),C=c("2TvXO");O=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("dJgAb");var T;T=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("2sSFK");c("aNJCr").getBundleURL("EVgbq"),c("iE7OH").resolve("4sgtB");c("aNJCr").getBundleURL("EVgbq"),c("iE7OH").resolve("5hJ3C");var B;B=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("iQ4Zt");var N;N=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("5z68B");var R,j=document.querySelector(".header-form"),D=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));function F(e){return I.apply(this,arguments)}function I(){return(I=t(S)(t(C).mark((function e(n){var r,o,c;return t(C).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:return c=e.sent,e.abrupt("return",c.drinks);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return P.apply(this,arguments)}function P(){return P=t(S)(t(C).mark((function e(){var n,r,o=arguments;return t(C).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",D.textContent="Searching results",r="",n?r=n.reduce((function(e,t){return e+'<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="'.concat(t.strDrinkThumb,'" alt="').concat(t.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">').concat(t.strDrink,'</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>')}),""):(D.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",r='<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="'.concat(t(B),", ").concat(t(N),' 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="').concat(t(O),", ").concat(t(T),' 2x"\n          type="image/png"/>\n          <img class="userpic" src="').concat(t(O),'" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>')),e.abrupt("return",r.includes('<li class="random-cocktail__item">')?'<ul class="random-cocktail__list">'.concat(r,"</ul>"):r);case 5:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}j.addEventListener("submit",(R=t(S)(t(C).mark((function e(n){var r,o;return t(C).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=j.elements.headerinput.value.trim()){e.next=11;break}return document.getElementById("rnd-cocktail").innerHTML="",D.textContent="No search results found.",e.t0=document.getElementById("rnd-cocktail"),e.next=8,J();case 8:return e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1),e.abrupt("return","");case 11:return e.next=13,F(r);case 13:return o=e.sent,document.getElementById("rnd-cocktail").innerHTML="",e.t2=document.getElementById("rnd-cocktail"),e.next=18,J(o);case 18:e.t3=e.sent,e.t2.insertAdjacentHTML.call(e.t2,"beforeend",e.t3);case 20:case"end":return e.stop()}}),e)}))),function(e){return R.apply(this,arguments)})),c("hH1K1"),c("6alNL"),c("3GCax"),c("bybz3");var U=document.querySelector("[data-burger-menu-toggle]"),V=document.querySelector("[data-burger-menu]");U.addEventListener("click",(function(){U.classList.toggle("is-open"),V.classList.toggle("is-open"),U.setAttribute("aria-expanded",!0),z.classList.toggle("unscroll")}));var z=document.querySelector("body");var Q=document.querySelector("[data-burger-menu-arrow]"),X=document.querySelector("[data-burger-menu-favorite]");Q.addEventListener("click",(function(){X.classList.toggle("burger-favorite__items-display")})),console.log("12222");var K,W=document.querySelector(".container"),Z=0,$=0,Y=[],G=["#ff0000","#dc143c","#ff4040","#ed2939","#fe2712","#ed1c24"],ee={mouse:{move:"mousemove",stop:"mouseout"},touch:{move:"touchmove",stop:"touchend"}},te="",ne=function(){try{return document.createEvent("TouchEvent"),te="touch",!0}catch(e){return te="mouse",!1}};function re(e,t){return Math.random()*(t-e)+e}function oe(){if(K){var e=document.createElement("div");e.classList.add("heart-container"),e.style.left=Z+re(5,50)+"px",e.style.top=$+re(5,50)+"px";var t=G[Math.floor(re(0,G.length-1))];e.innerHTML='<div class="heart"></div>',e.style.opacity=1;var n=document.querySelector(":root"),r=re(10,20);n.style.setProperty("--size",r+"px"),n.style.setProperty("--color",t),W.appendChild(e),Y.push({visible:!0})}!function(){for(var e in Y){var t=document.getElementsByClassName("heart-container")[e];Y[e].visible?(t.style.opacity=+t.style.opacity-.1,0==t.style.opactiy&&(Y[e].visible=!1)):(t.remove(),Y.splice(e,1))}}(),window.setTimeout(oe,50)}ne(),document.addEventListener(ee[te].move,(function(e){Z=ne()?e.touches[0].pageX:e.pageX,$=ne()?e.touches[0].pageY:e.pageY,K=!0})),document.addEventListener(ee[te].stop,(function(e){K=!1})),window.onload=function(){K=!1,oe()}}();
//# sourceMappingURL=index.1b67064f.js.map
