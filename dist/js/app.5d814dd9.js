(function(t){function e(e){for(var r,a,s=e[0],c=e[1],d=e[2],u=0,h=[];u<s.length;u++)a=s[u],o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/interactive-syntax-tree/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},2375:function(t){t.exports={type:"root",children:[{type:"order",name:"ask_venue_root",children:[{type:"order",name:"search_node",children:[{type:"content",from_file:!1,dropout:.2,content:["给我","想找","想要","想要找","查","查询","检索","显示","展示","查找"]},{type:"content",from_file:!1,dropout:.3,content:["一些","一组","一批","几个"]}]},{type:"pickone",name:"ex_keyword_node",children:[{type:"order",children:[{type:"content",from_file:!1,content:["有关","关于"]},{type:"content",from_file:!0,filename:"aminer_keywords_zh.txt",entity:"KEY",name:"keyword_node"},{type:"content",from_file:!1,content:["方面","方向","领域"]},{type:"content",from_file:!1,content:["的"]}]},{type:"order",children:[{type:"content",from_file:!1,content:["和","与"]},{type:"content",from_file:!0,filename:"aminer_keywords_zh.txt",entity:"KEY",name:"keyword_node"},{type:"content",from_file:!1,content:["相关","有关"]},{type:"content",from_file:!1,content:["的"]}]}]},{type:"content",from_file:!1,content:["期刊","会议"]}]}]}},"25a8":function(t,e,n){"use strict";var r=n("befc"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,o,i,!1,null,null,null);c.options.__file="App.vue";var d=c.exports,l=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("InteractiveSyntaxTree")],1)},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg")},f=[],g=n("5698"),y=n("1157");const m=n("2375");var v={name:"InteractiveSyntaxTree",data:function(){return{data:null,root:null,index:0,dragListener:null,dragStarted:null,dragNodes:null,draggingNode:null,selectedNode:null,panBoundary:50,panTimer:null,height:400,width:800,baseSvg:null,svgGroup:null,zoomListener:null,linkGenerator:null,duration:750}},mounted:function(){const t=this;this.zoomListener=g["k"]().scaleExtent([.5,3]).on("zoom",this.zoom),this.baseSvg=g["h"]("svg").attr("width",this.width).attr("height",this.height).attr("class","overlay").call(this.zoomListener),this.linkGenerator=g["d"]().x(function(t){return t.y}).y(function(t){return t.x}),this.dragListener=g["a"]().on("start",function(e){e!==t.root&&(t.dragStarted=!0,t.dragNodes=e.descendants(),g["b"].sourceEvent.stopPropagation())}).on("drag",function(e){if(e===t.root)return;t.dragStarted&&t.dragStart(e,this);const n=g["g"](y("svg").get(0));let r=null,o=null;n[0]<t.panBoundary?(r="left",o=t.panBoundary-n[0]):n[0]>y("svg").width()-t.panBoundary?(r="right",o=n[0]-y("svg").width()+t.panBoundary):n[1]<t.panBoundary?(r="up",o=t.panBoundary-n[1]):n[1]>y("svg").height()-t.panBoundary?(r="down",o=n[1]-y("svg").height()+t.panBoundary):clearTimeout(t.panTimer),null!==r&&(o=g["f"]([1e3,o]),t.pan(r,o/10)),e.x0+=g["b"].dy,e.y0+=g["b"].dx;const i=g["h"](this);i.attr("transform",`translate(${e.y0}, ${e.x0})`),t.updateTempConnector()}).on("end",function(e){if(e!==t.root){if(t.selectedNode){const e=t.draggingNode.parent.children.indexOf(t.draggingNode);e>-1&&(t.draggingNode.parent.children.splice(e,1),0===t.draggingNode.parent.children.length&&delete t.draggingNode.parent["children"]),"undefined"!==typeof t.selectedNode.children?t.selectedNode.children.push(t.draggingNode):"undefined"!==typeof t.selectedNode._children?t.selectedNode._children.push(t.draggingNode):(t.selectedNode.children=[],t.selectedNode.children.push(t.draggingNode)),t.draggingNode.parent=t.selectedNode,t.updateHierarchy(),t.expand(t.selectedNode),t.sortTree()}clearTimeout(t.panTimer),t.dragEnd(this)}}),this.svgGroup=this.baseSvg.append("g"),this.data=m,this.hierarchy(),this.update(this.root),this.centerNode(this.root)},methods:{updateHierarchy:function(){const t=function(e,n){e.depth=n;const r=e.children||e._children;return r&&r.length?e.height=g["e"](r.map(function(e){return t(e,n+1)}))+1:e.height=0,e.height};t(this.root,0)},sortTree:function(){this.root.sort(function(t,e){const n=t.x0-t.parent.x0,r=Math.abs(t.y0-t.parent.y0),o=e.x0-e.parent.x0,i=Math.abs(e.y0-e.parent.y0);return n/r-o/i})},pan:function(t,e){clearTimeout(this.panTimer);const n=this;let r=0,o=0;switch(t){case"left":r=+e;break;case"right":r=-e;break;case"up":o=+e;break;case"down":o=-e;break;default:break}this.zoomListener.translateBy(this.baseSvg.transition().duration(50),r,o),this.panTimer=setTimeout(function(){n.pan(t,e)},50)},updateTempConnector:function(){let t=[];null!==this.draggingNode&&null!==this.selectedNode&&(t=[{source:{x:this.selectedNode.x0,y:this.selectedNode.y0},target:{x:this.draggingNode.x0,y:this.draggingNode.y0}}]);const e=this.svgGroup.selectAll(".tempLink").data(t);e.enter().append("path").attr("class","tempLink").attr("d",this.linkGenerator).attr("pointer-events","none"),e.attr("d",this.linkGenerator),e.exit().remove()},hierarchy:function(){this.root=g["c"](this.data),this.root.x0=this.height/2,this.root.y0=0},expand:function(t){t._children&&(t.children=t._children,t._children=null),t.children&&t.children.forEach(this.expand)},dragStart:function(t,e){const n=this;if(this.draggingNode=t,g["h"](e).select(".ghostCircle").attr("pointer-events","none"),g["i"](".ghostCircle").attr("class","ghostCircle show"),e.classList.add("activeDrag"),this.svgGroup.selectAll("g.node").sort(function(t){return t.id!==n.draggingNode.id?1:-1}),this.dragNodes.length>1){const e=t.links();this.svgGroup.selectAll("path.link").data(e,function(t){return t.target.id}).remove(),this.svgGroup.selectAll("g.node").data(this.dragNodes.slice(1),function(t){return t.id}).remove()}this.svgGroup.selectAll("path.link").filter(function(t){return t.target.id===n.draggingNode.id}).remove(),this.dragStarted=null},dragEnd:function(t){this.selectedNode=null,g["i"](".ghostCircle").attr("class","ghostCircle"),t.classList.remove("activeDrag"),g["h"](t).select(".ghostCircle").attr("pointer-events",""),this.updateTempConnector(),null!==this.draggingNode&&(this.update(this.root),this.centerNode(this.draggingNode),this.draggingNode=null)},nodeClick:function(t){g["b"].defaultPrevented||(t.children||t._children)&&(t.children?(this.$set(t,"_children",t.children),t.children=null):(this.$set(t,"children",t._children),t._children=null),this.update(t),this.centerNode(t))},ghostOver:function(t){this.selectedNode=t,this.updateTempConnector()},ghostOut:function(){this.selectedNode=null,this.updateTempConnector()},updateData:function(){this.data=this.generateJSON(this.root),this.hierarchy()},update:function(t){const e=this,n=e.root.descendants(),r=e.root.links(),o=[];n.forEach(function(t){o.push((t.data.name||t.data.type).length)});const i=g["e"](o),a=g["j"]().nodeSize([25,8*i]);this.root=a(this.root);const s=this.svgGroup.selectAll("g.node").data(n,function(t){return t.id||(t.id=++e.index)}),c=s.enter().append("g").call(this.dragListener).attr("class",function(t){return`node ${t.data.type}`}).attr("transform",function(){return`translate(${t.y0}, ${t.x0})`}).on("click",this.nodeClick);c.append("circle").attr("r",0),c.append("text").style("fill-opacity",0).text(function(t){return t.data.name||t.data.type}),c.filter(function(t){return"content"!==t.data.type}).append("circle").attr("class","ghostCircle").attr("r",40).attr("pointer-events","mouseover").on("mouseover",this.ghostOver).on("mouseout",this.ghostOut);let d=c.merge(s).classed("collapsed",function(t){return t._children});d.select("text").attr("x",function(t){return t.children||t._children?-8:8}).attr("dy",function(t){return t.children||t._children?-3.5:8.5}).attr("class",function(t){return t.children||t._children?"internal":"leaf"}),d=d.transition().duration(this.duration).attr("transform",function(t){return`translate(${t.y}, ${t.x})`}),d.select("circle").attr("r",5),d.select("text").style("fill-opacity",1);const l=s.exit().transition().duration(this.duration).attr("transform",function(){return`translate(${t.y}, ${t.x})`}).remove();l.select("circle").attr("r",0),l.select("text").style("fill-opacity",0);const u=this.svgGroup.selectAll("path.link").data(r,function(t){return t.target.id}),h=u.enter().insert("path","g").attr("class","link").attr("d",function(){const n={x:t.x0,y:t.y0};return e.linkGenerator({source:n,target:n})});h.merge(u).transition().duration(this.duration).attr("d",this.linkGenerator),u.exit().transition().duration(this.duration).attr("d",function(){const n={x:t.x,y:t.y};return e.linkGenerator({source:n,target:n})}).remove(),n.forEach(function(t){t.x0=t.x,t.y0=t.y})},centerNode:function(t){this.zoomListener.translateTo(this.baseSvg.transition().duration(this.duration),t.y0,t.x0)},zoom:function(){this.svgGroup.attr("transform",g["b"].transform)},generateJSON:function(t){const e=this,n={};Object.assign(n,t.data);const r=t.children||t._children;return r&&(n.children=[],r.forEach(function(t){n.children.push(e.generateJSON(t))})),n}}},x=v,_=(n("25a8"),Object(a["a"])(x,p,f,!1,null,null,null));_.options.__file="InteractiveSyntaxTree.vue";var N=_.exports,b={name:"Home",components:{InteractiveSyntaxTree:N}},k=b,w=Object(a["a"])(k,u,h,!1,null,null,null);w.options.__file="Home.vue";var S=w.exports;r["a"].use(l["a"]);var T=new l["a"]({routes:[{path:"/",name:"home",component:S}]});n("4989"),r["a"].config.productionTip=!1,new r["a"]({router:T,render:t=>t(d)}).$mount("#app")},befc:function(t,e,n){},c21b:function(t,e,n){}});
//# sourceMappingURL=app.5d814dd9.js.map