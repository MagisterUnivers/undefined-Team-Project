var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("8G1wF"),o=r("aJrzc"),s=r("iQIUW");const d=document.querySelector(".fav-ingredients__list"),l=JSON.parse(localStorage.getItem("favIngredients"))||[];function a(){const e=document.querySelector(".fav-ingredients__default");l.length?e.style.display="none":e.style.display="block"}function c(){d.innerHTML="";for(const e of l){const n=e.strType||e.strIngredient,t=document.createElement("li");t.classList.add("fav-ingredients__item"),t.innerHTML=`<h3 class="fav-ingredient__name">${e.strIngredient}</h3>\n    <h4 class="fav-ingredient__type">${n}</h4>\n    <div class="fav-ingredient__btn">\n      ${i.LEARN_MORE_BTN}${i.REMOVE_BTN}\n    </div>`;t.querySelector(".btn-remove-from").addEventListener("click",(()=>{const n=l.findIndex((n=>n.strIngredient===e.strIngredient&&n.strType===e.strType));n>-1&&(l.splice(n,1),localStorage.setItem("favIngredients",JSON.stringify(l)),t.remove(),s.Notify.info(`${e.strIngredient} was removed from your favorites🙄!`),a(),f())})),d.appendChild(t)}a()}function f(){const e=document.querySelector(".fav-ingredients__wrapper");l.length>3?e.style.display="none":e.style.display="block"}f(),c(),window.addEventListener("storage",(e=>{"favIngredients"===e.key&&c()})),document.querySelector(".btn-secondary").addEventListener("click",(()=>{const e=document.querySelector(".fav-ingredient__name").textContent;(0,o.getIngredientData)(e),o.modalIngredients.classList.toggle("is-hidden"),console.log(e)}));
//# sourceMappingURL=fav_ingredients.6dc0e1d4.js.map
