!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.f690530a.js","dJgAb":"mobile_not-found-280.2477c70c.png","2sSFK":"mobile_not-found-560.a4fbedec.png","4sgtB":"tablet_not-found-345.4a5eb24c.png","5hJ3C":"tablet_not-found-690.e022b24e.png","iQ4Zt":"desktop_not-found-345.4090a7c6.png","5z68B":"desktop_not-found-690.b26cda16.png","jvL0n":"index.91b83a5a.css","8AV0k":"index.392af656.js"}')),document.querySelectorAll(".hero__btn").forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelectorAll(".hero__btn--active");if(e.classList.contains("hero__btn--active"))e.classList.remove("hero__btn--active");else{if(1===t.length)t[0].classList.remove("hero__btn--active");e.classList.add("hero__btn--active")}}))}));var c=i("bpxeT"),a=i("2TvXO"),s=i("4s6iC");function l(){return d.apply(this,arguments)}function d(){return(d=t(c)(t(a).mark((function e(){var n,r,o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",n=window.innerWidth<768?3:window.innerWidth<1280?6:9,e.prev=3,e.next=6,Promise.all(Array.from({length:n},(function(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")})));case 6:return r=e.sent,e.next=9,Promise.all(r.map((function(e){if(e.ok)return e.json();throw new Error(e.status)})));case 9:o=e.sent,document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",console.log(o),document.querySelector(".random-cocktail__list").innerHTML=u(o),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log("Error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)}function u(e){return e.reduce((function(e,t){return localStorage.getItem("favCocktails").includes("".concat(t.drinks[0].idDrink))?e+'<li class="random-cocktail__item" id="'.concat(t.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(t.drinks[0].strDrinkThumb,'" alt="').concat(t.drinks[0].strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">').concat(t.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.REMOVE_BTN,"</div></li></div></div>"):e+'<li class="random-cocktail__item" id="'.concat(t.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(t.drinks[0].strDrinkThumb,'" alt="').concat(t.drinks[0].strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">').concat(t.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.ADD_BTN,"</div></li></div></div>")}),"")}window.onload=l();var p={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};p.selected.addEventListener("click",(function(){p.optionsContainer.classList.toggle("active")})),p.optionsList.forEach((function(e){e.addEventListener("click",(function(){p.selected.innerHTML=e.querySelector("label").innerHTML,p.optionsContainer.classList.remove("active")}))}));var f;c=i("bpxeT"),a=i("2TvXO");f=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("dJgAb");var m;m=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2sSFK");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("4sgtB");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("5hJ3C");var _;_=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iQ4Zt");var h;h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("5z68B");var v,g=document.querySelector(".header-form"),b=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));function y(e){return k.apply(this,arguments)}function k(){return(k=t(c)(t(a).mark((function e(n){var r,o,i;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:return i=e.sent,e.abrupt("return",i.drinks);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return L.apply(this,arguments)}function L(){return L=t(c)(t(a).mark((function e(){var n,r,o=arguments;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",b.textContent="Searching results",r="",n?r=n.reduce((function(e,t){return e+'<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="'.concat(t.strDrinkThumb,'" alt="').concat(t.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">').concat(t.strDrink,'</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>')}),""):(b.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",r='<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="'.concat(t(_),", ").concat(t(h),' 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="').concat(t(f),", ").concat(t(m),' 2x"\n          type="image/png"/>\n          <img class="userpic" src="').concat(t(f),'" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>')),e.abrupt("return",r.includes('<li class="random-cocktail__item">')?'<ul class="random-cocktail__list">'.concat(r,"</ul>"):r);case 5:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}g.addEventListener("submit",(v=t(c)(t(a).mark((function e(n){var r,o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=g.elements.headerinput.value.trim()){e.next=11;break}return document.getElementById("rnd-cocktail").innerHTML="",b.textContent="No search results found.",e.t0=document.getElementById("rnd-cocktail"),e.next=8,w();case 8:return e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1),e.abrupt("return","");case 11:return e.next=13,y(r);case 13:return o=e.sent,document.getElementById("rnd-cocktail").innerHTML="",e.t2=document.getElementById("rnd-cocktail"),e.next=18,w(o);case 18:e.t3=e.sent,e.t2.insertAdjacentHTML.call(e.t2,"beforeend",e.t3);case 20:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)}));var E=document.querySelector(".random-cocktail__list"),x=document.querySelector(".arrow-btn-pagination.previous"),C=document.querySelector(".arrow-btn-pagination.next");x.style.display="none",C.style.display="none";var S=document.querySelectorAll(".hero___search__list .hero__search__item");function A(e){var t,n,r,o,i=e,c=1;function a(e,t,n){E.innerHTML="";var r=t*--n,o=r+t,i=e.slice(r,o).map((function(e){return'<li class="searched-cocktail__item">\n  <img class="searched-cocktail__image" src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">').concat(e.strDrink,'</h3><div class="searched-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn btn-add-to">\n  Add to\n  <svg\n    class="btn-primary__icon btn-add-to"\n    viewBox="0 0 19 17"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      class="outer"\n      d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n      fill="#FD5103"\n    />\n    <path\n      class="inner"\n      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n      fill="#FD5103"\n    />\n  </svg>\n</button></div></li></div></div>')})).join("");E.insertAdjacentHTML("afterbegin",i)}function s(e){x.style.display="block",C.style.display="block";var n=document.createElement("li");return n.classList.add("pagination__item"),n.innerText=e,c===e&&n.classList.add("pagination__item--active"),n.addEventListener("click",(function(){a(i,t,c=e),document.querySelector("li.pagination__item--active").classList.remove("pagination__item--active"),n.classList.add("pagination__item--active")})),n}t=window.innerWidth<768?3:window.innerWidth<1280?6:9,a(i,t,c),function(e,t){var n=document.querySelector(".pagination__list");n.innerHTML="";for(var r=Math.ceil(e.length/t),o=0;o<r;o++){var i=s(o+1);n.appendChild(i)}}(i,t),n=i,r=c,o=Math.ceil(n.length/cards),console.log(o),x.style.display="block",console.log(x),1===r?x.classList.disable=!0:x.addEventListener("click",(function(){x.classList.disable=!1,a(i,t,c=r-1)})),C.style.display="block",(r=o)?C.classList.disable=!0:C.addEventListener("click",(function(){C.classList.disable=!1,a(i,t,c=r+1)}))}console.log(S),p.optionsList.forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector("label").innerHTML.toLowerCase();console.log(t),y(t).then((function(e){e||l(),A(e)}))}))})),S.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.textContent.toLowerCase();console.log(t),y(t).then((function(e){e||l(),A(e)}))}))})),i("hH1K1");c=i("bpxeT"),a=i("2TvXO");var H=document.querySelector("#modal-ingredients"),M=document.querySelector(".open-btn"),q=document.querySelector(".modal-ingredients-close"),T=document.querySelector(".backdrop"),O=document.querySelector("#modal-btn__remove-fav"),j=document.querySelector("#modal-btn__add-to-fav");function B(){return(B=t(c)(t(a).mark((function e(n){var r,o,i,c,s;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return'<h2 class="modal-ingredient-title">'.concat(i.strIngredient,'</h2>\n        <strong class="modal-ingredient-uptitle">').concat(i.strType,'</strong>\n        <p class="modal-ingredient-text">').concat(i.strDescription,'</p>\n        <ul class="modal-ingredient-list specs-list">\n        <li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol: ').concat(i.strAlcohol,"</li>\n        ").concat(c,"\n          </ul>")},e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,i=o.ingredients[0],c='<li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol by volume: '.concat(i.strABV,"%</li>"),"No"===i.strAlcohol&&(c=""),H.insertAdjacentHTML("beforeend",s());case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){T.classList.toggle("is-hidden")}O.style.display="none",j.addEventListener("click",(function(){O.style.display="block",j.style.display="none"})),O.addEventListener("click",(function(){O.style.display="none",j.style.display="block"})),q.addEventListener("click",D),M.addEventListener("click",D),function(e){B.apply(this,arguments)}("Wine"),i("3GCax");var N={};Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(e){return J.default(e)||P.default(e)||V.default(e)||U.default()};var R,F,I,J=z(i("kMC0W")),P=z(i("7AJDX")),U=z(i("8CtQK")),V=z(i("auk6i"));function z(e){return e&&e.__esModule?e:{default:e}}R=document.querySelectorAll(".switcher_theme_button input"),F=document.querySelectorAll(".switcher_theme_button .switcher_theme_toggle"),I=function(){var e="dark"===document.body.getAttribute("data-theme")?"light":"dark";document.body.setAttribute("data-theme",e);var t="dark"===e;R.forEach((function(e){e.checked=t}))},t(N)(F).concat(t(N)(R)).forEach((function(e){e.addEventListener("click",I)}))}();
//# sourceMappingURL=index.f690530a.js.map
