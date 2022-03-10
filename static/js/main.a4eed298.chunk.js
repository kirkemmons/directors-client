(this.webpackJsonpdirectors_client=this.webpackJsonpdirectors_client||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(19),r=a.n(n),c=(a(43),a(38)),i=a(3),o=(a(44),a(4)),l=a(75),u=(a(45),a(27)),j=a(1);var d=function(e){var t=e.variant,a=e.heading,n=e.message,r=Object(s.useState)(!0),c=Object(i.a)(r,2),o=c[0],l=c[1],d=Object(s.useState)(null),b=Object(i.a)(d,2),m=b[0],h=b[1];return console.log(m),Object(s.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return h(e),function(){clearTimeout(m)}}),[]),Object(j.jsx)(u.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:n})]})})},b=(a(50),a(10)),m=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b.b,{to:"/change-password",className:"link",children:"Change Password"}),Object(j.jsx)(b.b,{to:"/sign-out",className:"link",children:"Sign Out"})]}),h=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b.b,{to:"/sign-up",className:"link",children:"Sign Up"}),Object(j.jsx)(b.b,{to:"/sign-in",className:"link",children:"Sign In"})]}),O=Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b.b,{to:"/directors",className:"link",children:"Directors"})}),p=function(e){var t=e.user,a=Object(s.useState)(!1),n=Object(i.a)(a,2),r=n[0],c=n[1],o=function(){c(!r)};return Object(j.jsx)("div",{className:"nav",children:Object(j.jsxs)("div",{className:"nav-body",children:[Object(j.jsx)(b.b,{className:"logo",to:"/",children:"directorsUncut"}),Object(j.jsxs)("div",{className:"links",children:[t&&Object(j.jsxs)("div",{className:"link-welcome",children:["Welcome, ",t.username,"!"]}),O,t?m:h]}),Object(j.jsxs)("div",{className:"curtain",children:[Object(j.jsx)("div",{className:"curtainBtn",children:Object(j.jsx)("button",{className:"menuBtn",onClick:o,children:"Menu"})}),Object(j.jsxs)("div",{className:"overlay ".concat(r?" showMenu":""),children:[Object(j.jsx)("button",{className:"overlayBtn",onClick:o,children:"X"}),Object(j.jsxs)("div",{className:"overlay-content",children:[O,t?m:h]})]})]})]})})},x=a(11),g=a.n(x),v=a(17),f="https://directors-api2.herokuapp.com",w="http://localhost:8000",N="localhost"===window.location.hostname?w:f,y=a(16),S=a.n(y),k=function(e,t,a){return S.a.post(N+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},C=function(e,t){return S.a.post(N+"/sign-in/",{credentials:{email:e,password:t}})},P=function(e){return S.a.delete(N+"/sign-out/",{headers:{Authorization:"Token ".concat(e.token)}})},A=function(e,t,a){return S.a.patch(N+"/change-pw/",{passwords:{old:e,new:t}},{headers:{Authorization:"Token ".concat(a.token)}})},q=a(8),U=a(24),E=function(e){var t=e.msgAlert,a=e.setUser,n=Object(s.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(""),O=Object(i.a)(h,2),p=O[0],x=O[1],f=Object(s.useState)(!1),w=Object(i.a)(f,2),N=w[0],y=w[1],S=function(){var e=Object(v.a)(g.a.mark((function e(s){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,k(c,b,p);case 4:return e.next=6,C(c,b);case 6:n=e.sent,a(n.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),y(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),l(""),m(""),x(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return N?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(q.a,{onSubmit:S,children:[Object(j.jsxs)(q.a.Group,{controlId:"email",children:[Object(j.jsx)(q.a.Label,{children:"Email address"}),Object(j.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:c,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(q.a.Group,{controlId:"password",children:[Object(j.jsx)(q.a.Label,{children:"Password"}),Object(j.jsx)(q.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsxs)(q.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(q.a.Control,{required:!0,name:"passwordConfirmation",value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)(U.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})};a(70),a(71);var F=function(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("p",{className:"signature",children:"\xa9 Kirk Emmons | 2022"})})},I=function(e){return Object(j.jsxs)("div",{className:"layout",children:[Object(j.jsx)(p,{user:e.user}),Object(j.jsx)("div",{className:"layout-children",children:e.children}),Object(j.jsx)(F,{})]})},L=function(e){var t=e.msgAlert,a=e.setUser,n=Object(s.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1],f=function(){var e=Object(v.a)(g.a.mark((function e(s){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,C(c,b);case 4:n=e.sent,a(n.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),x(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),l(""),m(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)(I,{children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h1",{children:"Login to your Account"}),Object(j.jsxs)("form",{className:"sign-in-form",onSubmit:f,children:[Object(j.jsx)("label",{className:"sign-in-label",children:"Email Address"}),Object(j.jsx)("input",{required:!0,type:"email",name:"email",value:c,placeholder:"Enter Email",onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("label",{className:"sign-in-label",children:"Password"}),Object(j.jsx)("input",{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}}),Object(j.jsx)("button",{className:"sign-in-btn",type:"submit",children:"Login"})]})]})})},D=function(e){var t=e.msgAlert,a=e.clearUser,n=e.user,r=Object(s.useState)(!1),c=Object(i.a)(r,2),l=c[0],u=c[1];return Object(s.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(n);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n||l?Object(j.jsx)(o.a,{to:"/"}):""},B=function(e){var t=e.msgAlert,a=e.user,n=Object(s.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1],f=function(){var e=Object(v.a)(g.a.mark((function e(s){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,A(c,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(""),m(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(q.a,{onSubmit:f,children:[Object(j.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(q.a.Label,{children:"Old password"}),Object(j.jsx)(q.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(q.a.Label,{children:"New Password"}),Object(j.jsx)(q.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(U.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},G=a(15),T=a(2);var _=function(e){var t=Object(o.g)(),a=Object(s.useState)({name:"",roles:"",biography:"",image:"",films:[]}),n=Object(i.a)(a,2),r=n[0],c=n[1],l=function(e){var t=e.target,a=t.name,s=t.value;c(Object(T.a)(Object(T.a)({},r),{},Object(G.a)({},a,s)))},u=function(){var e=Object(v.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,s=r,n=void 0,console.log("user ",s.token),S.a.post(N+"/directors/",{director:n},{headers:{Authorization:"Token ".concat(s.token)}});case 3:t("/directors/");case 4:case"end":return e.stop()}var s,n}),e)})));return function(t){return e.apply(this,arguments)}}(),d=r.name,b=r.roles,m=r.biography,h=r.image;return Object(j.jsxs)(I,{user:e.user,children:[Object(j.jsx)("div",{className:"director-edit",children:Object(j.jsx)("h1",{className:"director-edit-title",children:"Add Director"})}),Object(j.jsx)("div",{className:"edit-form",children:Object(j.jsxs)("form",{onSubmit:u,children:[Object(j.jsxs)("div",{className:"input-section",children:[Object(j.jsx)("label",{className:"label",children:"Name:"}),Object(j.jsx)("input",{className:"input",value:d,name:"name",required:!0,autoFocus:!0,onChange:l})]}),Object(j.jsxs)("div",{className:"input-section",children:[Object(j.jsx)("label",{className:"label",children:"Roles:"}),Object(j.jsx)("input",{className:"input",value:b,name:"roles",require:!0,onChange:l})]}),Object(j.jsxs)("div",{className:"input-section",children:[Object(j.jsx)("label",{className:"label",children:"Biography:"}),Object(j.jsx)("input",{className:"input",rows:10,value:m,name:"biography",required:!0,onChange:l})]}),Object(j.jsxs)("div",{className:"input-section",children:[Object(j.jsx)("label",{className:"label",children:"Image:"}),Object(j.jsx)("input",{className:"input",value:h,name:"image",required:!0,onChange:l})]}),Object(j.jsx)("button",{className:"submit",type:"submit",children:"Submit"})]})})]})},z=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),u=Object(i.a)(r,2),b=u[0],m=u[1],h=function(e){var t=e.heading,a=e.message,s=e.variant,n=Object(l.a)();m((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:a,variant:s,id:n}])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{user:a}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{className:"body",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/sign-up",element:Object(j.jsx)(E,{msgAlert:h,setUser:n})}),Object(j.jsx)(o.b,{path:"/sign-in",element:Object(j.jsx)(L,{msgAlert:h,setUser:n})}),Object(j.jsx)(o.b,{path:"/sign-out",element:Object(j.jsx)(D,{msgAlert:h,clearUser:function(){return n(null)},user:a})}),Object(j.jsx)(o.b,{path:"/change-password",element:Object(j.jsx)(B,{msgAlert:h,user:a})}),Object(j.jsx)(o.b,{path:"/directors/create",element:Object(j.jsx)(_,{user:a})})]})})]})},J=Object(j.jsx)(b.a,{basename:"/directors_client",children:Object(j.jsx)(z,{})});r.a.render(J,document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.a4eed298.chunk.js.map