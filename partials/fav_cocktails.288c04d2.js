!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var c={id:t,exports:{}};return e[t]=c,n.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},t.parcelRequired7c6=n),n("hH1K1");var c=n("4s6iC");function a(){return JSON.parse(localStorage.getItem("favCocktails"))}window.onload=function(){var t=a();if(0===t.length)return document.querySelector(".fav-cocktails__default-text").removeAttribute("hidden"),void(document.querySelector(".fav-content__wrapper").style.display="block");document.querySelector(".fav-content__wrapper").style.display="none";var e=(o=t,o.map((function(t){return console.log(t),e=t,localStorage.getItem("favCocktails").includes("".concat(e.idDrink))?'<li class="random-cocktail__item" id="'.concat(e.idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">').concat(e.strDrink,'</h3><div class="random-cocktail__btn">').concat(c.LEARN_MORE_BTN).concat(c.REMOVE_BTN,"</div></li></div></div>"):'<li class="random-cocktail__item" id="'.concat(e.idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">').concat(e.strDrink,'</h3><div class="random-cocktail__btn">').concat(c.LEARN_MORE_BTN).concat(c.ADD_BTN,"</div></li></div></div>");var e})));var o;document.querySelector(".random-cocktail__list").insertAdjacentHTML("beforeend",e.join("")),document.getElementById("content").removeAttribute("hidden")}(),document.querySelector(".random-cocktail__list").addEventListener("click",(function(t){(t.target.parentNode.classList.contains("btn-remove-from")||t.target.classList.contains("btn-remove-from"))&&(t.target.closest(".random-cocktail__item").remove(),1===a().length&&(document.querySelector(".fav-cocktails__default-text").removeAttribute("hidden"),document.querySelector(".fav-content__wrapper").style.display="block"))}))}();
//# sourceMappingURL=fav_cocktails.288c04d2.js.map
