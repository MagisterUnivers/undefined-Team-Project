!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},n.parcelRequired7c6=c),c.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},o=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),o[e]=t),t}})),c("iE7OH").register(JSON.parse('{"EVgbq":"index.01ec9c7d.js","dJgAb":"mobile_not-found-280.2477c70c.png","2sSFK":"mobile_not-found-560.a4fbedec.png","4sgtB":"tablet_not-found-345.4a5eb24c.png","5hJ3C":"tablet_not-found-690.e022b24e.png","iQ4Zt":"desktop_not-found-345.4090a7c6.png","5z68B":"desktop_not-found-690.b26cda16.png","jvL0n":"index.457a4292.css","8AV0k":"index.394ff764.js"}')),c("2xztc"),document.querySelectorAll(".hero__btn").forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelectorAll(".hero__btn--active");if(e.classList.contains("hero__btn--active"))e.classList.remove("hero__btn--active");else{if(1===t.length)t[0].classList.remove("hero__btn--active");e.classList.add("hero__btn--active")}}))}));var i=c("bpxeT"),a=c("2TvXO"),s=c("4s6iC");function l(){return d.apply(this,arguments)}function d(){return(d=t(i)(t(a).mark((function e(){var n,r,o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",n=window.innerWidth<768?3:window.innerWidth<1280?6:9,e.prev=3,e.next=6,Promise.all(Array.from({length:n},(function(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")})));case 6:return r=e.sent,e.next=9,Promise.all(r.map((function(e){if(e.ok)return e.json();throw new Error(e.status)})));case 9:o=e.sent,document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",console.log(o),document.querySelector(".random-cocktail__list").innerHTML=u(o),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log("Error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)}function u(e){return console.log(e),e.reduce((function(e,t){return localStorage.getItem("favCocktails").includes("".concat(t.drinks[0].idDrink))?e+'<li class="random-cocktail__item" id="'.concat(t.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(t.drinks[0].strDrinkThumb,'" alt="').concat(t.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(t.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.REMOVE_BTN,"</div></li></div></div>"):e+'<li class="random-cocktail__item" id="'.concat(t.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(t.drinks[0].strDrinkThumb,'" alt="').concat(t.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(t.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.ADD_BTN,"</div></li></div></div>")}),"")}window.onload=l();var p={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};p.selected.addEventListener("click",(function(){p.optionsContainer.classList.toggle("active")})),p.optionsList.forEach((function(e){e.addEventListener("click",(function(){p.selected.innerHTML=e.querySelector("label").innerHTML,p.optionsContainer.classList.remove("active")}))}));var m;i=c("bpxeT"),a=c("2TvXO");m=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("dJgAb");var f;f=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("2sSFK");c("aNJCr").getBundleURL("EVgbq"),c("iE7OH").resolve("4sgtB");c("aNJCr").getBundleURL("EVgbq"),c("iE7OH").resolve("5hJ3C");var g;g=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("iQ4Zt");var _;_=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("5z68B");var h,v=document.querySelector(".header-form"),y=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));function b(e){return k.apply(this,arguments)}function k(){return(k=t(i)(t(a).mark((function e(n){var r,o,c;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:return c=e.sent,e.abrupt("return",c.drinks);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return x.apply(this,arguments)}function x(){return x=t(i)(t(a).mark((function e(){var n,r,o=arguments;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",y.textContent="Searching results",r="",n?r=n.reduce((function(e,t){return e+'<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="'.concat(t.strDrinkThumb,'" alt="').concat(t.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">').concat(t.strDrink,'</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>')}),""):(y.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",r='<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="'.concat(t(g),", ").concat(t(_),' 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="').concat(t(m),", ").concat(t(f),' 2x"\n          type="image/png"/>\n          <img class="userpic" src="').concat(t(m),'" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>')),e.abrupt("return",r.includes('<li class="random-cocktail__item">')?'<ul class="random-cocktail__list">'.concat(r,"</ul>"):r);case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}v.addEventListener("submit",(h=t(i)(t(a).mark((function e(n){var r,o;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=v.elements.headerinput.value.trim()){e.next=11;break}return document.getElementById("rnd-cocktail").innerHTML="",y.textContent="No search results found.",e.t0=document.getElementById("rnd-cocktail"),e.next=8,w();case 8:return e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1),e.abrupt("return","");case 11:return e.next=13,b(r);case 13:return o=e.sent,document.getElementById("rnd-cocktail").innerHTML="",e.t2=document.getElementById("rnd-cocktail"),e.next=18,w(o);case 18:e.t3=e.sent,e.t2.insertAdjacentHTML.call(e.t2,"beforeend",e.t3);case 20:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})),c("hH1K1");i=c("bpxeT"),a=c("2TvXO");var S,E,L=c("h6c0i"),q=document.querySelector("#modal-ingredients"),C=document.querySelector(".open-btn"),H=document.querySelector(".modal-ingredients-close"),N=document.querySelector(".backdrop"),A=document.querySelector("#modal-btn__remove-fav"),T=document.querySelector("#modal-btn__add-to-fav");function I(){return(I=t(i)(t(a).mark((function e(n){var r,o,c,i;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return'<h2 class="modal-ingredient-title theme_text_color" id=\''.concat(E.idIngredient,"''>").concat(E.strIngredient,'</h2>\n        <strong class="modal-ingredient-uptitle theme_text_color">').concat(E.strType,'</strong>\n        <p class="modal-ingredient-text theme_modal_text_color">').concat(E.strDescription,'</p>\n        <ul class="modal-ingredient-list specs-list">\n        <li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color ">&#10038;</span> Alcohol: ').concat(E.strAlcohol,"</li>\n        ").concat(c,"\n          </ul>")},e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,E=o.ingredients[0],c='<li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color">&#10038;</span> Alcohol by volume: '.concat(E.strABV,"%</li>"),"No"===E.strAlcohol&&(c=""),q.insertAdjacentHTML("afterbegin",i()),S=document.querySelector(".modal-ingredient-title"),B();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){N.classList.toggle("is-hidden")}function B(){JSON.parse(localStorage.getItem("favIngredients")).find((function(e){return Number(e.idIngredient)===Number(S.id)}))?(A.style.display="block",T.style.display="none"):(A.style.display="none",T.style.display="block")}localStorage.getItem("favIngredients")||localStorage.setItem("favIngredients",JSON.stringify([])),A.style.display="none",T.addEventListener("click",(function(){A.style.display="block",T.style.display="none";var e=JSON.parse(localStorage.getItem("favIngredients"));console.log(E),e.push(E),console.log(e),localStorage.setItem("favIngredients",JSON.stringify(e)),L.Notify.success("".concat(E.strIngredient," added to your favorites😍!"))})),A.addEventListener("click",(function(e){A.style.display="none",T.style.display="block";var t=JSON.parse(localStorage.getItem("favIngredients"));console.log(t),console.dir(e.target),t.splice(t.findIndex((function(e){return Number(e.idIngredient)===Number(S.id)})),1),localStorage.setItem("favIngredients",JSON.stringify(t)),L.Notify.info("".concat(E.strIngredient," was removed from your favorites🙄!"))})),H.addEventListener("click",O),C.addEventListener("click",O),function(e){I.apply(this,arguments)}("Wine"),c("3GCax");var R=document.querySelector("[data-burger-menu-toggle]"),J=document.querySelector("[data-burger-menu]");R.addEventListener("click",(function(){R.classList.toggle("is-open"),J.classList.toggle("is-open"),R.setAttribute("aria-expanded",!0),j.classList.toggle("unscroll")}));var j=document.querySelector("body");var D=document.querySelector("[data-burger-menu-arrow]"),M=document.querySelector("[data-burger-menu-favorite]");D.addEventListener("click",(function(){M.classList.toggle("burger-favorite__items-display")})),console.log("12222");i=c("bpxeT"),a=c("2TvXO"),s=c("4s6iC"),document.querySelector(".random-cocktail__list");var F=document.querySelector(".arrow-btn-pagination.previous"),P=document.querySelector(".arrow-btn-pagination.next");document.querySelector(".random-cocktail__title"),document.querySelector(".pagination__wrapper");function V(e){return U.apply(this,arguments)}function U(){return(U=t(i)(t(a).mark((function e(n){var r,o,c;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(n),e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:return c=e.sent,e.abrupt("return",c.drinks);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}F.style.display="none",P.style.display="none";var z=document.querySelectorAll(".hero___search__list .hero__search__item");function W(e){var t=1;window.innerWidth<768||window.innerWidth;var n=document.querySelector(".pagination__item:nth-child(".concat(t+1,")"));n&&n.classList.add("pagination__item--active")}p.optionsList.forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector("label").innerHTML.toLowerCase();console.log(t),V(t).then((function(e){e||l(),W(e)}))}))})),z.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.textContent.toLowerCase();console.log(t),V(t).then((function(e){e||l(),W(e)}))}))})),displayList(dataCoctails,cardsPerPage,currentPage),displayPagination(dataCoctails,cardsPerPage)}();
//# sourceMappingURL=index.01ec9c7d.js.map
