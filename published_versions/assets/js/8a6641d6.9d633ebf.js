"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9525],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,y=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return t?a.createElement(y,o(o({ref:n},g),{},{components:t})):a.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(58168),r=t(98587),i=(t(96540),t(15680)),o=["components"],l={id:"hll-old",title:"Cardinality/HyperUnique aggregators"},s=void 0,u={unversionedId:"querying/hll-old",id:"querying/hll-old",title:"Cardinality/HyperUnique aggregators",description:"\x3c!--",source:"@site/docs/29.0.0/querying/hll-old.md",sourceDirName:"querying",slug:"/querying/hll-old",permalink:"/docs/29.0.0/querying/hll-old",draft:!1,tags:[],version:"current",frontMatter:{id:"hll-old",title:"Cardinality/HyperUnique aggregators"}},g={},d=[{value:"Cardinality aggregator",id:"cardinality-aggregator",level:2},{value:"Cardinality by value",id:"cardinality-by-value",level:3},{value:"Cardinality by row",id:"cardinality-by-row",level:3},{value:"HyperUnique aggregator",id:"hyperunique-aggregator",level:2}],p={toc:d},c="wrapper";function y(e){var n=e.components,t=(0,r.A)(e,o);return(0,i.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"cardinality-aggregator"},"Cardinality aggregator"),(0,i.yg)("p",null,"Computes the cardinality of a set of Apache Druid dimensions, using HyperLogLog to estimate the cardinality. Please note that this\naggregator will be much slower than indexing a column with the hyperUnique aggregator. This aggregator also runs over a dimension column, which\nmeans the string dimension cannot be removed from the dataset to improve rollup. In general, we strongly recommend using the hyperUnique aggregator\ninstead of the cardinality aggregator if you do not care about the individual values of a dimension."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "<output_name>",\n  "fields": [ <dimension1>, <dimension2>, ... ],\n  "byRow": <false | true> # (optional, defaults to false),\n  "round": <false | true> # (optional, defaults to false)\n}\n')),(0,i.yg)("p",null,'Each individual element of the "fields" list can be a String or ',(0,i.yg)("a",{parentName:"p",href:"/docs/29.0.0/querying/dimensionspecs"},"DimensionSpec"),". A String dimension in the fields list is equivalent to a DefaultDimensionSpec (no transformations)."),(0,i.yg)("p",null,'The HyperLogLog algorithm generates decimal estimates with some error. "round" can be set to true to round off estimated\nvalues to whole numbers. Note that even with rounding, the cardinality is still an estimate. The "round" field only\naffects query-time behavior, and is ignored at ingestion-time.'),(0,i.yg)("h3",{id:"cardinality-by-value"},"Cardinality by value"),(0,i.yg)("p",null,"When setting ",(0,i.yg)("inlineCode",{parentName:"p"},"byRow")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," (the default) it computes the cardinality of the set composed of the union of all dimension values for all the given dimensions."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For a single dimension, this is equivalent to")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT(dimension)) FROM <datasource>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For multiple dimensions, this is equivalent to something akin to")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT(value)) FROM (\n  SELECT dim_1 as value FROM <datasource>\n  UNION\n  SELECT dim_2 as value FROM <datasource>\n  UNION\n  SELECT dim_3 as value FROM <datasource>\n)\n")),(0,i.yg)("h3",{id:"cardinality-by-row"},"Cardinality by row"),(0,i.yg)("p",null,"When setting ",(0,i.yg)("inlineCode",{parentName:"p"},"byRow")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," it computes the cardinality by row, i.e. the cardinality of distinct dimension combinations.\nThis is equivalent to something akin to"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM ( SELECT DIM1, DIM2, DIM3 FROM <datasource> GROUP BY DIM1, DIM2, DIM3 )\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example")),(0,i.yg)("p",null,"Determine the number of distinct countries people are living in or have come from."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "distinct_countries",\n  "fields": [ "country_of_origin", "country_of_residence" ]\n}\n')),(0,i.yg)("p",null,"Determine the number of distinct people (i.e. combinations of first and last name)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "distinct_people",\n  "fields": [ "first_name", "last_name" ],\n  "byRow" : true\n}\n')),(0,i.yg)("p",null,"Determine the number of distinct starting characters of last names"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "distinct_last_name_first_char",\n  "fields": [\n    {\n     "type" : "extraction",\n     "dimension" : "last_name",\n     "outputName" :  "last_name_first_char",\n     "extractionFn" : { "type" : "substring", "index" : 0, "length" : 1 }\n    }\n  ],\n  "byRow" : true\n}\n')),(0,i.yg)("h2",{id:"hyperunique-aggregator"},"HyperUnique aggregator"),(0,i.yg)("p",null,"Uses ",(0,i.yg)("a",{parentName:"p",href:"http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf"},"HyperLogLog"),' to compute the estimated cardinality of a dimension that has been aggregated as a "hyperUnique" metric at indexing time.'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "hyperUnique",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "isInputHyperUnique" : false,\n  "round" : false\n}\n')),(0,i.yg)("p",null,'"isInputHyperUnique" can be set to true to index precomputed HLL (Base64 encoded output from druid-hll is expected).\nThe "isInputHyperUnique" field only affects ingestion-time behavior, and is ignored at query-time.'),(0,i.yg)("p",null,'The HyperLogLog algorithm generates decimal estimates with some error. "round" can be set to true to round off estimated\nvalues to whole numbers. Note that even with rounding, the cardinality is still an estimate. The "round" field only\naffects query-time behavior, and is ignored at ingestion-time.'))}y.isMDXComponent=!0}}]);