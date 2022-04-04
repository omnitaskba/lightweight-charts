"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5184],{9305:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return v},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return w}});var n=a(7462),r=a(3366),i=a(7294),o=a(3905),l=a(1736),s=a(3136),c=function(e){var t=(0,i.useRef)();return(0,i.useEffect)((function(){var a=function(){r.applyOptions({width:t.current.clientWidth})},n=e.data,r=(0,s.C2)(t.current,{width:t.current.clientWidth,height:300});return r.timeScale().fitContent(),r.addAreaSeries().setData(n),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a),r.remove()}}),[e.data]),i.createElement("div",{ref:t})},p=[{time:"2018-12-22",value:32.51},{time:"2018-12-23",value:31.11},{time:"2018-12-24",value:27.02},{time:"2018-12-25",value:27.32},{time:"2018-12-26",value:25.17},{time:"2018-12-27",value:28.89},{time:"2018-12-28",value:25.46},{time:"2018-12-29",value:23.92},{time:"2018-12-30",value:22.68},{time:"2018-12-31",value:22.67}];function u(){return i.createElement(c,{data:p})}var m=a(5804),h=["components"],d={sidebar_label:"Simple example",hide_table_of_contents:!0},v="React - Simple example",f={unversionedId:"react/simple",id:"react/simple",title:"React - Simple example",description:"The following only describes a relatively simple example that only renders an area series that could be tweaked to render any other type of series.",source:"@site/tutorials/react/01-simple.mdx",sourceDirName:"react",slug:"/react/simple",permalink:"/lightweight-charts/tutorials/react/simple",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Simple example",hide_table_of_contents:!0},sidebar:"tutorialsSidebar",previous:{title:"Tutorials",permalink:"/lightweight-charts/tutorials/"},next:{title:"Advanced example",permalink:"/lightweight-charts/tutorials/react/advanced"}},g={},w=[{value:"Preparing your project",id:"preparing-your-project",level:2},{value:"Creating a charting component",id:"creating-a-charting-component",level:2}],k={toc:w};function y(e){var t=e.components,a=(0,r.Z)(e,h);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react---simple-example"},"React - Simple example"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following only describes a relatively simple example that only renders an ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types#area"},"area series")," that could be tweaked to render any other type of ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types"},"series"),"."),(0,o.kt)("p",{parentName:"div"},"For a more complete scenario where you could wrap Lightweight Charts into a component having sub components, please consult this ",(0,o.kt)("a",{parentName:"p",href:"./advanced"},"example"),"."))),(0,o.kt)("p",null,"On this page you will learn how to easily use Lightweight Charts with React."),(0,o.kt)("h2",{id:"preparing-your-project"},"Preparing your project"),(0,o.kt)("p",null,"For the example purpose we are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brandiqa/react-parcel-starter"},"Parcel starter kit")," but feel free to use any other tool or starter kit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone git@github.com:brandiqa/react-parcel-starter.git lwc-react\ncd lwc-react\nnpm install\n")),(0,o.kt)("p",null,"To run your project simply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm start\n")),(0,o.kt)("p",null,"This will create a web page accessible by default on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:1234/"},"http://localhost:1234/"),"."),(0,o.kt)("h2",{id:"creating-a-charting-component"},"Creating a charting component"),(0,o.kt)("p",null,"The example ",(0,o.kt)("em",{parentName:"p"},"React component")," on this page may not fit your requirements completely. Creating a general purpose declarative wrapper for Lightweight Charts' imperative API is a challenge, but hopefully you can adapt this example to your use case."),(0,o.kt)(l.Z,{className:"language-jsx",mdxType:"CodeBlock"},"import { createChart } from 'lightweight-charts';\nimport React, { useEffect, useRef } from 'react';\n\nexport const ChartComponent = props => {\n\tconst chartContainerRef = useRef();\n\n\tuseEffect(\n\t\t() => {\n\t\t\tconst handleResize = () => {\n\t\t\t\tchart.applyOptions({ width: chartContainerRef.current.clientWidth });\n\t\t\t};\n\n\t\t\tconst { data } = props;\n\n\t\t\tconst chart = createChart(chartContainerRef.current, {\n\t\t\t\twidth: chartContainerRef.current.clientWidth,\n\t\t\t\theight: 300,\n\t\t\t});\n\t\t\tchart.timeScale().fitContent();\n\n\t\t\tconst newSeries = chart.addAreaSeries();\n\t\t\tnewSeries.setData(data);\n\n\t\t\twindow.addEventListener('resize', handleResize);\n\t\t\treturn () => {\n\t\t\t\twindow.removeEventListener('resize', handleResize);\n\n\t\t\t\tchart.remove();\n\t\t\t};\n\t\t},\n\t\t[props.data]\n\t);\n\n\treturn (\n\t\t<div\n\t\t\tref={chartContainerRef}\n\t\t/>\n\t);\n};\n\nconst initialData = [\n\t{ time: '2018-12-22', value: 32.51 },\n\t{ time: '2018-12-23', value: 31.11 },\n\t{ time: '2018-12-24', value: 27.02 },\n\t{ time: '2018-12-25', value: 27.32 },\n\t{ time: '2018-12-26', value: 25.17 },\n\t{ time: '2018-12-27', value: 28.89 },\n\t{ time: '2018-12-28', value: 25.46 },\n\t{ time: '2018-12-29', value: 23.92 },\n\t{ time: '2018-12-30', value: 22.68 },\n\t{ time: '2018-12-31', value: 22.67 },\n];\n\nexport function App() {\n\treturn (\n\t\t<ChartComponent data={initialData}></ChartComponent>\n\t);\n}\n"),(0,o.kt)("p",null,"and you'll have a reusable component that could then be enhanced, tweaked to meet your needs, adding properties and even functionalities."),(0,o.kt)("p",null,"If you've successfully followed all the steps you should see something similar to"),(0,o.kt)("div",{className:m.Z.ChartContainer},(0,o.kt)(u,{mdxType:"App"})))}y.isMDXComponent=!0},5804:function(e,t){t.Z={ChartContainer:"ChartContainer_Hwvl"}}}]);