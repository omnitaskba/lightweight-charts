"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2505,7918],{440:(t,n,e)=>{e.d(n,{ZP:()=>r});var a=e(7462),o=(e(7294),e(3905));const i={toc:[]},l="wrapper";function r(t){let{components:n,...e}=t;return(0,o.kt)(l,(0,a.Z)({},i,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How to use the code sample"),(0,o.kt)("strong",null,"The code presented below requires:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"That ",(0,o.kt)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,o.kt)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,o.kt)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"container"),".")),(0,o.kt)("p",null,"Here is an example skeleton setup: ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,o.kt)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}r.isMDXComponent=!0},7805:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>h,metadata:()=>y,toc:()=>d});var a=e(7462),o=(e(7294),e(3905)),i=e(440),l=e(8007);const r="// remove-start\n// Lightweight Charts\u2122 Example: Two Price Scales\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/two-price-scales\n\n// remove-end\nconst chartOptions = {\n\t// highlight-start\n\trightPriceScale: {\n\t\tvisible: true,\n\t},\n\tleftPriceScale: {\n\t\tvisible: true,\n\t},\n\t// highlight-end\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n\t// highlight-start\n\tcrosshair: {\n\t\tmode: 0, // CrosshairMode.Normal\n\t},\n\t// highlight-end\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\nchart\n\t.addLineSeries({\n\t\tcolor: LINE_LINE_COLOR,\n\t\tlineWidth: 2,\n\t})\n\t.setData([\n\t\t{ time: { year: 2018, month: 9, day: 22 }, value: 25.531816900940186 },\n\t\t// hide-start\n\t\t{ time: { year: 2018, month: 9, day: 23 }, value: 26.350850429478125 },\n\t\t{ time: { year: 2018, month: 9, day: 24 }, value: 25.05218443850655 },\n\t\t{ time: { year: 2018, month: 9, day: 25 }, value: 25.41022485894306 },\n\t\t{ time: { year: 2018, month: 9, day: 26 }, value: 25.134847363259958 },\n\t\t{ time: { year: 2018, month: 9, day: 27 }, value: 24.239250761300525 },\n\t\t{ time: { year: 2018, month: 9, day: 28 }, value: 28.8673009313941 },\n\t\t{ time: { year: 2018, month: 9, day: 29 }, value: 27.028082380884264 },\n\t\t{ time: { year: 2018, month: 9, day: 30 }, value: 27.181577793470662 },\n\t\t{ time: { year: 2018, month: 10, day: 1 }, value: 28.658957209998505 },\n\t\t{ time: { year: 2018, month: 10, day: 2 }, value: 30.418392247817536 },\n\t\t{ time: { year: 2018, month: 10, day: 3 }, value: 26.41825183552505 },\n\t\t{ time: { year: 2018, month: 10, day: 4 }, value: 30.0951233353539 },\n\t\t{ time: { year: 2018, month: 10, day: 5 }, value: 30.30985059775389 },\n\t\t{ time: { year: 2018, month: 10, day: 6 }, value: 30.71612555943148 },\n\t\t{ time: { year: 2018, month: 10, day: 7 }, value: 28.222424591003268 },\n\t\t{ time: { year: 2018, month: 10, day: 8 }, value: 31.01149570947896 },\n\t\t{ time: { year: 2018, month: 10, day: 9 }, value: 30.390225881550307 },\n\t\t{ time: { year: 2018, month: 10, day: 10 }, value: 29.451733557312163 },\n\t\t{ time: { year: 2018, month: 10, day: 11 }, value: 34.14376900459634 },\n\t\t{ time: { year: 2018, month: 10, day: 12 }, value: 30.223333215683407 },\n\t\t{ time: { year: 2018, month: 10, day: 13 }, value: 35.1548736041708 },\n\t\t{ time: { year: 2018, month: 10, day: 14 }, value: 37.795223779011096 },\n\t\t{ time: { year: 2018, month: 10, day: 15 }, value: 38.95966228546306 },\n\t\t{ time: { year: 2018, month: 10, day: 16 }, value: 35.59132526195566 },\n\t\t{ time: { year: 2018, month: 10, day: 17 }, value: 38.42249768195307 },\n\t\t{ time: { year: 2018, month: 10, day: 18 }, value: 40.82520015585623 },\n\t\t{ time: { year: 2018, month: 10, day: 19 }, value: 37.401446370157814 },\n\t\t{ time: { year: 2018, month: 10, day: 20 }, value: 44.14728329801845 },\n\t\t{ time: { year: 2018, month: 10, day: 21 }, value: 43.908512951087765 },\n\t\t{ time: { year: 2018, month: 10, day: 22 }, value: 47.139711966410914 },\n\t\t{ time: { year: 2018, month: 10, day: 23 }, value: 43.78495537329606 },\n\t\t{ time: { year: 2018, month: 10, day: 24 }, value: 46.37910782721347 },\n\t\t{ time: { year: 2018, month: 10, day: 25 }, value: 48.280192310089234 },\n\t\t{ time: { year: 2018, month: 10, day: 26 }, value: 49.63767420501933 },\n\t\t{ time: { year: 2018, month: 10, day: 27 }, value: 43.05752682224708 },\n\t\t{ time: { year: 2018, month: 10, day: 28 }, value: 48.32708061157758 },\n\t\t{ time: { year: 2018, month: 10, day: 29 }, value: 53.39600337663517 },\n\t\t{ time: { year: 2018, month: 10, day: 30 }, value: 46.711006266435355 },\n\t\t{ time: { year: 2018, month: 10, day: 31 }, value: 54.13809826985657 },\n\t\t{ time: { year: 2018, month: 11, day: 1 }, value: 55.79021790616995 },\n\t\t{ time: { year: 2018, month: 11, day: 2 }, value: 49.2873885580548 },\n\t\t{ time: { year: 2018, month: 11, day: 3 }, value: 56.97009522871737 },\n\t\t{ time: { year: 2018, month: 11, day: 4 }, value: 50.823930530973975 },\n\t\t{ time: { year: 2018, month: 11, day: 5 }, value: 54.960060077375076 },\n\t\t{ time: { year: 2018, month: 11, day: 6 }, value: 62.0222568413422 },\n\t\t{ time: { year: 2018, month: 11, day: 7 }, value: 58.20081640960216 },\n\t\t{ time: { year: 2018, month: 11, day: 8 }, value: 65.13004590769961 },\n\t\t{ time: { year: 2018, month: 11, day: 9 }, value: 57.78891076252559 },\n\t\t{ time: { year: 2018, month: 11, day: 10 }, value: 58.792896124952186 },\n\t\t{ time: { year: 2018, month: 11, day: 11 }, value: 61.87890147945707 },\n\t\t{ time: { year: 2018, month: 11, day: 12 }, value: 60.93156560716248 },\n\t\t{ time: { year: 2018, month: 11, day: 13 }, value: 57.85928164082374 },\n\t\t{ time: { year: 2018, month: 11, day: 14 }, value: 70.95139577968187 },\n\t\t{ time: { year: 2018, month: 11, day: 15 }, value: 71.59735270974251 },\n\t\t{ time: { year: 2018, month: 11, day: 16 }, value: 68.6730845432055 },\n\t\t{ time: { year: 2018, month: 11, day: 17 }, value: 70.1298800651962 },\n\t\t{ time: { year: 2018, month: 11, day: 18 }, value: 68.82963709012753 },\n\t\t{ time: { year: 2018, month: 11, day: 19 }, value: 70.66316240517193 },\n\t\t{ time: { year: 2018, month: 11, day: 20 }, value: 67.83320577283186 },\n\t\t{ time: { year: 2018, month: 11, day: 21 }, value: 75.08486799785067 },\n\t\t{ time: { year: 2018, month: 11, day: 22 }, value: 72.87979342888752 },\n\t\t{ time: { year: 2018, month: 11, day: 23 }, value: 78.84973566116827 },\n\t\t{ time: { year: 2018, month: 11, day: 24 }, value: 77.59573370643601 },\n\t\t{ time: { year: 2018, month: 11, day: 25 }, value: 74.74726921909757 },\n\t\t{ time: { year: 2018, month: 11, day: 26 }, value: 69.68128245039887 },\n\t\t{ time: { year: 2018, month: 11, day: 27 }, value: 84.2489916330028 },\n\t\t{ time: { year: 2018, month: 11, day: 28 }, value: 85.49947753269504 },\n\t\t{ time: { year: 2018, month: 11, day: 29 }, value: 79.8486264148003 },\n\t\t{ time: { year: 2018, month: 11, day: 30 }, value: 87.69287202402485 },\n\t\t{ time: { year: 2018, month: 12, day: 1 }, value: 78.01690218289475 },\n\t\t{ time: { year: 2018, month: 12, day: 2 }, value: 90.03789034980372 },\n\t\t{ time: { year: 2018, month: 12, day: 3 }, value: 80.8840602849401 },\n\t\t{ time: { year: 2018, month: 12, day: 4 }, value: 76.88131503723805 },\n\t\t{ time: { year: 2018, month: 12, day: 5 }, value: 80.31060219295262 },\n\t\t{ time: { year: 2018, month: 12, day: 6 }, value: 93.94619117220051 },\n\t\t{ time: { year: 2018, month: 12, day: 7 }, value: 94.87133202008548 },\n\t\t{ time: { year: 2018, month: 12, day: 8 }, value: 82.60328626838404 },\n\t\t{ time: { year: 2018, month: 12, day: 9 }, value: 97.16768398118845 },\n\t\t{ time: { year: 2018, month: 12, day: 10 }, value: 86.28219316727935 },\n\t\t{ time: { year: 2018, month: 12, day: 11 }, value: 88.98768390749808 },\n\t\t{ time: { year: 2018, month: 12, day: 12 }, value: 86.9799632094888 },\n\t\t{ time: { year: 2018, month: 12, day: 13 }, value: 94.84612878449812 },\n\t\t{ time: { year: 2018, month: 12, day: 14 }, value: 102.1160216124386 },\n\t\t{ time: { year: 2018, month: 12, day: 15 }, value: 87.0646295567293 },\n\t\t{ time: { year: 2018, month: 12, day: 16 }, value: 88.48802912330535 },\n\t\t{ time: { year: 2018, month: 12, day: 17 }, value: 89.68490260440238 },\n\t\t{ time: { year: 2018, month: 12, day: 18 }, value: 86.66224375818467 },\n\t\t{ time: { year: 2018, month: 12, day: 19 }, value: 88.05916917094234 },\n\t\t{ time: { year: 2018, month: 12, day: 20 }, value: 78.96513176162487 },\n\t\t{ time: { year: 2018, month: 12, day: 21 }, value: 90.54239307317953 },\n\t\t{ time: { year: 2018, month: 12, day: 22 }, value: 92.40550159209458 },\n\t\t{ time: { year: 2018, month: 12, day: 23 }, value: 82.47365747958841 },\n\t\t{ time: { year: 2018, month: 12, day: 24 }, value: 91.55327647717618 },\n\t\t{ time: { year: 2018, month: 12, day: 25 }, value: 89.34790162747024 },\n\t\t{ time: { year: 2018, month: 12, day: 26 }, value: 85.68927849920716 },\n\t\t{ time: { year: 2018, month: 12, day: 27 }, value: 85.86795553966918 },\n\t\t{ time: { year: 2018, month: 12, day: 28 }, value: 90.55358282944198 },\n\t\t{ time: { year: 2018, month: 12, day: 29 }, value: 91.28939932554621 },\n\t\t{ time: { year: 2018, month: 12, day: 30 }, value: 100.90495261248472 },\n\t\t{ time: { year: 2018, month: 12, day: 31 }, value: 98.99348823473713 },\n\t\t// hide-end\n\t]);\n\nconst candlestickSeries = chart.addCandlestickSeries({\n\t// highlight-start\n\tpriceScaleId: 'left',\n\t// highlight-end\n\tupColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false,\n\twickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR,\n});\n\ncandlestickSeries.setData([\n\t{\n\t\tclose: 108.9974612905403,\n\t\thigh: 121.20998259466148,\n\t\tlow: 96.65376292551082,\n\t\topen: 104.5614412226746,\n\t\ttime: { year: 2018, month: 9, day: 22 },\n\t},\n\t// hide-start\n\t{\n\t\tclose: 110.46815600023501,\n\t\thigh: 111.3650273696516,\n\t\tlow: 82.65543461471314,\n\t\topen: 110.16538466099634,\n\t\ttime: { year: 2018, month: 9, day: 23 },\n\t},\n\t{\n\t\tclose: 90.62131977740425,\n\t\thigh: 109.19838270252615,\n\t\tlow: 82.30106956144076,\n\t\topen: 105.03104735287424,\n\t\ttime: { year: 2018, month: 9, day: 24 },\n\t},\n\t{\n\t\tclose: 96.80120024431532,\n\t\thigh: 101.92074283374939,\n\t\tlow: 89.25819769856513,\n\t\topen: 89.25819769856513,\n\t\ttime: { year: 2018, month: 9, day: 25 },\n\t},\n\t{\n\t\tclose: 94.87113928076117,\n\t\thigh: 104.12503365679314,\n\t\tlow: 85.42405005240111,\n\t\topen: 104.12503365679314,\n\t\ttime: { year: 2018, month: 9, day: 26 },\n\t},\n\t{\n\t\tclose: 100.76494087674855,\n\t\thigh: 102.60508417239113,\n\t\tlow: 80.76268547064865,\n\t\topen: 92.93299948659636,\n\t\ttime: { year: 2018, month: 9, day: 27 },\n\t},\n\t{\n\t\tclose: 101.45855928883597,\n\t\thigh: 110.26727325817173,\n\t\tlow: 91.10348900896837,\n\t\topen: 93.4362185148034,\n\t\ttime: { year: 2018, month: 9, day: 28 },\n\t},\n\t{\n\t\tclose: 91.68871815146144,\n\t\thigh: 103.73263644407702,\n\t\tlow: 73.5329263610334,\n\t\topen: 92.96467883926464,\n\t\ttime: { year: 2018, month: 9, day: 29 },\n\t},\n\t{\n\t\tclose: 89.39633140354033,\n\t\thigh: 101.06569518834237,\n\t\tlow: 81.71149885084162,\n\t\topen: 83.08248758612376,\n\t\ttime: { year: 2018, month: 9, day: 30 },\n\t},\n\t{\n\t\tclose: 93.09498513675378,\n\t\thigh: 93.09498513675378,\n\t\tlow: 76.81138276012628,\n\t\topen: 91.97280452613565,\n\t\ttime: { year: 2018, month: 10, day: 1 },\n\t},\n\t{\n\t\tclose: 89.26733004009083,\n\t\thigh: 89.26733004009083,\n\t\tlow: 76.27851645958225,\n\t\topen: 85.83860311023625,\n\t\ttime: { year: 2018, month: 10, day: 2 },\n\t},\n\t{\n\t\tclose: 89.66035763006947,\n\t\thigh: 89.66035763006947,\n\t\tlow: 67.63677527399729,\n\t\topen: 77.79584976144585,\n\t\ttime: { year: 2018, month: 10, day: 3 },\n\t},\n\t{\n\t\tclose: 89.59687813884807,\n\t\thigh: 97.05916949817754,\n\t\tlow: 72.9823390058379,\n\t\topen: 77.37388423995716,\n\t\ttime: { year: 2018, month: 10, day: 4 },\n\t},\n\t{\n\t\tclose: 83.6425403120788,\n\t\thigh: 91.72593377862522,\n\t\tlow: 65.27208271740422,\n\t\topen: 85.92711686401718,\n\t\ttime: { year: 2018, month: 10, day: 5 },\n\t},\n\t{\n\t\tclose: 82.99053929200655,\n\t\thigh: 93.4482645370556,\n\t\tlow: 65.98920655616067,\n\t\topen: 71.8940788814462,\n\t\ttime: { year: 2018, month: 10, day: 6 },\n\t},\n\t{\n\t\tclose: 73.09595957510754,\n\t\thigh: 86.65935598412881,\n\t\tlow: 62.710852488609326,\n\t\topen: 80.78945254092527,\n\t\ttime: { year: 2018, month: 10, day: 7 },\n\t},\n\t{\n\t\tclose: 80.12127692112905,\n\t\thigh: 87.49034842093855,\n\t\tlow: 60.09987438133361,\n\t\topen: 70.2408873110499,\n\t\ttime: { year: 2018, month: 10, day: 8 },\n\t},\n\t{\n\t\tclose: 77.60439116240829,\n\t\thigh: 83.20908153481327,\n\t\tlow: 68.56836128158209,\n\t\topen: 75.83440719565763,\n\t\ttime: { year: 2018, month: 10, day: 9 },\n\t},\n\t{\n\t\tclose: 73.8952889203428,\n\t\thigh: 81.89987377779327,\n\t\tlow: 57.8891283348631,\n\t\topen: 66.51904017615065,\n\t\ttime: { year: 2018, month: 10, day: 10 },\n\t},\n\t{\n\t\tclose: 75.08452506029613,\n\t\thigh: 75.08452506029613,\n\t\tlow: 59.208194031968155,\n\t\topen: 72.14475369395771,\n\t\ttime: { year: 2018, month: 10, day: 11 },\n\t},\n\t{\n\t\tclose: 73.08898607472305,\n\t\thigh: 73.08898607472305,\n\t\tlow: 63.05632280826725,\n\t\topen: 66.93050765469924,\n\t\ttime: { year: 2018, month: 10, day: 12 },\n\t},\n\t{\n\t\tclose: 58.993371469509704,\n\t\thigh: 73.08872095153116,\n\t\tlow: 53.52204433018574,\n\t\topen: 66.12840939191403,\n\t\ttime: { year: 2018, month: 10, day: 13 },\n\t},\n\t{\n\t\tclose: 57.150755012485,\n\t\thigh: 74.57414896810235,\n\t\tlow: 52.6552427480398,\n\t\topen: 68.50876667562338,\n\t\ttime: { year: 2018, month: 10, day: 14 },\n\t},\n\t{\n\t\tclose: 58.03147289822832,\n\t\thigh: 69.62445357159157,\n\t\tlow: 53.8260018823565,\n\t\topen: 61.62298899368165,\n\t\ttime: { year: 2018, month: 10, day: 15 },\n\t},\n\t{\n\t\tclose: 60.6852855399041,\n\t\thigh: 69.02095441024431,\n\t\tlow: 54.00939224622043,\n\t\topen: 64.81901552322648,\n\t\ttime: { year: 2018, month: 10, day: 16 },\n\t},\n\t{\n\t\tclose: 57.508820449565285,\n\t\thigh: 63.82926565242872,\n\t\tlow: 54.07370975509682,\n\t\topen: 54.07370975509682,\n\t\ttime: { year: 2018, month: 10, day: 17 },\n\t},\n\t{\n\t\tclose: 51.60796818909221,\n\t\thigh: 64.88712939579875,\n\t\tlow: 51.60796818909221,\n\t\topen: 53.489226476218434,\n\t\ttime: { year: 2018, month: 10, day: 18 },\n\t},\n\t{\n\t\tclose: 55.139520748382864,\n\t\thigh: 59.161320710177925,\n\t\tlow: 52.228139922762765,\n\t\topen: 52.228139922762765,\n\t\ttime: { year: 2018, month: 10, day: 19 },\n\t},\n\t{\n\t\tclose: 47.47868992247237,\n\t\thigh: 58.0836625917653,\n\t\tlow: 46.43213518526832,\n\t\topen: 47.59258635788406,\n\t\ttime: { year: 2018, month: 10, day: 20 },\n\t},\n\t{\n\t\tclose: 47.22596723150508,\n\t\thigh: 51.55468175560989,\n\t\tlow: 45.22654435521185,\n\t\topen: 47.452459556200054,\n\t\ttime: { year: 2018, month: 10, day: 21 },\n\t},\n\t{\n\t\tclose: 53.39724151191295,\n\t\thigh: 58.256006746786035,\n\t\tlow: 46.40105667413804,\n\t\topen: 53.41548527476272,\n\t\ttime: { year: 2018, month: 10, day: 22 },\n\t},\n\t{\n\t\tclose: 45.015877277800854,\n\t\thigh: 51.2955426978105,\n\t\tlow: 40.26534748806228,\n\t\topen: 43.90158660063875,\n\t\ttime: { year: 2018, month: 10, day: 23 },\n\t},\n\t{\n\t\tclose: 49.307312373439665,\n\t\thigh: 49.93643636637581,\n\t\tlow: 43.20705757075934,\n\t\topen: 45.672934511555795,\n\t\ttime: { year: 2018, month: 10, day: 24 },\n\t},\n\t{\n\t\tclose: 45.15418019295631,\n\t\thigh: 48.59676744409583,\n\t\tlow: 37.628047445918504,\n\t\topen: 40.33862825788268,\n\t\ttime: { year: 2018, month: 10, day: 25 },\n\t},\n\t{\n\t\tclose: 43.2972018283068,\n\t\thigh: 43.2972018283068,\n\t\tlow: 36.335943004352245,\n\t\topen: 42.605991542720965,\n\t\ttime: { year: 2018, month: 10, day: 26 },\n\t},\n\t{\n\t\tclose: 39.1153643552137,\n\t\thigh: 44.311406627923844,\n\t\tlow: 35.31457011784855,\n\t\topen: 42.00000202357808,\n\t\ttime: { year: 2018, month: 10, day: 27 },\n\t},\n\t{\n\t\tclose: 36.06960076896885,\n\t\thigh: 42.89041111567749,\n\t\tlow: 33.58326637182405,\n\t\topen: 37.40942817102858,\n\t\ttime: { year: 2018, month: 10, day: 28 },\n\t},\n\t{\n\t\tclose: 35.8981036950969,\n\t\thigh: 42.19793419602979,\n\t\tlow: 33.62190962880232,\n\t\topen: 36.87246325249825,\n\t\ttime: { year: 2018, month: 10, day: 29 },\n\t},\n\t{\n\t\tclose: 31.378205119641457,\n\t\thigh: 37.33501102832602,\n\t\tlow: 31.30137162225214,\n\t\topen: 35.651275660713694,\n\t\ttime: { year: 2018, month: 10, day: 30 },\n\t},\n\t{\n\t\tclose: 33.574536057730576,\n\t\thigh: 37.30152570719593,\n\t\tlow: 27.369689193426243,\n\t\topen: 34.330180925654936,\n\t\ttime: { year: 2018, month: 10, day: 31 },\n\t},\n\t{\n\t\tclose: 28.91735096504839,\n\t\thigh: 32.62196350117741,\n\t\tlow: 27.072564759401843,\n\t\topen: 29.398552328599372,\n\t\ttime: { year: 2018, month: 11, day: 1 },\n\t},\n\t{\n\t\tclose: 28.44143154172122,\n\t\thigh: 31.042019861166594,\n\t\tlow: 23.383320830495375,\n\t\topen: 27.275885037308072,\n\t\ttime: { year: 2018, month: 11, day: 2 },\n\t},\n\t{\n\t\tclose: 25.92162714418916,\n\t\thigh: 30.57604443170622,\n\t\tlow: 25.418671641150752,\n\t\topen: 26.775196275924657,\n\t\ttime: { year: 2018, month: 11, day: 3 },\n\t},\n\t{\n\t\tclose: 26.376994016637433,\n\t\thigh: 28.198647836523744,\n\t\tlow: 21.492969733673334,\n\t\topen: 26.27980943059139,\n\t\ttime: { year: 2018, month: 11, day: 4 },\n\t},\n\t{\n\t\tclose: 28.60834088674494,\n\t\thigh: 28.60834088674494,\n\t\tlow: 21.89002840571941,\n\t\topen: 25.376464895884993,\n\t\ttime: { year: 2018, month: 11, day: 5 },\n\t},\n\t{\n\t\tclose: 31.103861067101136,\n\t\thigh: 31.103861067101136,\n\t\tlow: 24.39227668420513,\n\t\topen: 28.994785427089838,\n\t\ttime: { year: 2018, month: 11, day: 6 },\n\t},\n\t{\n\t\tclose: 28.6308138310307,\n\t\thigh: 35.430817482769164,\n\t\tlow: 24.069515410358232,\n\t\topen: 27.109407394069084,\n\t\ttime: { year: 2018, month: 11, day: 7 },\n\t},\n\t{\n\t\tclose: 29.468889521733466,\n\t\thigh: 37.54082586961352,\n\t\tlow: 27.90833873315644,\n\t\topen: 33.16901271715577,\n\t\ttime: { year: 2018, month: 11, day: 8 },\n\t},\n\t{\n\t\tclose: 35.887823124204296,\n\t\thigh: 39.21804237580939,\n\t\tlow: 30.951078044055627,\n\t\topen: 30.951078044055627,\n\t\ttime: { year: 2018, month: 11, day: 9 },\n\t},\n\t{\n\t\tclose: 34.361137347097575,\n\t\thigh: 35.27083445807796,\n\t\tlow: 27.825889562160082,\n\t\topen: 34.86040182980157,\n\t\ttime: { year: 2018, month: 11, day: 10 },\n\t},\n\t{\n\t\tclose: 36.61336645243868,\n\t\thigh: 40.31460537175622,\n\t\tlow: 33.96383400053921,\n\t\topen: 39.70037560142739,\n\t\ttime: { year: 2018, month: 11, day: 11 },\n\t},\n\t{\n\t\tclose: 41.321693986803055,\n\t\thigh: 44.45481986667003,\n\t\tlow: 35.67563772228475,\n\t\topen: 38.67059795413642,\n\t\ttime: { year: 2018, month: 11, day: 12 },\n\t},\n\t{\n\t\tclose: 40.15038854039306,\n\t\thigh: 41.50912000191902,\n\t\tlow: 32.610637769394444,\n\t\topen: 41.50912000191902,\n\t\ttime: { year: 2018, month: 11, day: 13 },\n\t},\n\t{\n\t\tclose: 44.092601065208015,\n\t\thigh: 44.092601065208015,\n\t\tlow: 37.778306506100726,\n\t\topen: 38.99045898154136,\n\t\ttime: { year: 2018, month: 11, day: 14 },\n\t},\n\t{\n\t\tclose: 41.42426637839382,\n\t\thigh: 44.72189614841937,\n\t\tlow: 41.42426637839382,\n\t\topen: 44.72189614841937,\n\t\ttime: { year: 2018, month: 11, day: 15 },\n\t},\n\t{\n\t\tclose: 41.19513795258408,\n\t\thigh: 49.08084695291049,\n\t\tlow: 36.24282165100056,\n\t\topen: 44.909248500660254,\n\t\ttime: { year: 2018, month: 11, day: 16 },\n\t},\n\t{\n\t\tclose: 44.24935708161703,\n\t\thigh: 53.028535501565486,\n\t\tlow: 40.32056743060158,\n\t\topen: 46.198546801109984,\n\t\ttime: { year: 2018, month: 11, day: 17 },\n\t},\n\t{\n\t\tclose: 43.18555863372182,\n\t\thigh: 52.34250206788521,\n\t\tlow: 43.18555863372182,\n\t\topen: 49.58135271619679,\n\t\ttime: { year: 2018, month: 11, day: 18 },\n\t},\n\t{\n\t\tclose: 50.8568887039091,\n\t\thigh: 52.60441957102357,\n\t\tlow: 39.917719271944364,\n\t\topen: 48.197532365645806,\n\t\ttime: { year: 2018, month: 11, day: 19 },\n\t},\n\t{\n\t\tclose: 48.79128595974164,\n\t\thigh: 52.45087789296739,\n\t\tlow: 46.80633073487828,\n\t\topen: 52.45087789296739,\n\t\ttime: { year: 2018, month: 11, day: 20 },\n\t},\n\t{\n\t\tclose: 46.97300046781947,\n\t\thigh: 55.80689868049132,\n\t\tlow: 46.97300046781947,\n\t\topen: 55.80689868049132,\n\t\ttime: { year: 2018, month: 11, day: 21 },\n\t},\n\t{\n\t\tclose: 55.58129861112469,\n\t\thigh: 55.58129861112469,\n\t\tlow: 49.087279242343996,\n\t\topen: 53.16719476594961,\n\t\ttime: { year: 2018, month: 11, day: 22 },\n\t},\n\t{\n\t\tclose: 50.058979311730226,\n\t\thigh: 62.55333249171461,\n\t\tlow: 50.058979311730226,\n\t\topen: 52.628489607588826,\n\t\ttime: { year: 2018, month: 11, day: 23 },\n\t},\n\t{\n\t\tclose: 51.193155229085995,\n\t\thigh: 59.08949991997865,\n\t\tlow: 51.193155229085995,\n\t\topen: 55.352594157474755,\n\t\ttime: { year: 2018, month: 11, day: 24 },\n\t},\n\t{\n\t\tclose: 60.099338327208436,\n\t\thigh: 66.93510126958154,\n\t\tlow: 55.27299867222781,\n\t\topen: 61.05897620044226,\n\t\ttime: { year: 2018, month: 11, day: 25 },\n\t},\n\t{\n\t\tclose: 58.3802630890727,\n\t\thigh: 71.50922937699602,\n\t\tlow: 50.95210438359451,\n\t\topen: 62.4679688326532,\n\t\ttime: { year: 2018, month: 11, day: 26 },\n\t},\n\t{\n\t\tclose: 57.875350873413225,\n\t\thigh: 65.59903214448208,\n\t\tlow: 57.875350873413225,\n\t\topen: 62.747405667247016,\n\t\ttime: { year: 2018, month: 11, day: 27 },\n\t},\n\t{\n\t\tclose: 61.231150731698605,\n\t\thigh: 66.3829902228434,\n\t\tlow: 61.231150731698605,\n\t\topen: 65.01028486919516,\n\t\ttime: { year: 2018, month: 11, day: 28 },\n\t},\n\t{\n\t\tclose: 64.9698540874806,\n\t\thigh: 77.09783903299783,\n\t\tlow: 58.455031795628194,\n\t\topen: 58.455031795628194,\n\t\ttime: { year: 2018, month: 11, day: 29 },\n\t},\n\t{\n\t\tclose: 72.40978471883417,\n\t\thigh: 72.40978471883417,\n\t\tlow: 53.05804901549206,\n\t\topen: 65.907298021202,\n\t\ttime: { year: 2018, month: 11, day: 30 },\n\t},\n\t{\n\t\tclose: 74.60745731538934,\n\t\thigh: 78.33742117000789,\n\t\tlow: 54.42067144918077,\n\t\topen: 73.20930147914103,\n\t\ttime: { year: 2018, month: 12, day: 1 },\n\t},\n\t{\n\t\tclose: 64.10866184869924,\n\t\thigh: 76.14506447001202,\n\t\tlow: 61.5224432669736,\n\t\topen: 69.33984127682314,\n\t\ttime: { year: 2018, month: 12, day: 2 },\n\t},\n\t{\n\t\tclose: 65.92038759928786,\n\t\thigh: 76.98479070362022,\n\t\tlow: 65.92038759928786,\n\t\topen: 69.32298264631615,\n\t\ttime: { year: 2018, month: 12, day: 3 },\n\t},\n\t{\n\t\tclose: 68.23682161095334,\n\t\thigh: 77.6723729460968,\n\t\tlow: 68.23682161095334,\n\t\topen: 74.39471534484744,\n\t\ttime: { year: 2018, month: 12, day: 4 },\n\t},\n\t{\n\t\tclose: 67.45035792565862,\n\t\thigh: 83.53728553118547,\n\t\tlow: 67.45035792565862,\n\t\topen: 74.79418570077237,\n\t\ttime: { year: 2018, month: 12, day: 5 },\n\t},\n\t{\n\t\tclose: 79.26722967320323,\n\t\thigh: 79.26722967320323,\n\t\tlow: 68.40654829383521,\n\t\topen: 68.40654829383521,\n\t\ttime: { year: 2018, month: 12, day: 6 },\n\t},\n\t{\n\t\tclose: 74.95305464030587,\n\t\thigh: 81.65884414224071,\n\t\tlow: 64.08761481290135,\n\t\topen: 81.65884414224071,\n\t\ttime: { year: 2018, month: 12, day: 7 },\n\t},\n\t{\n\t\tclose: 86.30802154315482,\n\t\thigh: 91.21953112925642,\n\t\tlow: 65.46112304993535,\n\t\topen: 77.82514647663533,\n\t\ttime: { year: 2018, month: 12, day: 8 },\n\t},\n\t{\n\t\tclose: 82.67218208289492,\n\t\thigh: 92.45833377442081,\n\t\tlow: 76.80728739647081,\n\t\topen: 87.18916937056241,\n\t\ttime: { year: 2018, month: 12, day: 9 },\n\t},\n\t{\n\t\tclose: 73.86125805398967,\n\t\thigh: 83.68952750914036,\n\t\tlow: 73.86125805398967,\n\t\topen: 75.76119064173785,\n\t\ttime: { year: 2018, month: 12, day: 10 },\n\t},\n\t{\n\t\tclose: 79.00109311074502,\n\t\thigh: 88.74271558831151,\n\t\tlow: 69.00900811612337,\n\t\topen: 88.74271558831151,\n\t\ttime: { year: 2018, month: 12, day: 11 },\n\t},\n\t{\n\t\tclose: 80.98779620162513,\n\t\thigh: 97.07429720104427,\n\t\tlow: 73.76970378608283,\n\t\topen: 88.57288529720472,\n\t\ttime: { year: 2018, month: 12, day: 12 },\n\t},\n\t{\n\t\tclose: 87.83619759370346,\n\t\thigh: 91.29759438607132,\n\t\tlow: 74.00740214639268,\n\t\topen: 87.51853658661781,\n\t\ttime: { year: 2018, month: 12, day: 13 },\n\t},\n\t{\n\t\tclose: 87.50134898892377,\n\t\thigh: 102.95635188637507,\n\t\tlow: 81.0513723219724,\n\t\topen: 94.74009794290814,\n\t\ttime: { year: 2018, month: 12, day: 14 },\n\t},\n\t{\n\t\tclose: 92.40159548029843,\n\t\thigh: 103.24363067710844,\n\t\tlow: 75.44605394394573,\n\t\topen: 95.99903495559444,\n\t\ttime: { year: 2018, month: 12, day: 15 },\n\t},\n\t{\n\t\tclose: 87.43619322092951,\n\t\thigh: 99.39349139000474,\n\t\tlow: 80.24624983473528,\n\t\topen: 99.39349139000474,\n\t\ttime: { year: 2018, month: 12, day: 16 },\n\t},\n\t{\n\t\tclose: 84.42724177432086,\n\t\thigh: 95.57485075893881,\n\t\tlow: 84.42724177432086,\n\t\topen: 90.71070399095831,\n\t\ttime: { year: 2018, month: 12, day: 17 },\n\t},\n\t{\n\t\tclose: 96.04408990868804,\n\t\thigh: 101.02158248010466,\n\t\tlow: 94.38544669520195,\n\t\topen: 101.02158248010466,\n\t\ttime: { year: 2018, month: 12, day: 18 },\n\t},\n\t{\n\t\tclose: 97.2120815653703,\n\t\thigh: 103.35830035963959,\n\t\tlow: 78.72594316029567,\n\t\topen: 86.98009038330306,\n\t\ttime: { year: 2018, month: 12, day: 19 },\n\t},\n\t{\n\t\tclose: 105.23366706522204,\n\t\thigh: 106.56174456393981,\n\t\tlow: 94.6658899187065,\n\t\topen: 106.56174456393981,\n\t\ttime: { year: 2018, month: 12, day: 20 },\n\t},\n\t{\n\t\tclose: 89.53750874231946,\n\t\thigh: 112.27917367188074,\n\t\tlow: 87.13586952228918,\n\t\topen: 96.0857985693989,\n\t\ttime: { year: 2018, month: 12, day: 21 },\n\t},\n\t{\n\t\tclose: 88.55787263435407,\n\t\thigh: 112.62138454627025,\n\t\tlow: 80.42783344898223,\n\t\topen: 88.34340019789849,\n\t\ttime: { year: 2018, month: 12, day: 22 },\n\t},\n\t{\n\t\tclose: 86.00639650371167,\n\t\thigh: 110.94532193307279,\n\t\tlow: 74.78703575498496,\n\t\topen: 92.4275741143068,\n\t\ttime: { year: 2018, month: 12, day: 23 },\n\t},\n\t{\n\t\tclose: 90.45119640254379,\n\t\thigh: 92.51500970997435,\n\t\tlow: 82.69475430846728,\n\t\topen: 86.21662699549296,\n\t\ttime: { year: 2018, month: 12, day: 24 },\n\t},\n\t{\n\t\tclose: 93.38124264891343,\n\t\thigh: 93.38124264891343,\n\t\tlow: 84.5674956907938,\n\t\topen: 87.54923273867136,\n\t\ttime: { year: 2018, month: 12, day: 25 },\n\t},\n\t{\n\t\tclose: 87.88725775527871,\n\t\thigh: 90.14253631595105,\n\t\tlow: 77.28638555494503,\n\t\topen: 83.93199044032968,\n\t\ttime: { year: 2018, month: 12, day: 26 },\n\t},\n\t{\n\t\tclose: 71.77940077333062,\n\t\thigh: 89.25710176370582,\n\t\tlow: 67.74278646676306,\n\t\topen: 78.5346198695072,\n\t\ttime: { year: 2018, month: 12, day: 27 },\n\t},\n\t{\n\t\tclose: 72.08757207606054,\n\t\thigh: 79.36518615067514,\n\t\tlow: 69.18787486704672,\n\t\topen: 69.18787486704672,\n\t\ttime: { year: 2018, month: 12, day: 28 },\n\t},\n\t{\n\t\tclose: 73.87977927793119,\n\t\thigh: 77.62891475860795,\n\t\tlow: 70.42293039125319,\n\t\topen: 70.42293039125319,\n\t\ttime: { year: 2018, month: 12, day: 29 },\n\t},\n\t{\n\t\tclose: 74.86330345366132,\n\t\thigh: 75.88473282167168,\n\t\tlow: 62.89549355427313,\n\t\topen: 74.86554252962132,\n\t\ttime: { year: 2018, month: 12, day: 30 },\n\t},\n\t{\n\t\tclose: 71.00787215611817,\n\t\thigh: 71.00787215611817,\n\t\tlow: 57.29681995441558,\n\t\topen: 60.04464694823929,\n\t\ttime: { year: 2018, month: 12, day: 31 },\n\t},\n\t// hide-end\n]);\n\nchart.timeScale().fitContent();\n",h={title:"Two Price Scales",sidebar_label:"Two Price Scales",description:"An example of how to add two price scales to a chart.",pagination_prev:null,pagination_next:null,keywords:["price","scale"]},m=void 0,y={unversionedId:"how_to/two-price-scales",id:"how_to/two-price-scales",title:"Two Price Scales",description:"An example of how to add two price scales to a chart.",source:"@site/tutorials/how_to/two-price-scales.mdx",sourceDirName:"how_to",slug:"/how_to/two-price-scales",permalink:"/lightweight-charts/tutorials/how_to/two-price-scales",draft:!1,tags:[],version:"current",frontMatter:{title:"Two Price Scales",sidebar_label:"Two Price Scales",description:"An example of how to add two price scales to a chart.",pagination_prev:null,pagination_next:null,keywords:["price","scale"]},sidebar:"tutorialsSidebar"},s={},d=[{value:"Short answer",id:"short-answer",level:2},{value:"Tips",id:"tips",level:2},{value:"Resources",id:"resources",level:2},{value:"Full example",id:"full-example",level:2}],c={toc:d},p="wrapper";function u(t){let{components:n,...e}=t;return(0,o.kt)(p,(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is possible to have two price scales visible on a Lightweight Charts\u2122,\nnamely one on the right side (default) and another on the left. This example\nshows how to configure your chart to contain two price scales."),(0,o.kt)("h2",{id:"short-answer"},"Short answer"),(0,o.kt)("p",null,"Ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"rightPriceScale")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"leftPriceScale")," has the ",(0,o.kt)("inlineCode",{parentName:"p"},"visibility")," property\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," within the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ChartOptions#leftpricescale"},"chart options"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"chart.applyOptions({\n    rightPriceScale: {\n        visible: true,\n    },\n    leftPriceScale: {\n        visible: true,\n    },\n});\n")),(0,o.kt)("p",null,"and assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"priceScaleId")," property on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/SeriesOptionsCommon#pricescaleid"},"series options"),"\nfor the series which you would like to use the left scale. Note that by default a\nseries will use the right scale thus we don't need to set that property on the other series."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const leftSeries = chart.addCandlestickSeries(\n    { priceScaleId: 'left' }\n);\n")),(0,o.kt)("p",null,"You can see a full ",(0,o.kt)("a",{parentName:"p",href:"#full-example"},"working example")," below."),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("p",null,"By default the crosshair will snap to the data points of the first series.\nYou may prefer to set the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/enums/CrosshairMode"},"crosshair mode")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," so that you get a crosshair which allows sits directly beneath your cursor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"chart.applyOptions({\n    crosshair: {\n        mode: 0, // CrosshairMode.Normal\n    },\n});\n")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"You can learn more about price scales here: ",(0,o.kt)("a",{parentName:"p",href:"/docs/price-scale"},"Price scale")),(0,o.kt)("p",null,"and view the related APIs here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ChartOptions#leftpricescale"},"Chart Options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/PriceScaleOptions"},"PriceScaleOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/SeriesOptionsCommon#pricescaleid"},"SeriesOptionsCommon priceScaleId"))),(0,o.kt)("h2",{id:"full-example"},"Full example"),(0,o.kt)(i.ZP,{mdxType:"UsageGuidePartial"}),(0,o.kt)(l.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},r))}u.isMDXComponent=!0},8007:(t,n,e)=>{e.d(n,{ZP:()=>w});var a=e(7294),o=e(814),i=e(1262),l=e(2949),r=e(373),h=e(4908);function m(t,n,e){t.addEventListener("resize",(()=>{const t=n.getBoundingClientRect();e(t.width,t.height)}),!0)}const y={3.8:async t=>{const n=await e.e(3115).then(e.bind(e,3115));return{module:n,createChart:(e,a)=>{const o=n.createChart(e,a);return m(t,e,o.resize.bind(o)),o}}},"4.0":async t=>{const n=await e.e(1539).then(e.bind(e,1539));return{module:n,createChart:(e,a)=>{const o=n.createChart(e,a);return m(t,e,o.resize.bind(o)),o}}},current:async()=>{const t=await e.e(6738).then(e.bind(e,6738));return{module:t,createChart:(n,e)=>{const a=t.createChart(n,e);return m(window,n,a.resize.bind(a)),a}}}},s={iframe:"iframe_R_Fr"};function d(t){const{script:n}=t,{preferredVersion:e}=(0,r.J)(),o=h&&h.length>0?h[0]:"",i=e?.name??o??"current",l=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(n),m=a.useRef(null);return a.useEffect((()=>{const t=m.current,n=t?.contentWindow,e=t?.contentDocument;if(null===t||!n||!e)return;const a=async()=>{try{const{module:t,createChart:e}=await y[i](n);Object.assign(n,t),n.createChart=e,n.run?.()}catch(t){console.error(t)}};if(void 0!==n.run)a();else{const n=()=>{a(),t.removeEventListener("load",n)};t.addEventListener("load",n)}}),[l]),a.createElement("iframe",{key:n,ref:m,srcDoc:l,className:s.iframe})}var c=e(3864);const p=()=>`${Math.random().toString(36).slice(2,11)}`;function u(t){return"string"==typeof t?t:function(){const[t,n]=(0,a.useState)("");return(0,a.useEffect)((()=>n(p())),[]),t}()}const g=Object.keys(c.l.DARK);const w=t=>{const{chart:n,replaceThemeConstants:e,hideableCode:r,...h}=t;let{children:m}=t;const{colorMode:y}=(0,l.I)(),p="dark"===y,w=u();return e&&"string"==typeof m&&(m=function(t,n){const e=n?c.l.DARK:c.l.LIGHT;let a=t;for(const o of g)a=a.replace(new RegExp(o,"g"),`'${e[o]}'`);return a}(m,p)),m=m.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),n||r?a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("input",{id:w,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:w},"Show all code")),a.createElement(o.Z,h,m),n&&a.createElement(i.Z,{fallback:a.createElement("div",{className:s.iframe},"\xa0")},(()=>a.createElement(d,{script:m})))):a.createElement(o.Z,h,m)}},3864:(t,n,e)=>{e.d(n,{l:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},4908:t=>{t.exports=["4.0","3.8"]}}]);