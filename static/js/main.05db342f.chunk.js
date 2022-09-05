(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),o=c(4),r=c(16),l=c(6),d=c(12),i=c(13),u=c(2);!function(e){e.user_FETCH_START="user_FETCH_START",e.user_FETCH_SUCCESS="user_FETCH_SUCCESS",e.user_FETCH_ERROR="user_FETCH_ERROR",e.user_FETCH_FINISH="user_FETCH_FINISH",e.user_UNSELECT="user_UNSELECT"}(n||(n={}));function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var b,O={user:null,loading:!1,error:null},f=function(){return{type:n.user_FETCH_START}},h=function(e){return{type:n.user_FETCH_SUCCESS,payload:e}},m=function(e){return{type:n.user_FETCH_ERROR,payload:e}},E=function(){return{type:n.user_FETCH_FINISH}},p=function(){return{type:n.user_UNSELECT}},_=function(e){return function(t){t(f()),function(e){return j("/users/".concat(e))}(e).then((function(e){return t(h(e))})).catch((function(e){return t(m(e))})).finally((function(){return t(E())}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.user_FETCH_START:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case n.user_FETCH_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case n.user_FETCH_ERROR:return Object(u.a)(Object(u.a)({},e),{},{error:t.payload});case n.user_FETCH_FINISH:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case n.user_UNSELECT:return Object(u.a)(Object(u.a)({},e),{},{user:null});default:return e}};!function(e){e.todos_FETCH_START="todos_FETCH_START",e.todos_FETCH_SUCCESS="todos_FETCH_SUCCESS",e.todos_FETCH_ERROR="todos_FETCH_ERRO",e.todos_FETCH_FINISH="todos_FETCH_FINISH",e.todo_SELECT="todo_SELECT",e.todo_UNSELECT="todo_UNSELECT"}(b||(b={}));var x,C={todos:[],loading:!1,error:null,selectedTodo:null},y=function(){return{type:b.todos_FETCH_START}},v=function(e){return{type:b.todos_FETCH_SUCCESS,payload:e}},S=function(e){return{type:b.todos_FETCH_ERROR,payload:e}},N=function(){return{type:b.todos_FETCH_FINISH}},F=function(e){return{type:b.todo_SELECT,payload:e}},H=function(){return{type:b.todo_UNSELECT}},R=function(){return function(e){e(y()),j("/todos").then((function(t){return e(v(t))})).catch((function(t){return e(S(t))})).finally((function(){return e(N())}))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.todos_FETCH_START:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case b.todos_FETCH_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{todos:t.payload});case b.todos_FETCH_ERROR:return Object(u.a)(Object(u.a)({},e),{},{error:t.payload});case b.todos_FETCH_FINISH:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case b.todo_SELECT:return Object(u.a)(Object(u.a)({},e),{},{selectedTodo:t.payload});case b.todo_UNSELECT:return Object(u.a)(Object(u.a)({},e),{},{selectedTodo:null});default:return e}};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(x||(x={}));var I={filterType:x.All,appliedQuery:""},L=function(e){return{type:"filter/SET_FILTERTYPE",payload:e}},A=function(e){return{type:"filter/SET_APPLIEDQUERY",payload:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_FILTERTYPE":return Object(u.a)(Object(u.a)({},e),{},{filterType:t.payload});case"filter/SET_APPLIEDQUERY":return Object(u.a)(Object(u.a)({},e),{},{appliedQuery:t.payload});default:return e}},k=Object(l.combineReducers)({todosInfo:g,userInfo:T,filter:U}),w=function(e){return e.userInfo},P=function(e){return e.todosInfo},Q=function(e){return e.filter},D=Object(l.createStore)(k,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),Y=c(0),B=(c(24),c(25),c(26),c(14)),J=c.n(B),M=c(1),W=Object(Y.memo)((function(e){var t=e.todo,c=t.id,n=t.title,a=t.completed,s=t.userId,r=Object(o.b)(),l=Object(o.c)(P).selectedTodo;return Object(M.jsxs)("tr",{"data-cy":"todo",className:J()({"has-background-info-light":(null===l||void 0===l?void 0:l.id)===c}),children:[Object(M.jsx)("td",{className:"is-vcentered",children:s}),Object(M.jsx)("td",{className:"is-vcentered",children:a&&Object(M.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("td",{className:"is-vcentered is-expanded",children:Object(M.jsx)("p",{className:a?"has-text-success":"has-text-danger",children:n})}),Object(M.jsx)("td",{className:"has-text-right is-vcentered",children:Object(M.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return r(F(t))},children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:(null===l||void 0===l?void 0:l.id)!==c?"far fa-eye":"far fa-eye-slash"})})})})]},c)})),q=Object(Y.memo)((function(e){var t=e.todos;return Object(M.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"#"}),Object(M.jsx)("th",{children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("th",{children:"Title"}),Object(M.jsx)("th",{children:" "})]})}),Object(M.jsx)("tbody",{children:t.map((function(e){return Object(M.jsx)(W,{todo:e},e.id)}))})]})})),z=c(5),G=c(15),K=Object(Y.memo)((function(){var e=Object(o.b)(),t=Object(o.c)(Q).filterType,c=Object(Y.useState)(""),n=Object(z.a)(c,2),a=n[0],s=n[1],r=Object(G.a)((function(t){e(A(t))}),300);return Object(M.jsxs)("form",{className:"field has-addons",children:[Object(M.jsx)("p",{className:"control",children:Object(M.jsx)("span",{className:"select",children:Object(M.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(t){e(L(t.target.value))},children:[Object(M.jsx)("option",{value:x.All,children:"All"}),Object(M.jsx)("option",{value:x.Active,children:"Active"}),Object(M.jsx)("option",{value:x.Completed,children:"Completed"})]})})}),Object(M.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(M.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){var t=e.target.value;s(t),r(t)}}),Object(M.jsx)("span",{className:"icon is-left",children:Object(M.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(M.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(M.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s(""),r("")}})})]})]})})),V=(c(28),function(){return Object(M.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(M.jsx)("div",{className:"Loader__content"})})}),X=function(e){var t=e.todo,c=Object(o.b)(),n=Object(o.c)(w),a=n.user,s=n.loading;return Object(Y.useEffect)((function(){return c(_(t.userId)),function(){c(p())}}),[]),Object(M.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(M.jsx)("div",{className:"modal-background"}),s?Object(M.jsx)(V,{}):Object(M.jsxs)("div",{className:"modal-card",children:[Object(M.jsxs)("header",{className:"modal-card-head",children:[Object(M.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(M.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(H())}})]}),Object(M.jsxs)("div",{className:"modal-card-body",children:[Object(M.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(M.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(M.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(M.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(M.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})]})]})]})]})},Z=function(){var e=Object(o.b)(),t=Object(o.c)(P),c=t.todos,n=t.loading,a=t.selectedTodo,s=Object(o.c)(Q),r=s.filterType,l=s.appliedQuery;Object(Y.useEffect)((function(){e(R())}),[]);var d=Object(Y.useMemo)((function(){var e=l.toLowerCase();return c.filter((function(t){var c=t.title.toLowerCase().includes(e);switch(r){case x.All:return c;case x.Active:return c&&!t.completed;case x.Completed:return c&&t.completed;default:return!0}}))}),[c,l,r]);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"section",children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"box",children:[Object(M.jsx)("h1",{className:"title",children:"Todos:"}),Object(M.jsx)("div",{className:"block",children:Object(M.jsx)(K,{})}),Object(M.jsx)("div",{className:"block",children:n?Object(M.jsx)(V,{}):Object(M.jsx)(q,{todos:d})})]})})}),a&&Object(M.jsx)(X,{todo:a})]})},$=function(){return Object(M.jsx)(o.a,{store:D,children:Object(M.jsx)(r.a,{children:Object(M.jsx)(Z,{})})})};s.a.render(Object(M.jsx)($,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.05db342f.chunk.js.map