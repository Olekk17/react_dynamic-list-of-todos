(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),o=(c(10),c(11),c(4)),d=c.n(o),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.onButtonClick;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye":t!==(null===c||void 0===c?void 0:c.id),"fa-eye-slash":t===(null===c||void 0===c?void 0:c.id)})})})})})]},t)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.todos,c=e.setFilteredTodos,a=Object(i.useState)(s.All),n=Object(l.a)(a,2),o=n[0],d=n[1],j=Object(i.useState)(""),u=Object(l.a)(j,2),b=u[0],h=u[1];Object(i.useEffect)((function(){var e=function(){switch(o){case s.Active:return t.filter((function(e){return!e.completed}));case s.Completed:return t.filter((function(e){return e.completed}));default:return t}}(),a=b.toLowerCase().trim(),n=e.filter((function(e){return e.title.toLowerCase().includes(a)}));c(n)}),[b,o]);return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:o,onChange:function(e){switch(e.target.value){case s.Active:d(s.Active);break;case s.Completed:d(s.Completed);break;default:d(s.All)}},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:b,onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),b&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return h("")}})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todo,c=e.onCloseButtonClick,s=t.id,a=t.title,n=t.completed,o=t.userId,d=Object(i.useState)(null),j=Object(l.a)(d,2),u=j[0],m=j[1],O=Object(i.useState)(!0),x=Object(l.a)(O,2),f=x[0],v=x[1];return Object(i.useEffect)((function(){(function(e){return h("/users/".concat(e))})(o).then((function(e){return m(e)})),setTimeout((function(){return v(!1)}),300)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),f?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[n?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),n=Object(l.a)(a,2),o=n[0],d=n[1],O=Object(i.useState)(!0),x=Object(l.a)(O,2),f=x[0],v=x[1],p=Object(i.useState)(null),N=Object(l.a)(p,2),y=N[0],C=N[1];Object(i.useEffect)((function(){h("/todos").then((function(e){s(e),d(e),v(!1)}))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{todos:c,setFilteredTodos:d})}),Object(r.jsx)("div",{className:"block",children:f?Object(r.jsx)(b,{}):Object(r.jsx)(j,{todos:o,selectedTodo:y,onButtonClick:function(e){C(e)}})})]})})}),null!==y&&Object(r.jsx)(m,{todo:y,onCloseButtonClick:function(){C(null)}})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6a0f0712.chunk.js.map