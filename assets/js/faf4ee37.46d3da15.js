"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7386],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=d(a),h=n,c=k["".concat(s,".").concat(h)]||k[h]||m[h]||i;return a?r.createElement(c,l(l({ref:t},o),{},{components:a})):r.createElement(c,l({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},313:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return k}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],p={id:"IChartApi",title:"Interface: IChartApi",sidebar_label:"IChartApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"api/interfaces/IChartApi",id:"api/interfaces/IChartApi",title:"Interface: IChartApi",description:"The main interface of a single chart.",source:"@site/docs/api/interfaces/IChartApi.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IChartApi",permalink:"/lightweight-charts/docs/next/api/interfaces/IChartApi",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IChartApi",title:"Interface: IChartApi",sidebar_label:"IChartApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o=[{value:"Methods",id:"methods",children:[{value:"remove",id:"remove",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:"resize",id:"resize",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:"addAreaSeries",id:"addareaseries",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4}],level:3},{value:"addBaselineSeries",id:"addbaselineseries",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4}],level:3},{value:"addBarSeries",id:"addbarseries",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4}],level:3},{value:"addCandlestickSeries",id:"addcandlestickseries",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4}],level:3},{value:"addHistogramSeries",id:"addhistogramseries",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-6",children:[],level:4}],level:3},{value:"addLineSeries",id:"addlineseries",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-7",children:[],level:4}],level:3},{value:"removeSeries",id:"removeseries",children:[{value:"Parameters",id:"parameters-7",children:[],level:4},{value:"Returns",id:"returns-8",children:[],level:4}],level:3},{value:"subscribeClick",id:"subscribeclick",children:[{value:"Parameters",id:"parameters-8",children:[],level:4},{value:"Returns",id:"returns-9",children:[],level:4}],level:3},{value:"unsubscribeClick",id:"unsubscribeclick",children:[{value:"Parameters",id:"parameters-9",children:[],level:4},{value:"Returns",id:"returns-10",children:[],level:4}],level:3},{value:"subscribeCrosshairMove",id:"subscribecrosshairmove",children:[{value:"Parameters",id:"parameters-10",children:[],level:4},{value:"Returns",id:"returns-11",children:[],level:4}],level:3},{value:"unsubscribeCrosshairMove",id:"unsubscribecrosshairmove",children:[{value:"Parameters",id:"parameters-11",children:[],level:4},{value:"Returns",id:"returns-12",children:[],level:4}],level:3},{value:"priceScale",id:"pricescale",children:[{value:"Parameters",id:"parameters-12",children:[],level:4},{value:"Returns",id:"returns-13",children:[],level:4}],level:3},{value:"timeScale",id:"timescale",children:[{value:"Returns",id:"returns-14",children:[],level:4}],level:3},{value:"applyOptions",id:"applyoptions",children:[{value:"Parameters",id:"parameters-13",children:[],level:4},{value:"Returns",id:"returns-15",children:[],level:4}],level:3},{value:"options",id:"options",children:[{value:"Returns",id:"returns-16",children:[],level:4}],level:3},{value:"takeScreenshot",id:"takescreenshot",children:[{value:"Returns",id:"returns-17",children:[],level:4}],level:3}],level:2}],m={toc:o};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The main interface of a single chart."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"remove"},"remove"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"remove"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Removes the chart object including all DOM elements. This is an irreversible operation, you cannot do anything with the chart after removing it."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forceRepaint?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Sets fixed size of the chart. By default chart takes up 100% of its container."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Target width of the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Target height of the chart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"forceRepaint?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"True to initiate resize immediately. One could need this to get screenshot immediately after resize.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addareaseries"},"addAreaSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addAreaSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"areaOptions?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Area"'),">"),(0,i.kt)("p",null,"Creates an area series with specified parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addAreaSeries();\n")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"areaOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/AreaStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Area"'),">"),(0,i.kt)("p",null,"An interface of the created series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addbaselineseries"},"addBaselineSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addBaselineSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"baselineOptions?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Baseline"'),">"),(0,i.kt)("p",null,"Creates a baseline series with specified parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addBaselineSeries();\n")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"baselineOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/BaselineStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Baseline"'),">"),(0,i.kt)("p",null,"An interface of the created series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addbarseries"},"addBarSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addBarSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"barOptions?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Bar"'),">"),(0,i.kt)("p",null,"Creates a bar series with specified parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addBarSeries();\n")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"barOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/BarStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Bar"'),">"),(0,i.kt)("p",null,"An interface of the created series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addcandlestickseries"},"addCandlestickSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addCandlestickSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"candlestickOptions?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Candlestick"'),">"),(0,i.kt)("p",null,"Creates a candlestick series with specified parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addCandlestickSeries();\n")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"candlestickOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/CandlestickStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Candlestick"'),">"),(0,i.kt)("p",null,"An interface of the created series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addhistogramseries"},"addHistogramSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addHistogramSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"histogramOptions?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Histogram"'),">"),(0,i.kt)("p",null,"Creates a histogram series with specified parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addHistogramSeries();\n")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"histogramOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/HistogramStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Histogram"'),">"),(0,i.kt)("p",null,"An interface of the created series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addlineseries"},"addLineSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addLineSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"lineOptions?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Line"'),">"),(0,i.kt)("p",null,"Creates a line series with specified parameters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries();\n")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"lineOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/LineStyleOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customization parameters of the series being created.")))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"Line"'),">"),(0,i.kt)("p",null,"An interface of the created series."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removeseries"},"removeSeries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeSeries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"seriesApi"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Removes a series of any type. This is an irreversible operation, you cannot do anything with the series after removing it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.removeSeries(series);\n")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"seriesApi")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsMap"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),">")))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscribeclick"},"subscribeClick"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"subscribeClick"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Subscribe to the chart click event."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function myClickHandler(param) {\n    if (!param.point) {\n        return;\n    }\n\n    console.log(`Click at ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);\n}\n\nchart.subscribeClick(myClickHandler);\n")),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#mouseeventhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handler to be called on mouse click.")))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsubscribeclick"},"unsubscribeClick"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsubscribeClick"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribeclick"},"subscribeClick"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.unsubscribeClick(myClickHandler);\n")),(0,i.kt)("h4",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#mouseeventhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscribecrosshairmove"},"subscribeCrosshairMove"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"subscribeCrosshairMove"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Subscribe to the crosshair move event."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function myCrosshairMoveHandler(param) {\n    if (!param.point) {\n        return;\n    }\n\n    console.log(`Crosshair moved to ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);\n}\n\nchart.subscribeClick(myCrosshairMoveHandler);\n")),(0,i.kt)("h4",{id:"parameters-10"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#mouseeventhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handler to be called on crosshair move.")))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsubscribecrosshairmove"},"unsubscribeCrosshairMove"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsubscribeCrosshairMove"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribecrosshairmove"},"subscribeCrosshairMove"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.unsubscribeCrosshairMove(myCrosshairMoveHandler);\n")),(0,i.kt)("h4",{id:"parameters-11"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#mouseeventhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventHandler"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pricescale"},"priceScale"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"priceScale"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"priceScaleId"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceScaleApi"},(0,i.kt)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,i.kt)("p",null,"Returns API to manipulate a price scale."),(0,i.kt)("h4",{id:"parameters-12"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"priceScaleId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of the price scale.")))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceScaleApi"},(0,i.kt)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,i.kt)("p",null,"Price scale API."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timescale"},"timeScale"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"timeScale"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ITimeScaleApi"))),(0,i.kt)("p",null,"Returns API to manipulate the time scale"),(0,i.kt)("h4",{id:"returns-14"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ITimeScaleApi"},(0,i.kt)("inlineCode",{parentName:"a"},"ITimeScaleApi"))),(0,i.kt)("p",null,"Target API"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"applyoptions"},"applyOptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"applyOptions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Applies new options to the chart"),(0,i.kt)("h4",{id:"parameters-13"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#deeppartial"},(0,i.kt)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,i.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ChartOptions")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Any subset of options.")))),(0,i.kt)("h4",{id:"returns-15"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"options"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ChartOptions")),">"),(0,i.kt)("p",null,"Returns currently applied options"),(0,i.kt)("h4",{id:"returns-16"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ChartOptions")),">"),(0,i.kt)("p",null,"Full set of currently applied options, including defaults"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"takescreenshot"},"takeScreenshot"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"takeScreenshot"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement")),(0,i.kt)("p",null,"Make a screenshot of the chart with all the elements excluding crosshair."),(0,i.kt)("h4",{id:"returns-17"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement")),(0,i.kt)("p",null,"A canvas with the chart drawn on. Any ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas")," methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"toDataURL()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"toBlob()")," can be used to serialize the result."))}k.isMDXComponent=!0}}]);