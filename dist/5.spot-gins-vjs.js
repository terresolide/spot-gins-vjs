(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,e,n){var i=n(186);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(10).default)("2b90ff04",i,!0,{})},185:function(t,e,n){"use strict";n(156)},186:function(t,e,n){(e=n(9)(!1)).push([t.i,"\n.my-spinner {\n  width:100%;\n  padding-top:30px;\n  text-align:center;\n}\n.my-spinner .fa {\n  vertical-align: middle;\n}\n",""]),t.exports=e},189:function(t,e,n){"use strict";n.r(e);var i=n(8),a=n(7),s=n.n(a),r=n(179),o=n.n(r),l=n(180),h=n.n(l),u=n(12),d=n.n(u),p=n(181),c=n.n(p),f=n(182),m=n.n(f),x=n(183),v=n.n(x),g=n(184),y=n.n(g);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"object"===b(i)&&(o()(i),h()(i),d()(i),c()(i),m()(i),v()(i),y()(i));var E={props:{id:{type:Number,default:null},url:{type:String,default:null},selected:{type:Boolean,default:!1}},watch:{url:function(){this.reset(),console.log(this.selected),this.selected&&this.load()},id:function(){this.reset(),console.log(this.selected),this.selected&&this.load()},selected:function(t){0===this.results.N.length&&t&&this.load()}},data:function(){return{height:150,next:null,currentIndex:0,results:{E:[],N:[],U:[]},dates:[],types:["E","N","U"],pointDate:{date:null,N:null,E:null,U:null},graphs:{N:null,E:null,U:null},colors:{N:"blue",E:"#f00",U:"#006400"},plotlines:[],min:{E:null,N:null,U:null},max:{E:null,N:null,U:null},title:{E:"East (mm)",N:"North (mm)",U:"Up (mm)"}}},methods:{reset:function(){var t=this;this.dates=[],this.types.forEach((function(e){t.graphs[e]&&(t.graphs[e].destroy(),t.graphs[e]=null,t.addSpinner(e)),t.results[e]=[],t.min[e]=null,t.max[e]=null}))},load:function(){var t=this;this.url&&(this.navigationLink=this.url+"Datastreams("+this.id+")",this.$http.get(this.navigationLink+"/Observations?$top=1000&$select=phenomenonTime,result,resultQuality&$format=dataArray",{headers:"accept: application/json"}).then((function(e){e.body.value&&e.body.value[0]&&e.body.value[0]["Datastream@iot.navigationLink"]===t.navigationLink&&(t.next=null,e.body.value[0].dataArray&&(t.extractData(e.body.value[0].dataArray),e.body["@iot.nextLink"]&&(t.next=e.body["@iot.nextLink"])))})))},searchNext:function(){var t=this;this.next&&this.$http.get(this.next,{headers:"accept: application/json"}).then((function(e){e.body.value&&e.body.value[0]&&e.body.value[0]["Datastream@iot.navigationLink"]===t.navigationLink&&(t.next=null,e.body.value[0].dataArray&&(e.body["@iot.nextLink"]&&(t.next=e.body["@iot.nextLink"]),t.addData(e.body.value[0].dataArray)))}))},extractData:function(t){var e=this;this.min={E:t[0][1][0],N:t[0][1][1],U:t[0][1][2]},this.max={E:t[0][1][0],N:t[0][1][1],U:t[0][1][2]},t.forEach((function(t,n){var i=s()(t[0],"YYYY-MM-DDThh:mm:ssZ").valueOf(),a={},r={};a.E=t[1][0],r.E=t[2][0],a.N=t[1][1],r.N=t[2][1],a.U=t[1][2],r.U=t[2][2],e.dates.push(i),n%7==0&&e.types.forEach((function(t){e.results[t].push([i,a[t],Math.round(100*(a[t]+r[t]))/100,Math.round(100*(a[t]-r[t]))/100,a[t]]),r.N<10&&(e.min[t]>a[t]?e.min[t]=a[t]:e.max[t]<a[t]&&(e.max[t]=a[t]))}))})),this.currentIndex=t.length-1,setTimeout((function(){e.buildGraph(0)}),0)},addData:function(t){var e=this,n=[],i={E:[],N:[],U:[]};t.forEach((function(t,a){var r=s()(t[0],"YYYY-MM-DDThh:mm:ssZ").valueOf(),o={},l={};o.E=t[1][0],l.E=t[2][0],o.N=t[1][1],l.N=t[2][1],o.U=t[1][2],l.U=t[2][2],n.push(r),(e.currentIndex+a)%7==0&&e.types.forEach((function(t){i[t].push([r,o[t],Math.round(100*(o[t]+l[t]))/100,Math.round(100*(o[t]-l[t]))/100,o[t]]),l.N<10&&(e.min[t]>o[t]?e.min[t]=o[t]:e.max[t]<o[t]&&(e.max[t]=o[t]))}))})),this.currentIndex=this.currentIndex+n.length,this.addPointsToGraphs(n,i),this.searchNext()},addPointsToGraphs:function(t,e){var n=this;this.dates=this.dates.concat(t),this.types.forEach((function(t){n.results[t]=n.results[t].concat(e[t])})),this.types.forEach((function(t){n.graphs[t]&&(e[t].forEach((function(e){n.graphs[t].series[0].addPoint(e,!1)})),n.graphs[t].redraw(),n.graphs[t].xAxis[0].setExtremes(n.dates[0],n.dates[n.dates.length-1],!0,!1),n.graphs[t].yAxis[0].setExtremes(n.min[t],n.max[t],!0,!1))}))},buildGraph:function(t){var e=this;if(this.types[t]){var n=this.types[t];e.draw(n),setTimeout((function(){e.buildGraph(t+1)}),0)}else this.next&&this.searchNext()},highlight:function(t,e){var n,i;if(!this.graphs[e])return!1;if(n=this.graphs[e].pointer.normalize(t),i=this.graphs[e].series[0].searchPoint(n,!0))for(var a in this.types){var s,r=this.types[a];(s=this.graphs[r])&&void 0!==s&&(s.xAxis[0].removePlotLine("highlight"),s.xAxis[0].addPlotLine({color:"#999999",value:i.x,width:1,id:"highlight"}))}},addSpinner:function(t){var e=document.createElement("div");e.setAttribute("class","my-spinner");var n=document.createElement("span");n.setAttribute("class","fa fa-spinner fa-spin fa-2x fa-fw"),e.appendChild(n),this.$el.querySelector("#graph_"+t).appendChild(e)},draw:function(t){var e=Math.floor(this.min[t]),n=Math.ceil(this.max[t]),a=(this.colors[t],this.title[t]),r=this.results[t],o=this.plotlines,l=this;this.graphs[t]=i.chart("graph_"+t,{chart:{zoomType:"x"},title:"Test",width:"680px",height:l.height+"px",credits:{enabled:!1},legend:{enabled:!1},exporting:{enabled:!1},tooltip:{enabled:!0,formatter:function(t){var e=this;if(!this.point)return!1;var n=[];for(var i in l.types){var a=l.types[i],r=l.graphs[a];if(r&&void 0!==r){var o=r.series[0].points.find((function(t){return t.x===e.point.x}));if(void 0!==o){l.pointDate[a]=o.open;var h=Math.round(100*(o.high-o.open))/100;n.push('<div><span style="color:'+o.color+';">&#9632;</span> '+a.toUpperCase()+": "+o.open+" &pm; "+h+"</div>")}i!==a&&r.tooltip.hide()}}return l.pointDate.date=s.a.unix(this.point.x/1e3).format("ll"),"<b>"+s.a.unix(this.point.x/1e3).format("ll")+"</b><br />"+n.join("<br />")},shared:!1},plotOptions:{},xAxis:{type:"datetime",lineColor:"#666",events:{afterSetExtremes:function(e){var n=e.min,i=e.max;for(var a in l.graphs)a!==t&&l.graphs[a]&&l.graphs[a].xAxis[0].setExtremes(n,i,!0,!1)}},gridLineWidth:0,plotLines:o},yAxis:{title:{text:a},min:e,max:n,plotLines:[{value:0,color:"lightgrey",width:2}]},series:[{name:t,color:"darkblue",id:t,type:"ohlc",zIndex:10,data:r,lineWidth:1},{type:"linearRegression",linkedTo:t,color:"darkred",enableMouseTracking:!1,zIndex:11,params:{period:30},lineWidth:1}]})}}},N=(n(185),n(11)),_=Object(N.a)(E,(function(){var t=this,e=t._self._c;return e("div",[e("div",{style:{height:t.height+"px"},attrs:{id:"graph_E"},on:{mousemove:function(e){return t.highlight(e,"E")}}},[t._m(0)]),t._v(" "),e("div",{style:{height:t.height+"px"},attrs:{id:"graph_N"},on:{mousemove:function(e){return t.highlight(e,"N")}}},[t._m(1)]),t._v(" "),e("div",{style:{height:t.height+"px"},attrs:{id:"graph_U"},on:{mousemove:function(e){return t.highlight(e,"U")}}},[t._m(2)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"my-spinner"},[t("span",{staticClass:"fa fa-spinner fa-spin fa-2x fa-fw"})])},function(){var t=this._self._c;return t("div",{staticClass:"my-spinner"},[t("span",{staticClass:"fa fa-spinner fa-spin fa-2x fa-fw"})])},function(){var t=this._self._c;return t("div",{staticClass:"my-spinner"},[t("span",{staticClass:"fa fa-spinner fa-spin fa-2x fa-fw"})])}],!1,null,null,null);e.default=_.exports}}]);
//# sourceMappingURL=5.spot-gins-vjs.js.map