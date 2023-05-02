(function(){var t={1803:function(t,e,a){"use strict";var o=a(9963),r=a(6252);const c={id:"app"};function n(t,e,a,o,n,s){const i=(0,r.up)("catalog-wrapper");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(i)])}const s={class:"catalog-wrapper"};function i(t,e,a,o,c,n){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(i)])}var l=a(3907),p={name:"CatalogWrapper",props:{},data(){return{}},computed:{...(0,l.Se)(["CART"])},methods:{},watch:{}},u=a(3744);const _=(0,u.Z)(p,[["render",i]]);var d=_,m={name:"App",components:{CatalogWrapper:d}};const g=(0,u.Z)(m,[["render",n]]);var h=g,C=(a(7658),a(6154));const f=(0,l.MT)({state:{products:[],cart:[],searchQuery:""},mutations:{SET_PRODUCTS_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let a=!1;t.cart.map((function(t){t.article===e.article&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART(t,e){t.cart.splice(e,1)},INCREMENT:(t,e)=>{t.cart[e].quantity++},DECREMENT:(t,e)=>{t.cart[e].quantity>1&&t.cart[e].quantity--},SET_SEARCH_QUERY:(t,e)=>{t.searchQuery=e}},actions:{async GET_PRODUCTS_FROM_API({commit:t}){try{const e=await(0,C.Z)("http://localhost:3000/products",{method:"GET"});return t("SET_PRODUCTS_TO_STATE",e.data),e}catch(e){return console.log(e),e}},ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT",e)},GET_SEARCH_QUERY({commit:t},e){t("SET_SEARCH_QUERY",e)}},getters:{PRODUCTS(t){return t.products},CART(t){return t.cart},SEARCH_QUERY(t){return t.searchQuery}}});var T=f;const v=(0,o.ri)({});v.use(f);var E=a(2201);const R={class:"catalog"},w=(0,r._)("div",{class:"catalog__link material-icons"},[(0,r._)("span",{class:"material-symbols-outlined"}," shopping_cart ")],-1),A=(0,r._)("h1",null,"Catalog",-1),y={class:"catalog__filters"},D={class:"catalog__list"};function O(t,e,a,o,c,n){const s=(0,r.up)("router-link"),i=(0,r.up)("catalog-notification"),l=(0,r.up)("catalog-select"),p=(0,r.up)("catalog-search"),u=(0,r.up)("catalog-item");return(0,r.wg)(),(0,r.iD)("div",R,[(0,r.Wm)(s,{class:"link",to:{name:"cart"}},{default:(0,r.w5)((()=>[w])),_:1}),A,(0,r.Wm)(i,{messages:c.messages},null,8,["messages"]),(0,r._)("div",y,[(0,r.Wm)(l,{options:c.categories,onSelect:n.sortByCategories,selected:c.selected},null,8,["options","onSelect","selected"]),(0,r.Wm)(p)]),(0,r._)("div",D,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.filteredProducts,(t=>((0,r.wg)(),(0,r.j4)(u,{key:t.article,product_data:t,onAddToCart:n.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}a(541);var P=a(3577);const b={class:"catalog-item"},S={class:"catalog-item__popup"},k={class:"catalog-item__image-wrap"},I=["src"],j={class:"catalog-item__content"},M={class:"catalog-item__name"},U={class:"catalog-item__price"},N={class:"catalog-item__price"},F={class:"catalog-item__image-wrap"},Q=["src"],H={class:"catalog-item__name"},B={class:"catalog-item__price"},Y={class:"catalog-item__btns"};function z(t,e,o,c,n,s){const i=(0,r.up)("catalog-popup");return(0,r.wg)(),(0,r.iD)("div",b,[n.isPopupVisiable?((0,r.wg)(),(0,r.j4)(i,{key:0,rightBtnPopup:"Add to Cart",onClosePopup:s.closePopup,"popup-title":o.product_data.name,onRightBtnAction:s.addToCart},{default:(0,r.w5)((()=>[(0,r._)("div",S,[(0,r._)("div",k,[(0,r._)("img",{class:"catalog-item__image",src:a(5459)("./"+o.product_data.image),alt:"img"},null,8,I)]),(0,r._)("div",j,[(0,r._)("p",M,(0,P.zw)(o.product_data.name),1),(0,r._)("p",U,(0,P.zw)(o.product_data.price)+" UAH",1),(0,r._)("p",N,(0,P.zw)(o.product_data.category),1)])])])),_:1},8,["onClosePopup","popup-title","onRightBtnAction"])):(0,r.kq)("",!0),(0,r._)("div",F,[(0,r._)("img",{class:"catalog-item__image",src:a(5459)("./"+o.product_data.image),alt:"img"},null,8,Q)]),(0,r._)("p",H,(0,P.zw)(o.product_data.name),1),(0,r._)("p",B,(0,P.zw)(o.product_data.price)+" UAH",1),(0,r._)("div",Y,[(0,r._)("button",{class:"catalog-item__show-info btn",onClick:e[0]||(e[0]=(...t)=>s.showPopup&&s.showPopup(...t))}," Show info "),(0,r._)("button",{class:"catalog-item__btn btn",onClick:e[1]||(e[1]=(...t)=>s.addToCart&&s.addToCart(...t))},"Add to cart ")])])}const x={class:"catalog-popup__wrapper",ref:"popup_wrapper"},W={class:"catalog-popup"},V={class:"catalog-popup__header"},q={class:"catalog-popup__content"},Z={class:"catalog-popup__footer"};function L(t,e,a,o,c,n){return(0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("div",W,[(0,r._)("div",V,[(0,r._)("span",null,(0,P.zw)(a.popupTitle),1),(0,r._)("span",null,[(0,r._)("i",{class:"material-icons catalog-popup__icon",onClick:e[0]||(e[0]=(...t)=>n.closePopup&&n.closePopup(...t))}," close ")])]),(0,r._)("div",q,[(0,r.WI)(t.$slots,"default")]),(0,r._)("div",Z,[(0,r._)("button",{class:"btn catalog-popup__close",onClick:e[1]||(e[1]=(...t)=>n.closePopup&&n.closePopup(...t))}," Close "),(0,r._)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>n.rightBtnAction&&n.rightBtnAction(...t))},(0,P.zw)(a.rightBtnPopup),1)])])],512)}var $={name:"CatalogPopup",methods:{closePopup(){this.$emit("closePopup")},rightBtnAction(){this.$emit("rightBtnAction")}},props:{rightBtnPopup:{type:String,default:"Ok"},popupTitle:{type:String,default:"Popup name"}},mounted(){let t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closePopup()}))}};const G=(0,u.Z)($,[["render",L]]);var K=G,J={name:"CatalogItem",components:{CatalogPopup:K},data(){return{isPopupVisiable:!1}},props:{product_data:{type:Object,default(){return{}}}},methods:{addToCart(){this.$emit("addToCart",this.product_data)},showPopup(){this.isPopupVisiable=!0},closePopup(){this.isPopupVisiable=!1}}};const X=(0,u.Z)(J,[["render",z]]);var tt=X;const et={class:"catalog-select"},at={key:0,class:"catalog-select__options"},ot=["onClick"];function rt(t,e,a,o,c,n){return(0,r.wg)(),(0,r.iD)("div",et,[(0,r._)("p",{class:"catalog-select__title",onClick:e[0]||(e[0]=t=>c.areOptionsVisiable=!c.areOptionsVisiable)},(0,P.zw)(a.selected),1),c.areOptionsVisiable?((0,r.wg)(),(0,r.iD)("div",at,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.options,(t=>((0,r.wg)(),(0,r.iD)("p",{class:"catalog-select__options-item",key:t.value,onClick:e=>n.selectOption(t)},(0,P.zw)(t.name),9,ot)))),128))])):(0,r.kq)("",!0)])}var ct={name:"CatalogSelect",props:{options:{type:Array,default(){return[]}},selected:{type:String,default:""}},data(){return{areOptionsVisiable:!1}},methods:{selectOption(t){this.$emit("select",t),this.areOptionsVisiable=!1},hideSelect(){this.areOptionsVisiable=!1}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},unmounted(){document.removeEventListener("click",this.hideSelect)}};const nt=(0,u.Z)(ct,[["render",rt]]);var st=nt;const it=t=>((0,r.dD)("data-v-67b7a665"),t=t(),(0,r.Cn)(),t),lt={class:"catalog-notification"},pt=it((()=>(0,r._)("i",{class:"material-icons"},"check_circle",-1)));function ut(t,e,a,c,n,s){return(0,r.wg)(),(0,r.iD)("div",lt,[(0,r.Wm)(o.W3,{name:"transition-animate",class:"catalog-notification__list",tag:"div"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.messages,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"catalog-notification__content",key:t.id},[(0,r._)("span",null,(0,P.zw)(t.name),1),pt])))),128))])),_:1})])}var _t={name:"CatalogNotification",props:{messages:{type:Array,default(){return[]}}},methods:{hideNotification(){let t=this;this.messages.length||setInterval((function(){t.messages.splice(t.messages.length-1,1)}),3e3)}},mounted(){this.hideNotification()}};const dt=(0,u.Z)(_t,[["render",ut],["__scopeId","data-v-67b7a665"]]);var mt=dt;const gt={class:"catalog-search"};function ht(t,e,a,c,n,s){return(0,r.wg)(),(0,r.iD)("form",gt,[(0,r._)("i",{class:"catalog-search__icon material-icons",onClick:e[0]||(e[0]=t=>s.searchByName(n.searchQuery))},"search"),(0,r.wy)((0,r._)("input",{name:"query",placeholder:"Search...",class:"catalog-search__input","onUpdate:modelValue":e[1]||(e[1]=t=>n.searchQuery=t)},null,512),[[o.nr,n.searchQuery]]),(0,r._)("i",{class:"catalog-search__clear material-icons",onClick:e[2]||(e[2]=t=>s.clearSearch())},"clear")])}var Ct={name:"CatalogSearch",data(){return{searchQuery:""}},methods:{...(0,l.nv)(["GET_SEARCH_QUERY"]),searchByName(t){this.GET_SEARCH_QUERY(t)},clearSearch(){this.searchQuery="",this.GET_SEARCH_QUERY()}}};const ft=(0,u.Z)(Ct,[["render",ht]]);var Tt=ft,vt={name:"CatalogMain",components:{CatalogItem:tt,CatalogSelect:st,CatalogNotification:mt,CatalogSearch:Tt},data(){return{categories:[{name:"All",value:"All"},{name:"Male",value:"M"},{name:"Female",value:"F"}],selected:"All",sortedProducts:[],messages:[]}},computed:{...(0,l.Se)(["PRODUCTS","CART","SEARCH_QUERY"]),filteredProducts(){let t=this;return this.sortedProducts.length?this.sortedProducts:(t.selected="All",this.PRODUCTS)}},methods:{...(0,l.nv)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t).then((()=>{let t=Date.now().toLocaleString();this.messages.unshift({name:"The product has been added to the cart",id:t})}))},sortByCategories(t){let e=this;this.PRODUCTS.map((function(a){t.name===a.category&&e.sortedProducts.push(a)})),t&&(this.sortedProducts=this.sortedProducts.filter((function(a){return e.selected=t.name,a.category===t.name})))},filteredByName(t){this.sortedProducts=[...this.PRODUCTS],this.selected="All",this.sortedProducts=t?this.sortedProducts.filter((e=>e.name.toLowerCase().includes(t.toLowerCase()))):this.PRODUCTS}},watch:{SEARCH_QUERY(){this.filteredByName(this.SEARCH_QUERY)}},mounted(){this.GET_PRODUCTS_FROM_API(),this.filteredByName(this.SEARCH_QUERY)}};const Et=(0,u.Z)(vt,[["render",O]]);var Rt=Et;const wt={class:"catalog-cart"},At=(0,r._)("div",{class:"catalog__link"},"Back to catalog",-1),yt=(0,r._)("h1",null,"Cart",-1),Dt={key:0};function Ot(t,e,a,o,c,n){const s=(0,r.up)("router-link"),i=(0,r.up)("cart-item-wrapper");return(0,r.wg)(),(0,r.iD)("div",wt,[(0,r.Wm)(s,{to:{name:"catalog"}},{default:(0,r.w5)((()=>[At])),_:1}),yt,t.CART.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",Dt,"There are no products in the cart...")),t.CART.length?((0,r.wg)(),(0,r.j4)(i,{key:1,cart_data:t.CART},null,8,["cart_data"])):(0,r.kq)("",!0)])}const Pt={class:"cart-item-wrapper"},bt={class:"cart-item-wrapper__total"},St={class:"cart-item-wrapper__total-title"};function kt(t,e,a,o,c,n){const s=(0,r.up)("catalog-cart-item");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Pt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.cart_data,((t,e)=>((0,r.wg)(),(0,r.j4)(s,{key:t.ariticle,cart_item_data:t,onDeleteFromCart:t=>n.deleteFromCart(e),onIncrementItem:t=>n.incrementItem(e),onDecrementItem:t=>n.decrementItem(e)},null,8,["cart_item_data","onDeleteFromCart","onIncrementItem","onDecrementItem"])))),128))]),(0,r._)("div",bt,[(0,r._)("p",St,"Total: "+(0,P.zw)(n.cartTotalCost)+" UAH",1)])],64)}const It={class:"catalog-cart-item"},jt={class:"catalog-cart-item__wrap"},Mt=["src"],Ut={class:"catalog-cart-item__info"},Nt={class:"catalog-cart-item__quantity"},Ft=(0,r._)("p",null,"Q-ty:",-1);function Qt(t,e,o,c,n,s){return(0,r.wg)(),(0,r.iD)("div",It,[(0,r._)("div",jt,[(0,r._)("img",{class:"catalog-cart-item__image",src:a(5459)("./"+o.cart_item_data.image),alt:"img"},null,8,Mt)]),(0,r._)("div",Ut,[(0,r._)("p",null,(0,P.zw)(o.cart_item_data.name),1),(0,r._)("p",null,(0,P.zw)(o.cart_item_data.price),1),(0,r._)("p",null,(0,P.zw)(o.cart_item_data.ariticle),1)]),(0,r._)("div",Nt,[Ft,(0,r._)("p",null,[(0,r._)("span",{class:"catalog-cart-item__btn",onClick:e[0]||(e[0]=(...t)=>s.decrementItem&&s.decrementItem(...t))},"-"),(0,r.Uk)(" "+(0,P.zw)(o.cart_item_data.quantity)+" ",1),(0,r._)("span",{class:"catalog-cart-item__btn",onClick:e[1]||(e[1]=(...t)=>s.incrementItem&&s.incrementItem(...t))},"+")])]),(0,r._)("button",{onClick:e[2]||(e[2]=(...t)=>s.deleteFromCart&&s.deleteFromCart(...t)),class:"deleteFromCart btn"},"Delete")])}var Ht={name:"CatalogCartItem",components:{},props:{cart_item_data:{type:Object,default(){return{}}}},methods:{decrementItem(){this.$emit("decrementItem")},incrementItem(){this.$emit("incrementItem")},deleteFromCart(){this.$emit("deleteFromCart")}}};const Bt=(0,u.Z)(Ht,[["render",Qt]]);var Yt=Bt,zt={name:"CartItemWrapper",components:{CatalogCartItem:Yt},props:{cart_data:{type:Array,default(){return[]}}},methods:{...(0,l.nv)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),decrementItem(t){this.DECREMENT_CART_ITEM(t)},incrementItem(t){this.INCREMENT_CART_ITEM(t)},deleteFromCart(t){this.DELETE_FROM_CART(t)}},computed:{cartTotalCost(){let t=[];for(let e of this.cart_data)t.push(e.price*e.quantity);return t=t.reduce(((t,e)=>t+e)),t}}};const xt=(0,u.Z)(zt,[["render",kt]]);var Wt=xt,Vt={name:"CatalogCart",components:{CartItemWrapper:Wt},computed:{...(0,l.Se)(["CART"])}};const qt=(0,u.Z)(Vt,[["render",Ot]]);var Zt=qt;const Lt=(0,E.p7)({history:(0,E.PO)(),routes:[{path:"/",name:"catalog",component:Rt},{path:"/cart",name:"cart",component:Zt,props:!0}]});var $t=Lt;const Gt=(0,o.ri)({});Gt.use(Lt);const Kt=(0,o.ri)(h);Kt.use(T),Kt.use($t),Kt.mount("#app")},5459:function(t,e,a){var o={"./1.jpg":7363,"./2.jpg":3964,"./3.jpg":6031,"./4.jpg":5741,"./5.jpg":5456,"./6.jpg":9883,"./7.jpg":9924,"./8.jpg":2519,"./9.jpg":7009};function r(t){var e=c(t);return a(e)}function c(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=c,t.exports=r,r.id=5459},7363:function(t,e,a){"use strict";t.exports=a.p+"img/1.dd090118.jpg"},3964:function(t,e,a){"use strict";t.exports=a.p+"img/2.67d7bb12.jpg"},6031:function(t,e,a){"use strict";t.exports=a.p+"img/3.90fba945.jpg"},5741:function(t,e,a){"use strict";t.exports=a.p+"img/4.8fac09e4.jpg"},5456:function(t,e,a){"use strict";t.exports=a.p+"img/5.6e9e077a.jpg"},9883:function(t,e,a){"use strict";t.exports=a.p+"img/6.e7f61330.jpg"},9924:function(t,e,a){"use strict";t.exports=a.p+"img/7.e835861c.jpg"},2519:function(t,e,a){"use strict";t.exports=a.p+"img/8.b7197b77.jpg"},7009:function(t,e,a){"use strict";t.exports=a.p+"img/9.a0224128.jpg"}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,a),c.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,c){if(!o){var n=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],c=t[p][2];for(var s=!0,i=0;i<o.length;i++)(!1&c||n>=c)&&Object.keys(a.O).every((function(t){return a.O[t](o[i])}))?o.splice(i--,1):(s=!1,c<n&&(n=c));if(s){t.splice(p--,1);var l=r();void 0!==l&&(e=l)}}return e}c=c||0;for(var p=t.length;p>0&&t[p-1][2]>c;p--)t[p]=t[p-1];t[p]=[o,r,c]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/vue-shop/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,c,n=o[0],s=o[1],i=o[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var p=i(a)}for(e&&e(o);l<n.length;l++)c=n[l],a.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return a.O(p)},o=self["webpackChunkvuejs_shop"]=self["webpackChunkvuejs_shop"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1803)}));o=a.O(o)})();
//# sourceMappingURL=app.4b8c165a.js.map