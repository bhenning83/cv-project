(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),i=n(10),r=n.n(i),o=(n(16),n(17),n(18),n(2)),l=n(8),d=n(4),u=n(3),j=n(5),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.componentDidUpdate=function(t,n){e.state!==n&&e.props.save(e.state,0)},e.render=function(){return Object(s.jsxs)("div",{className:"section active",id:"pers",children:[Object(s.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(s.jsx)("input",{type:"text",id:"firstName",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(s.jsx)("input",{type:"text",id:"lastName",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(s.jsx)("input",{type:"tel",id:"phone",placeholder:"555-867-5309",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{type:"email",id:"email",onChange:e.handleChange})]})},e.state={firstName:"",lastName:"",phone:"",email:""},e}return n}(c.Component),b=n(7),m=n(6),O=n.n(m),p=function(e){var t=e.stints,n=e.del;return Object(s.jsx)("div",{className:"stints",children:t.map((function(e){return Object(s.jsxs)("div",{className:"display-box",children:[Object(s.jsx)("div",{className:"lead-info",children:e.school}),Object(s.jsxs)("div",{className:"years",children:[e.eduFrom,"-",e.eduTo]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Degree: "}),e.degree]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Area of Study: "})," ",e.study]}),Object(s.jsx)("button",{onClick:function(){return n(e.id)},children:"X"})]},O()())}))})},x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).addEdu=function(t){t.preventDefault(),e.setState({stints:e.state.stints.concat(e.state.stint),stint:{school:"",degree:"",study:"",eduFrom:"",eduTo:"",id:e.state.stint.id+1}}),document.querySelector("#school").value="",document.querySelector("#degree").value="",document.querySelector("#study").value="",document.querySelector("#eduFrom").value="",document.querySelector("#eduTo").value=""},e.handleChange=function(t){e.setState({stint:Object(b.a)(Object(b.a)({},e.state.stint),{},Object(j.a)({},t.target.id,t.target.value))})},e.removeEdu=function(t){var n=e.state.stints.filter((function(e){return e.id!==t}));e.setState({stints:n})},e.componentDidUpdate=function(t,n){e.state!==n&&e.props.save(e.state,1)},e.render=function(){return Object(s.jsxs)("div",{className:"section",id:"edu",children:[Object(s.jsx)("label",{htmlFor:"school",children:"School"}),Object(s.jsx)("input",{type:"text",id:"school",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"degree",children:"Degree:"}),Object(s.jsxs)("select",{id:"degree",onChange:e.handleChange,children:[Object(s.jsx)("option",{value:"",hidden:!0,children:"Select an Option"}),Object(s.jsx)("option",{value:"None",children:"None"}),Object(s.jsx)("option",{value:"Associate's",children:"Associate's"}),Object(s.jsx)("option",{value:"Bachelor's",children:"Bachelor's"}),Object(s.jsx)("option",{value:"Master's",children:"Master's"}),Object(s.jsx)("option",{value:"Doctorate",children:"Doctorate"})]}),Object(s.jsx)("label",{htmlFor:"study",children:"Area of Study"}),Object(s.jsx)("input",{type:"text",id:"study",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"eduFrom",children:"From"}),Object(s.jsx)("input",{type:"year",id:"eduFrom",placeholder:"yyyy",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"eduTo",children:"From"}),Object(s.jsx)("input",{type:"year",id:"eduTo",placeholder:"yyyy",onChange:e.handleChange}),Object(s.jsx)("button",{onClick:e.addEdu,className:"add-btn",children:"Add"}),Object(s.jsx)(p,{stints:e.state.stints,del:e.removeEdu})]})},e.state={stint:{school:"",degree:"",study:"",eduFrom:"",eduTo:"",id:0},stints:[]},e}return n}(c.Component),v=function(e){var t=e.stints,n=e.del;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"stints",children:t.map((function(e){return Object(s.jsxs)("div",{className:"display-box",children:[Object(s.jsx)("div",{className:"lead-info",children:e.company}),Object(s.jsxs)("div",{children:["Title: ",e.position]}),Object(s.jsxs)("div",{className:"years",children:[e.workFrom,"-",e.workTo]}),Object(s.jsxs)("div",{children:["Responsibilites: ",e.tasks]}),Object(s.jsx)("button",{onClick:function(){return n(e.id)},children:"X"})]},O()())}))})})},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).addWork=function(t){t.preventDefault(),e.setState({stints:e.state.stints.concat(e.state.stint),stint:{company:"",position:"",workFrom:"",workTo:"",tasks:"",id:e.state.stint.id+1}}),document.querySelector("#company").value="",document.querySelector("#position").value="",document.querySelector("#workFrom").value="",document.querySelector("#eduTo").value="",document.querySelector("#tasks").value=""},e.handleChange=function(t){e.setState({stint:Object(b.a)(Object(b.a)({},e.state.stint),{},Object(j.a)({},t.target.id,t.target.value))})},e.removeWork=function(t){var n=e.state.stints.filter((function(e){return e.id!==t}));e.setState({stints:n})},e.componentDidUpdate=function(t,n){e.state!==n&&e.props.save(e.state,2)},e.render=function(){return Object(s.jsxs)("div",{className:"section",id:"work",children:[Object(s.jsx)("label",{htmlFor:"company",children:"Company"}),Object(s.jsx)("input",{type:"text",id:"company",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"position",children:"Position"}),Object(s.jsx)("input",{type:"text",id:"position",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"workFrom",children:"From"}),Object(s.jsx)("input",{type:"text",id:"workFrom",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"workTo",children:"To"}),Object(s.jsx)("input",{type:"text",id:"workTo",onChange:e.handleChange}),Object(s.jsx)("label",{htmlFor:"tasks",children:"Responsibilities"}),Object(s.jsx)("textarea",{id:"tasks",form:"form",onChange:e.handleChange}),Object(s.jsx)("button",{onClick:e.addWork,className:"add-btn",children:"Add"}),Object(s.jsx)(v,{stints:e.state.stints,del:e.removeWork})]})},e.state={stint:{company:"",position:"",workFrom:"",workTo:"",tasks:"",id:0},stints:[]},e}return n}(c.Component),y=function(e){var t=e.data;return t.edu.stints&&t.work.stints?Object(s.jsxs)("div",{id:"cv",className:"show",children:[Object(s.jsxs)("div",{className:"row",children:[t.pers.firstName," ",t.pers.lastName,Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:t.pers.phone}),Object(s.jsx)("div",{children:t.pers.email})]})]}),Object(s.jsx)("h2",{className:"sec-title",children:"Education"}),t.edu.stints.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"lead-info",children:e.school}),Object(s.jsxs)("div",{className:"years",children:[e.eduFrom,"-",e.eduTo]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Degree: "}),e.degree]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Area of Study: "})," ",e.study]})]},O()())})),Object(s.jsx)("h2",{className:"sec-title",children:"Work"}),t.work.stints.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"lead-info",children:e.company}),Object(s.jsxs)("div",{children:["Title: ",e.position]}),Object(s.jsxs)("div",{className:"years",children:[e.workFrom,"-",e.workTo]}),Object(s.jsxs)("div",{children:["Responsibilites: ",e.tasks]})]},O()())}))]}):Object(s.jsx)("h1",{className:"show",children:"Patience, young one."})},g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).clear=function(){document.querySelectorAll("nav ul li").forEach((function(e){e.className=""})),document.querySelectorAll(".section").forEach((function(e){e.classList.remove("active")}))},e.renderPers=function(t){e.clear(t),t.target.className="active",document.querySelector("#pers").classList.add("active")},e.renderEdu=function(t){e.clear(t),t.target.className="active",document.querySelector("#edu").classList.add("active")},e.renderWork=function(t){e.clear(t),t.target.className="active",document.querySelector("#work").classList.add("active")},e.save=function(t,n){switch(n){case 0:e.setState({pers:t});break;case 1:e.setState({edu:t});break;case 2:e.setState({work:t})}},e.checkIfFilled=function(){if(0!==e.state.work.stints.length&&0!==e.state.edu.stints.length&&""!==e.state.pers.firstName&&""!==e.state.pers.lastName&&""!==e.state.pers.phone&&""!==e.state.pers.email)return!0},e.handleSubmit=function(t){t.preventDefault();var n=document.querySelector("button[type='submit']");!0===e.checkIfFilled()?(document.querySelector("#cv").classList.toggle("show"),document.querySelector("#cv").classList.toggle("display-box"),document.querySelector("#formMeat").classList.toggle("show"),document.querySelector("nav").classList.toggle("show"),document.querySelector("form").classList.toggle("trans"),n.style.display="block",!0===e.state.edit?n.textContent="Edit":n.textContent="Submit",e.setState({edit:!e.state.edit})):alert("add education and/or work")},e.allowSubmit=function(){!0===e.checkIfFilled()&&document.querySelector('button[type="submit"]').classList.add("submittable")},e.render=function(){return Object(s.jsxs)("div",{className:"home-container",children:[Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:e.renderPers,className:"active",children:"Personal"}),Object(s.jsx)("li",{onClick:e.renderEdu,children:"Education"}),Object(s.jsx)("li",{onClick:e.renderWork,children:"Work"})]})}),Object(s.jsxs)("form",{id:"form",onSubmit:e.handleSubmit,onChange:e.handleChange,children:[Object(s.jsxs)("div",{id:"formMeat",children:[Object(s.jsx)(h,{save:e.save}),Object(s.jsx)(x,{save:e.save}),Object(s.jsx)(f,{save:e.save})]}),Object(s.jsx)("button",{type:"submit",className:"submitBtn",children:"Submit"})]}),e.allowSubmit(),Object(s.jsx)(y,{data:e.state})]})},e.state={pers:{firstName:"",lastName:"",phone:"",email:""},edu:{stints:[]},work:{stints:[]},edit:!0},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e.clear=e.clear.bind(Object(l.a)(e)),e}return n}(c.Component),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).render=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"CV Builder"})})},e}return n}(c.Component);var C=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{}),Object(s.jsx)(g,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fed05dce.chunk.js.map