(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(t,e,r){"use strict";r.r(e);var n=r(1).a.extend({name:"Card",props:{picture:Object},computed:{favorites:function(){return this.$store.getters["pictures/favorites"]}},methods:{addToFavorites:function(t){this.$store.dispatch("pictures/setFavorites",t)},removeFromFavorites:function(t){this.$store.dispatch("pictures/deleteFavorites",t)}}}),c=r(23),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:t.picture.images.downsized.url,alt:t.picture.embed_url}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.picture.title))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("\n            "+t._s(t.picture.import_datetime)+"\n        ")]),t._v(" "),t.favorites&&t.favorites.find((function(e){return e.id===t.picture.id}))?r("div",[r("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.removeFromFavorites(t.picture.id)}}},[t._v("\n                Remove from favorites\n            ")])]):r("div",[r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addToFavorites(t.picture)}}},[t._v("\n                Add to favorites\n            ")])])])])}),[],!1,null,null,null);e.default=component.exports},231:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("452a2762",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";r(231)},235:function(t,e,r){(e=r(69)(!1)).push([t.i,".card-wrapper[data-v-92ab6674]{box-sizing:border-box;margin-right:30px}",""]),t.exports=e},238:function(t,e,r){"use strict";r.r(e);r(24);var n=r(4),c=r(1),o=r(229),d=c.a.extend({name:"Index",components:{Card:o.default},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(r=t.store).getters["pictures/pictures"].length){e.next=4;break}return e.next=4,r.dispatch("pictures/fetchPictures");case 4:case"end":return e.stop()}}),e)})))()},computed:{pictures:function(){return this.$store.getters["pictures/pictures"]}}}),l=(r(234),r(23)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4"},[e("div",{staticClass:"row"},this._l(this.pictures,(function(picture){return e("div",{key:picture.id,staticClass:"card-wrapper col-md-3 mb-4"},[e("Card",{attrs:{picture:picture}})],1)})),0)])}),[],!1,null,"92ab6674",null);e.default=component.exports;installComponents(component,{Card:r(229).default})}}]);