(this["webpackJsonpfinal-project-second"]=this["webpackJsonpfinal-project-second"]||[]).push([[4],{434:function(t,e,o){},435:function(t,e,o){"use strict";o.r(e);var a=o(7),i=o(0),s=o(429),r=o.n(s),n=(o(434),o(63)),c=o.n(n),l=o(35),h=o(62),d=o(1);e.default=function(){var t=Object(l.c)((function(t){return t.bigChartDataReducer.data})),e=Object(l.b)();Object(i.useEffect)((function(){c.a.get("https://desolate-hamlet-85078.herokuapp.com/getData").then((function(t){return e(Object(h.a)(t.data.Chart))})).catch((function(t){return console.log(t)}))}),[e]);var o=Object(i.useState)({series:[{name:"Patients 2019",data:t.ChartYaxis},{name:"Patients 2020",data:t.ChartYaxis2}],options:{xaxis:{type:"category",categories:t.ChartXaxis,tooltip:{enabled:!1},crosshairs:{show:!0,width:1,opacity:.5,stroke:{color:"#A9C1FD",width:1,dashArray:5}},axisBorder:{show:!0,height:2,offsetY:-1}},yaxis:{tickAmount:6,min:0,max:300},grid:{show:!0,borderColor:"#D7DBDE",strokeDashArray:5},chart:{toolbar:{show:!1},fontFamily:"Lato, Helvetica, sans-serif",foreColor:"#CACCCF",zoom:{enabled:!0,type:"x",autoScaleYaxis:!0,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},dataLabels:{enabled:!1},colors:["#EFAD0A","#336CFB"],stroke:{curve:"smooth",width:2,show:!0,dashArray:0},fill:{type:"gradient",gradient:{shadeIntensity:.2,inverseColors:!1,opacityFrom:[0,.3],opacityTo:[0,.3],stops:[0,90,100]}},tooltip:{enabled:!0,shared:!0,style:{fontSize:"16px",fontFamily:"Lato"},y:{show:!0},custom:function(t){var e=t.series,o=t.seriesIndex,a=t.dataPointIndex;t.w;return'<div class="arrow_box"><span>'+e[o][a]+"</span></div>"}},legend:{fontSize:"12px",fontFamily:"Lato, Helvetica, Arial",fontWeight:700,position:"top",horizontalAlign:"right",labels:{colors:"#A0A4A8"},offsetY:-30,markers:{width:20,height:2},itemMargin:{horizontal:30,vertical:0}},title:{text:"Hospital Survey ",align:"left",margin:10,offsetX:10,offsetY:20,style:{fontSize:"20px",fontWeight:700,fontFamily:"Lato",color:"#25282B"}},responsive:[{breakpoint:550,options:{legend:{position:"bottom",horizontalAlign:"center",offsetY:5}}}]}}),s=Object(a.a)(o,1)[0];return Object(d.jsx)("section",{className:"big-chart",children:Object(d.jsx)("div",{children:Object(d.jsx)(r.a,{options:s.options,series:s.series,height:350,width:"100%",type:"area"})})})}}}]);
//# sourceMappingURL=4.83a0f392.chunk.js.map