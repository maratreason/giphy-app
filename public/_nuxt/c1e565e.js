(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{229:function(t,e,r){"use strict";r.r(e);r(68),r(51),r(69);var n={props:{picture:Object},data:function(){return{favorites:[]}},mounted:function(){this.favorites=JSON.parse(localStorage.getItem("pictures")||"[]")},methods:{addToFavorites:function(t){var e=JSON.parse(localStorage.getItem("pictures")||"[]");e.includes(t)||e.push(t),localStorage.setItem("pictures",JSON.stringify(e)),this.favorites=e},removeFromFavorites:function(t){var e=JSON.parse(localStorage.getItem("pictures")||"[]").filter((function(e){return e.id!==t}));localStorage.setItem("pictures",JSON.stringify(e)),this.favorites=e}}},c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:t.picture.images.downsized.url,alt:t.picture.embed_url}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.picture.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("\n            "+t._s(t.picture.import_datetime)+"\n        ")]),t._v(" "),t.favorites.find((function(e){return e.id===t.picture.id}))?r("div",[r("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.removeFromFavorites(t.picture.id)}}},[t._v("\n                Remove from favorites\n            ")])]):r("div",[r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addToFavorites(t.picture)}}},[t._v("\n                Add to favorites\n            ")])])])])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,r){"use strict";r.r(e);var n={computed:{favorites:function(){return JSON.parse(localStorage.getItem("pictures")||"[]")}}},c=r(24),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"mt-4"},[e("div",{staticClass:"row"},this._l(this.favorites,(function(picture){return e("div",{key:picture.id,staticClass:"card-wrapper col-md-3 mb-4"},[e("Card",{attrs:{picture:picture}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(229).default})}}]);