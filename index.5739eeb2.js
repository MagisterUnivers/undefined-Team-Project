function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.5739eeb2.js","7kmbu":"mobile_not-found-280.2477c70c.png","15y1x":"mobile_not-found-560.a4fbedec.png","8JTkt":"tablet_not-found-345.4a5eb24c.png","a5Rn2":"tablet_not-found-690.e022b24e.png","h8C2i":"desktop_not-found-345.4090a7c6.png","aqGym":"desktop_not-found-690.b26cda16.png","jvL0n":"index.c37944dc.css","g7206":"index.ffd49e3e.js"}')),i("lmMzO");document.querySelectorAll(".hero__btn").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelectorAll(".hero__btn--active");if(e.classList.contains("hero__btn--active"))e.classList.remove("hero__btn--active");else{if(1===t.length){t[0].classList.remove("hero__btn--active")}e.classList.add("hero__btn--active")}}))}));var a=i("8G1wF");async function c(){let e;e=window.innerWidth<768?3:window.innerWidth<1280?6:9;try{const n=await Promise.all(Array.from({length:e},(()=>fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")))),o=await Promise.all(n.map((e=>{if(e.ok)return e.json();throw new Error(e.status)})));document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",console.log(o),document.querySelector(".random-cocktail__list").innerHTML=(t=o,console.log(t),t.reduce(((e,t)=>localStorage.getItem("favCocktails").includes(`${t.drinks[0].idDrink}`)?e+`<li class="random-cocktail__item" id="${t.drinks[0].idDrink}">\n  <img class="random-cocktail__image" src="${t.drinks[0].strDrinkThumb}" alt="${t.drinks[0].strCategory}"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.drinks[0].strDrink}</h3><div class="random-cocktail__btn">${a.LEARN_MORE_BTN}${a.REMOVE_BTN}</div></li></div></div>`:e+`<li class="random-cocktail__item" id="${t.drinks[0].idDrink}">\n  <img class="random-cocktail__image" src="${t.drinks[0].strDrinkThumb}" alt="${t.drinks[0].strCategory}"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${t.drinks[0].strDrink}</h3><div class="random-cocktail__btn">${a.LEARN_MORE_BTN}${a.ADD_BTN}</div></li></div></div>`),""))}catch(e){console.log("Error",e)}var t}window.onload=c();const s={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};s.selected.addEventListener("click",(()=>{s.optionsContainer.classList.toggle("active")})),s.optionsList.forEach((e=>{e.addEventListener("click",(()=>{s.selected.innerHTML=e.querySelector("label").innerHTML,s.optionsContainer.classList.remove("active")}))}));var l;l=new URL(i("kyEFX").resolve("7kmbu"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("15y1x"),import.meta.url).toString();new URL(i("kyEFX").resolve("8JTkt"),import.meta.url).toString();new URL(i("kyEFX").resolve("a5Rn2"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("h8C2i"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("aqGym"),import.meta.url).toString();const _=document.querySelector(".header-form"),p=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));async function g(e=""){p.textContent="Searching results";let n="";return e?n=e.reduce(((e,t)=>e+`<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="${t.strDrinkThumb}" alt="${t.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">${t.strDrink}</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>`),""):(p.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",n=`<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="${t(u)}, ${t(m)} 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="${t(l)}, ${t(d)} 2x"\n          type="image/png"/>\n          <img class="userpic" src="${t(l)}" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>`),n.includes('<li class="random-cocktail__item">')?`<ul class="random-cocktail__list">${n}</ul>`:n}_.addEventListener("submit",(async e=>{e.preventDefault();const t=_.elements.headerinput.value.trim();if(!t)return document.getElementById("rnd-cocktail").innerHTML="",p.textContent="No search results found.",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await g()),"";const n=await async function(e){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`,n=await fetch(t);return(await n.json()).drinks}(t);document.getElementById("rnd-cocktail").innerHTML="",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await g(n))})),i("cSP97"),i("aJrzc"),i("eujXJ");const h=document.querySelector("[data-burger-menu-toggle]"),y=document.querySelector("[data-burger-menu]");h.addEventListener("click",(function(){h.classList.toggle("is-open"),y.classList.toggle("is-open"),h.setAttribute("aria-expanded",!0),f.classList.toggle("unscroll")}));const f=document.querySelector("body");const k=document.querySelector("[data-burger-menu-arrow]"),v=document.querySelector("[data-burger-menu-favorite]");k.addEventListener("click",(function(){v.classList.toggle("burger-favorite__items-display")})),console.log("12222");a=i("8G1wF");document.querySelector(".random-cocktail__list");const b=document.querySelector(".arrow-btn-pagination.previous"),w=document.querySelector(".arrow-btn-pagination.next");document.querySelector(".random-cocktail__title"),document.querySelector(".pagination__wrapper");async function L(e){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`,n=await fetch(t);return(await n.json()).drinks}b.style.display="none",w.style.display="none";const E=document.querySelectorAll(".hero___search__list .hero__search__item");function S(e){let t,n=1;t=window.innerWidth<768?3:window.innerWidth<1280?6:9;const o=document.querySelector(`.pagination__item:nth-child(${n+1})`);o&&o.classList.add("pagination__item--active")}s.optionsList.forEach((e=>{e.addEventListener("click",(()=>{const t=e.querySelector("label").innerHTML.toLowerCase();console.log(t),L(t).then((e=>{e||c(),S(e)}))}))})),E.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.textContent.toLowerCase();console.log(t),L(t).then((e=>{e||c(),S(e)}))}))})),displayList(dataCoctails,cardsPerPage,currentPage),displayPagination(dataCoctails,cardsPerPage);
//# sourceMappingURL=index.5739eeb2.js.map