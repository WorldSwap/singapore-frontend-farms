(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1112:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return tt}));var c,r,i,a,o,s,b,j,l,u,d,O,x,m,h,p,f,g,v,k,y,w,C,T,S=n(35),N=n(0),B=n(5),z=n(23),F=n(148),P=n(3),A=n.n(P),L=n(8),R=n(32),U=n(43),D=n(11),H=n(83),Q=n(842),q=n(6),M=n(10),W=n.n(M),E=n(105),I=n(46),J=n(20),$=n(189),K=n(121),V=function(){var e=Object(N.useState)([]),t=Object(R.a)(e,2),n=t[0],c=t[1],r=Object(U.c)().account,i=Object(K.a)().fastRefresh;return Object(N.useEffect)((function(){r&&function(){var e=Object(L.a)(A.a.mark((function e(){var t,n,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=$.a.map((function(e){return{address:Object(J.k)(),name:"pending".concat(Object(E.capitalize)(D.b.tokenKeyMasterChef)),params:[e.pid,r]}})),e.next=3,Object(I.a)(D.b.masterChefABI,t);case 3:n=e.sent,i=$.a.map((function(e,t){return Object(q.a)(Object(q.a)({},e),{},{balance:new W.a(n[t])})})),c(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},X=n(245),_=function(){var e=Object(N.useState)([]),t=Object(R.a)(e,2),n=t[0],c=t[1],r=Object(U.c)().account,i=Object(K.a)().fastRefresh;return Object(N.useEffect)((function(){r&&function(){var e=Object(L.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=$.a.map((function(e){return{address:Object(J.k)(),name:"pending".concat(Object(E.capitalize)(D.b.tokenKeyMasterChef)),params:[e.pid,r]}})),e.next=3,Object(I.a)(D.b.masterChefABI,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},G=n(89),Y=n(146),Z=n(804),ee=n(805),te=n(7),ne=B.e.div(c||(c=Object(S.a)(["\n  margin-bottom: 24px;\n"]))),ce=function(){var e=Object(H.b)().t,t=Object(U.c)().account,n=_().reduce((function(e,t){var n=new W.a(t);return n.eq(0)?e:e+n.div(Y.g).toNumber()}),0),c=Object(G.C)(),r=new W.a(n).multipliedBy(c).toNumber();return t?Object(te.jsxs)(ne,{children:[Object(te.jsx)(Z.a,{value:n,lineHeight:"1.5"}),!c.eq(0)&&Object(te.jsx)(ee.a,{value:r})]}):Object(te.jsx)(z.Pb,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},re=n(799),ie=n(65),ae=function(){var e=Object(H.b)().t,t=Object(re.a)(Object(J.s)()),n=Object(G.C)(),c=new M.BigNumber(Object(ie.c)(t)).multipliedBy(n).toNumber();return Object(U.c)().account?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Z.a,{value:Object(ie.c)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.eq(0)?Object(te.jsx)("br",{}):Object(te.jsx)(ee.a,{value:c})]}):Object(te.jsx)(z.Pb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},oe=Object(B.e)(z.v)(r||(r=Object(S.a)(["\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"])),D.b.homeStakingCardBackground),se=B.e.div(i||(i=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),be=B.e.img(a||(a=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),je=B.e.div(o||(o=Object(S.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),le=B.e.div(s||(s=Object(S.a)(["\n  margin-top: 24px;\n"]))),ue=function(){var e=Object(N.useState)(!1),t=Object(R.a)(e,2),n=t[0],c=t[1],r=Object(U.c)().account,i=Object(H.b)().t,a=V().filter((function(e){return e.balance.toNumber()>0})),o=Object(Q.a)(a.map((function(e){return e.pid}))).onReward,s=Object(N.useCallback)(Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(te.jsx)(oe,{children:Object(te.jsxs)(z.w,{children:[Object(te.jsx)(z.T,{scale:"xl",mb:"24px",children:i("Farms & Staking")}),Object(te.jsx)(be,{src:D.b.tokenImage,alt:"".concat(D.b.token.symbol," logo"),width:64,height:64}),Object(te.jsxs)(se,{children:[Object(te.jsxs)(je,{children:[D.b.token.symbol.toUpperCase()," to Harvest:"]}),Object(te.jsx)(ce,{})]}),Object(te.jsxs)(se,{children:[Object(te.jsxs)(je,{children:[D.b.token.symbol.toUpperCase()," in Wallet:"]}),Object(te.jsx)(ae,{})]}),Object(te.jsx)(le,{children:r?Object(te.jsx)(z.r,{id:"harvest-all",disabled:a.length<=0||n,onClick:s,width:"100%",children:n?"Collecting ".concat(D.b.token.symbol.toUpperCase()):i("Harvest all (%count%)",{count:a.length})}):Object(te.jsx)(X.a,{width:"100%"})})]})})},de=n(843),Oe=n(852),xe=n(798),me=n(825),he=n(882),pe=n(883),fe=n(918),ge=B.e.div(b||(b=Object(S.a)(["\n  margin-bottom: 24px;\n"]))),ve=function(e){var t=e.claimAmount,n=Object(H.b)().t,c=Object(U.c)().account,r=Object(ie.c)(t),i=Object(G.C)(),a=new M.BigNumber(r).multipliedBy(i).toNumber();return c?Object(te.jsxs)(ge,{children:[Object(te.jsx)(Z.a,{value:r,lineHeight:"1.5"}),!i.eq(0)&&Object(te.jsx)(ee.a,{value:a,decimals:2})]}):Object(te.jsx)(z.Pb,{color:"textDisabled",style:{lineHeight:"76px"},children:n("Locked")})},ke=function(){var e=Object(H.b)().t,t=Object(xe.d)(),n=Object(ie.c)(t),c=n.toLocaleString(void 0,{maximumFractionDigits:2}),r=Object(G.C)(),i=new M.BigNumber(n).multipliedBy(r).toNumber();return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(z.Pb,{bold:!0,fontSize:"24px",style:{lineHeight:"1.5"},children:e("%amount% W".concat(D.c.tokenSymbol),{amount:c})}),r.eq(0)?Object(te.jsx)("br",{}):Object(te.jsx)(ee.a,{value:i})]})},ye=Object(B.e)(z.v)(j||(j=Object(S.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),we=B.e.div(l||(l=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),Ce=B.e.img(u||(u=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),Te=B.e.div(d||(d=Object(S.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Se=B.e.div(O||(O=Object(S.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),Ne=Object(B.e)(z.T).attrs({scale:"xl"})(x||(x=Object(S.a)(["\n  line-height: 44px;\n"]))),Be=function(){var e=Object(U.c)().account,t=Object(de.a)(),n=Object(N.useState)(!1),c=Object(R.a)(n,2),r=c[0],i=c[1],a=Object(H.b)().t,o=Object(me.b)(),s=Object(z.hc)(Object(te.jsx)(pe.a,{})),b=Object(R.a)(s,1)[0],j=Object(xe.c)(),l=j.claimAmount,u=j.setLastUpdated,d=Object(Oe.c)().onMultiClaim,O=Object(re.a)(Object(J.r)()),x=Object(he.a)(b),m=x.handleApprove,h=x.requestedApproval,p=Object(N.useCallback)(Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,d();case 4:e.sent&&(i(!1),u()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[d,i,u]),f=Object(z.hc)(Object(te.jsx)(fe.a,{max:O})),g=Object(R.a)(f,1)[0],v=function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)(we,{children:[Object(te.jsxs)(Te,{children:["W",D.c.tokenSymbol," to Collect:"]}),Object(te.jsx)(ve,{claimAmount:l})]}),Object(te.jsxs)(we,{children:[Object(te.jsxs)(Te,{children:[a("Total jackpot this round"),":"]}),Object(te.jsx)(ke,{})]}),e?Object(te.jsxs)(Se,{children:[Object(te.jsx)(z.r,{id:"dashboard-collect-winnings",disabled:0===Object(ie.c)(l)||r,onClick:p,style:{marginRight:"8px"},children:a("Collect Winnings")}),o.toNumber()?t?Object(te.jsxs)(z.r,{disabled:!0,children:[" ",a("On sale soon")]}):Object(te.jsx)(z.r,{id:"dashboard-buy-tickets",variant:"secondary",onClick:g,children:a("Buy Tickets")}):Object(te.jsxs)(z.r,{width:"100%",disabled:h,onClick:m,children:["Approve W",D.c.tokenSymbol]})]}):Object(te.jsx)(Se,{children:Object(te.jsx)(X.a,{width:"100%"})})]})};return Object(te.jsx)(ye,{children:Object(te.jsxs)(z.w,{children:[Object(te.jsxs)("div",{style:{marginBottom:24},children:[Object(te.jsx)(z.T,{scale:"xl",children:a("Your Lottery Winnings")}),D.c.lottery.enabled&&Object(te.jsx)(z.Pb,{children:"First round ever will be drawn on June 2 at 23:00 UTC"})]}),Object(te.jsx)(Ce,{src:"/images/ticket.svg",alt:"lottery ticket",width:64,height:64}),D.c.lottery.enabled?Object(te.jsx)(v,{}):Object(te.jsx)(Ne,{color:"#7645d9",children:a("Coming Soon")})]})})},ze=Object(B.e)(z.v)(m||(m=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Fe=B.e.div(h||(h=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Pe=function(){Object(H.b)().t;var e=Object(re.d)(),t=Object(G.C)(),n=Object(ie.c)(Object(re.b)(Object(J.s)())),c=e?Object(ie.c)(e)-n:0,r=t.times(c);return Object(te.jsx)(ze,{children:Object(te.jsxs)(z.w,{children:[Object(te.jsxs)(z.T,{scale:"xl",mb:"24px",children:[D.b.token.symbol.toUpperCase()," Stats"]}),Object(te.jsxs)(Fe,{children:[Object(te.jsx)(z.Pb,{fontSize:"14px",children:"Market Cap"}),Object(te.jsx)(Z.a,{fontSize:"14px",value:r.toNumber(),decimals:0,prefix:"$"})]}),Object(te.jsxs)(Fe,{children:[Object(te.jsxs)(z.Pb,{fontSize:"14px",children:["Total ",D.b.token.symbol.toUpperCase()," Supply"]}),c&&Object(te.jsx)(Z.a,{fontSize:"14px",value:c})]}),Object(te.jsxs)(Fe,{children:[Object(te.jsxs)(z.Pb,{fontSize:"14px",children:["Total ",D.b.token.symbol.toUpperCase()," Burned"]}),Object(te.jsx)(Z.a,{fontSize:"14px",decimals:0,value:n})]}),Object(te.jsxs)(Fe,{children:[Object(te.jsxs)(z.Pb,{fontSize:"14px",children:["New ",D.b.token.symbol.toUpperCase(),"/block"]}),Object(te.jsx)(Z.a,{fontSize:"14px",decimals:1,value:D.b.tokenPerBlock})]})]})})},Ae=Object(B.e)(z.v)(p||(p=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),Le=function(){var e=Object(G.G)();return Object(te.jsx)(Ae,{children:Object(te.jsxs)(z.w,{children:[Object(te.jsx)(z.T,{size:"lg",mb:"24px",children:"Total Value Locked (TVL)"}),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Z.a,{value:e.toNumber(),prefix:"$",decimals:2}),Object(te.jsx)(z.Pb,{color:"textSubtle",children:"Across all Farms and Pools"})]})]})})},Re=n(929),Ue=n.n(Re),De=n(104),He=n(853),Qe=Object(B.e)(z.v)(f||(f=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),qe=Object(B.e)(z.T).attrs({scale:"xl"})(g||(g=Object(S.a)(["\n  line-height: 44px;\n"]))),Me=function(){var e=Object(H.b)().t,t=Object(G.f)().data,n=Object(G.j)(),c=Object(G.C)(),r=Object(N.useMemo)((function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken&&n){var t=n[Object(J.b)(e.quoteToken.address).toLowerCase()],r=new W.a(e.lpTotalInQuoteToken).times(t);return Object(He.a)(e.poolWeight,c,r)}return null})),r=Ue()(e);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[c,t,n]);return Object(te.jsx)(Qe,{children:Object(te.jsx)(De.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(te.jsxs)(z.w,{children:[Object(te.jsx)(z.T,{color:"contrast",scale:"lg",children:"Earn up to"}),Object(te.jsx)(qe,{color:"#7645d9",children:r?"".concat(r,"% ").concat(e("APR")):Object(te.jsx)(z.Fb,{animation:"pulse",variant:"rect",height:"44px"})}),Object(te.jsxs)(z.S,{justifyContent:"space-between",children:[Object(te.jsx)(z.T,{color:"contrast",scale:"lg",children:"in Farms"}),Object(te.jsx)(z.f,{mt:30,color:"primary"})]})]})})})},We=n(826),Ee=n.n(We),Ie=Object(B.e)(z.v)(v||(v=Object(S.a)(["\n  background: linear-gradient(#69aefe, #f3acf4);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Je=Object(B.e)(z.T).attrs({scale:"xl"})(k||(k=Object(S.a)(["\n  line-height: 44px;\n"]))),$e=function(){var e=Object(G.f)().data,t=Ee()(e,(function(e){return Number(e.liquidity)}),"asc").map((function(e){return e.token.symbol})),n=Array.from(new Set(t)).slice(0,6).join(", ");return Object(te.jsx)(Ie,{children:Object(te.jsx)(De.c,{exact:!0,activeClassName:"active",to:"/pools",id:"pool-cta",children:Object(te.jsxs)(z.w,{children:[Object(te.jsx)(z.T,{color:"contrast",scale:"lg",children:"Stake"}),Object(te.jsx)(Je,{color:"invertedContrast",children:n}),Object(te.jsxs)(z.S,{justifyContent:"space-between",children:[Object(te.jsx)(z.T,{color:"contrast",scale:"lg",children:"in Pools"}),Object(te.jsx)(z.f,{mt:30,color:"primary"})]})]})})})},Ke=function(){var e=Object(xe.d)();return Object(ie.c)(e)*Object(G.B)().toNumber()},Ve=Object(B.e)(z.v)(y||(y=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Xe=Object(B.e)(z.T).attrs({scale:"xl"})(w||(w=Object(S.a)(["\n  line-height: 44px;\n"]))),_e=function(){var e=Ke(),t=function(){return Object(te.jsxs)(z.w,{children:[Object(te.jsx)(z.T,{color:"contrast",size:"lg",children:"Lottery with"}),Object(te.jsx)(Xe,{color:"#7645d9",children:0!==e?"$".concat(e.toLocaleString()):Object(te.jsx)(z.Fb,{animation:"pulse",variant:"rect",height:"44px"})}),Object(te.jsxs)(z.S,{justifyContent:"space-between",children:[Object(te.jsx)(z.T,{color:"contrast",size:"lg",children:"up for grabs"}),Object(te.jsx)(z.f,{mt:30,color:"primary"})]})]})},n=function(){return Object(te.jsxs)(z.w,{children:[Object(te.jsx)(z.T,{color:"contrast",scale:"lg",children:"Lottery"}),Object(te.jsx)(Xe,{color:"#7645d9",children:"Coming Soon"}),Object(te.jsxs)(z.S,{justifyContent:"space-between",children:[Object(te.jsx)(z.T,{color:"contrast",scale:"lg"}),Object(te.jsx)(z.f,{mt:30,color:"primary"})]})]})};return Object(te.jsx)(Ve,{children:Object(te.jsx)(De.c,{exact:!0,activeClassName:"active",to:D.c.lottery.enabled?"/lottery":"/",id:"lottery-pot-cta",children:D.c.lottery.enabled?Object(te.jsx)(t,{}):Object(te.jsx)(n,{})})})},Ge=n(854),Ye=n(254),Ze=Object(B.e)(z.j)(C||(C=Object(S.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),et=Object(B.e)(z.j)(T||(T=Object(S.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),tt=function(){return Object(G.i)({tokenMode:!1}),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Ye.a,{title:D.b.title,subtitle:D.b.homeSecondaryTitle,rightContent:Object(te.jsx)("img",{src:D.c.image,alt:D.c.title,width:56===D.b.chain?180:"",height:56===D.b.chain?180:""}),leftFlex:2,hideRightOnMobile:!0}),Object(te.jsxs)(F.a,{children:[Object(te.jsx)(Ge.a,{style:{marginBottom:64}}),Object(te.jsxs)(Ze,{children:[Object(te.jsx)(ue,{}),Object(te.jsx)(Be,{})]}),Object(te.jsxs)(Ze,{children:[Object(te.jsx)(Pe,{}),Object(te.jsx)(Le,{})]}),Object(te.jsxs)(et,{children:[Object(te.jsx)(Me,{}),Object(te.jsx)($e,{}),Object(te.jsx)(_e,{})]})]})]})}},811:function(e,t,n){var c=n(812),r=n(813)(c);e.exports=r},812:function(e,t,n){var c=n(407),r=n(248);e.exports=function(e,t){return e&&c(e,t,r)}},813:function(e,t,n){var c=n(147);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!c(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}},826:function(e,t,n){var c=n(827),r=n(79);e.exports=function(e,t,n,i){return null==e?[]:(r(t)||(t=null==t?[]:[t]),r(n=i?void 0:n)||(n=null==n?[]:[n]),c(e,t,n))}},827:function(e,t,n){var c=n(405),r=n(249),i=n(408),a=n(828),o=n(829),s=n(410),b=n(830),j=n(186),l=n(79);e.exports=function(e,t,n){t=t.length?c(t,(function(e){return l(e)?function(t){return r(t,1===e.length?e[0]:e)}:e})):[j];var u=-1;t=c(t,s(i));var d=a(e,(function(e,n,r){return{criteria:c(t,(function(t){return t(e)})),index:++u,value:e}}));return o(d,(function(e,t){return b(e,t,n)}))}},828:function(e,t,n){var c=n(811),r=n(147);e.exports=function(e,t){var n=-1,i=r(e)?Array(e.length):[];return c(e,(function(e,c,r){i[++n]=t(e,c,r)})),i}},829:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},830:function(e,t,n){var c=n(831);e.exports=function(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var b=c(i[r],a[r]);if(b)return r>=s?b:b*("desc"==n[r]?-1:1)}return e.index-t.index}},831:function(e,t,n){var c=n(123);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,i=e===e,a=c(e),o=void 0!==t,s=null===t,b=t===t,j=c(t);if(!s&&!j&&!a&&e>t||a&&o&&b&&!s&&!j||r&&o&&b||!n&&b||!i)return 1;if(!r&&!a&&!j&&e<t||j&&n&&i&&!r&&!a||s&&n&&i||!o&&i||!b)return-1}return 0}},842:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return O}));var c=n(41),r=n(3),i=n.n(r),a=n(8),o=n(0),s=n(43),b=n(52),j=n(93),l=n(809),u=n(241),d=function(e){var t=Object(b.b)(),n=Object(s.c)().account,c=Object(u.m)();return{onReward:Object(o.useCallback)(Object(a.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.b)(c,e,n);case 2:return a=r.sent,t(Object(j.d)(n)),r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,c])}},O=function(e){var t=Object(s.c)().account,n=Object(u.m)();return{onReward:Object(o.useCallback)(Object(a.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(l.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(a));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}}},853:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(10);var c=n(146),r=function(e,t,n){var r=c.e.times(c.c).times(e).times(t).times(100);return n.toNumber()&&(r=r.div(n)),r.isNaN()||!r.isFinite()?null:r.toNumber()}},854:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c,r,i,a=n(6),o=n(35),s=(n(0),n(23)),b=n(884),j=n(5),l=n(11),u=n(89),d=n(7),O=j.e.a(c||(c=Object(o.a)(["\n  display: flex;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center;\n  padding-top: 20px;\n  width: 100%;\n  margin: 0 auto 32px;\n"]))),x=j.e.div(r||(r=Object(o.a)(["\n  text-align: center;\n"]))),m=j.e.p(i||(i=Object(o.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),h=3600,p=86400,f=function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:32},children:t}),Object(d.jsx)("div",{children:e})]})};function g(e){var t=e.style,n=void 0===t?{}:t,c=Date.now(),r=Object(u.c)().currentBlock,i=Number(r),o=i>0?new Date(Date.now()+(Number(l.b.startBlock)-i)*l.c.blockTime*1e3):l.b.startTime,j=(o.getTime()-c)/1e3,g=Math.ceil(j/p)*p,v=Object(s.gc)().isXl,k=56===l.b.chain?"".concat(l.c.explorerUrl,"/block/countdown/").concat(l.b.startBlock):"#";if(!r&&c>l.b.startTime.getTime()||i>Number(l.b.startBlock))return Object(d.jsx)(d.Fragment,{});var y={isPlaying:!0,size:v?120:80,strokeWidth:v?6:2};return Object(d.jsxs)("div",{style:n,children:[Object(d.jsxs)(O,{href:k,target:"_blank",rel:"noopener noreferrer",children:[Object(d.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},y),{},{colors:"#7E2E84",duration:g,initialRemainingTime:j,children:function(e){var t=e.elapsedTime;return f("days",(g-t)/p|0)}})),Object(d.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},y),{},{colors:"#D14081",duration:p,initialRemainingTime:j%p,onComplete:function(e){return[j-e>h,0]},children:function(e){var t=e.elapsedTime;return f("hours",(p-t)%p/h|0)}})),Object(d.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},y),{},{colors:"#EF798A",duration:h,initialRemainingTime:j%h,onComplete:function(e){return[j-e>60,0]},children:function(e){var t=e.elapsedTime;return f("minutes",(h-t)%h/60|0)}})),Object(d.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},y),{},{colors:"#218380",duration:60,initialRemainingTime:j%60,onComplete:function(e){return[j-e>0,0]},children:function(e){var t=e.elapsedTime;return f("seconds",60-t|0)}}))]}),Object(d.jsxs)(x,{children:[Object(d.jsx)("p",{style:{color:"white",marginBottom:16},children:Object(d.jsx)("strong",{children:o.toString()})}),Object(d.jsx)(m,{children:Object(d.jsxs)("a",{href:k,target:"_blank",rel:"noopener noreferrer",children:["Farming starts in Block #",l.b.startBlock," ",r?"(in ".concat(Number(l.b.startBlock)-r," blocks)"):""]})})]})]})}},929:function(e,t,n){var c=n(422),r=n(423),i=n(186);e.exports=function(e){return e&&e.length?c(e,i,r):void 0}}}]);