(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},16:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(3),l=n(8),i=n(4),p=n(5),u=n(9),d=n(6),f=n(10),b=(n(16),n(17),n(18),function(e){return a.a.createElement("div",{className:"Person"},a.a.createElement("h1",null,"Hello ",e.name,"."),a.a.createElement("p",null,"Age : ",e.age),a.a.createElement("input",{type:"button",onClick:e.delete,value:"Delete"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("input",{type:"text",onChange:e.change}))}),h=n(7);n(20);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={persons:[{id:"dfsdf",Name:"Sreeraj",Age:22},{id:"sdfsdf",Name:"Sree",Age:22}],show:!1},n.change=function(){console.log("clicked"),n.setState({show:!n.state.show})},n.DeleteHandler=function(e){var t=Object(l.a)(n.state.persons);t.splice(e,1),n.setState({persons:t})},n.changeText=function(e,t){console.log("hey there");var r=n.state.persons.findIndex((function(e){return e.id===t})),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.persons[r]);a.Name=e.target.value,n.state.persons[r]=a,n.setState({persons:n.state.persons})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.show&&(t=a.a.createElement("div",{className:"person"},this.state.persons.map((function(t,n){return a.a.createElement(b,{name:t.Name,age:t.Age,delete:function(){return e.DeleteHandler(n)},key:t.id,change:function(n){e.changeText(n,t.id)}})})))),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Welcome to React"),a.a.createElement("button",{onClick:this.change,style:{color:"black",width:"150px",height:"30px",border:"2px solid blue",borderRadius:"20px",":hover":{border:"2px solid green",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}},"Show more!!"),a.a.createElement(h.SlideDown,{className:"person"},t))}}]),t}(r.Component);c.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.478d0c09.chunk.js.map