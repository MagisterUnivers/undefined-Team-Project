var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var o=i("8G1wF"),r=i("iQIUW");const s=document.querySelector(".fav-ingredients__list");function d(){const e=JSON.parse(localStorage.getItem("favIngredients"))||[];s.innerHTML="";for(const n of e){const i=document.createElement("li");i.classList.add("fav-ingredients__item"),i.innerHTML=`<h3 class="fav-ingredient__name">${n.strIngredient}</h3>\n    <h4 class="fav-ingredient__type">${n.strType}</h4>\n    <div class="fav-ingredient__btn">\n      ${o.LEARN_MORE_BTN}${o.REMOVE_BTN}\n    </div>`;i.querySelector(".btn-remove-from").addEventListener("click",(()=>{const o=e.findIndex((e=>e.strIngredient===n.strIngredient&&e.strType===n.strType));o>-1&&(e.splice(o,1),localStorage.setItem("favIngredients",JSON.stringify(e)),i.remove(),r.Notify.info(`${n.strIngredient} was removed from your favorites🙄!`),t())})),s.appendChild(i)}function t(){const t=document.querySelector(".footer"),n=document.querySelector(".fav-ingredients__default");e.length?e.length<4?(t.style.position="absolute",t.style.bottom="0",t.style.width="100%"):(t.style.position="static",n.style.display="none"):(t.style.position="absolute",t.style.bottom="0",t.style.width="100%",n.style.display="block")}t()}d(),window.addEventListener("storage",(e=>{"favIngredients"===e.key&&d()}));
//# sourceMappingURL=fav_ingredients.66dee8ff.js.map