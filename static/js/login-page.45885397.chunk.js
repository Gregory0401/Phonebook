(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[2],{115:function(e,t,a){e.exports={label:"LoginView_label__8gyhF",formInput:"LoginView_formInput__3K4Zv",contactForm:"LoginView_contactForm__1GzJD",title:"LoginView_title__KnQI_"}},122:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var c=a(10),s=a(0),n=a(11),o=a(38),l=a(23),r=a(33),i=a(115),b=a.n(i),u=a(18),j=a(1);function m(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),a=t[0],i=t[1],m=Object(s.useState)(""),p=Object(c.a)(m,2),d=p[0],O=p[1],h=Object(s.useState)(null),f=Object(c.a)(h,2),w=f[0],_=f[1],x=Object(n.b)(),g=Object(n.c)(u.a),v=Object(n.c)(u.c);Object(s.useEffect)((function(){_(g)}),[g]);var N=function(e){var t=e.target,a=t.name,c=t.value;switch(a){case"email":return i(c);case"password":return O(c);default:return}};return v?Object(j.jsx)(o.a,{to:"/contacts"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:b.a.title,children:"Log In"}),Object(j.jsx)("div",{className:b.a.contactForm,children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(Object(r.b)({email:a,password:d})),l.b.success("Welcome, ".concat(a,"!"),{position:"top-center",autoClose:2500}),i(""),O("")},className:b.a.form,children:[Object(j.jsxs)("label",{className:b.a.label,children:["Mail",Object(j.jsx)("input",{className:b.a.formInput,type:"email",name:"email",value:a,placeholder:"Your Email",onChange:N})]}),Object(j.jsxs)("label",{className:b.a.label,children:["Password",Object(j.jsx)("input",{className:b.a.formInput,type:"password",name:"password",value:d,onChange:N,placeholder:"Your Password"})]}),Object(j.jsx)("button",{type:"submit",disabled:!a&&!d&&!w,children:"Submit"})]})})]})}}}]);
//# sourceMappingURL=login-page.45885397.chunk.js.map