!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r("2xztc");var i=r("4s6iC"),o=r("6alNL"),a=r("h6c0i"),l=document.querySelector(".fav-ingredients__list"),d=JSON.parse(localStorage.getItem("favIngredients"))||[];function s(){var e=document.querySelector(".fav-ingredients__default");d.length?e.style.display="none":e.style.display="block"}function c(){l.innerHTML="";var e=!0,n=!1,t=void 0;try{for(var r,o=function(e,n){var t=n.value,r=t.strType||t.strIngredient,o=document.createElement("li");o.classList.add("fav-ingredients__item"),o.innerHTML='<h3 class="fav-ingredient__name theme_text_color ">'.concat(t.strIngredient,'</h3>\n    <h4 class="fav-ingredient__type">').concat(r,'</h4>\n    <div class="fav-ingredient__btn">\n      ').concat(i.LEARN_MORE_BTN).concat(i.REMOVE_BTN,"\n    </div>"),o.querySelector(".btn-remove-from").addEventListener("click",(function(){var e=d.findIndex((function(e){return e.strIngredient===t.strIngredient&&e.strType===t.strType}));e>-1&&(d.splice(e,1),localStorage.setItem("favIngredients",JSON.stringify(d)),o.remove(),a.Notify.info("".concat(t.strIngredient," was removed from your favorites🙄!")),s(),u())})),l.appendChild(o)},c=d[Symbol.iterator]();!(e=(r=c.next()).done);e=!0)o(0,r)}catch(e){n=!0,t=e}finally{try{e||null==c.return||c.return()}finally{if(n)throw t}}s()}function u(){var e=document.querySelector(".fav-ingredients__wrapper");d.length>4?e.style.display="none":e.style.display="block"}u(),c(),window.addEventListener("storage",(function(e){"favIngredients"===e.key&&c()}));var f=document.querySelector(".header-form");f.addEventListener("submit",(function(e){e.preventDefault();var n=f.headerinput.value.toLowerCase();console.log(n);var t=d,r=t.map((function(e){return e.strIngredient.toLowerCase().split(" ")}));console.log(n.split(" "));var o=[];r.forEach((function(e,t){var r=!0,i=!1,a=void 0;try{for(var l,d=e[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var s=l.value;n.split(" ").includes(s)&&o.push(t)}}catch(e){i=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(i)throw a}}}));var a=[],l=!0,s=!1,c=void 0;try{for(var v,y=o[Symbol.iterator]();!(l=(v=y.next()).done);l=!0){var g=v.value;a.push(t[g])}}catch(e){s=!0,c=e}finally{try{l||null==y.return||y.return()}finally{if(s)throw c}}if(document.querySelector(".fav-ingredients__list").innerHTML="",0===a.length)return document.querySelector(".fav-ingredients__default").removeAttribute("hidden"),void(document.querySelector(".fav-ingredients__wrapper").style.display="block");document.querySelector(".fav-ingredients__wrapper").style.display="none";var _=function(e){return e.map((function(e){var n=e.strType||e.strIngredient;return'<li class="fav-ingredients__item">\n      <h3 class="fav-ingredient__name">'.concat(e.strIngredient,'</h3>\n      <h4 class="fav-ingredient__type">').concat(n,'</h4>\n      <div class="fav-ingredient__btn">\n        ').concat(i.LEARN_MORE_BTN).concat(i.REMOVE_BTN,"\n      </div>\n    </li>")}))}(a);u(),document.querySelector(".fav-ingredients__list").insertAdjacentHTML("beforeend",_.join(""));var p=document.querySelector(".footer");p.style.position="absolute",p.style.bottom="0",p.style.width="100%"})),document.querySelector(".btn-secondary").addEventListener("click",(function(){var e=document.querySelector(".fav-ingredient__name").textContent;(0,o.getIngredientData)(e),o.modalIngredients.classList.toggle("is-hidden")}))}();
//# sourceMappingURL=fav_ingredients.3ceaef68.js.map