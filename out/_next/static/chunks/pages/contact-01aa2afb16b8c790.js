(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{8105:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return c(9144)}])},9144:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(4924),f=c(6042),g=c(9396),h=c(4051),i=c.n(h),j=c(5893),k=c(7294),l=c(2745),m=c(1077),n=c(4173);c(993);var o=function(){var a,b=(0,k.useState)({fullName:"",email:"",phone:"",message:""}),c=b[0],h=b[1],o=function(a){var b=a.target,d=b.name,i=b.value;h((0,g.Z)((0,f.Z)({},c),(0,e.Z)({},d,i)))},p=(a=(0,d.Z)(i().mark(function a(b){var d,e;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b.preventDefault(),n.Am.info("Sending email...",{position:"bottom-left"}),a.prev=2,a.next=5,fetch("/api/sendMail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:if(!(d=a.sent).ok){a.next=10;break}n.Am.success("Email sent successfully!",{position:"bottom-left"}),h({fullName:"",email:"",phone:"",message:""}),a.next=14;break;case 10:return a.next=12,d.json();case 12:e=a.sent,n.Am.error("".concat(e.error));case 14:a.next=19;break;case 16:a.prev=16,a.t0=a.catch(2),console.error("Error submitting form:",a.t0);case 19:case"end":return a.stop()}},a,null,[[2,16]])})),function(b){return a.apply(this,arguments)});return(0,j.jsxs)(m.Z,{children:[(0,j.jsx)(l.Z,{pageName:"Contact Us",img:"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),(0,j.jsxs)("section",{className:"contact-info-area rel z-1 py-130 rpt-90 rpb-100",children:[(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("div",{className:"row align-items-center",children:[(0,j.jsx)("div",{className:"col-lg-8",children:(0,j.jsxs)("div",{className:"contact-info-wrap rmb-75 wow fadeInUp delay-0-2s",children:[(0,j.jsxs)("div",{className:"section-title mb-25",children:[(0,j.jsx)("span",{className:"sub-title-two",children:"Need Any Helps ?"}),(0,j.jsx)("h2",{children:"Contact For Information"})]}),(0,j.jsx)("p",{children:"We’re here to bring your ideas to life. Whether you’re looking to build cutting-edge software, need technical support, or simply want to explore how our solutions can fit your needs, we’d love to hear from you."}),(0,j.jsxs)("div",{className:"row no-gap mt-50",children:[(0,j.jsx)("div",{className:"col-md-4 col-sm-6",children:(0,j.jsxs)("div",{className:"contact-info-box",children:[(0,j.jsx)("i",{className:"fas fa-map-marker-alt"}),(0,j.jsx)("h4",{children:"Locations"}),(0,j.jsx)("span",{children:"BahalGarh, khewra, Road, Sonipat, Haryana 131021"})]})}),(0,j.jsx)("div",{className:"col-md-4 col-sm-6",children:(0,j.jsxs)("div",{className:"contact-info-box",children:[(0,j.jsx)("i",{className:"far fa-envelope"}),(0,j.jsx)("h4",{children:"Email Us"}),(0,j.jsx)("span",{children:(0,j.jsx)("a",{href:"mailto:info@apexpath.com",children:"info@apexpath.com"})})]})}),(0,j.jsx)("div",{className:"col-md-4 col-sm-6",children:(0,j.jsxs)("div",{className:"contact-info-box",children:[(0,j.jsx)("i",{className:"fas fa-phone-volume"}),(0,j.jsx)("h4",{children:"Hotlines"}),(0,j.jsx)("span",{children:(0,j.jsx)("a",{href:"callto:+91 9991310732",children:"+91 9991310732"})})]})})]})]})}),(0,j.jsx)("div",{className:"col-lg-4",children:(0,j.jsx)("div",{className:"contact-page-image wow fadeInUp delay-0-4s",children:(0,j.jsx)("img",{src:"https://omsoftsolution.com//wp-content/uploads/2023/07/contact.gif",alt:"Contact Page"})})})]})}),(0,j.jsx)("span",{className:"bg-text",children:"coach"})]}),(0,j.jsx)("section",{className:"contact-form-area wow fadeInUp delay-0-2s",children:(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("form",{onSubmit:p,id:"contact-form",className:"contact-form p-50 z-1 rel",name:"contact-form",method:"post",children:[(0,j.jsxs)("div",{className:"section-title text-center mb-50",children:[(0,j.jsx)("span",{className:"sub-title-two",children:"Send Us Message"}),(0,j.jsx)("h2",{children:"Have Any Questions! Say Hello"})]}),(0,j.jsxs)("div",{className:"row mt-25",children:[(0,j.jsx)("div",{className:"col-md-4",children:(0,j.jsx)("div",{className:"form-group",children:(0,j.jsx)("input",{type:"text",id:"fullName",name:"fullName",className:"form-control",onChange:o,value:c.fullName,placeholder:"Full Name",required:""})})}),(0,j.jsx)("div",{className:"col-md-4",children:(0,j.jsx)("div",{className:"form-group",children:(0,j.jsx)("input",{type:"email",id:"email-address",name:"email",onChange:o,className:"form-control",value:c.email,placeholder:"Email Address",required:""})})}),(0,j.jsx)("div",{className:"col-md-4",children:(0,j.jsx)("div",{className:"form-group",children:(0,j.jsx)("input",{type:"text",id:"phone",name:"phone",className:"form-control",onChange:o,value:c.phone,placeholder:"Phone Number",required:""})})}),(0,j.jsx)("div",{className:"col-md-12",children:(0,j.jsx)("div",{className:"form-group",children:(0,j.jsx)("textarea",{name:"message",id:"message",onChange:o,className:"form-control",value:c.message,rows:4,placeholder:"Write Message",required:""})})}),(0,j.jsx)("div",{className:"col-md-12",children:(0,j.jsx)("div",{className:"form-group text-center mb-0",children:(0,j.jsxs)("button",{type:"submit",className:"theme-btn",children:["send Message ",(0,j.jsx)("i",{className:"fas fa-arrow-right"})]})})})]})]})})}),(0,j.jsx)("div",{className:"contact-page-map",children:(0,j.jsx)("div",{className:"our-location",children:(0,j.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55855.70949897748!2d77.096798!3d28.958263000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dae77eed4d41f%3A0x78a0bc68e5af467!2sAshoka%20University!5e0!3m2!1sen!2sin!4v1731563645341!5m2!1sen!2sin",height:975,style:{border:0,width:"100%"},allowFullScreen:"",loading:"lazy"})})})]})};b.default=o},2745:function(a,b,c){"use strict";var d=c(5893),e=c(1664),f=c.n(e),g=function(a){var b=a.pageTitle,c=a.pageName,e=a.img;return(0,d.jsxs)("section",{className:"page-banner-area rel z-1 text-white text-center",style:{backgroundImage:"url(".concat(e||"assets/images/banner.jpg",")")},children:[(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"banner-inner rpt-10",children:[(0,d.jsx)("h2",{className:"page-title wow fadeInUp delay-0-2s",children:b||c}),(0,d.jsx)("nav",{"aria-label":"breadcrumb",children:(0,d.jsxs)("ol",{className:"breadcrumb wow fadeInUp delay-0-4s",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)(f(),{href:"/",children:(0,d.jsx)("a",{children:"home"})})}),(0,d.jsx)("li",{className:"breadcrumb-item active",children:c})]})})]})}),(0,d.jsx)("img",{className:"circle-one",src:"assets/images/shapes/circle-one.png",alt:"Circle"}),(0,d.jsx)("img",{className:"circle-two",src:"assets/images/shapes/circle-two.png",alt:"Circle"})]})};b.Z=g},993:function(){}},function(a){a.O(0,[9208,1077,9774,2888,179],function(){var b;return a(a.s=8105)}),_N_E=a.O()}])