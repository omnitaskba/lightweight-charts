"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4500],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),k=i,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6200:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"LineStyleOptions",title:"Interface: LineStyleOptions",sidebar_label:"LineStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,s={unversionedId:"api/interfaces/LineStyleOptions",id:"version-3.8/api/interfaces/LineStyleOptions",title:"Interface: LineStyleOptions",description:"Represents style options for a line series.",source:"@site/versioned_docs/version-3.8/api/interfaces/LineStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LineStyleOptions",permalink:"/lightweight-charts/docs/api/interfaces/LineStyleOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"LineStyleOptions",title:"Interface: LineStyleOptions",sidebar_label:"LineStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c=[{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"lineStyle",id:"linestyle",children:[],level:3},{value:"lineWidth",id:"linewidth",children:[],level:3},{value:"lineType",id:"linetype",children:[],level:3},{value:"crosshairMarkerVisible",id:"crosshairmarkervisible",children:[],level:3},{value:"crosshairMarkerRadius",id:"crosshairmarkerradius",children:[],level:3},{value:"crosshairMarkerBorderColor",id:"crosshairmarkerbordercolor",children:[],level:3},{value:"crosshairMarkerBackgroundColor",id:"crosshairmarkerbackgroundcolor",children:[],level:3},{value:"lastPriceAnimation",id:"lastpriceanimation",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents style options for a line series."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"color"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Line color."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"'#2196f3'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linestyle"},"lineStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,a.kt)("p",null,"Line style."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#solid"},"LineStyle.Solid")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linewidth"},"lineWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,a.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,a.kt)("p",null,"Line width in pixels."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"3")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linetype"},"lineType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineType"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineType"},(0,a.kt)("inlineCode",{parentName:"a"},"LineType"))),(0,a.kt)("p",null,"Line type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineType#simple"},"LineType.Simple")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkervisible"},"crosshairMarkerVisible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerVisible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Show the crosshair marker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkerradius"},"crosshairMarkerRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Crosshair marker radius in pixels."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkerbordercolor"},"crosshairMarkerBorderColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerBorderColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Crosshair marker border color. An empty string falls back to the the color of the series under the crosshair."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkerbackgroundcolor"},"crosshairMarkerBackgroundColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerBackgroundColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The crosshair marker background color. An empty string falls back to the the color of the series under the crosshair."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastpriceanimation"},"lastPriceAnimation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lastPriceAnimation"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LastPriceAnimationMode"},(0,a.kt)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))),(0,a.kt)("p",null,"Last price animation mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LastPriceAnimationMode#disabled"},"LastPriceAnimationMode.Disabled")))}d.isMDXComponent=!0}}]);