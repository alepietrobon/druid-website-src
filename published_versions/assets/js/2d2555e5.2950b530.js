"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7802],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>T});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=d(n),m=l,T=g["".concat(o,".").concat(m)]||g[m]||p[m]||s;return n?a.createElement(T,r(r({ref:t},u),{},{components:n})):a.createElement(T,r({ref:t},u))}));function T(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>T,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var a=n(58168),l=n(98587),s=(n(96540),n(15680)),r=["components"],i={id:"tutorial-delete-data",title:"Tutorial: Deleting data",sidebar_label:"Deleting data"},o=void 0,d={unversionedId:"tutorials/tutorial-delete-data",id:"tutorials/tutorial-delete-data",title:"Tutorial: Deleting data",description:"\x3c!--",source:"@site/docs/29.0.0/tutorials/tutorial-delete-data.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-delete-data",permalink:"/docs/29.0.0/tutorials/tutorial-delete-data",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-delete-data",title:"Tutorial: Deleting data",sidebar_label:"Deleting data"},sidebar:"docs",previous:{title:"Compact segments",permalink:"/docs/29.0.0/tutorials/tutorial-compaction"},next:{title:"Write an ingestion spec",permalink:"/docs/29.0.0/tutorials/tutorial-ingestion-spec"}},u={},g=[{value:"Load initial data",id:"load-initial-data",level:2},{value:"How to permanently delete data",id:"how-to-permanently-delete-data",level:2},{value:"Disable segments by interval",id:"disable-segments-by-interval",level:2},{value:"Disable segments by segment IDs",id:"disable-segments-by-segment-ids",level:2},{value:"Run a kill task",id:"run-a-kill-task",level:2}],p={toc:g},m="wrapper";function T(e){var t=e.components,i=(0,l.A)(e,r);return(0,s.yg)(m,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This tutorial demonstrates how to delete existing data."),(0,s.yg)("p",null,"This tutorial requires the following:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"A running Apache Druid instance. If you don't have Druid, see the ",(0,s.yg)("a",{parentName:"li",href:"/docs/29.0.0/tutorials/"},"single-machine quickstart")," to get started."),(0,s.yg)("li",{parentName:"ul"},"The command-line JSON processor, ",(0,s.yg)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},"jq"),".")),(0,s.yg)("h2",{id:"load-initial-data"},"Load initial data"),(0,s.yg)("p",null,"In this tutorial, we will use the Wikipedia edits data, with an indexing spec that creates hourly segments. This spec is located at ",(0,s.yg)("inlineCode",{parentName:"p"},"quickstart/tutorial/deletion-index.json"),", and it creates a datasource called ",(0,s.yg)("inlineCode",{parentName:"p"},"deletion-tutorial"),"."),(0,s.yg)("p",null,"Let's load this initial data:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/deletion-index.json --url http://localhost:8081\n")),(0,s.yg)("p",null,"When the load finishes, open ",(0,s.yg)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#datasources"},"http://localhost:8888/unified-console.md#datasources")," in a browser."),(0,s.yg)("h2",{id:"how-to-permanently-delete-data"},"How to permanently delete data"),(0,s.yg)("p",null,"Permanent deletion of a Druid segment has two steps:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},'The segment must first be marked as "unused". This occurs when a user manually disables a segment through the Coordinator API.'),(0,s.yg)("li",{parentName:"ol"},'After segments have been marked as "unused", a Kill Task will delete any "unused" segments from Druid\'s metadata store as well as deep storage.')),(0,s.yg)("p",null,"Let's drop some segments now, by using the coordinator API to drop data by interval and segmentIds."),(0,s.yg)("h2",{id:"disable-segments-by-interval"},"Disable segments by interval"),(0,s.yg)("p",null,"Let's disable segments in a specified interval. This will mark all segments in the interval as \"unused\", but not remove them from deep storage.\nLet's disable segments in interval ",(0,s.yg)("inlineCode",{parentName:"p"},"2015-09-12T18:00:00.000Z/2015-09-12T20:00:00.000Z")," i.e. between hour 18 and 20."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' -H 'Content-Type:application/json' -d '{ \"interval\" : \"2015-09-12T18:00:00.000Z/2015-09-12T20:00:00.000Z\" }' http://localhost:8081/druid/coordinator/v1/datasources/deletion-tutorial/markUnused\n")),(0,s.yg)("p",null,"When the request completes, the Segments view of the web console no longer displays the segments for hours 18 and 19.\n",(0,s.yg)("img",{alt:"Segments 1",src:n(81396).A,title:"Segments 1",width:"1250",height:"640"})),(0,s.yg)("p",null,"Note that the hour 18 and 19 segments are still present in deep storage:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"$ ls -l1 var/druid/segments/deletion-tutorial/\n2015-09-12T00:00:00.000Z_2015-09-12T01:00:00.000Z\n2015-09-12T01:00:00.000Z_2015-09-12T02:00:00.000Z\n2015-09-12T02:00:00.000Z_2015-09-12T03:00:00.000Z\n2015-09-12T03:00:00.000Z_2015-09-12T04:00:00.000Z\n2015-09-12T04:00:00.000Z_2015-09-12T05:00:00.000Z\n2015-09-12T05:00:00.000Z_2015-09-12T06:00:00.000Z\n2015-09-12T06:00:00.000Z_2015-09-12T07:00:00.000Z\n2015-09-12T07:00:00.000Z_2015-09-12T08:00:00.000Z\n2015-09-12T08:00:00.000Z_2015-09-12T09:00:00.000Z\n2015-09-12T09:00:00.000Z_2015-09-12T10:00:00.000Z\n2015-09-12T10:00:00.000Z_2015-09-12T11:00:00.000Z\n2015-09-12T11:00:00.000Z_2015-09-12T12:00:00.000Z\n2015-09-12T12:00:00.000Z_2015-09-12T13:00:00.000Z\n2015-09-12T13:00:00.000Z_2015-09-12T14:00:00.000Z\n2015-09-12T14:00:00.000Z_2015-09-12T15:00:00.000Z\n2015-09-12T15:00:00.000Z_2015-09-12T16:00:00.000Z\n2015-09-12T16:00:00.000Z_2015-09-12T17:00:00.000Z\n2015-09-12T17:00:00.000Z_2015-09-12T18:00:00.000Z\n2015-09-12T18:00:00.000Z_2015-09-12T19:00:00.000Z\n2015-09-12T19:00:00.000Z_2015-09-12T20:00:00.000Z\n2015-09-12T20:00:00.000Z_2015-09-12T21:00:00.000Z\n2015-09-12T21:00:00.000Z_2015-09-12T22:00:00.000Z\n2015-09-12T22:00:00.000Z_2015-09-12T23:00:00.000Z\n2015-09-12T23:00:00.000Z_2015-09-13T00:00:00.000Z\n")),(0,s.yg)("h2",{id:"disable-segments-by-segment-ids"},"Disable segments by segment IDs"),(0,s.yg)("p",null,'Let\'s disable some segments by their segmentID. This will again mark the segments as "unused", but not remove them from deep storage. You can see the full segmentID for a segment using the web console.'),(0,s.yg)("p",null,"In the ",(0,s.yg)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#segments"},"segments view"),", click one of the segment rows to open the segment metadata dialog:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Segments_2",src:n(3855).A,title:"Segments 2",width:"1250",height:"640"})),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"identifier")," field in the metadata dialog shows the full segment ID. For example, the hour 23 segment has segment ID ",(0,s.yg)("inlineCode",{parentName:"p"},"deletion-tutorial_2015-09-12T23:00:00.000Z_2015-09-13T00:00:00.000Z_2023-05-16T00:04:12.091Z"),"."),(0,s.yg)("p",null,"Disable the last two segments, hour 22 and 23 segments, by sending a POST request to the Coordinator with the corresponding segment IDs.\nThe following command queries the Coordinator for segment IDs and uses ",(0,s.yg)("inlineCode",{parentName:"p"},"jq")," to parse and extract the IDs of the last two segments.\nThe segment IDs are stored in an environment variable named ",(0,s.yg)("inlineCode",{parentName:"p"},"unusedSegmentIds"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"unusedSegmentIds=$(curl -X 'GET' -H 'Content-Type:application/json' http://localhost:8081/druid/coordinator/v1/datasources/deletion-tutorial/segments | jq '.[-2:]')\n")),(0,s.yg)("p",null,"The following request marks the segments unused:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' -H 'Content-Type:application/json' -d \"{\\\"segmentIds\\\": $unusedSegmentIds}\" http://localhost:8081/druid/coordinator/v1/datasources/deletion-tutorial/markUnused\n")),(0,s.yg)("p",null,"When the request completes, the Segments view of the web console no longer displays the segments for hours 22 and 23."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Segments 3",src:n(18758).A,title:"Segments 3",width:"1250",height:"640"})),(0,s.yg)("p",null,"Note that the hour 22 and 23 segments are still in deep storage:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"$ ls -l1 var/druid/segments/deletion-tutorial/\n2015-09-12T00:00:00.000Z_2015-09-12T01:00:00.000Z\n2015-09-12T01:00:00.000Z_2015-09-12T02:00:00.000Z\n2015-09-12T02:00:00.000Z_2015-09-12T03:00:00.000Z\n2015-09-12T03:00:00.000Z_2015-09-12T04:00:00.000Z\n2015-09-12T04:00:00.000Z_2015-09-12T05:00:00.000Z\n2015-09-12T05:00:00.000Z_2015-09-12T06:00:00.000Z\n2015-09-12T06:00:00.000Z_2015-09-12T07:00:00.000Z\n2015-09-12T07:00:00.000Z_2015-09-12T08:00:00.000Z\n2015-09-12T08:00:00.000Z_2015-09-12T09:00:00.000Z\n2015-09-12T09:00:00.000Z_2015-09-12T10:00:00.000Z\n2015-09-12T10:00:00.000Z_2015-09-12T11:00:00.000Z\n2015-09-12T11:00:00.000Z_2015-09-12T12:00:00.000Z\n2015-09-12T12:00:00.000Z_2015-09-12T13:00:00.000Z\n2015-09-12T13:00:00.000Z_2015-09-12T14:00:00.000Z\n2015-09-12T14:00:00.000Z_2015-09-12T15:00:00.000Z\n2015-09-12T15:00:00.000Z_2015-09-12T16:00:00.000Z\n2015-09-12T16:00:00.000Z_2015-09-12T17:00:00.000Z\n2015-09-12T17:00:00.000Z_2015-09-12T18:00:00.000Z\n2015-09-12T18:00:00.000Z_2015-09-12T19:00:00.000Z\n2015-09-12T19:00:00.000Z_2015-09-12T20:00:00.000Z\n2015-09-12T20:00:00.000Z_2015-09-12T21:00:00.000Z\n2015-09-12T21:00:00.000Z_2015-09-12T22:00:00.000Z\n2015-09-12T22:00:00.000Z_2015-09-12T23:00:00.000Z\n2015-09-12T23:00:00.000Z_2015-09-13T00:00:00.000Z\n")),(0,s.yg)("h2",{id:"run-a-kill-task"},"Run a kill task"),(0,s.yg)("p",null,"Now that we have disabled some segments, we can submit a Kill Task, which will delete the disabled segments from metadata and deep storage."),(0,s.yg)("p",null,"A Kill Task spec has been provided at ",(0,s.yg)("inlineCode",{parentName:"p"},"quickstart/tutorial/deletion-kill.json"),". Submit this task to the Overlord with the following command:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' -H 'Content-Type:application/json' -d @quickstart/tutorial/deletion-kill.json http://localhost:8081/druid/indexer/v1/task\n")),(0,s.yg)("p",null,"When the task finishes, note that Druid deleted the disabled segments from deep storage."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"$ ls -l1 var/druid/segments/deletion-tutorial/\n2015-09-12T00:00:00.000Z_2015-09-12T01:00:00.000Z\n2015-09-12T01:00:00.000Z_2015-09-12T02:00:00.000Z\n2015-09-12T02:00:00.000Z_2015-09-12T03:00:00.000Z\n2015-09-12T03:00:00.000Z_2015-09-12T04:00:00.000Z\n2015-09-12T04:00:00.000Z_2015-09-12T05:00:00.000Z\n2015-09-12T05:00:00.000Z_2015-09-12T06:00:00.000Z\n2015-09-12T06:00:00.000Z_2015-09-12T07:00:00.000Z\n2015-09-12T07:00:00.000Z_2015-09-12T08:00:00.000Z\n2015-09-12T08:00:00.000Z_2015-09-12T09:00:00.000Z\n2015-09-12T09:00:00.000Z_2015-09-12T10:00:00.000Z\n2015-09-12T10:00:00.000Z_2015-09-12T11:00:00.000Z\n2015-09-12T11:00:00.000Z_2015-09-12T12:00:00.000Z\n2015-09-12T12:00:00.000Z_2015-09-12T13:00:00.000Z\n2015-09-12T13:00:00.000Z_2015-09-12T14:00:00.000Z\n2015-09-12T14:00:00.000Z_2015-09-12T15:00:00.000Z\n2015-09-12T15:00:00.000Z_2015-09-12T16:00:00.000Z\n2015-09-12T16:00:00.000Z_2015-09-12T17:00:00.000Z\n2015-09-12T17:00:00.000Z_2015-09-12T18:00:00.000Z\n2015-09-12T20:00:00.000Z_2015-09-12T21:00:00.000Z\n2015-09-12T21:00:00.000Z_2015-09-12T22:00:00.000Z\n")))}T.isMDXComponent=!0},81396:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/tutorial-deletion-01-891729c30511abdcc26da807fd50122f.png"},3855:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/tutorial-deletion-02-178ae7a7beae527951d67c5b79412e3d.png"},18758:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/tutorial-deletion-03-09b79439abe874b5e8d765b249b28d89.png"}}]);