"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[888,7918],{7407:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>C,frontMatter:()=>h,metadata:()=>u,toc:()=>f});var a=n(7462),o=(n(7294),n(3905)),r=n(1262),i=n(8007),s=n(4463);const p="<script setup>\nimport {\n\tref,\n\tonMounted,\n\tonUnmounted,\n\twatch,\n\tdefineExpose,\n\tdefineProps,\n} from 'vue';\nimport { createChart } from 'lightweight-charts';\n\nconst props = defineProps({\n\ttype: {\n\t\ttype: String,\n\t\tdefault: 'line',\n\t},\n\tdata: {\n\t\ttype: Array,\n\t\trequired: true,\n\t},\n\tautosize: {\n\t\tdefault: true,\n\t\ttype: Boolean,\n\t},\n\tchartOptions: {\n\t\ttype: Object,\n\t},\n\tseriesOptions: {\n\t\ttype: Object,\n\t},\n\ttimeScaleOptions: {\n\t\ttype: Object,\n\t},\n\tpriceScaleOptions: {\n\t\ttype: Object,\n\t},\n});\n\n// Function to get the correct series constructor name for current series type.\nfunction getChartSeriesConstructorName(type) {\n\treturn `add${type.charAt(0).toUpperCase() + type.slice(1)}Series`;\n}\n\n// Lightweight Charts\u2122 instances are stored as normal JS variables\n// If you need to use a ref then it is recommended that you use `shallowRef` instead\nlet series;\nlet chart;\n\nconst chartContainer = ref();\n\nconst fitContent = () => {\n\tif (!chart) return;\n\tchart.timeScale().fitContent();\n};\n\nconst getChart = () => {\n\treturn chart;\n};\n\ndefineExpose({ fitContent, getChart });\n\n// Auto resizes the chart when the browser window is resized.\nconst resizeHandler = () => {\n\tif (!chart || !chartContainer.value) return;\n\tconst dimensions = chartContainer.value.getBoundingClientRect();\n\tchart.resize(dimensions.width, dimensions.height);\n};\n\n// Creates the chart series and sets the data.\nconst addSeriesAndData = props => {\n\tconst seriesConstructor = getChartSeriesConstructorName(props.type);\n\tseries = chart[seriesConstructor](props.seriesOptions);\n\tseries.setData(props.data);\n};\n\nonMounted(() => {\n\t// Create the Lightweight Charts Instance using the container ref.\n\tchart = createChart(chartContainer.value, props.chartOptions);\n\taddSeriesAndData(props);\n\n\tif (props.priceScaleOptions) {\n\t\tchart.priceScale().applyOptions(props.priceScaleOptions);\n\t}\n\n\tif (props.timeScaleOptions) {\n\t\tchart.timeScale().applyOptions(props.timeScaleOptions);\n\t}\n\n\tchart.timeScale().fitContent();\n\n\tif (props.autosize) {\n\t\twindow.addEventListener('resize', resizeHandler);\n\t}\n});\n\nonUnmounted(() => {\n\tif (chart) {\n\t\tchart.remove();\n\t\tchart = null;\n\t}\n\tif (series) {\n\t\tseries = null;\n\t}\n\twindow.removeEventListener('resize', resizeHandler);\n});\n\n/*\n * Watch for changes to any of the component properties.\n\n * If an options property is changed then we will apply those options\n * on top of any existing options previously set (since we are using the\n * `applyOptions` method).\n *\n * If there is a change to the chart type, then the existing series is removed\n * and the new series is created, and assigned the data.\n *\n */\nwatch(\n\t() => props.autosize,\n\tenabled => {\n\t\tif (!enabled) {\n\t\t\twindow.removeEventListener('resize', resizeHandler);\n\t\t\treturn;\n\t\t}\n\t\twindow.addEventListener('resize', resizeHandler);\n\t}\n);\n\nwatch(\n\t() => props.type,\n\tnewType => {\n\t\tif (series && chart) {\n\t\t\tchart.removeSeries(series);\n\t\t}\n\t\taddSeriesAndData(props);\n\t}\n);\n\nwatch(\n\t() => props.data,\n\tnewData => {\n\t\tif (!series) return;\n\t\tseries.setData(newData);\n\t}\n);\n\nwatch(\n\t() => props.chartOptions,\n\tnewOptions => {\n\t\tif (!chart) return;\n\t\tchart.applyOptions(newOptions);\n\t}\n);\n\nwatch(\n\t() => props.seriesOptions,\n\tnewOptions => {\n\t\tif (!series) return;\n\t\tseries.applyOptions(newOptions);\n\t}\n);\n\nwatch(\n\t() => props.priceScaleOptions,\n\tnewOptions => {\n\t\tif (!chart) return;\n\t\tchart.priceScale().applyOptions(newOptions);\n\t}\n);\n\nwatch(\n\t() => props.timeScaleOptions,\n\tnewOptions => {\n\t\tif (!chart) return;\n\t\tchart.timeScale().applyOptions(newOptions);\n\t}\n);\n<\/script>\n\n<template>\n\t<div class=\"lw-chart\" ref=\"chartContainer\"></div>\n</template>\n\n<style scoped>\n.lw-chart {\n\theight: 100%;\n}\n</style>\n",c="<script>\nimport { createChart } from 'lightweight-charts';\n\n// Lightweight Chart instances are stored as normal JS variables\n// If you need to use a ref then it is recommended that you use `shallowRef` instead\nlet series;\nlet chart;\n\n// Function to get the correct series constructor name for current series type.\nfunction getChartSeriesConstructorName(type) {\n\treturn `add${type.charAt(0).toUpperCase() + type.slice(1)}Series`;\n}\n\n// Creates the chart series and sets the data.\nconst addSeriesAndData = (type, seriesOptions, data) => {\n\tconst seriesConstructor = getChartSeriesConstructorName(type);\n\tseries = chart[seriesConstructor](seriesOptions);\n\tseries.setData(data);\n};\n\n// Auto resizes the chart when the browser window is resized.\nconst resizeHandler = container => {\n\tif (!chart || !container) return;\n\tconst dimensions = container.getBoundingClientRect();\n\tchart.resize(dimensions.width, dimensions.height);\n};\n\nexport default {\n\tprops: {\n\t\ttype: {\n\t\t\ttype: String,\n\t\t\tdefault: 'line',\n\t\t},\n\t\tdata: {\n\t\t\ttype: Array,\n\t\t\trequired: true,\n\t\t},\n\t\tautosize: {\n\t\t\tdefault: true,\n\t\t\ttype: Boolean,\n\t\t},\n\t\tchartOptions: {\n\t\t\ttype: Object,\n\t\t},\n\t\tseriesOptions: {\n\t\t\ttype: Object,\n\t\t},\n\t\ttimeScaleOptions: {\n\t\t\ttype: Object,\n\t\t},\n\t\tpriceScaleOptions: {\n\t\t\ttype: Object,\n\t\t},\n\t},\n\tmounted() {\n\t\t// Create the Lightweight Charts Instance using the container ref.\n\t\tchart = createChart(this.$refs.chartContainer, this.chartOptions);\n\t\taddSeriesAndData(this.type, this.seriesOptions, this.data);\n\n\t\tif (this.priceScaleOptions) {\n\t\t\tchart.priceScale().applyOptions(this.priceScaleOptions);\n\t\t}\n\n\t\tif (this.timeScaleOptions) {\n\t\t\tchart.timeScale().applyOptions(this.timeScaleOptions);\n\t\t}\n\n\t\tchart.timeScale().fitContent();\n\n\t\tif (this.autosize) {\n\t\t\twindow.addEventListener('resize', () =>\n\t\t\t\tresizeHandler(this.$refs.chartContainer)\n\t\t\t);\n\t\t}\n\t},\n\tunmounted() {\n\t\tif (chart) {\n\t\t\tchart.remove();\n\t\t\tchart = null;\n\t\t}\n\t\tif (series) {\n\t\t\tseries = null;\n\t\t}\n\t\twindow.removeEventListener('resize', resizeHandler);\n\t},\n\t/*\n\t * Watch for changes to any of the component properties.\n\t *\n\t * If an options property is changed then we will apply those options\n\t * on top of any existing options previously set (since we are using the\n\t * `applyOptions` method).\n\t *\n\t * If there is a change to the chart type, then the existing series is removed\n\t * and the new series is created, and assigned the data.\n\t *\n\t */\n\twatch: {\n\t\tautosize(enabled) {\n\t\t\tif (!enabled) {\n\t\t\t\twindow.removeEventListener('resize', () =>\n\t\t\t\t\tresizeHandler(this.$refs.chartContainer)\n\t\t\t\t);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\twindow.addEventListener('resize', () =>\n\t\t\t\tresizeHandler(this.$refs.chartContainer)\n\t\t\t);\n\t\t},\n\t\ttype(newType) {\n\t\t\tif (series && chart) {\n\t\t\t\tchart.removeSeries(series);\n\t\t\t}\n\t\t\taddSeriesAndData(this.type, this.seriesOptions, this.data);\n\t\t},\n\t\tdata(newData) {\n\t\t\tif (!series) return;\n\t\t\tseries.setData(newData);\n\t\t},\n\t\tchartOptions(newOptions) {\n\t\t\tif (!chart) return;\n\t\t\tchart.applyOptions(newOptions);\n\t\t},\n\t\tseriesOptions(newOptions) {\n\t\t\tif (!series) return;\n\t\t\tseries.applyOptions(newOptions);\n\t\t},\n\t\tpriceScaleOptions(newOptions) {\n\t\t\tif (!chart) return;\n\t\t\tchart.priceScale().applyOptions(newOptions);\n\t\t},\n\t\ttimeScaleOptions(newOptions) {\n\t\t\tif (!chart) return;\n\t\t\tchart.timeScale().applyOptions(newOptions);\n\t\t},\n\t},\n\tmethods: {\n\t\tfitContent() {\n\t\t\tif (!chart) return;\n\t\t\tchart.timeScale().fitContent();\n\t\t},\n\t\tgetChart() {\n\t\t\treturn chart;\n\t\t},\n\t},\n\texpose: ['fitContent', 'getChart'],\n};\n<\/script>\n\n<template>\n\t<div class=\"lw-chart\" ref=\"chartContainer\"></div>\n</template>\n\n<style scoped>\n.lw-chart {\n\theight: 100%;\n}\n</style>\n",l="<script setup>\n// This starter template is using Vue 3 <script setup> SFCs\n// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup\nimport { ref } from 'vue';\n\n/*\n * There are example components in both API styles: Options API, and Composition API\n *\n * Select your preferred style from the imports below:\n */\n// import LWChart from './components/composition-api/LWChart.vue';\nimport LWChart from './components/options-api/LWChart.vue';\n\n/**\n * Generates sample data for the Lightweight Charts\u2122 example\n * @param  {Boolean} ohlc Whether generated dat should include open, high, low, and close values\n * @returns {Array} sample data\n */\nfunction generateSampleData(ohlc) {\n\tconst randomFactor = 25 + Math.random() * 25;\n\tfunction samplePoint(i) {\n\t\treturn (\n\t\t\ti *\n\t\t\t\t(0.5 +\n\t\t\t\t\tMath.sin(i / 10) * 0.2 +\n\t\t\t\t\tMath.sin(i / 20) * 0.4 +\n\t\t\t\t\tMath.sin(i / randomFactor) * 0.8 +\n\t\t\t\t\tMath.sin(i / 500) * 0.5) +\n\t\t\t200\n\t\t);\n\t}\n\n\tconst res = [];\n\tlet date = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));\n\tconst numberOfPoints = ohlc ? 100 : 500;\n\tfor (var i = 0; i < numberOfPoints; ++i) {\n\t\tconst time = date.getTime() / 1000;\n\t\tconst value = samplePoint(i);\n\t\tif (ohlc) {\n\t\t\tconst randomRanges = [\n\t\t\t\t-1 * Math.random(),\n\t\t\t\tMath.random(),\n\t\t\t\tMath.random(),\n\t\t\t].map(i => i * 10);\n\t\t\tconst sign = Math.sin(Math.random() - 0.5);\n\t\t\tres.push({\n\t\t\t\ttime,\n\t\t\t\tlow: value + randomRanges[0],\n\t\t\t\thigh: value + randomRanges[1],\n\t\t\t\topen: value + sign * randomRanges[2],\n\t\t\t\tclose: samplePoint(i + 1),\n\t\t\t});\n\t\t} else {\n\t\t\tres.push({\n\t\t\t\ttime,\n\t\t\t\tvalue,\n\t\t\t});\n\t\t}\n\n\t\tdate.setUTCDate(date.getUTCDate() + 1);\n\t}\n\n\treturn res;\n}\n\nconst chartOptions = ref({});\nconst data = ref(generateSampleData(false));\nconst seriesOptions = ref({\n\tcolor: 'rgb(45, 77, 205)',\n});\nconst chartType = ref('line');\nconst lwChart = ref();\n\nfunction randomShade() {\n\treturn Math.round(Math.random() * 255);\n}\n\nconst randomColor = (alpha = 1) => {\n\treturn `rgba(${randomShade()}, ${randomShade()}, ${randomShade()}, ${alpha})`;\n};\n\nconst colorsTypeMap = {\n\tarea: [\n\t\t['topColor', 0.4],\n\t\t['bottomColor', 0],\n\t\t['lineColor', 1],\n\t],\n\tbar: [\n\t\t['upColor', 1],\n\t\t['downColor', 1],\n\t],\n\tbaseline: [\n\t\t['topFillColor1', 0.28],\n\t\t['topFillColor2', 0.05],\n\t\t['topLineColor', 1],\n\t\t['bottomFillColor1', 0.28],\n\t\t['bottomFillColor2', 0.05],\n\t\t['bottomLineColor', 1],\n\t],\n\tcandlestick: [\n\t\t['upColor', 1],\n\t\t['downColor', 1],\n\t\t['borderUpColor', 1],\n\t\t['borderDownColor', 1],\n\t\t['wickUpColor', 1],\n\t\t['wickDownColor', 1],\n\t],\n\thistogram: [['color', 1]],\n\tline: [['color', 1]],\n};\n\n// Set a random colour for the series as an example of how\n// to apply new options to series. A similar appraoch will work on the\n// option properties.\nconst changeColors = () => {\n\tconst options = {};\n\tconst colorsToSet = colorsTypeMap[chartType.value];\n\tcolorsToSet.forEach(c => {\n\t\toptions[c[0]] = randomColor(c[1]);\n\t});\n\tseriesOptions.value = options;\n};\n\nconst changeData = () => {\n\tconst candlestickTypeData = ['candlestick', 'bar'].includes(chartType.value);\n\tconst newData = generateSampleData(candlestickTypeData);\n\tdata.value = newData;\n\tif (chartType.value === 'baseline') {\n\t\tconst average =\n\t\t\tnewData.reduce((s, c) => {\n\t\t\t\treturn s + c.value;\n\t\t\t}, 0) / newData.length;\n\t\tseriesOptions.value = { baseValue: { type: 'price', price: average } };\n\t}\n};\n\nconst changeType = () => {\n\tconst types = [\n\t\t'line',\n\t\t'area',\n\t\t'baseline',\n\t\t'histogram',\n\t\t'candlestick',\n\t\t'bar',\n\t].filter(t => t !== chartType.value);\n\tconst randIndex = Math.round(Math.random() * (types.length - 1));\n\tchartType.value = types[randIndex];\n\tchangeData();\n\n\t// call a method on the component.\n\tlwChart.value.fitContent();\n};\n<\/script>\n\n<template>\n\t<div class=\"chart-container\">\n\t\t<LWChart\n\t\t\t:type=\"chartType\"\n\t\t\t:data=\"data\"\n\t\t\t:autosize=\"true\"\n\t\t\t:chart-options=\"chartOptions\"\n\t\t\t:series-options=\"seriesOptions\"\n\t\t\tref=\"lwChart\"\n\t\t/>\n\t</div>\n\t<button type=\"button\" @click=\"changeColors\">Set Random Colors</button>\n\t<button type=\"button\" @click=\"changeType\">Change Chart Type</button>\n\t<button type=\"button\" @click=\"changeData\">Change Data</button>\n</template>\n<style scoped>\n.chart-container {\n\theight: calc(100% - 3.2em);\n}\n</style>\n",h={title:"Vue.js - Wrapper Component",description:"A simple example of how to use Lightweight Charts\u2122 within the Vue.js framework.",pagination_prev:null,pagination_next:null,keywords:["vue","vue.js","example"]},d="Vue.js - Wrapper Component",u={unversionedId:"vuejs/wrapper",id:"vuejs/wrapper",title:"Vue.js - Wrapper Component",description:"A simple example of how to use Lightweight Charts\u2122 within the Vue.js framework.",source:"@site/tutorials/vuejs/01-wrapper.mdx",sourceDirName:"vuejs",slug:"/vuejs/wrapper",permalink:"/lightweight-charts/tutorials/vuejs/wrapper",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Vue.js - Wrapper Component",description:"A simple example of how to use Lightweight Charts\u2122 within the Vue.js framework.",pagination_prev:null,pagination_next:null,keywords:["vue","vue.js","example"]},sidebar:"tutorialsSidebar"},m={},f=[{value:"About the example wrapper component",id:"about-the-example-wrapper-component",level:2},{value:"Component showcase",id:"component-showcase",level:3},{value:"Vue API styles",id:"vue-api-styles",level:3},{value:"Integrating Lightweight Charts\u2122 with Vue",id:"integrating-lightweight-charts-with-vue",level:2},{value:"Avoid using <code>Refs</code> for storing API instances",id:"avoid-using-refs-for-storing-api-instances",level:3},{value:"Use the <code>onMounted</code> lifecycle hook to create the chart",id:"use-the-onmounted-lifecycle-hook-to-create-the-chart",level:3},{value:"Providing option properties",id:"providing-option-properties",level:3},{value:"Exposing the chart instance or additional methods",id:"exposing-the-chart-instance-or-additional-methods",level:3},{value:"Complete Sample Code",id:"complete-sample-code",level:2},{value:"Composition API",id:"composition-api",level:3},{value:"Options API",id:"options-api",level:3},{value:"Example Vue App Component",id:"example-vue-app-component",level:3}],g={toc:f},w="wrapper";function C(t){let{components:e,...h}=t;return(0,o.kt)(w,(0,a.Z)({},g,h,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vuejs---wrapper-component"},"Vue.js - Wrapper Component"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The following describes a relatively simple example that only allows for a\nsingle ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types"},"series")," to be rendered. This example can be used as\na starting point and could be tweaked further using our extensive\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"API"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Please note: this example is intended to be used with Vue.js 3"))),(0,o.kt)("p",null,"This guide will focus on the key concepts required to get Lightweight Charts\u2122\nrunning within a Vue component. Please note this guide is not intended as a\ncomplete step-by-step tutorial. The example Vue components can be found at the\n",(0,o.kt)("a",{parentName:"p",href:"#complete-sample-code"},"bottom")," of this guide."),(0,o.kt)("p",null,"If you are new to Vue.js then please have a look at the\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/introduction.html"},"official Vue.js tutorials")," before\nproceeding further with this example."),(0,o.kt)("h2",{id:"about-the-example-wrapper-component"},"About the example wrapper component"),(0,o.kt)("p",null,"The example Vue wrapper component has the following features."),(0,o.kt)("p",null,"The ability to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"specify the series type via a component attribute,"),(0,o.kt)("li",{parentName:"ul"},"specify the series data via a component property,"),(0,o.kt)("li",{parentName:"ul"},"control the chart, series, time scale, and price scale options via properties,"),(0,o.kt)("li",{parentName:"ul"},"enable automatic resizing of the chart when the browser is resized.")),(0,o.kt)("p",null,"The example may not fit your requirements completely. Creating a general-purpose\ndeclarative wrapper for Lightweight Charts\u2122 imperative API is a challenge, but\nhopefully, you can adapt this example to your use case."),(0,o.kt)("h3",{id:"component-showcase"},"Component showcase"),(0,o.kt)("p",null,"Presented below is the finished wrapper component which is discussed throughout\nthis guide. The interactive buttons beneath the chart are showcasing how to\ninteract with the component and that code is provided below as well (within the\nexample app component)."),(0,o.kt)(r.Z,{fallback:(0,o.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(()=>(n(6373),(0,o.kt)("vue-example",null)))),(0,o.kt)("h3",{id:"vue-api-styles"},"Vue API styles"),(0,o.kt)("p",null,"Vue components can be authored in two different\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/introduction.html#api-styles"},"API styles"),": ",(0,o.kt)("em",{parentName:"p"},"Options\nAPI")," and ",(0,o.kt)("em",{parentName:"p"},"Composition API"),"."),(0,o.kt)("p",null,"This example will make use of the ",(0,o.kt)("strong",{parentName:"p"},"Composition API"),", but complete code\nexamples for both APIs will be presented at the end of the tutorial."),(0,o.kt)("p",null,"The Vue component could be used within any Vue setup, you can learn more on the\nVue documentation site:\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/extras/ways-of-using-vue.html"},"Ways of Vue")),(0,o.kt)("h2",{id:"integrating-lightweight-charts-with-vue"},"Integrating Lightweight Charts\u2122 with Vue"),(0,o.kt)("h3",{id:"avoid-using-refs-for-storing-api-instances"},"Avoid using ",(0,o.kt)("inlineCode",{parentName:"h3"},"Refs")," for storing API instances"),(0,o.kt)("p",null,"The preferred way to store a reference to the created chart\n(",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi"},"IChartApi")," instance), or any other of the\nlibrary's instances, is to make use of a plain JS variable or class field\ninstead of using Vue's ",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#ref"},(0,o.kt)("inlineCode",{parentName:"a"},"ref")),"\nfunctionality."),(0,o.kt)("p",null,"When Vue wraps an object in a reference object, it modifies the object (to\nenable reactivity) in such a way that it interferes with the internal logic of\nthe Lightweight Charts\u2122. This can lead to unexpected behaviour. If you really need\nto use a ",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#ref"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," then please\nconsider using\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-advanced.html#shallowref"},(0,o.kt)("inlineCode",{parentName:"a"},"shallowRef")),"\ninstead."),(0,o.kt)("p",null,"We can instead create a variable to hold these instances outside of any vue\nhooks (such as\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/composition-api-lifecycle.html#onmounted"},(0,o.kt)("inlineCode",{parentName:"a"},"onMounted")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#watch"},(0,o.kt)("inlineCode",{parentName:"a"},"watch")),") within the body of\nthe script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup>\n    import { onMounted } from 'vue';\n\n    // variable to store the created chart instance\n    let chart;\n\n    onMounted() {\n        // ...\n    }\n<\/script>\n")),(0,o.kt)("h3",{id:"use-the-onmounted-lifecycle-hook-to-create-the-chart"},"Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"onMounted")," lifecycle hook to create the chart"),(0,o.kt)("p",null,"Lightweight Charts\u2122 requires an html element to use as its container, you can\ncreate a simple div element within the component's ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," and ask Vue to\ncreate a reference to that element by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},'ref="chartContainer"'),"\nattribute to the div element and the corresponding variable within the script\nsection: ",(0,o.kt)("inlineCode",{parentName:"p"},"const chartContainer = ref();")),(0,o.kt)("p",null,"The ideal time to create the chart is during the ",(0,o.kt)("inlineCode",{parentName:"p"},"mounted")," lifecycle hook\nprovided by the Vue component. The container div will be created and ready for\nuse at this stage. Within the\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/composition-api-lifecycle.html#onmounted"},(0,o.kt)("inlineCode",{parentName:"a"},"onMounted")),"\nhook we can call Lightweight Charts\u2122 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api#createchart"},(0,o.kt)("inlineCode",{parentName:"a"},"createChart")),"\nconstructor and pass it the value of the container reference (which is the div\nelement)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to also clean up when the component is unmounted\n(",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/composition-api-lifecycle.html#onunmounted"},(0,o.kt)("inlineCode",{parentName:"a"},"onUnmounted")),"\nhook) by calling the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi#remove"},(0,o.kt)("inlineCode",{parentName:"a"},"remove"))," method on\nthe saved chart instance.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup>\n    import { onMounted, ref } from 'vue';\n    import { createChart } from 'lightweight-charts';\n\n    let chart;\n    const chartContainer = ref();\n\n    onMounted(() => {\n        // Create the Lightweight Charts Instance using the container ref.\n        chart = createChart(chartContainer.value);\n    });\n\n    onUnmounted(() => {\n        if (chart) {\n            chart.remove();\n            chart = null;\n        }\n    });\n<\/script>\n<template>\n    <div class=\"lw-chart\" ref=\"chartContainer\"></div>\n</template>\n<style scoped>\n    .lw-chart {\n        height: 100%;\n    }\n</style>\n")),(0,o.kt)("h3",{id:"providing-option-properties"},"Providing option properties"),(0,o.kt)("p",null,"A simple way to provide customisation of the chart to the component's consumers\nis to create component properties for the options you wish to be customised.\nLightweight Charts\u2122 has a variety of customisation options which can be applied\nthrough the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi#applyOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"applyOptions"))," method\non an Api instance (such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi"},"IChartApi"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ISeriesApi"},"ISeriesApi"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/IPriceScaleApi"},"IPriceScaleApi"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ITimeScaleApi"},"ITimeScaleApi"),")."),(0,o.kt)("p",null,"We can define properties for use as the components API as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup>\n    import { defineProps } from 'vue';\n\n    const props = defineProps({\n        type: {\n            type: String,\n            default: 'line',\n        },\n        data: {\n            type: Array,\n            required: true,\n        },\n        chartOptions: {\n            type: Object,\n        },\n        seriesOptions: {\n            type: Object,\n        },\n    });\n<\/script>\n")),(0,o.kt)("p",null,"These properties can be used during the creation of Api instances, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"chart = createChart(chartContainer.value, props.chartOptions);\n")),(0,o.kt)("p",null,"We can instruct Vue to\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/reactivity-core.html#watch"},(0,o.kt)("inlineCode",{parentName:"a"},"watch"))," these properties for\nchanges and allow us to provide code to react to these changes. Using this\nmechanism, we can provide a direct mapping between the options properties and\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"applyOptions")," methods on the instance. This allows the consumer of the\ncomponent to apply changes to the current options at any point during the\nlifecycle of the chart."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please note: the current options aren't reset when applying the new options, and\nthe new options can be a partial object. Thus it is possible to change one\noption at a time while still keeping the current options.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"watch(\n    () => props.chartOptions,\n    newOptions => {\n        if (!chart) {\n            return;\n        }\n        chart.applyOptions(newOptions);\n    }\n);\n\nwatch(\n    () => props.priceScaleOptions,\n    newOptions => {\n        if (!chart) {\n            return;\n        }\n        chart.priceScale().applyOptions(newOptions);\n    }\n);\n")),(0,o.kt)("h3",{id:"exposing-the-chart-instance-or-additional-methods"},"Exposing the chart instance or additional methods"),(0,o.kt)("p",null,"There may be cases where you want to provide access to the chart instance, or\nprovide useful methods, to the consumer of the component. This can be achieved\nwith the\n",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/api/sfc-script-setup.html#defineexpose"},(0,o.kt)("inlineCode",{parentName:"a"},"defineExpose"))," hook\nprovided by Vue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { defineExpose } from 'vue';\n\n// A simple method to call `fitContent` on the time scale\nconst fitContent = () => {\n    if (!chart) {\n        return;\n    }\n    chart.timeScale().fitContent();\n};\n\n// Expose the chart instance via a method\nconst getChart = () => chart;\n\ndefineExpose({ fitContent, getChart });\n")),(0,o.kt)("p",null,"The consumer of the component can create a reference to a specific instance of\nthe component and use the reference's value to evoke one of the exposed methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\n    import { ref } from \'vue\';\n    import LWChart from \'./components/LWChart.vue\';\n\n    // ...\n\n    const myChart = ref();\n\n    const fitContent = () => {\n        // call a method on the component.\n        myChart.value.fitContent();\n    };\n<\/script>\n<template>\n    <LWChart type="line" :data="myData" ref="myChart" />\n    <button type="button" @click="fitContent">Fit Content</button>\n</template>\n')),(0,o.kt)("h2",{id:"complete-sample-code"},"Complete Sample Code"),(0,o.kt)("p",null,"Presented below is the complete component source code for the Vue components. We\nhave also provided a sample Vue App component which showcases how to make use of\nthese components within a typical Vue application."),(0,o.kt)("p",null,"You can view a complete Vue project using these components at this\n",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/vitejs-vite-r4bbai?file=src/App.vue"},"StackBlitz example"),"."),(0,o.kt)("h3",{id:"composition-api"},"Composition API"),(0,o.kt)("p",null,"The following code block contains the source code for the sample Vue component\nusing the Composition API."),(0,o.kt)("p",null,(0,o.kt)("a",{href:n(4476).Z,download:"lw-chart.vue",target:"\\_blank"},"Download file")),(0,o.kt)(s.Z,{mdxType:"InstantDetails"},(0,o.kt)("summary",null,"Click here to reveal the code."),(0,o.kt)(i.ZP,{className:"language-html",mdxType:"CodeBlock"},p)),(0,o.kt)("h3",{id:"options-api"},"Options API"),(0,o.kt)("p",null,"The following code block contains the source code for the sample Vue component\nusing the Options API."),(0,o.kt)("p",null,(0,o.kt)("a",{href:n(2157).Z,download:"lw-chart.vue",target:"\\_blank"},"Download file")),(0,o.kt)(s.Z,{mdxType:"InstantDetails"},(0,o.kt)("summary",null,"Click here to reveal the code."),(0,o.kt)(i.ZP,{className:"language-html",mdxType:"CodeBlock"},c)),(0,o.kt)("h3",{id:"example-vue-app-component"},"Example Vue App Component"),(0,o.kt)("p",null,"The following code block contains the source code for a sample Vue Application\ncomponent which makes use of the Vue components shown above. It showcases a few\nways to control and interact with the component."),(0,o.kt)("p",null,(0,o.kt)("a",{href:n(945).Z,download:"app.vue",target:"\\_blank"},"Download file")),(0,o.kt)(s.Z,{mdxType:"InstantDetails"},(0,o.kt)("summary",null,"Click here to reveal the code."),(0,o.kt)(i.ZP,{className:"language-html",mdxType:"CodeBlock"},l)))}C.isMDXComponent=!0},8007:(t,e,n)=>{n.d(e,{ZP:()=>w});var a=n(7294),o=n(814),r=n(1262),i=n(2949),s=n(373),p=n(4908);function c(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const l={3.8:async t=>{const e=await n.e(3115).then(n.bind(n,3115));return{module:e,createChart:(n,a)=>{const o=e.createChart(n,a);return c(t,n,o.resize.bind(o)),o}}},"4.0":async t=>{const e=await n.e(1539).then(n.bind(n,1539));return{module:e,createChart:(n,a)=>{const o=e.createChart(n,a);return c(t,n,o.resize.bind(o)),o}}},current:async()=>{const t=await n.e(6738).then(n.bind(n,6738));return{module:t,createChart:(e,n)=>{const a=t.createChart(e,n);return c(window,e,a.resize.bind(a)),a}}}},h={iframe:"iframe_R_Fr"};function d(t){const{script:e}=t,{preferredVersion:n}=(0,s.J)(),o=p&&p.length>0?p[0]:"",r=n?.name??o??"current",i=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),c=a.useRef(null);return a.useEffect((()=>{const t=c.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const a=async()=>{try{const{module:t,createChart:n}=await l[r](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)a();else{const e=()=>{a(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[i]),a.createElement("iframe",{key:e,ref:c,srcDoc:i,className:h.iframe})}var u=n(3864);const m=()=>`${Math.random().toString(36).slice(2,11)}`;function f(t){return"string"==typeof t?t:function(){const[t,e]=(0,a.useState)("");return(0,a.useEffect)((()=>e(m())),[]),t}()}const g=Object.keys(u.l.DARK);const w=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:s,...p}=t;let{children:c}=t;const{colorMode:l}=(0,i.I)(),m="dark"===l,w=f();return n&&"string"==typeof c&&(c=function(t,e){const n=e?u.l.DARK:u.l.LIGHT;let a=t;for(const o of g)a=a.replace(new RegExp(o,"g"),`'${n[o]}'`);return a}(c,m)),c=c.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||s?a.createElement(a.Fragment,null,s&&a.createElement(a.Fragment,null,a.createElement("input",{id:w,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:w},"Show all code")),a.createElement(o.Z,p,c),e&&a.createElement(r.Z,{fallback:a.createElement("div",{className:h.iframe},"\xa0")},(()=>a.createElement(d,{script:c})))):a.createElement(o.Z,p,c)}},4463:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(6010),o=n(7294);const r={details:"details_G3qo"};function i(t){let{children:e}=t;return o.createElement("details",{className:(0,a.Z)(r.details)},e)}},3864:(t,e,n)=>{n.d(e,{l:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6373:(t,e,n)=>{n.r(e);var a=n(821),o=n(9277),r=n(3864);let i,s;const p=(t,e,n)=>{const a=function(t){return`add${t.charAt(0).toUpperCase()+t.slice(1)}Series`}(t);i=s[a](e),i.setData(n)},c=t=>{if(!s||!t)return;const e=t.getBoundingClientRect();s.resize(e.width,e.height)},l={props:{type:{type:String,default:"line"},data:{type:Array,required:!0},autosize:{default:!0,type:Boolean},chartOptions:{type:Object},seriesOptions:{type:Object},timeScaleOptions:{type:Object},priceScaleOptions:{type:Object}},template:'<div class="lw-chart" ref="lightweightChart"></div>',mounted(){s=(0,o.C2)(this.$refs.lightweightChart,this.chartOptions),p(this.type,this.seriesOptions,this.data),this.priceScaleOptions&&s.priceScale().applyOptions(this.priceScaleOptions),this.timeScaleOptions&&s.timeScale().applyOptions(this.timeScaleOptions),s.timeScale().fitContent(),this.autosize&&window.addEventListener("resize",(()=>c(this.$refs.lightweightChart)))},unmounted(){s&&(s.remove(),s=null),i&&(i=null)},watch:{autosize(t){t?window.addEventListener("resize",(()=>c(this.$refs.lightweightChart))):window.removeEventListener("resize",(()=>c(this.$refs.lightweightChart)))},type(){i&&s&&s.removeSeries(i),p(this.type,this.seriesOptions,this.data)},data(t){i&&i.setData(t)},chartOptions(t){s&&s.applyOptions(t)},seriesOptions(t){i&&i.applyOptions(t)},priceScaleOptions(t){s&&s.priceScale().applyOptions(t)},timeScaleOptions(t){s&&s.timeScale().applyOptions(t)}},methods:{fitContent(){s&&s.timeScale().fitContent()},getChart:()=>s},expose:["fitContent","getChart"]};function h(t){const e=25+25*Math.random(),n=t=>t*(.5+.2*Math.sin(t/10)+.4*Math.sin(t/20)+.8*Math.sin(t/e)+.5*Math.sin(t/500))+200,a=[],o=new Date(Date.UTC(2018,0,1,0,0,0,0)),r=t?100:500;for(let i=0;i<r;++i){const e=o.getTime()/1e3,r=n(i);if(t){const t=[-1*Math.random(),Math.random(),Math.random()].map((t=>10*t)),o=Math.sin(Math.random()-.5);a.push({time:e,low:r+t[0],high:r+t[1],open:r+o*t[2],close:n(i+1)})}else a.push({time:e,value:r});o.setUTCDate(o.getUTCDate()+1)}return a}function d(){return Math.round(255*Math.random())}const u={area:[["topColor",.4],["bottomColor",0],["lineColor",1]],bar:[["upColor",1],["downColor",1]],baseline:[["topFillColor1",.28],["topFillColor2",.05],["topLineColor",1],["bottomFillColor1",.28],["bottomFillColor2",.05],["bottomLineColor",1]],candlestick:[["upColor",1],["downColor",1],["borderUpColor",1],["borderDownColor",1],["wickUpColor",1],["wickDownColor",1]],histogram:[["color",1]],line:[["color",1]]},m=()=>"dark"===document.documentElement.getAttribute("data-theme"),f=(0,a.MW)({components:{LWChart:l},data:()=>({chartOptions:{layout:{background:{color:"transparent",type:o.Mr.Solid}}},dataset:h(!1),seriesOptions:{},chartType:"area"}),template:'\n        <div class="chart-container">\n          <LWChart\n            :type="chartType"\n            :data="dataset"\n            :autosize="true"\n            :chart-options="chartOptions"\n            :series-options="seriesOptions"\n            ref="lwChart"\n          />  \n        </div>\n        <button type="button" @click="changeColors">Set Random Colors</button>\n        <button type="button" @click="changeType">Change Chart Type</button>\n        <button type="button" @click="changeData">Change Data</button>  \n        ',styles:["\n      button {\n        border-radius: 8px;\n        border: 1px solid transparent;\n        padding: 0.5em 1em;\n        font-size: 1em;\n        font-weight: 500;\n        font-family: inherit;\n        background-color: var(--hero-button-background-color-active, #e9e9e9);\n        color: var(--hero-button-text-color, #e9e9e9);\n        cursor: pointer;\n        transition: border-color 0.25s;\n        margin-left: 0.5em;\n      }\n      button:hover {\n        border-color: #3179F5;\n        background-color: var(--hero-button-background-color-hover);\n        color: var(--hero-button-text-color-hover-active);\n      }\n      button:focus,\n      button:focus-visible {\n        outline: 4px auto -webkit-focus-ring-color;\n      }\n        \n      .chart-container {\n        height: var(--lwchart-height, 300px);\n      }\n    \n      .lw-chart {\n        height: 100%;\n      }\n    "],mounted(){if(this.changeChartTheme(m()),window.MutationObserver){const t=t=>{this.changeChartTheme(m())};this.observer=new window.MutationObserver(t),this.observer.observe(document.documentElement,{attributes:!0})}},unmounted(){this.observer&&this.observer.disconnect()},methods:{changeColors(){const t={};u[this.chartType].forEach((e=>{var n;t[e[0]]=(void 0===(n=e[1])&&(n=1),`rgba(${d()}, ${d()}, ${d()}, ${n})`)})),this.seriesOptions=t},changeData(){const t=h(["candlestick","bar"].includes(this.chartType));if(this.dataset=t,"baseline"===this.chartType){const e=t.reduce(((t,e)=>t+e.value),0)/t.length;this.seriesOptions={baseValue:{type:"price",price:e}}}},changeType(){const t=["line","area","baseline","histogram","candlestick","bar"].filter((t=>t!==this.chartType)),e=Math.round(Math.random()*(t.length-1));this.chartType=t[e],this.changeData(),this.$refs.lwChart.fitContent()},changeChartTheme(t){const e=t?r.l.DARK:r.l.LIGHT,n=t?"#424F53":"#D6DCDE";this.chartOptions={layout:{textColor:e.CHART_TEXT_COLOR,background:{color:e.CHART_BACKGROUND_COLOR}},grid:{vertLines:{color:n},horzLines:{color:n}}}}}});window.customElements.define("vue-example",f)},945:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"0cc41be55e7e9304d21e481e63cb165e.vue"},4476:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"f9d5c412959ed5084605b7a45dfa6e0c.vue"},2157:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"a2c7f821eae1d4575f38e92dc330eb95.vue"},4908:t=>{t.exports=["4.0","3.8"]}}]);