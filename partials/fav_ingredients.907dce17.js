var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("lmMzO");var i=r("8G1wF"),o=r("aJrzc"),s=r("iQIUW");const l=document.querySelector(".fav-ingredients__list"),d=JSON.parse(localStorage.getItem("favIngredients"))||[];function a(){const e=document.querySelector(".fav-ingredients__default");d.length?e.style.display="none":e.style.display="block"}function c(){l.innerHTML="";for(const e of d){const t=e.strType||e.strIngredient,n=document.createElement("li");n.classList.add("fav-ingredients__item"),n.innerHTML=`<h3 class="fav-ingredient__name theme_text_color ">${e.strIngredient}</h3>\n    <h4 class="fav-ingredient__type">${t}</h4>\n    <div class="fav-ingredient__btn">\n      ${i.LEARN_MORE_BTN}${i.REMOVE_BTN}\n    </div>`;n.querySelector(".btn-remove-from").addEventListener("click",(()=>{const t=d.findIndex((t=>t.strIngredient===e.strIngredient&&t.strType===e.strType));t>-1&&(d.splice(t,1),localStorage.setItem("favIngredients",JSON.stringify(d)),n.remove(),s.Notify.info(`${e.strIngredient} was removed from your favorites🙄!  If you still see item, refresh page, and it will disappear`),a(),f())})),l.appendChild(n)}a()}function f(){const e=document.querySelector(".fav-ingredients__wrapper");d.length>4?e.style.display="none":e.style.display="block"}f(),c(),window.addEventListener("storage",(e=>{"favIngredients"===e.key&&c()}));const u=document.querySelector(".header-form");u.addEventListener("submit",(function(e){e.preventDefault();const t=u.headerinput.value.toLowerCase();console.log(t);const n=d,r=n.map((e=>e.strIngredient.toLowerCase().split(" ")));console.log(t.split(" "));let o=[];r.forEach(((e,n)=>{for(let r of e)t.split(" ").includes(r)&&o.push(n)}));let s=[];for(let e of o)s.push(n[e]);if(document.querySelector(".fav-ingredients__list").innerHTML="",0===s.length)return document.querySelector(".fav-ingredients__default").removeAttribute("hidden"),void(document.querySelector(".fav-ingredients__wrapper").style.display="block");document.querySelector(".fav-ingredients__wrapper").style.display="none";const l=async function(e){return e.map((e=>{const t=e.strType||e.strIngredient;return`<li class="fav-ingredients__item">\n      <h3 class="fav-ingredient__name">${e.strIngredient}</h3>\n      <h4 class="fav-ingredient__type">${t}</h4>\n      <div class="fav-ingredient__btn">\n        ${i.LEARN_MORE_BTN}${i.REMOVE_BTN}\n      </div>\n    </li>`}))}(s);f(),document.querySelector(".fav-ingredients__list").insertAdjacentHTML("beforeend",l.join(""));const a=document.querySelector(".footer");a.style.position="absolute",a.style.bottom="0",a.style.width="100%"})),document.querySelectorAll(".btn-learn-more").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".fav-ingredients__item").querySelector(".fav-ingredient__name").textContent;(0,o.getIngredientData)(t),document.querySelector("body").classList.add("no-scroll"),o.modalIngredients.classList.toggle("is-hidden")}))})),document.querySelector(".modal-ingredients-close").addEventListener("click",(()=>{document.querySelector("body").classList.remove("no-scroll")}));
//# sourceMappingURL=fav_ingredients.907dce17.js.map