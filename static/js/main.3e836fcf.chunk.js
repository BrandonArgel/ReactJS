(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],{36:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(18),c=a.n(s),i=(a(35),a(36),a(9)),o=a(2),l=a(3),d=a.n(l),j=a(12),b=a(16),u=a(5),m=a(6),h=a(8),p=a(7),f=a.p+"static/media/platziconf-logo.c1d00c3e.svg",O=(a(38),a.p+"static/media/badge-header.2c3af956.svg"),g=a(29),x=a.n(g),v=a(0);var N=function(e){var t=e.email,a=x()(t);return Object(v.jsx)("img",{className:e.className,src:"https://es.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Avatar"})},y=(a(42),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.firstName,a=e.lastName,r=e.jobTitle,n=e.twitter;return Object(v.jsxs)("div",{className:"badge",children:[Object(v.jsx)("div",{className:"badge_header",children:Object(v.jsx)("img",{src:O,alt:"Logo de la conferencia"})}),Object(v.jsxs)("div",{className:"badge_section-name",children:[Object(v.jsx)(N,{className:"badge_avatar",email:this.props.email,alt:"Avatar"}),Object(v.jsxs)("h1",{className:"badge_name",children:[t," ",Object(v.jsx)("br",{})," ",a]})]}),Object(v.jsxs)("div",{className:"badge_section-info",children:[Object(v.jsx)("h3",{className:"badge_job",children:r}),Object(v.jsxs)("div",{className:"badge_twitter",children:["@",n]})]}),Object(v.jsx)("div",{className:"badge_footer",children:"#platzi"})]})}}]),a}(r.Component)),w=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e.handleCLick=function(e){console.log("Button was clicked")},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{className:"formulario",onSubmit:this.props.onSubmit,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"First Name"}),Object(v.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",placeholder:"Introduce tu nombre",value:this.props.formValues.firstName})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Last Name"}),Object(v.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",placeholder:"Introduce tu apellido",value:this.props.formValues.lastName})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",placeholder:"Introduce tu apellido",value:this.props.formValues.email})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Job Title"}),Object(v.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",placeholder:"Introduce tu trabajo",value:this.props.formValues.jobTitle})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Twitter"}),Object(v.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter",placeholder:"Introduce tu usuario",value:this.props.formValues.twitter})]}),Object(v.jsx)("button",{onClick:this.handleCLick,className:"btn btn-primary",children:"Save"}),this.props.error&&Object(v.jsx)("p",{className:"text-danger",children:this.props.error.message})]})})}}]),a}(r.Component),_="https://my-json-server.typicode.com/BrandonArgel/ReactJS/db",C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return C(k(e,t))};function T(e){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(d.a.mark((function e(t){var a,r,n,s,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,S();case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},r=_+t,e.next=7,fetch(r,a);case 7:return n=e.sent,e.next=10,n.json();case 10:return s=e.sent,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E={badges:{list:function(){return T("/badges")},create:function(e){return T("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return T("/badges/".concat(e))},update:function(e,t){return T("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return T("/badges/".concat(e),{method:"DELETE"})}}},A=(a(43),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"lds-grid",children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})}}]),a}(r.Component));a(44);var D=function(){return Object(v.jsx)("div",{className:"PageLoading",children:Object(v.jsx)(A,{})})},I=a(14),M=a.n(I),L=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(t){e.setState({form:Object(b.a)(Object(b.a)({},e.state.form),{},{[t.target.name]:t.target.value})})},e.handleSubmit=function(){var t=Object(j.a)(d.a.mark((function t(a){var r,n,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n in a.preventDefault(),r=[],e.state.form)e.state.form.hasOwnProperty(n)&&""===e.state.form[n]&&r.push(n);if(""!==e.state.form.firstName&&""!==e.state.form.lastName&&""!==e.state.form.email&&""!==e.state.form.jobTitle&&""!==e.state.form.twitter){t.next=8;break}s=r.join(", "),e.alertaFaltanDatos(s),t.next=21;break;case 8:return e.setState({loading:!0,error:null}),t.prev=9,t.next=12,E.badges.create(e.state.form);case 12:e.setState({loading:!1}),e.alertaExitosa(),e.props.history.push("/badges"),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(9),e.setState({error:t.t0,loading:!1}),e.alertaError();case 21:case"end":return t.stop()}}),t,null,[[9,17]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"alertaFaltanDatos",value:function(e){M.a.fire({title:"Alto ahi!",text:"Te faltan campos por rellenar \ud83e\uddd0\n         ".concat(e),icon:"error"})}},{key:"alertaError",value:function(){M.a.fire({title:"Opps!",text:"Ha ocurrido algo inesperado \ud83d\ude05, vuelve a intentarlo nuevamente",icon:"error"})}},{key:"alertaExitosa",value:function(){var e=this;M.a.fire({title:"Creacion Exitosa!",text:"Muchas gracias por inscribirte en la conferencia \ud83d\ude0a",icon:"success"}).then((function(t){!t.value&&t.value||e.props.history.push("/badges")}))}},{key:"render",value:function(){return!0===this.state.loading?Object(v.jsx)(D,{}):Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("div",{className:"BadgeNew__hero",children:Object(v.jsx)("img",{className:"BadgeNew__hero-image img-fluid",src:f,alt:"Hero"})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-6",children:Object(v.jsx)(y,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://static.platzi.com/media/avatars/avatars/BrandArgel_b9b55b25-1391-4279-a81f-103150559ad8.jpg"})}),Object(v.jsxs)("div",{className:"col-6",children:[Object(v.jsx)("h1",{children:"New Attendant"}),Object(v.jsx)(w,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})]})]})})]})}}]),a}(r.Component),F=(a(55),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.fetchData=function(){var t=Object(j.a)(d.a.mark((function t(a){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,E.badges.read(e.props.match.params.badgeId);case 4:r=t.sent,e.setState({loading:!1,form:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState({form:Object(b.a)(Object(b.a)({},e.state.form),{},{[t.target.name]:t.target.value})})},e.handleSubmit=function(){var t=Object(j.a)(d.a.mark((function t(a){var r,n,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n in a.preventDefault(),r=[],e.state.form)e.state.form.hasOwnProperty(n)&&""===e.state.form[n]&&r.push(n);if(""!==e.state.form.firstName&&""!==e.state.form.lastName&&""!==e.state.form.email&&""!==e.state.form.jobTitle&&""!==e.state.form.twitter){t.next=8;break}s=r.join(", "),e.alertaFaltanDatos(s),t.next=21;break;case 8:return e.setState({loading:!0,error:null}),t.prev=9,t.next=12,E.badges.update(e.props.match.params.badgeId,e.state.form);case 12:e.setState({loading:!1}),e.alertaExitosa(),e.props.history.push("/badges"),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(9),e.setState({error:t.t0,loading:!1}),e.alertaError();case 21:case"end":return t.stop()}}),t,null,[[9,17]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"alertaFaltanDatos",value:function(e){M.a.fire({title:"Alto ahi!",text:"Te faltan campos por rellenar \ud83e\uddd0\n         ".concat(e),icon:"error"})}},{key:"alertaError",value:function(){M.a.fire({title:"Opps!",text:"Ha ocurrido algo inesperado \ud83d\ude05, vuelve a intentarlo nuevamente",icon:"error"})}},{key:"alertaExitosa",value:function(){var e=this;M.a.fire({title:"Modificaci\xf3n Exitosa!",text:"La actualizaci\xf3n de tu Badge ha sido realizada con \xe9xito \ud83d\ude0a",icon:"success"}).then((function(t){!t.value&&t.value||e.props.history.push("/badges")}))}},{key:"render",value:function(){return!0===this.state.loading?Object(v.jsx)(D,{}):Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("div",{className:"BadgeEdit__hero",children:Object(v.jsx)("img",{className:"BadgeEdit__hero-image img-fluid",src:f,alt:"Hero"})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-6",children:Object(v.jsx)(y,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://static.platzi.com/media/avatars/avatars/BrandArgel_b9b55b25-1391-4279-a81f-103150559ad8.jpg"})}),Object(v.jsxs)("div",{className:"col-6",children:[Object(v.jsx)("h1",{children:"Edit Attendant"}),Object(v.jsx)(w,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})]})]})})]})}}]),a}(r.Component)),P=a(24),z=(a(56),a.p+"static/media/twitter.740c588f.svg");var J=function(e){var t=function(e){var t=Object(r.useState)(""),a=Object(P.a)(t,2),n=a[0],s=a[1],c=Object(r.useState)(e),i=Object(P.a)(c,2),o=i[0],l=i[1];return Object(r.useMemo)((function(){var t=e.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase())}));l(t)}),[e,n]),{query:n,setQuery:s,filteredBadges:o}}(e.badges.badges),a=t.query,n=t.setQuery,s=t.filteredBadges;return 0===s.length?Object(v.jsxs)(r.Fragment,{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Fliter Badges"}),Object(v.jsx)("input",{className:"form-control",type:"text",value:a,onChange:function(e){n(e.target.value)}})]}),Object(v.jsx)("h3",{children:"No badges were found"}),Object(v.jsx)(i.b,{className:"btn btn-primary",to:"/badges/new",children:"Create new badge"})]}):Object(v.jsxs)(r.Fragment,{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:"Fliter Badges"}),Object(v.jsx)("input",{className:"form-control",type:"text",value:a,onChange:function(e){n(e.target.value)}})]}),Object(v.jsx)("ul",{className:"list-unstyled Badge__container",children:s&&s.map((function(e){return Object(v.jsx)(i.b,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id),children:Object(v.jsxs)("li",{children:[Object(v.jsx)(N,{className:"badge_avatar",email:e.email,alt:"Avatar"}),Object(v.jsxs)("div",{className:"Badge__container-data",children:[Object(v.jsxs)("p",{className:"data",children:[e.firstName," ",e.lastName]}),Object(v.jsxs)("p",{className:"Badge__data",children:[Object(v.jsx)("img",{className:"Badge__data-img",src:z,alt:"Twitter Logo"}),Object(v.jsxs)("span",{className:"twitter",children:["@",e.twitter]})]}),Object(v.jsx)("p",{className:"data",children:e.jobTitle})]})]})},e.id)}))})]})};a(62);var V=function(e){return Object(v.jsxs)("div",{className:"PageError",children:["\u274c ",e.error.message," \ud83d\ude31"]})},R=(a(63),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:null,data:[]},e.fetchData=Object(j.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,fetch("https://my-json-server.typicode.com/BrandonArgel/ReactJS/db");case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,e.setState({loading:!1,data:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return!0===this.state.loading?Object(v.jsx)(D,{}):this.state.error?Object(v.jsx)(V,{error:this.state.error}):Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("div",{className:"Badges",children:Object(v.jsx)("div",{className:"Badges__hero",children:Object(v.jsx)("div",{className:"Badges__container",children:Object(v.jsx)("img",{className:"Badges_conf-logo",src:O,alt:"Conf Logo"})})})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"Badges__buttons",children:Object(v.jsx)(i.b,{className:"btn btn-primary",to:"/badges/new",children:"New Badge"})}),Object(v.jsx)("div",{className:"Badges__list",children:Object(v.jsx)("div",{className:"Badges__container",children:Object(v.jsx)(J,{badges:this.state.data})})})]})]})}}]),a}(r.Component)),H=a.p+"static/media/logo.235d00e1.svg",U=(a(64),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Navbar",children:Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsxs)(i.b,{className:"Navbar__brand",to:"/",children:[Object(v.jsx)("img",{className:"Navbar__brand-logo",src:H,alt:""}),Object(v.jsx)("span",{className:"font-weight-light",children:"PLatzi"}),Object(v.jsx)("span",{className:"font-weight-bold",children:"Conf"})]})})})}}]),a}(r.Component));var q=function(e){return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(U,{}),e.children]})},Q=a.p+"static/media/404.c5b98431.svg";a(65);var W=function(){return Object(v.jsx)("img",{className:"NotFound",src:Q,alt:"Not Found"})},X=(a(66),a.p+"static/media/astronauts.ea532e99.svg");var Y=function(){return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsxs)("div",{className:"main",children:[Object(v.jsxs)("div",{className:"home__container",children:[Object(v.jsx)("img",{src:f,alt:"Conf Logo"}),Object(v.jsx)("h1",{className:"title",children:"Print your badges"}),Object(v.jsx)("p",{children:"The easiest way to manage your conference"}),Object(v.jsx)("div",{className:"Start__button",children:Object(v.jsx)(i.b,{className:"btn btn-primary",to:"/badges",children:"Start Now"})})]}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"astronauts",src:X,alt:"Astronauts"})})]})})};a(67),a(68);var G=function(e){return e.isOpen?c.a.createPortal(Object(v.jsx)("div",{className:"Modal",children:Object(v.jsxs)("div",{className:"Modal__container",children:[Object(v.jsx)("button",{onClick:e.onCLose,className:"Modal__close-button",children:"X"}),e.children,console.log(e)]})}),document.getElementById("modal")):null};var K=function(e){return Object(v.jsx)(G,{isOpen:e.isOpen,onClose:e.onClose,children:Object(v.jsxs)("div",{className:"DeleteBadgeModal",children:[Object(v.jsx)("h1",{children:"Are you sure?"}),Object(v.jsx)("p",{children:"You are about to delete this badge."}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4",children:"Delete"}),Object(v.jsx)("button",{onClick:e.onClose,className:"btn btn-primary",children:"Cancel"})]})]})})};var Z=function(e){var t=e.badge,a=t.firstName,n=t.lastName,s=t.email,c=t.twitter,o=t.jobTitle,l=t.id;return Object(v.jsxs)(r.Fragment,{children:[Object(v.jsx)("div",{className:"BadgeDetails__hero",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-6",children:Object(v.jsx)("img",{src:f,alt:"Logo de la conferencia"})}),Object(v.jsx)("div",{className:"col-6 BadgeDetails__hero-attendant-name",children:Object(v.jsxs)("h1",{children:[a," ",n]})})]})})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(y,{firstName:a,lastName:n,email:s,twitter:c,jobTitle:o})}),Object(v.jsxs)("div",{className:"col",children:[Object(v.jsx)("h2",{children:"Actions"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)(i.b,{className:"btn btn-primary mb-4",to:"/badges/".concat(l,"/edit"),children:"Editar"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:e.onOpenModal,className:"btn btn-danger",children:"Delete"}),Object(v.jsx)(K,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge})]})]})]})]})})]})},$=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:"",avatarUrl:""},modalIsOpen:!1},e.fetchData=Object(j.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,E.badges.read(e.props.match.params.badgeId);case 4:a=t.sent,e.setState({loading:!1,data:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.handleCloseModal=function(t){e.setState({modalIsOpen:!1})},e.handleOpenModal=function(t){e.setState({modalIsOpen:!0})},e.handleDeleteBadge=function(){var t=Object(j.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,E.badges.remove(e.props.match.params.badgeId);case 4:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?Object(v.jsx)(D,{}):this.state.error?Object(v.jsx)(V,{error:this.state.error}):Object(v.jsx)(Z,{onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,modalIsOpen:this.state.modalIsOpen,onDeleteBadge:this.handleDeleteBadge,badge:this.state.data})}}]),a}(r.Component);var ee=function(){return Object(v.jsx)(i.a,{children:Object(v.jsx)(q,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:Y}),Object(v.jsx)(o.a,{exact:!0,path:"/badges",component:R}),Object(v.jsx)(o.a,{exact:!0,path:"/badges/new",component:L}),Object(v.jsx)(o.a,{exact:!0,path:"/badges/:badgeId",component:$}),Object(v.jsx)(o.a,{exact:!0,path:"/badges/:badgeId/edit",component:F}),Object(v.jsx)(o.a,{component:W})]})})})},te=document.getElementById("app");c.a.render(Object(v.jsx)(ee,{}),te)}},[[69,1,2]]]);
//# sourceMappingURL=main.3e836fcf.chunk.js.map