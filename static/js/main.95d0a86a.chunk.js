(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},20:function(e){e.exports={player:[{id:"0",year:"2017",name:"\u9280\u6b21",pos1:"3",pos2:"4",pos3:"0",pers:"3",tokunou:[1,2,4,6],policy:"\u81ea\u7531\u8a18\u8ff0"},{id:"1",year:"2013",name:"\u5927\u548c",pos1:"3",pos2:"6",pos3:"4",pers:"4",tokunou:[1,2,4,6],policy:"\u80b2\u6210\u65b9\u91dd"}]}},30:function(e,t,a){e.exports=a(48)},35:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(35),a(1)),o=a(2),s=a(4),u=a(3),p=a(5),h=(a(11),a(16)),d=a(12),m=a(6),f=a(20),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{id:"sort"},r.a.createElement("select",{onChange:this.props.changeSortState},r.a.createElement("option",{value:"0"},"\u5e74\u5ea6\u9806(\u6607\u9806)"),r.a.createElement("option",{value:"1"},"\u5e74\u5ea6\u9806(\u964d\u9806)"),r.a.createElement("option",{value:"2"},"\u30dd\u30b8\u30b7\u30e7\u30f3\u9806(\u6607\u9806)"),r.a.createElement("option",{value:"3"},"\u30dd\u30b8\u30b7\u30e7\u30f3\u9806(\u964d\u9806)")))}}]),t}(r.a.Component),v=a(14),E=a.n(v),O={overlay:{zIndex:"100",backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{top:"25%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={modalIsOpen:!1},e.openModal=e.openModal.bind(Object(m.a)(e)),e.afterOpenModal=e.afterOpenModal.bind(Object(m.a)(e)),e.closeModal=e.closeModal.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1}),console.log(this.props.filterValue)}},{key:"renderPos",value:function(e){return r.a.createElement("label",{className:"check",key:e},r.a.createElement("input",{type:"checkbox",name:"pos",key:e,value:e,onChange:this.props.changeState}),r.a.createElement("span",{className:this.props.filterValue.pos[e]?"posSpan":""},["\u6295\u624b","\u6355\u624b","\u4e00\u5841\u624b","\u4e8c\u5841\u624b","\u4e09\u5841\u624b","\u904a\u6483\u624b","\u5916\u91ce\u624b"][e]))}},{key:"renderPers",value:function(e){return r.a.createElement("label",{className:"check",key:e},r.a.createElement("input",{type:"checkbox",name:"pers",key:e,value:e,onChange:this.props.changeState}),r.a.createElement("span",{className:this.props.filterValue.pers[e]?"perSpan":""}," ",["\u5929\u624d\u808c","\u3054\u304f\u3075\u3064\u3046","\u304a\u8abf\u5b50\u8005","\u3084\u3093\u3061\u3083","\u30af\u30fc\u30eb","\u3057\u305f\u305f\u304b","\u5185\u6c17","\u71b1\u8840\u6f22"][e]))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{id:"filter",onClick:this.openModal},"\u30d5\u30a3\u30eb\u30bf\u30fc"),r.a.createElement(E.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,onAfterOpen:this.afterOpenModal,style:O},r.a.createElement("div",{id:"filterwrap"},r.a.createElement("div",{id:"yearDiv"},r.a.createElement("label",null,r.a.createElement("input",{type:"tel",name:"year1",value:this.props.filterValue.year1,onChange:this.props.changeYear}),r.a.createElement("span",null,"\u5e74 \uff5e")),r.a.createElement("label",null,r.a.createElement("input",{type:"tel",name:"year2",value:this.props.filterValue.year2,onChange:this.props.changeYear}),r.a.createElement("span",null,"\u5e74"))),r.a.createElement("div",{id:"posDiv"},"\u30dd\u30b8\u30b7\u30e7\u30f3\uff1a",r.a.createElement("br",null),[0,1,2,3,4,5,6].map(function(t){return e.renderPos(t)})),r.a.createElement("div",{id:"persDiv"},"\u6027\u683c\uff1a",r.a.createElement("br",null),[0,1,2,3,4,5,6,7].map(function(t){return e.renderPers(t)}))),r.a.createElement("div",{id:"buttonwrap"},r.a.createElement("button",{id:"closeButton",onClick:this.closeModal},"CLOSE"),r.a.createElement("button",{id:"resetButton",onClick:this.props.resetFilterState},"Reset"))))}}]),t}(r.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"playerCard"},r.a.createElement("p",{className:"cardYear"},"2017\u5e74"),r.a.createElement("p",{className:"cardName"},"\u9280\u6b21"),r.a.createElement("p",{className:"cardPos"},"\u4e00\u5841\u624b\u30fb\u4e8c\u5841\u624b"),r.a.createElement("p",{className:"cardPers"},"\u3084\u3093\u3061\u3083 \u2192 \u5f3e\u9053\u30fb\u30d1\u30ef\u30fc "),r.a.createElement("p",{className:"cardTokunou"},"\u7279\u6b8a\u80fd\u529b"),r.a.createElement("p",{className:"cardPolicy"},"\u80b2\u6210\u65b9\u91dd"))}}]),t}(r.a.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={sort:0,filter:{year1:"",year2:"",pos:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1},pers:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1}}},e.resetFilterState=e.resetFilterState.bind(Object(m.a)(e)),e.changeYear=e.changeYear.bind(Object(m.a)(e)),e.changeSortState=e.changeSortState.bind(Object(m.a)(e)),e.changeState=e.changeState.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"readJson",value:function(){console.log(f),this.setState={player:f}}},{key:"writeJson",value:function(){}},{key:"changeYear",value:function(e){var t=JSON.parse(JSON.stringify(this.state.filter));t[e.target.name]=e.target.value,this.setState({filter:t})}},{key:"changeState",value:function(e){var t=JSON.parse(JSON.stringify(this.state.filter)),a=e.target;t[a.name][a.value]=!t[a.name][a.value],this.setState({filter:t})}},{key:"resetFilterState",value:function(){this.setState({filter:{year1:"",year2:"",pos:[],pers:[]}})}},{key:"changeSortState",value:function(e){this.setState({sort:e.target.value})}},{key:"renderPlayercard",value:function(){return r.a.createElement(y,null)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(b,{id:"sort",key:1,sortValue:this.state.sort,changeSortState:this.changeSortState}),r.a.createElement(k,{id:"filter",key:2,filterValue:this.state.filter,resetFilterState:this.resetFilterState,changeYear:this.changeYear,changeState:this.changeState})),r.a.createElement("div",{id:"wrap"},r.a.createElement("div",{id:"playerwrap"},this.renderPlayercard)))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("button",{className:"addButton"},"Add"))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{id:"addbar"},r.a.createElement(g,null))}}]),t}(r.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"name:"),r.a.createElement("input",{type:"text",required:!0})))}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"personality"},"\u6027\u683c:"),r.a.createElement("select",{name:"personality"},r.a.createElement("option",{value:"0"},"\u5929\u624d\u808c "),r.a.createElement("option",{value:"1"},"\u3054\u304f\u3075\u3064\u3046"),r.a.createElement("option",{value:"2"},"\u304a\u8abf\u5b50\u8005"),r.a.createElement("option",{value:"3"},"\u3084\u3093\u3061\u3083"),r.a.createElement("option",{value:"4"},"\u30af\u30fc\u30eb"),r.a.createElement("option",{value:"5"},"\u3057\u305f\u305f\u304b"),r.a.createElement("option",{value:"6"},"\u5185\u6c17"),r.a.createElement("option",{value:"7"},"\u71b1\u8840\u6f22")))}}]),t}(r.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"\u30dd\u30b8\u30b7\u30e7\u30f3"),r.a.createElement("span",{className:"posSpan"},r.a.createElement(I,null),r.a.createElement(A,{name:"\u30b5\u30d61"}),r.a.createElement(A,{name:"\u30b5\u30d62"})))}}]),t}(r.a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,"\u30e1\u30a4\u30f3:",r.a.createElement("select",null,r.a.createElement("option",{value:"1"},"\u6295\u624b"),r.a.createElement("option",{value:"2"},"\u6355\u624b"),r.a.createElement("option",{value:"3"},"\u4e00\u5841\u624b"),r.a.createElement("option",{value:"4"},"\u4e8c\u5841\u624b"),r.a.createElement("option",{value:"5"},"\u4e09\u5841\u624b"),r.a.createElement("option",{value:"6"},"\u904a\u6483\u624b"),r.a.createElement("option",{value:"7"},"\u5916\u91ce\u624b")))}}]),t}(r.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,this.props.name,":",r.a.createElement("select",null,r.a.createElement("option",{value:"0"},"\u306a\u3057"),r.a.createElement("option",{value:"1"},"\u6295\u624b"),r.a.createElement("option",{value:"2"},"\u6355\u624b"),r.a.createElement("option",{value:"3"},"\u4e00\u5841\u624b"),r.a.createElement("option",{value:"4"},"\u4e8c\u5841\u624b"),r.a.createElement("option",{value:"5"},"\u4e09\u5841\u624b"),r.a.createElement("option",{value:"6"},"\u904a\u6483\u624b"),r.a.createElement("option",{value:"7"},"\u5916\u91ce\u624b")))}}]),t}(r.a.Component),M=w,P={overlay:{zIndex:"100",backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={modalIsOpen:!1},a.openModal=a.openModal.bind(Object(m.a)(a)),a.afterOpenModal=a.afterOpenModal.bind(Object(m.a)(a)),a.closeModal=a.closeModal.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"renderPitcher",value:function(e){return r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:e,key:"toku"+e,onChange:this.props.changePitcherState}),r.a.createElement("span",{className:this.props.pitcherIsChecked[e]?"addTokuSpan":""},this.props.pitcherTokunou[e]))}},{key:"renderFielder",value:function(e){return r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:e,key:"toku"+e,onChange:this.props.changeFielderState}),r.a.createElement("span",{className:this.props.fielderIsChecked[e]?"addTokuSpan":""},this.props.fielderTokunou[e]))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.openModal},"\u7279\u6b8a\u80fd\u529b"),r.a.createElement(E.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,onAfterOpen:this.afterOpenModal,style:P},r.a.createElement("div",{id:"tokunouwrap"},!0===this.props.isPitcher?this.props.pitcherAry.map(function(t){return e.renderPitcher(t)}):this.props.fielderAry.map(function(t){return e.renderFielder(t)})),r.a.createElement("button",{onClick:this.closeModal},"OK"),r.a.createElement("button",{onClick:this.props.resetState},"Reset")))}}]),t}(r.a.Component);var F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderdesc",value:function(e){return r.a.createElement("li",{className:"tokunouList"}," ",e+",")}},{key:"render",value:function(){var e=this,t=function(e,t,a,n,r){for(var c=e?t:a,l=e?n:r,i=[],o=0;o<=c.length;o++)c[o]&&i.push(l[o]);return i}(this.props.isPitcher,this.props.pitcherIsChecked,this.props.fielderIsChecked,this.props.pitcherTokunou,this.props.fielderTokunou);return r.a.createElement("ul",{className:"tokunouUl"},t.map(function(t){return e.renderdesc(t)}))}}]),t}(r.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("textarea",{placeholder:"\u80b2\u621d\u65b9\u91dd"}))}}]),t}(r.a.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"yearForm"},r.a.createElement("label",null,r.a.createElement("input",{type:"number",name:"year"}),r.a.createElement("span",null,"\u5e74\u5ea6\u9078\u624b\u8ffd\u52a0")))}}]),t}(r.a.Component),J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).pitcherNum=32,e.fielderNum=48,e.pitcherAry=Array.from(Array(e.pitcherNum).keys()),e.fielderAry=Array.from(Array(e.fielderNum).keys()),e.state={isPitcher:!0,pitcherIsChecked:new Array(e.pitcherNum).fill(!1),fielderIsChecked:new Array(e.fielderNum).fill(!1)},e.playerData=[],e.changeFielderState=e.changeFielderState.bind(Object(m.a)(e)),e.changePitcherState=e.changePitcherState.bind(Object(m.a)(e)),e.resetState=e.resetState.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"changePitcherState",value:function(e){var t=this.state.pitcherIsChecked.slice();t[e.target.value]=!t[e.target.value],this.setState({pitcherIsChecked:t})}},{key:"changeFielderState",value:function(e){console.log(e);var t=this.state.fielderIsChecked.slice();t[e.target.value]=!t[e.target.value],this.setState({fielderIsChecked:t})}},{key:"resetState",value:function(){this.setState({pitcherIsChecked:new Array(this.pitcherNum).fill(!1),fielderIsChecked:new Array(this.fielderNum).fill(!1)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"addcard"},r.a.createElement(C,{changeName:this.props.changeName}),r.a.createElement(M,null),r.a.createElement(N,null),r.a.createElement(T,{isPitcher:this.state.isPitcher,pitcherTokunou:this.props.pitcherTokunou,pitcherAry:this.pitcherAry,pitcherNum:this.pitcherNum,pitcherIsChecked:this.state.pitcherIsChecked,changePitcherState:this.changePitcherState,fielderTokunou:this.props.fielderTokunou,fielderAry:this.fielderAry,fielderNum:this.fielderNum,fielderIsChecked:this.state.fielderIsChecked,changeFielderState:this.changeFielderState,resetState:this.resetState}),r.a.createElement(F,{isPitcher:this.state.isPitcher,pitcherTokunou:this.props.pitcherTokunou,fielderTokunou:this.props.fielderTokunou,pitcherIsChecked:this.state.pitcherIsChecked,fielderIsChecked:this.state.fielderIsChecked}),r.a.createElement(x,null))}}]),t}(r.a.Component),Y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).addAry=[0],e.fielderTokunou=["\u30c1\u30e3\u30f3\u30b9","\u5bfe\u5de6\u6295\u624b","\u30ad\u30e3\u30c3\u30c1\u30e3\u30fc","\u76d7\u5841","\u8d70\u5841","\u9001\u7403","\u79cb\u7537","\u590f\u7537","\u6625\u7537","\u30b1\u30ac\u3057\u306b\u304f\u3055","\u30a2\u30d9\u30ec\u30fc\u30b8\u30d2\u30c3\u30bf\u30fc","\u30d1\u30ef\u30fc\u30d2\u30c3\u30bf\u30fc","\u30d7\u30eb\u30d2\u30c3\u30bf\u30fc","\u5e83\u89d2\u6253\u6cd5","\u610f\u5916\u6027","\u3044\u3076\u3057\u9280","\u304a\u796d\u308a\u7537","\u56fa\u3081\u6253\u3061","\u9006\u5883\u25ef","\u30d7\u30ec\u30c3\u30b7\u30e3\u30fc\u30e9\u30f3","\u9ad8\u901f\u30c1\u30e3\u30fc\u30b8","\u30b5\u30e8\u30ca\u30e9\u7537","\u5b88\u5099\u8077\u4eba","\u521d\u7403\u25ef","\u5bfe\u30a8\u30fc\u30b9\u25ef","\u4ee3\u6253\u25ef","\u30c1\u30e3\u30f3\u30b9\u30e1\u30fc\u30ab\u30fc","\u5185\u91ce\u5b89\u6253\u25ef","\u6d41\u3057\u6253\u3061","\u7c98\u308a\u6253\u3061","\u30cf\u30a4\u30dc\u30fc\u30eb\u30d2\u30c3\u30bf\u30fc","\u30ed\u30fc\u30dc\u30fc\u30eb\u30d2\u30c3\u30bf\u30fc","\u30d0\u30f3\u30c8\u25ef","\u30d0\u30f3\u30c8\u8077\u4eba","\u30db\u30fc\u30e0\u6b7b\u5b88","\u30d8\u30c3\u30c9\u30b9\u30e9\u30a4\u30c7\u30a3\u30f3\u30b0","\u6e80\u5841\u7537","\u30e0\u30fc\u30c9\u25ef","\u30ec\u30fc\u30b6\u30fc\u30d3\u30fc\u30e0","\u25b3\u25b3\u30ad\u30e9\u30fc","\u30c0\u30e1\u62bc\u3057","\u30a4\u30f3\u30b3\u30fc\u30b9\u30d2\u30c3\u30bf\u30fc","\u30a2\u30a6\u30c8\u30b3\u30fc\u30b9\u30d2\u30c3\u30bf\u30fc","\u304b\u304f\u4e71","\u60aa\u7403\u6253\u3061","\u56fd\u969b\u5927\u4f1a\u25ef","\u5bfe\u5909\u5316\u7403\u25ef","\u30db\u30fc\u30e0\u7a81\u5165"],e.pitcherTokunou=["\u5bfe\u30d4\u30f3\u30c1","\u5bfe\u5de6\u6253\u8005","\u6253\u305f\u308c\u5f37\u3055","\u30ce\u30d3","\u30af\u30a4\u30c3\u30af","\u56de\u5fa9","\u5a01\u5727\u611f","\u91cd\u3044\u7403","\u52dd\u3061\u904b","\u7de9\u6025\u25ef","\u30ad\u30ec\u25ef","\u7dca\u6025\u767b\u677f\u25ef","\u30af\u30ed\u30b9\u30d5\u30a1\u30a4\u30e4\u30fc","\u727d\u5236\u25ef","\u6839\u6027\u25ef","\u30b8\u30e3\u30a4\u30ed\u30dc\u30fc\u30eb","\u5c3b\u4e0a\u304c\u308a","\u5bfe\u5f37\u6253\u8005\u25ef","\u6253\u7403\u53cd\u5fdc\u25ef","\u596a\u4e09\u632f","\u7403\u6301\u3061\u25ef","\u95d8\u5fd7","\u5185\u89d2\u653b\u3081","\u9003\u3052\u7403","\u4f4e\u3081\u25ef","\u30ea\u30ea\u30fc\u30b9\u25ef","\u25b3\u25b3\u30ad\u30e9\u30fc","\u7403\u901f\u5b89\u5b9a","\u30dd\u30fc\u30ab\u30fc\u30d5\u30a7\u30a4\u30b9","\u529b\u914d\u5206","\u56fd\u969b\u5927\u4f1a\u25ef","\u56de\u307e\u305f\u304e\u25ef"],e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderAdcard",value:function(e){return r.a.createElement(J,{key:"add".concat(e),fielderTokunou:this.fielderTokunou,pitcherTokunou:this.pitcherTokunou})}},{key:"render",value:function(){var e=this;return r.a.createElement("span",null,r.a.createElement(R,null),r.a.createElement("div",{id:"wrap"},[0,1,2,3,4,5,6,7,8,9,10,11].map(function(t){return e.renderAdcard(t)})),r.a.createElement(S,null))}}]),t}(r.a.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{name:"changeButton"},"\xe5\xa4\u2030\xe6\u203a\xb4"))}}]),t}(r.a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{name:"tokunou"},"\u7279\u6b8a\u80fd\u529b"))}}]),t}(r.a.Component);E.a.setAppElement("#root");var B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(R,null),r.a.createElement(C,null),r.a.createElement(M,null),r.a.createElement(N,null),r.a.createElement(W,null),r.a.createElement(x,null),r.a.createElement(V,null))}}]),t}(r.a.Component),D=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(d.a,{exact:!0,path:"/eikan9",component:j}),r.a.createElement(d.a,{path:"/eikan9/addsum",component:Y}),r.a.createElement(d.a,{path:"/eikan9/change",component:B}),r.a.createElement("footer",{id:"navbar"},r.a.createElement("button",{className:"navcont"},r.a.createElement(h.b,{to:"/eikan9"},"Main")),r.a.createElement("button",{className:"navcont"},r.a.createElement(h.b,{to:"/eikan9/addsum"},"Add")))))},L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null))}}]),t}(r.a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/eikan9",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/eikan9","/service-worker.js");U?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):q(t,e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.95d0a86a.chunk.js.map