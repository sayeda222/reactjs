(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[19],{698:function(e,t,c){"use strict";c.r(t);var a=c(21),s=c(561),n=c(7),r=c.n(n),i=c(0),l=c(73),o=c(23),d=c(138),j=c(184),u=c(566),b=c.n(u),h=c(183),m=c(54),p=c(50),O=c(568),x=c(74),f=c(55),v=c(56),N=c(563),g=c(564),y=c(25),C=c(43),T=c(6),w={name:"code",validate:{required:{value:!0,message:"Coupon code is required"},pattern:{value:/^([a-zA-Z0-9 _-]+)$/,message:"Please entered alphanumeric value"}}};function S(e){return e.images&&e.images.length>0?e.images[0].imageUrl:null!=e.image?e.imageUrl:null}t.default=Object(m.connect)((function(e){return{cartCount:e.cartData.cartCount,cartID:e.cartData.cartID,defaultStore:e.merchantData.defaultStore,countryData:e.userData.country,stateData:e.userData.state,merchant:e.merchantData.merchant,isLoading:e.loading.isLoading}}),(function(e){return{setLoader:function(t){e(Object(f.b)(t))},decreaseQuantity:function(t,c,a,s,n){e(Object(v.f)(t,c,a,s,n))},increaseQuantity:function(t,c,a,s,n){e(Object(v.f)(t,c,a,s,n))},deleteFromCart:function(t,c,a,s){e(Object(v.h)(t,c,a,s))},getState:function(t){e(Object(x.k)(t))}}}))(Object(l.multilanguage)((function(e){var t=e.location,c=e.cartID,n=e.defaultStore,l=e.decreaseQuantity,u=e.increaseQuantity,m=(e.getValue,e.deleteFromCart),x=(e.countryData,e.stateData,e.getState,e.strings),f=e.merchant,v=e.isLoading,k=e.setLoader,D=e.cartCount,A=Object(j.useToasts)().addToast,I=t.pathname,P=Object(o.f)(),q=Object(i.useState)({}),U=Object(s.a)(q,2),L=U[0],Q=U[1],_=Object(O.b)({mode:"onChange"}),E=_.register,F=_.handleSubmit,R=_.errors,B=Object(i.useState)(),J=Object(s.a)(B,1)[0];Object(i.useEffect)((function(){Y()}),[]),Object(i.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.a.ACTION.CART+c+"?store="+n,e.prev=1,e.next=4,C.a.get(t);case 4:(a=e.sent)&&Q(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0,"jaimin"),setTimeout((function(){P.push("/")}),200);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}console.log(D),function(){e.apply(this,arguments)}()}),[D]);var Y=function(){var e=Object(a.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),t=y.a.ACTION.CART+c+"?store="+n,e.prev=2,e.next=5,C.a.get(t);case 5:(a=e.sent)&&Q(a),k(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),k(!1),setTimeout((function(){P.push("/")}),200);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(a.a)(r.a.mark((function e(t){var a,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),a=y.a.ACTION.CART+c+"/"+y.a.ACTION.PROMO+t.code,{},s={promoCart:t.code},e.prev=4,e.next=7,C.a.post(a,s);case 7:(n=e.sent)&&Q(n),k(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),k(!1);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(i.Fragment,{children:[Object(T.jsx)(b.a,{children:Object(T.jsxs)("title",{children:[f.name," | ",x["Place your order"]]})}),Object(T.jsx)(h.BreadcrumbsItem,{to:"/",children:x.Home}),Object(T.jsx)(h.BreadcrumbsItem,{to:""+I,children:x.Cart}),Object(T.jsxs)(N.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[Object(T.jsx)(g.a,{}),Object(T.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:Object(T.jsx)("div",{className:"container",children:Object(p.c)(L)&&L.products.length>0?Object(T.jsxs)(i.Fragment,{children:[Object(T.jsx)("h3",{className:"cart-page-title",children:x["Your cart items"]}),Object(T.jsx)("div",{className:"row custom-cart-item",children:Object(T.jsx)("div",{className:"col-12",children:Object(T.jsx)("div",{className:"table-content table-responsive cart-table-content",children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:x.Image}),Object(T.jsx)("th",{children:x["Product Name"]}),Object(T.jsx)("th",{children:x["Unit Price"]}),Object(T.jsx)("th",{children:x.Qty}),Object(T.jsx)("th",{children:x.Subtotal}),Object(T.jsx)("th",{children:x.Action})]})}),Object(T.jsx)("tbody",{children:L.products.map((function(e,t){var c=e.finalPrice;return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:"product-thumbnail",children:Object(T.jsx)(d.b,{to:"/product/"+e.description.friendlyUrl,children:Object(T.jsx)("img",{className:"img-fluid",src:S(e),alt:""})})}),Object(T.jsx)("td",{className:"product-name",children:Object(T.jsx)(d.b,{to:"/product/"+e.description.friendlyUrl,children:e.description.name})}),Object(T.jsx)("td",{className:"product-price-cart",children:Object(T.jsx)("span",{className:"amount",children:c})}),Object(T.jsx)("td",{className:"product-quantity",children:Object(T.jsxs)("div",{className:"cart-plus-minus",children:[Object(T.jsx)("button",{className:"dec qtybutton",onClick:function(){return l(e,A,L.code,e.quantity-1,n)},children:" - "}),Object(T.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:e.quantity,readOnly:!0}),Object(T.jsx)("button",{className:"inc qtybutton",onClick:function(){return u(e,A,L.code,e.quantity+1,n)},children:"+"})]})}),Object(T.jsx)("td",{className:"product-subtotal",children:e.displaySubTotal}),Object(T.jsx)("td",{className:"product-remove",children:Object(T.jsxs)("button",{onClick:function(){return m(L.code,e,n,A)},children:[" ",Object(T.jsx)("i",{className:"fa fa-times"})," "]})})]},t)}))})]})})})}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-lg-12",children:Object(T.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[Object(T.jsx)("div",{className:"cart-clear",children:Object(T.jsx)("button",{onClick:function(){return L.products.forEach((function(e){m(L.code,e,n,A)})),void P.push("/")},children:x["Clear Shopping Cart"]})}),Object(T.jsx)("div",{className:"cart-shiping-update",children:Object(T.jsxs)(d.b,{to:"/",children:[x["Continue Shopping"]," "]})})]})})}),Object(T.jsxs)("div",{className:"row cart-custom-row",children:[Object(T.jsx)("div",{className:"col-lg-4 col-md-6",children:"\xa0"}),Object(T.jsxs)("div",{className:"col-lg-8 col-md-6 cart-total",children:[Object(T.jsxs)("div",{className:"box-custom",children:[Object(T.jsxs)("div",{className:"discount-code-wrapper coupon-code",children:[Object(T.jsx)("div",{className:"title-wrap",children:Object(T.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:x["Use Coupon Code"]})}),L.promoCode?Object(T.jsxs)("div",{className:"discount-code",children:[Object(T.jsx)("p",{className:"coupon-applied",children:"Your coupon code has been applied!"}),Object(T.jsx)("h1",{className:"promoCode",children:L.promoCode})]}):Object(T.jsxs)("div",{className:"discount-code",children:[Object(T.jsx)("p",{children:x["Enter your coupon code if you have one."]}),Object(T.jsxs)("form",{onSubmit:F(z),children:[Object(T.jsx)("input",{type:"text",name:w.name,ref:E(w.validate)}),R[w.name]&&Object(T.jsx)("p",{className:"error-msg",children:R[w.name].message}),Object(T.jsx)("button",{className:"cart-btn-2",type:"submit",children:x["Apply Coupon"]})]})]})]}),Object(T.jsxs)("div",{className:"grand-totall cart-total-box",children:[Object(T.jsx)("div",{className:"title-wrap",children:Object(T.jsx)("h4",{className:"cart-bottom-title section-bg-gary-cart",children:x["Cart Total"]})}),Object(T.jsxs)("h5",{children:[x["Total products"]," ",Object(T.jsx)("span",{children:L.displaySubTotal})]}),Object(T.jsxs)("h4",{className:"grand-totall-title",children:[x["Grand Total"]," ",Object(T.jsx)("span",{children:L.displaySubTotal})]}),Object(T.jsx)(d.b,{to:"/checkout",children:x["Proceed to Checkout"]})]})]}),J&&Object(T.jsxs)("div",{className:"grand-totall",style:{marginTop:30},children:[Object(T.jsx)("div",{className:"title-wrap",children:Object(T.jsx)("h4",{className:"cart-bottom-title section-bg-gary-cart",children:"Shipping and tax"})}),J.map((function(e,t){return Object(T.jsxs)("h5",{children:[e.optionName," ",Object(T.jsx)("span",{children:e.optionPriceText})]},t)}))]})]})]})]}):!v&&Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-lg-12",children:Object(T.jsxs)("div",{className:"item-empty-area text-center",children:[Object(T.jsx)("div",{className:"item-empty-area__icon mb-30",children:Object(T.jsx)("i",{className:"pe-7s-cart"})}),Object(T.jsxs)("div",{className:"item-empty-area__text",children:[x["No items found in cart"]," ",Object(T.jsx)("br",{})," ",Object(T.jsx)(d.b,{to:"/",children:x["Shop now"]})]})]})})})})})]})]})})))}}]);
//# sourceMappingURL=19.2c1d1267.chunk.js.map