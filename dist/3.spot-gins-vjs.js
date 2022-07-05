(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(e,t){L.Control.Tiles=L.Control.Layers.extend({tiles:{osm:{name:"OpenStreetMap",url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'},osmFr:{name:"OpenStreetMap France",url:"//{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",attribution:'donn&eacute;es &copy; <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>'},opentopomap:{name:"OpenStreetMap Topo",url:"//{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'Kartendaten: © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, <a href="http://viewfinderpanoramas.org">SRTM</a> | Kartendarstellung: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},arcgisTopo:{name:"ArcGIS World Topo Map",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",attribution:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'},arcgisSatellite:{name:"ArcGIS Satellite Tiles",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer">Arcgis</a>'},arcgisRelief:{name:"ArcGIS Relief Tiles",url:"https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}",attribution:'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer">Arcgis</a>'}},initialize:function(e,t,i){for(var n in L.Control.Layers.prototype.initialize.call(this,e,t,i),this.tiles){var o=L.tileLayer(this.tiles[n].url,{attribution:this.tiles[n].attribution});this.tiles[n].layer=o,this.addBaseLayer(o,this.tiles[n].name)}}}),e.exports=L.Control.Tiles},16:function(e,t,i){var n=i(163);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,i(10).default)("25e39275",n,!0,{})},162:function(e,t,i){"use strict";i(16)},163:function(e,t,i){(t=i(9)(!1)).push([e.i,'\n#map {\n  min-height:500px;\n  height:100vh;\n  width:100%;\n}\n#map .leaflet-popup-scrolled {\n  border: none;\n  padding-top: 0;\n}\n#map h4 {\n  margin:0;\n}\nh1 {\n   position: fixed;\n   bottom:0;\n   width:100%;\n   text-align:center;\n   z-index:1000;\n   pointer-events:none;\n}\ndiv.marker-red{\n  width: 30px;\n  height: 30px;\n  background-color: darkred;\n  border: 1px solid black;\n  border-radius:3px;\n}\ndiv.marker-blue {\n  width: 30px;\n  height: 30px;\n  background-color: blue;\n  border: 1px solid black;\n  border-radius:3px;\n}\ndiv.leaflet-control-layers-overlays div.marker-red,\ndiv.leaflet-control-layers-overlays div.marker-blue {\n  display:inline-block;\n  width: 10px;\n  height: 10px;\n  vertical-align: middle;\n}\nul.menu-content {\n  font-size: 0.8rem;\n  border-bottom: 1px solid #adadad;\n  margin:5px 0;\n  padding: 5px 0 0 0;\n}\nul.menu-content li {\n  display: inline-block;\n   min-width: 50px;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  border: 1px solid #adadad;\n  border-bottom: none;\n  text-align: center;\n  color: black;\n  height: 30px;\n  padding:0;\n  vertical-align: middle;\n  margin: 0;\n  background: #efefef;\n  text-transform: capitalize;\n}\nul.menu-content li span {\n    text-transform: capitalize;\n    vertical-align: middle;\n    height: 30px;\n    min-width:50px;\n    color:black;\n    padding: 5px 10px 0 10px;\n    text-decoration: none;\n    display:inline-block;\n    cursor:pointer;\n}\nul.menu-content li span:hover {\n  color:#b8412c;\n}\nul.menu-content li span.selected {\n  background:white;\n  color:#b8412c;\n}\n',""]),e.exports=t},176:function(e,t,i){"use strict";i.r(t);var n=i(13),o=i(13);o.TilesControl=i(154),delete n.Icon.Default.prototype._getIconUrl,n.Icon.Default.mergeOptions({iconRetinaUrl:i(155),iconUrl:i(14),shadowUrl:i(156)});var a={name:"SpotGins",components:{JsonDiv:function(){return i.e(5).then(i.bind(null,177))},SpotginsGraph:function(){return Promise.all([i.e(1),i.e(4)]).then(i.bind(null,178))}},props:{root:{type:String,default:"http://api.formater/data/spotgins/stations.json"}},data:function(){return{map:null,stations:[],scheme:{},json:null,baseUrl:null,layerControl:null,bounds:null,mode:"graph",selected:null,dataJsonUrl:null,img:null,imgMin:null,dataAsciiUrl:null,sitelog:null,loaded:!1,popup:null}},mounted:function(){this.initialize()},methods:{initialize:function(){this.map=o.map("map",{scrollWheelZoom:!0}).setView([20,-.09],3),this.layerControl=new o.TilesControl(null,null,{position:"topright"}),this.layerControl.tiles.arcgisTopo.layer.addTo(this.map),this.layerControl.addTo(this.map),this.popup=o.popup({minWidth:450,minHeight:500,maxHeight:500});var e=document.querySelector("#json");this.popup.setContent(e),this.load()},load:function(){var e=this;this.root||alert('Pas de fichier "root"!'),this.$http.get(this.root).then((function(t){e.extractUrl(t.body)}),(function(e){alert("Erreur de chargement"+e.status)}))},reset:function(){this.loaded=!1,this.img=null,this.imgMin=null,this.json=null,this.dataJsonUrl=null,this.dataAsciiUrl=null,this.sitelog=null},download:function(e){console.log(e);var t=null;"json"===e&&(t=this.dataJsonUrl,console.log(t)),"ascii"===e&&(t=this.dataAsciiUrl),this.$http.get(t,{responseType:"blob"}).then((function(e){if(console.log(e.bodyBlob),e.bodyBlob){var i=window.URL.createObjectURL(e.bodyBlob),n=document.createElement("a");n.href=i,n.download=t.split("/").pop(),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}))},extractUrl:function(e){var t=new URL(this.root),i=t.pathname.split("/");i.pop(),this.baseUrl=t.origin+i.join("/");var n=e.scheme;for(var o in n)console.log(o),this.scheme[o]=n[o].replace("[base_url]",this.baseUrl);var a=this;e.stations.forEach((function(e,t){a.stations.push({id:t,url:e.replace("[base_url]",a.baseUrl)})})),this.loadFeatures(0)},loadFeatures:function(e){var t=this;if(this.stations[e]){var i=this;this.$http.get(this.stations[e].url).then((function(n){console.log(n.body);var a=n.body.className,r=n.body.id,s=o.divIcon({className:a});t.stations[e].feature=o.geoJSON(n.body,{pointToLayer:function(e,t){var n=o.marker(t,{icon:s,title:e.id});return n.on("click",i.getData),n}}).addTo(t.map);var l=t.stations[e].feature.getBounds();t.bounds?t.bounds.extend(l):t.bounds=l,t.layerControl.addOverlay(t.stations[e].feature,r+' <div class="'+a+'"></div>'),t.loadFeatures(e+1)}),(function(i){alert("Erreur chargement station "+(e+1)+": "+i.status),t.loadFeatures(e+1)}))}else this.bounds&&this.map.fitBounds(this.bounds)},getData:function(e){if(this.mode="graph",this.loaded!==e.target.id){var t=e.target.feature.id;this.loaded=t,this.selected=t,this.img=this.scheme.img.replaceAll("[id]",t),this.imgMin=this.scheme.imgMin.replaceAll("[id]",t),this.popup.setLatLng(e.target.getLatLng()),this.popup.openOn(this.map),this.dataJsonUrl=this.scheme.dataJSON.replaceAll("[id]",t),this.dataAsciiUrl=this.scheme.dataASCII.replaceAll("[id]",t),this.sitelog=this.scheme.sitelog.replaceAll("[id]",t)}},createPopup:function(e){this.mode="graph",this.img=this.scheme.img.replaceAll("[id]",e.feature.id),this.imgMin=this.scheme.imgMin.replaceAll("[id]",e.feature.id),this.dataJsonUrl=this.scheme.dataJSON.replaceAll("[id]",e.feature.id),this.dataAsciiUrl=this.scheme.dataASCII.replaceAll("[id]",e.feature.id)}}},r=(i(157),i(162),i(11)),s=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"}},[t("h1",[e._v("SPOT GINS TEST")]),e._v(" "),t("div",{attrs:{id:"map"}}),e._v(" "),t("div",{staticStyle:{background:"white","max-width":"450px","min-height":"500px","max-height":"500px"},attrs:{id:"json"}},[t("h4",[e._v(e._s(e.selected))]),e._v(" "),t("ul",{staticClass:"menu-content"},[t("li",{on:{click:function(t){e.mode="station"}}},[t("span",{class:{selected:"station"===e.mode}},[e._v("Station")])]),e._v(" "),t("li",{on:{click:function(t){e.mode="graph"}}},[t("span",{class:{selected:"graph"===e.mode}},[e._v("Graphique")])]),e._v(" "),t("li",{on:{click:function(t){e.mode="data"}}},[t("span",{class:{selected:"data"===e.mode}},[e._v("Interactif")])]),e._v(" "),t("li",{on:{click:function(t){e.mode="download"}}},[t("span",{class:{selected:"download"===e.mode}},[e._v("Téléchargement")])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"station"===e.mode,expression:"mode === 'station'"}],staticStyle:{"max-height":"420px","overflow-y":"scroll"}},[t("json-div",{attrs:{url:e.sitelog,selected:"station"===e.mode,deployed:!0}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"graph"===e.mode,expression:"mode === 'graph'"}],staticStyle:{"text-align":"center","max-height":"420px",overflow:"scroll"}},[e.imgMin?t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}]},[t("a",{attrs:{href:e.img,target:"_blank"}},[t("img",{attrs:{src:e.imgMin,width:"350"},on:{load:function(t){e.loaded=!0}}})])]):e._e()]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"data"===e.mode,expression:"mode === 'data'"}],staticStyle:{"text-align":"center","max-height":"420px",overflow:"scroll"}},[t("spotgins-graph",{attrs:{url:e.dataJsonUrl,selected:"data"===e.mode}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"download"===e.mode,expression:"mode === 'download'"}],staticStyle:{margin:"20px"}},[t("input",{attrs:{type:"button",value:"Télécharger JSON"},on:{click:function(t){return e.download("json")}}}),t("br"),t("br"),e._v(" "),t("input",{attrs:{type:"button",value:"Télécharger ASCII"},on:{click:function(t){return e.download("ascii")}}})])])])}),[],!1,null,null,null);t.default=s.exports}}]);
//# sourceMappingURL=3.spot-gins-vjs.js.map