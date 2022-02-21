"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3199],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(p,".").concat(d)]||h[d]||s[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"OhlcData",title:"Interface: OhlcData",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,c={unversionedId:"api/interfaces/OhlcData",id:"version-3.8/api/interfaces/OhlcData",title:"Interface: OhlcData",description:"Represents a bar with a Time and open, high, low, and close prices.",source:"@site/versioned_docs/version-3.8/api/interfaces/OhlcData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/OhlcData",permalink:"/lightweight-charts/docs/api/interfaces/OhlcData",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"OhlcData",title:"Interface: OhlcData",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},u=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"time",id:"time",children:[],level:3},{value:"open",id:"open",children:[],level:3},{value:"high",id:"high",children:[],level:3},{value:"low",id:"low",children:[],level:3},{value:"close",id:"close",children:[],level:3}],level:2}],s={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a bar with a ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/TickMarkType#time"},"Time")," and open, high, low, and close prices."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"OhlcData"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/BarData"},(0,i.kt)("inlineCode",{parentName:"a"},"BarData"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/CandlestickData"},(0,i.kt)("inlineCode",{parentName:"a"},"CandlestickData"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#time"},(0,i.kt)("inlineCode",{parentName:"a"},"Time"))),(0,i.kt)("p",null,"The bar time."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"open"},"open"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"open"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The open price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"high"},"high"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"high"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The high price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"low"},"low"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"low"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The low price."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"close"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The close price."))}h.isMDXComponent=!0}}]);