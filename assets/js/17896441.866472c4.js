"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{8007:(t,e,n)=>{n.d(e,{Z:()=>C});var r=n(7294),a=n(814),O=n(1262),c=n(2949),_=n(373);function l(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const L={3.8:async t=>{const e=await n.e(193).then(n.bind(n,193));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return l(t,n,a.resize.bind(a)),a}}},current:async()=>{const t=await n.e(9027).then(n.bind(n,9027));return{module:t,createChart:(e,n)=>{const r=t.createChart(e,n);return l(window,e,r.resize.bind(r)),r}}}},o="iframe_R_Fr";function s(t){var e;const{script:n}=t,{preferredVersion:a}=(0,_.J)(),O=null!=(e=null==a?void 0:a.name)?e:"current",c=function(t){return'\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t'+t+"\n\t\t\t};\n\t\t<\/script>\n\t"}(n),l=r.useRef(null);return r.useEffect((()=>{const t=l.current,e=null==t?void 0:t.contentWindow,n=null==t?void 0:t.contentDocument;if(null===t||!e||!n)return;const r=async()=>{try{const{module:t,createChart:n}=await L[O](e);Object.assign(e,t),e.createChart=n,null==e.run||e.run()}catch(t){console.error(t)}};if(void 0!==e.run)r();else{const e=()=>{r(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[c]),r.createElement("iframe",{key:n,ref:l,srcDoc:c,className:o})}var i=n(3864);function R(){const[t,e]=(0,r.useState)("");return(0,r.useEffect)((()=>e(""+Math.random().toString(36).slice(2,11))),[]),t}const E=Object.keys(i.l.DARK);const C=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:_,...l}=t;let{children:L}=t;const{colorMode:C}=(0,c.I)(),u="dark"===C,d="string"==typeof A?A:R();var A;return n&&"string"==typeof L&&(L=function(t,e){const n=e?i.l.DARK:i.l.LIGHT;let r=t;for(const a of E)r=r.replace(new RegExp(a,"g"),"'"+n[a]+"'");return r}(L,u)),e||_?r.createElement(r.Fragment,null,_&&r.createElement(r.Fragment,null,r.createElement("input",{id:d,type:"checkbox",className:"toggle-hidden-lines"}),r.createElement("label",{className:"toggle-label",htmlFor:d},"Show all code")),r.createElement(a.Z,l,L),e&&r.createElement(O.Z,{fallback:r.createElement("div",{className:o},"\xa0")},(()=>r.createElement(s,{script:L})))):r.createElement(a.Z,l,L)}},3864:(t,e,n)=>{n.d(e,{l:()=>r});const r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}}}]);