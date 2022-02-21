"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1783],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6254:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"TickMarkType",title:"Enumeration: TickMarkType",sidebar_label:"TickMarkType",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,u={unversionedId:"api/enums/TickMarkType",id:"api/enums/TickMarkType",title:"Enumeration: TickMarkType",description:"Represents the type of a tick mark on the time axis.",source:"@site/docs/api/enums/TickMarkType.md",sourceDirName:"api/enums",slug:"/api/enums/TickMarkType",permalink:"/lightweight-charts/docs/next/api/enums/TickMarkType",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TickMarkType",title:"Enumeration: TickMarkType",sidebar_label:"TickMarkType",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"Year",id:"year",children:[],level:3},{value:"Month",id:"month",children:[],level:3},{value:"DayOfMonth",id:"dayofmonth",children:[],level:3},{value:"Time",id:"time",children:[],level:3},{value:"TimeWithSeconds",id:"timewithseconds",children:[],level:3}],level:2}],m={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents the type of a tick mark on the time axis."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,a.kt)("h3",{id:"year"},"Year"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Year")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"The start of the year (e.g. it's the first tick mark in a year)."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"month"},"Month"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Month")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("p",null,"The start of the month (e.g. it's the first tick mark in a month)."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dayofmonth"},"DayOfMonth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"DayOfMonth")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"2")),(0,a.kt)("p",null,"A day of the month."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"time"},"Time"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Time")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"3")),(0,a.kt)("p",null,"A time without seconds."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timewithseconds"},"TimeWithSeconds"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"TimeWithSeconds")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"4")),(0,a.kt)("p",null,"A time with seconds."))}s.isMDXComponent=!0}}]);