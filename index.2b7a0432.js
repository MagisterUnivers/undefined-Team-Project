function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.2b7a0432.js","7kmbu":"mobile_not-found-280.2477c70c.png","15y1x":"mobile_not-found-560.a4fbedec.png","h8C2i":"desktop_not-found-345.4090a7c6.png","aqGym":"desktop_not-found-690.b26cda16.png","jvL0n":"index.80458908.css","g7206":"index.9454d5fa.js","lQUGn":"index.b6e1eae7.js"}')),r("lmMzO"),r("bUb57");document.querySelectorAll(".hero__btn").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelectorAll(".hero__btn--active");if(e.classList.contains("hero__btn--active"))e.classList.remove("hero__btn--active");else{if(1===t.length){t[0].classList.remove("hero__btn--active")}e.classList.add("hero__btn--active")}}))}));var c=r("8G1wF");async function a(){let e;e=window.innerWidth<768?3:window.innerWidth<1280?6:9;try{const t=await Promise.all(Array.from({length:e},(()=>fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")))),n=await Promise.all(t.map((e=>{if(e.ok)return e.json();throw new Error(e.status)})));document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",document.querySelector(".random-cocktail__list").innerHTML=n.reduce(((e,t)=>localStorage.getItem("favCocktails").includes(`${t.drinks[0].idDrink}`)?e+`<li class="random-cocktail__item" id="${t.drinks[0].idDrink}">\n  <img class="random-cocktail__image" src="${t.drinks[0].strDrinkThumb}" alt="${t.drinks[0].strCategory}"  width=0 height=0/><div><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.drinks[0].strDrink}</h3><div class="random-cocktail__btn">${c.LEARN_MORE_BTN}${c.REMOVE_BTN}</div></div></li></div></div>`:e+`<li class="random-cocktail__item" id="${t.drinks[0].idDrink}">\n  <img class="random-cocktail__image" src="${t.drinks[0].strDrinkThumb}" alt="${t.drinks[0].strCategory}"  width=0 height=0/><div><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.drinks[0].strDrink}</h3><div class="random-cocktail__btn">${c.LEARN_MORE_BTN}${c.ADD_BTN}</div></div></li></div></div>`),"")}catch(e){console.log("Error",e)}}window.onload=a();const l={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};l.selected.addEventListener("click",(()=>{l.optionsContainer.classList.toggle("active")})),l.optionsList.forEach((e=>{e.addEventListener("click",(()=>{l.selected.innerHTML=e.querySelector("label").innerHTML,l.optionsContainer.classList.remove("active")}))}));var s;s=new URL(r("kyEFX").resolve("7kmbu"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("15y1x"),import.meta.url).toString();var m;m=new URL(r("kyEFX").resolve("h8C2i"),import.meta.url).toString();var u;u=new URL(r("kyEFX").resolve("aqGym"),import.meta.url).toString();c=r("8G1wF");const _=document.querySelector(".header-form"),h=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));async function p(e){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`,n=await fetch(t);return(await n.json()).drinks}async function k(e=""){h.textContent="Searching results";let n="";return e?n=e.reduce(((e,t)=>e+`<li class="random-cocktail__item" id="${t.idDrink}">\n  <img class="random-cocktail__image" src="${t.strDrinkThumb}" alt="${t.strCategory}"  width=0 height=0/><div><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.strDrink}</h3><div class="random-cocktail__btn">${c.LEARN_MORE_BTN}${c.ADD_BTN}</div></div></li></div></div>`),""):(h.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",n=`<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="${t(m)}, ${t(u)} 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="${t(s)}, ${t(d)} 2x"\n          type="image/png"/>\n          <img class="userpic" src="${t(s)}" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>`),n.includes('<li class="random-cocktail__item"')?`<ul class="random-cocktail__list">${n}</ul>`:n}_.addEventListener("submit",(async e=>{e.preventDefault();const t=_.elements.headerinput.value.trim();if(!t)return document.getElementById("rnd-cocktail").innerHTML="",h.textContent="No search results found.",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await k()),"";const n=await p(t);document.getElementById("rnd-cocktail").innerHTML="",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await k(n))}));const v=document.querySelector(".mobile-menu"),g=document.querySelector(".burger-menu-btn"),f=document.querySelector(".random-cocktail__title"),y=document.querySelector(".burger-form"),b=document.querySelector(".random-cocktail__title");y.addEventListener("submit",(async e=>{e.preventDefault();const t=y.elements.burgerinput.value.trim();if(!t)return document.getElementById("rnd-cocktail").innerHTML="",b.textContent="No search results found.",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await k()),"";const n=await p(t);document.getElementById("rnd-cocktail").innerHTML="",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await k(n)),v.classList.remove("is-open"),g.classList.remove("is-open"),document.querySelector("body").classList.toggle("no-scroll"),f.scrollIntoView({behavior:"smooth"})}));c=r("8G1wF");const w=document.querySelector(".random-cocktail__list"),L=document.querySelector(".arrow-btn-pagination.previous"),E=document.querySelector(".arrow-btn-pagination.next"),S=document.querySelector(".random-cocktail__title"),$=document.querySelector(".pagination__wrapper"),x=document.querySelectorAll(".hero___search__list .hero__search__item");async function T(e){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`,n=await fetch(t);return(await n.json()).drinks}function H(e){const t=e;let n;n=window.innerWidth<768?3:window.innerWidth<1280?6:9,q(t,n,1),function(e,t,n){E.style.display="block",E.disabled=!1,E.classList.add("active"),L.style.display="block",L.disabled=!0;const i=document.querySelector(".pagination__list");i.innerHTML="";const o=Math.ceil(e.length/t),r=document.createElement("span");if(r.classList.add("dots"),r.innerText="...",1===o)$.classList.add("visually-hidden");else if(window.innerWidth<768)if(o>5){for(let o=1;o<=3;o++){const r=C(e,o,n,t);i.appendChild(r)}i.appendChild(r);const c=C(e,o,n,t);c.addEventListener("click",(()=>{q(e,t,n=o),c.classList.add("pagination__item--active")})),i.appendChild(c)}else for(let r=1;r<=o;r++){const o=C(e,r,n,t);i.appendChild(o)}else if(window.innerWidth>=768)if(o>7){for(let o=1;o<=3;o++){const r=C(e,o,n,t);i.appendChild(r)}i.appendChild(r);for(let e=o;e>=o-2;e--){const t=C(e,n);i.appendChild(t)}}else for(let r=1;r<=o;r++){const o=C(e,r,n,t);i.appendChild(o)}}(t,n,1)}function q(e,t,n){S.textContent="Searching results",w.innerHTML="";const i=t*--n,o=i+t,r=e.slice(i,o).reduce(((e,t)=>localStorage.getItem("favCocktails").includes(`${t.idDrink}`)?e+`<li class="random-cocktail__item" id="${t.idDrink}">\n  <img class="random-cocktail__image" src="${t.strDrinkThumb}" alt="${t.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.strDrink}</h3><div class="random-cocktail__btn">${c.LEARN_MORE_BTN}${c.REMOVE_BTN}</div></li></div></div>`:e+`<li class="random-cocktail__item" id="${t.idDrink}">\n  <img class="random-cocktail__image" src="${t.strDrinkThumb}" alt="${t.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.strDrink}</h3><div class="random-cocktail__btn">${c.LEARN_MORE_BTN}${c.ADD_BTN}</div></li></div></div>`),"");w.insertAdjacentHTML("afterbegin",r),M(e,t,++n)}function C(e,t,n,i){const o=document.createElement("li");return o.classList.add("pagination__item"),o.innerText=t,n===t&&o.classList.add("pagination__item--active"),o.addEventListener("click",(()=>{q(e,i,n=t),M(e,i,n)})),o}function M(e,t,n){!function(e,t,n){E.addEventListener("click",(()=>{n++,q(e,t,n),M(e,t,n)}))}(e,t,n),function(e,t,n){L.addEventListener("click",(()=>{n--,q(e,t,n),M(e,t,n)}))}(e,t,n);const i=Math.ceil(e.length/t),o=document.querySelector(".pagination__item--active");o&&o.classList.remove("pagination__item--active");const r=document.querySelector(`.pagination__item:nth-child(${n})`);r&&r.classList.add("pagination__item--active"),n===i?(E.disabled=!0,E.classList.remove("active")):(E.disabled=!1,E.classList.add("active")),1===n?(L.disabled=!0,L.classList.remove("active")):(L.disabled=!1,L.classList.add("active"))}L.style.display="none",E.style.display="none",l.optionsList.forEach((e=>{e.addEventListener("click",(()=>{T(e.querySelector("label").innerHTML.toLowerCase()).then((e=>{e||a(),H(e)}))}))})),x.forEach((e=>{e.addEventListener("click",(e=>{T(e.target.textContent.toLowerCase()).then((e=>{e||a(),H(e)}))}))})),r("cSP97"),r("aJrzc"),r("eujXJ");
//# sourceMappingURL=index.2b7a0432.js.map