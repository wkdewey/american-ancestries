(this["webpackJsonpamerican-ancestries"]=this["webpackJsonpamerican-ancestries"]||[]).push([[0],{33:function(e,t,a){e.exports=a(46)},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),u=(a(38),a(39),a(10)),o=a(11),s=a(13),i=a(12),p=a(16),m=a(6),h=(a(40),a(47)),E=a(48),d=a(49),f=a(50),y=a(51),b=a(52),v=function(){return r.a.createElement(h.a,{color:"light"},r.a.createElement(E.a,null,"American Ancestries"),r.a.createElement(d.a,null),r.a.createElement(f.a,{className:"mr-auto",tabs:!0},r.a.createElement(y.a,null,r.a.createElement(b.a,{href:"/american-ancestries"},"Home")),r.a.createElement(y.a,null,r.a.createElement(b.a,{href:"/american-ancestries/places"},"Places")),r.a.createElement(y.a,null,r.a.createElement(b.a,{href:"/american-ancestries/ancestry_groups"},"Ancestry Groups")),r.a.createElement(y.a,null,r.a.createElement(b.a,{href:"/american-ancestries/places/new"},"New Place"))))},G=a(18),O=a(53),g=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Loading, please wait."),r.a.createElement(O.a,null))},j=a(54),A=a(55),_=a(56),k=a(57),S=a(58),C=function(e){var t=Object(m.f)().placeId;if(e.places.length>0){var a,n=e.places.find((function(e){return e.id===t}));if(n){var l=n.attributes.place_ancestry_groups;l.sort((function(e,t){return e.attributes.percent<t.attributes.percent?1:-1})),a=r.a.createElement("div",{className:"place"},r.a.createElement(j.a,null,r.a.createElement(A.a,null,r.a.createElement(_.a,null,r.a.createElement("h3",null,n.attributes.name)),r.a.createElement(k.a,null,"Population: ",n.attributes.population.toLocaleString()))),r.a.createElement(S.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ancestry"),r.a.createElement("th",null,"Percent"),r.a.createElement("th",null,"Relative to overall US population"))),l.map((function(e){return r.a.createElement("tr",{className:"ancestry group",key:e.id},r.a.createElement("td",null,e.attributes.ancestry_group.name),r.a.createElement("td",null,e.attributes.percent,"%"),r.a.createElement("td",null,e.attributes.relative_to_national,"x"))}))))}else a="Place not found";return r.a.createElement("div",null,a)}return r.a.createElement(g,null)},P=a(59),N=a(60),w=function(e){var t=Object(m.f)().placeId;if(e.places.length>0){var a,n=e.places.find((function(e){return e.id===t}));if(n){var l=n.attributes.place_ancestry_groups;l.sort((function(e,t){return e.attributes.relative_to_national<t.attributes.relative_to_national?1:-1})),a=r.a.createElement("div",{className:"place compared"},r.a.createElement("h3",null,"Sorted by relative representation"),r.a.createElement("p",null,"(times the national average)"),r.a.createElement(P.a,null,l.map((function(e){return r.a.createElement(N.a,{className:"ancestry group compared",key:e.id},r.a.createElement("p",null,e.attributes.ancestry_group.name,":"," ",e.attributes.relative_to_national))}))))}else a="Place not found";return r.a.createElement("div",null,a)}return null},D=a(19),L=a(9),I=function(){return function(e){fetch("http://localhost:3000/api/v1/ancestry_groups").then((function(e){return e.json()})).then((function(t){e({type:"ADD_ANCESTRY_GROUPS",ancestryGroups:t.data}),e({type:"ADD_PLACE_ANCESTRY_GROUPS",ancestryGroups:t.data})}))}},R=a(61),U=a(62),T=a(63),x=a(64),W=a(65),Y=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.target.value})},n.handlePopulationChange=function(e){n.setState({population:parseInt(e.target.value)})},n.handleGroupChange=function(e,t,a){var r=Object(L.a)({},e.find((function(e){return e.ancestryGroupId===t})));r.population=parseInt(a.target.value);var l=e.findIndex((function(e){return e.ancestryGroupId===t}));e[l]=r,n.setState({placeAncestryGroups:e})},n.handleSubmit=function(e){e.preventDefault();var t={name:n.state.name,population:n.state.population,place_ancestry_groups_attributes:n.state.placeAncestryGroups.map((function(e){return{ancestry_group_id:e.ancestryGroupId,population:e.population}}))};n.props.addPlace(t),n.props.fetchAncestryGroups();var a=n.state.placeAncestryGroups.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{population:0})}));n.setState({name:"",population:0,placeAncestryGroups:a})},n.state={name:"",population:0,placeAncestryGroups:null},n}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this;if(this.state.placeAncestryGroups)e=Object(D.a)(this.state.placeAncestryGroups);else{if(!this.props.placeAncestryGroups)return e=[],r.a.createElement(g,null);e=Object(D.a)(this.props.placeAncestryGroups)}return r.a.createElement("div",null,r.a.createElement(R.a,{onSubmit:function(e){t.handleSubmit(e)}},r.a.createElement(U.a,null,r.a.createElement(T.a,null,"Place name",r.a.createElement(x.a,{id:"name",name:"name",type:"text",value:this.state.name,onChange:this.handleNameChange}))),r.a.createElement(U.a,null,r.a.createElement(T.a,null,"Total population",r.a.createElement(x.a,{id:"population",name:"population",type:"number",value:this.state.population,onChange:this.handlePopulationChange}))),e.map((function(a){return r.a.createElement(U.a,{key:a.ancestryGroupId},r.a.createElement(T.a,null,a.ancestryGroupName+" population",r.a.createElement(x.a,{id:"population "+a.ancestryGroupName,name:"population "+a.ancestryGroupName,type:"number",value:a.population,onChange:function(n){return t.handleGroupChange(e,a.ancestryGroupId,n)}})))})),r.a.createElement(W.a,{type:"submit"}," Submit")))}}]),a}(n.Component),J=Object(G.b)(null,(function(e){return{addPlace:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",population:0,place_ancestry_groups_attributes:{}};return function(t){fetch("http://localhost:3000/api/v1/places",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t({type:"ADD_PLACE",place:e.data})}))}}(t))},fetchAncestryGroups:function(){return e(I())}}}))(Y),M=a(66),B=a(67),H=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={liked:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.liked?"Liked!":"Not liked";return r.a.createElement("div",null,r.a.createElement("p",null,e))}}]),a}(n.Component),V=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleLike=function(e,t){var a=Object(D.a)(n.state.placeLikes);a[e]=!a[e]||!a[e],n.setState({placeLikes:a})},n.state={placeLikes:[]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.places.length>0?r.a.createElement(M.a,null,this.props.places.map((function(t){return r.a.createElement("div",{className:"place",key:t.id},r.a.createElement(j.a,null,r.a.createElement(A.a,null,r.a.createElement(_.a,null,r.a.createElement("h3",null,r.a.createElement(B.a,null,r.a.createElement(p.b,{key:t.id,to:"/places/".concat(t.id)},t.attributes.name)))),r.a.createElement(k.a,null,"Population: ",t.attributes.population.toLocaleString()),r.a.createElement(W.a,{onClick:function(a){e.handleLike(t.id,a)}},"Like"),r.a.createElement(H,{liked:e.state.placeLikes[t.id]||!1}))))}))):r.a.createElement(g,null)}}]),a}(n.Component),$=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPlaces(),this.props.fetchAncestryGroups()}},{key:"render",value:function(){var e=this.props.places,t=this.props.placeAncestryGroups;return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"".concat(this.props.match.path,"/new")},r.a.createElement(J,{placeAncestryGroups:t})),r.a.createElement(m.a,{path:"".concat(this.props.match.path,"/:placeId")},r.a.createElement(C,{places:e}),r.a.createElement(w,{places:e})),r.a.createElement(m.a,{path:this.props.match.path},r.a.createElement(V,{places:e}))))}}]),a}(n.Component),q=Object(G.b)((function(e){return{places:e.places,placeAncestryGroups:e.placeAncestryGroups}}),(function(e){return{fetchPlaces:function(){return e((function(e){fetch("http://localhost:3000/api/v1/places").then((function(e){return e.json()})).then((function(t){e({type:"ADD_PLACES",places:t.data})}))}))},fetchAncestryGroups:function(){return e(I())}}}))($),z=function(e){return e.ancestryGroups.length>0?r.a.createElement(M.a,null,e.ancestryGroups.map((function(e){return r.a.createElement("div",{className:"ancestry_group",key:e.id},r.a.createElement(j.a,{body:!0},r.a.createElement(A.a,null,r.a.createElement(_.a,null,r.a.createElement("h3",null,r.a.createElement(B.a,null,r.a.createElement(p.b,{key:e.id,to:"/ancestry_groups/".concat(e.id)},e.attributes.name)))),r.a.createElement(k.a,null,e.attributes.national_percent,"% of US population"))))}))):r.a.createElement(g,null)},F=function(e){var t=Object(m.f)().ancestryGroupId;if(e.ancestryGroups.length>0){var a=e.ancestryGroups.find((function(e){return e.id===t})),n=a.attributes.place_ancestry_groups;n.sort((function(e,t){return e.attributes.percent<t.attributes.percent?1:-1}));var l=a?r.a.createElement("div",{className:"ancestry group"},r.a.createElement(j.a,null,r.a.createElement(A.a,null,r.a.createElement(_.a,null,r.a.createElement("h3",null,a.attributes.name)),r.a.createElement(k.a,null,"Population in the United States:"," ",a.attributes.national_pop.toLocaleString()))),r.a.createElement(S.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Place"),r.a.createElement("th",null,"Percent"),r.a.createElement("th",null,"Relative to overall US population"))),n.map((function(e){return r.a.createElement("tr",{className:"place",key:e.id},r.a.createElement("td",null,e.attributes.place.name),r.a.createElement("td",null,e.attributes.percent,"%"),r.a.createElement("td",null,e.attributes.relative_to_national,"x"))})))):"Ancestry group not found";return r.a.createElement("div",null,l)}return r.a.createElement(g,null)},K=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchAncestryGroups()}},{key:"render",value:function(){var e=this.props.ancestryGroups;return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"".concat(this.props.match.path,"/:ancestryGroupId")},r.a.createElement(F,{ancestryGroups:e})),r.a.createElement(m.a,{path:this.props.match.path},r.a.createElement(z,{ancestryGroups:e}))))}}]),a}(n.Component),Q=Object(G.b)((function(e){return{ancestryGroups:e.ancestryGroups}}),(function(e){return{fetchAncestryGroups:function(){return e(I())}}}))(K),X=a(68),Z=function(){return console.log("in Home component"),r.a.createElement("div",null,r.a.createElement(X.a,{className:"App-header"},r.a.createElement("h1",{className:"display-3"},"Welcome to American Ancestries!"),r.a.createElement("h3",null,"Explore the cultural diversity of the United States"),r.a.createElement("p",{className:"lead"},"View different places and see how different ethnic origins are represented there, or view ancestry groups and where they are most strongly represented. If you have Census data you can also input new places with ancestry information.")))},ee=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/american-ancestries"},r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/places",render:function(e){return r.a.createElement(q,e)}}),r.a.createElement(m.a,{path:"/ancestry_groups",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(m.a,{path:""},r.a.createElement(Z,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(20),ae=a(31),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{places:[],ancestryGroups:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLACES":return Object(L.a)(Object(L.a)({},e),{},{places:t.places});case"ADD_PLACE":return Object(L.a)(Object(L.a)({},e),{},{places:[].concat(Object(D.a)(e.places),[t.place])});case"ADD_ANCESTRY_GROUPS":return Object(L.a)(Object(L.a)({},e),{},{ancestryGroups:t.ancestryGroups});case"ADD_PLACE_ANCESTRY_GROUPS":return Object(L.a)(Object(L.a)({},e),{},{placeAncestryGroups:t.ancestryGroups.map((function(e){return{ancestryGroupId:e.id,population:0,ancestryGroupName:e.attributes.name}}))});default:return e}},re=a(32),le=Object(re.composeWithDevTools)({}),ce=Object(te.createStore)(ne,le(Object(te.applyMiddleware)(ae.a)));c.a.render(r.a.createElement(G.a,{store:ce},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c41ff94a.chunk.js.map