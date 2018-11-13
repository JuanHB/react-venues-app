(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(6),l=a(7),s=a(9),u=a(8),m=a(10),d=a(22),E=a(3),h=a(5),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{list:[],fetching:!0,geoFailed:!1},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=t.type,n=t.payload;switch(a){case"REQUEST_VENUES":return Object(h.a)({},e,{fetching:!0,geoFailed:!1});case"RECEIVE_VENUES":return Object(h.a)({},e,{list:n.list,fetching:!1,geoFailed:!1});case"CLEAR_VENUES":return Object(h.a)({},e,{list:[],fetching:!1,geoFailed:!1});case"GEOLOCATION_FAILED":return Object(h.a)({},e,{fetching:!1,geoFailed:!0});default:return Object(h.a)({},e)}},f=Object(E.c)({venues:p}),v=a(4),_=function(){return r.a.createElement("h1",{className:"h2"}," Cool places near you ")},g=a(25),A=a.n(g),b=function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/react-venues-app",REACT_APP_API_URL:"https://api.foursquare.com/v2",REACT_APP_API_VERSION:"20181101",REACT_APP_API_CLIENT_ID:"MVGEWXAOVFGQAQ2TA5MHAW23LB5B2FHQ4AE2C2Y0WRT3DUPJ",REACT_APP_API_CLIENT_SECRET:"BT40MOFKYWZWJJDD2L4PA4YNNMFXO52SPWL1EEQQOUMX3GY5"}),a=t.REACT_APP_API_URL,n=t.REACT_APP_API_VERSION,r=t.REACT_APP_API_CLIENT_ID,c=t.REACT_APP_API_CLIENT_SECRET;return e?[a,e,"?v=",n,"&client_id=",r,"&client_secret=",c].join(""):null}("/venues/explore"),N=function(e){var t=e.limit,a=void 0===t?10:t,n=e.ll,r=void 0===n?null:n,c=e.near,o=void 0===c?null:c;return function(e){var t={limit:a,near:o,ll:r};return e({type:"REQUEST_VENUES"}),A.a.get(b,{params:t}).then(function(t){if(t&&t.data){var a=t.data.response.groups[0].items;e(function(e){return{type:"RECEIVE_VENUES",payload:{list:e}}}(a))}}).catch(function(t){throw e({type:"GEOLOCATION_FAILED"}),t})}},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={near:null},a.inputRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.state.near;return r.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)},style:y.form},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",ref:this.inputRef,style:y.inputField,className:"form-control",placeholder:"Tokyo, Chicago, New York...",onChange:function(t){return e._handleChange(t)}})),r.a.createElement("div",{className:"col"},r.a.createElement("button",{disabled:!t,type:"submit",className:"btn btn-primary"},"Search"))))}},{key:"_handleSubmit",value:function(e){e.preventDefault();var t=this.state.near;t&&this.props.dispatch(N({near:t}))}},{key:"_handleChange",value:function(e){this.setState({near:e.target.value})}}]),t}(n.Component),y={form:{marginTop:"1em",marginBottom:"1em"},inputField:{marginRight:"1em"}},C=Object(v.b)()(O),P=function(e){var t=e.address;return r.a.createElement("a",{target:"_blank",className:"card-link",rel:"noopener noreferrer",href:function(e){return e?"https://www.google.com/maps/search/?api=1&query=".concat(e):null}(t)},"How to get there")},R={card:{marginBottom:"1em"}},T=function(e){var t=e.item.venue,a=t.location.formattedAddress.join(", "),n=t.categories.map(function(e){return e.shortName}).join(", ");return r.a.createElement("div",{className:"card",style:R.card},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"}," ",n," "),r.a.createElement("p",{className:"card-text"},a),r.a.createElement(P,{address:a})))},j=Object(v.b)(function(e){return{venues:e.venues}})(function(e){var t=e.venues,a=t.list,n=t.fetching,c=t.geoFailed,o=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},e))};return n?o("Loading..."):c?o("The location wasn't found, please check and try again."):r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(T,{item:e,key:t})}))}),I=(a(55),Object(E.d)(f,Object(E.a)(d.a))),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,a=t.latitude,n=t.longitude;I.dispatch(N({ll:"".concat(a,", ").concat(n)}))},function(){return I.dispatch({type:"CLEAR_VENUES"})}):I.dispatch({type:"CLEAR_VENUES"})}},{key:"render",value:function(){return r.a.createElement(v.a,{store:I},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:L},r.a.createElement("div",{className:"col-md"},r.a.createElement(_,null),r.a.createElement(C,null),r.a.createElement(j,null)))))}}]),t}(n.Component),L={marginTop:40},S=w;o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.6cc3f205.chunk.js.map