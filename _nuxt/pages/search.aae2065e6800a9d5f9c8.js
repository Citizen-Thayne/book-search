webpackJsonp([1],{"GcH/":function(t,r,e){"use strict";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"book-card"},[e("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs7:""}},[e("div",[e("div",{staticClass:"title"},[t._v(t._s(t._f("trunc")(t.title,32)))]),e("div",{staticClass:"authors"},[t._v(t._s(t.authors))])])]),e("v-flex",{attrs:{xs5:""}},[e("v-card-media",{attrs:{src:t.thumbnailUrl,height:"100px",contain:""}})],1)],1)],1)],1)],1)},s=[],n={render:a,staticRenderFns:s};r.a=n},OoVJ:function(t,r,e){"use strict";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-layout",[e("v-flex",{attrs:{"text-xs-center":""}},[e("form",{on:{submit:function(r){r.preventDefault(),t.search(r)}}},[e("v-text-field",{attrs:{name:"search",label:"Search Books",id:"book-search"},model:{value:t.query,callback:function(r){t.query=r},expression:"query"}})],1),e("v-container",{attrs:{"align-center":"",id:"status"}},[t.error?e("v-alert",{attrs:{color:"error"}},[t._v(t._s(t.error))]):t._e(),t.isSearching?e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e()],1),!t.isSearching&&t.books?e("v-container",{attrs:{"grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.books,function(r){return e("v-flex",{key:r.title,attrs:{xs12:"",md6:""}},[e("book-card",t._b({},"book-card",r,!1))],1)}))],1):t._e()],1)],1)},s=[],n={render:a,staticRenderFns:s};r.a=n},oTjQ:function(t,r,e){"use strict";var a=e("xhAl"),s=e("GcH/"),n=e("VU/8"),o=n(a.a,s.a,!1,null,null,null);r.a=o.exports},qmE8:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("v3lB"),s=e("OoVJ"),n=e("VU/8"),o=n(a.a,s.a,!1,null,null,null);r.default=o.exports},v3lB:function(t,r,e){"use strict";var a=e("Dd8w"),s=e.n(a),n=e("oTjQ"),o=e("NYxO");r.a={components:{BookCard:n.a},methods:s()({},Object(o.mapActions)("search",["search"])),computed:s()({},Object(o.mapGetters)("search",["books"]),Object(o.mapState)("search",["isSearching","error"]),{query:{get:function(){return this.$store.state.search.query},set:function(t){this.$store.commit("search/updateQuery",t)}}})}},xhAl:function(t,r,e){"use strict";r.a={props:{title:String,authors:String,thumbnailUrl:String},filters:{trunc:function(t,r){return t.length>r?t.slice(0,r).trim()+"...":t}}}}});
//# sourceMappingURL=search.aae2065e6800a9d5f9c8.js.map