import{g as $,u as A,a as w,r as o,j as e,L as v}from"./index-DQMI7FNt.js";var N={exports:{}},H="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=H,F=R;function C(){}function S(){}S.resetWarningCache=C;var D=function(){function s(c,l,r,a,h,u){if(u!==F){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}s.isRequired=s;function t(){return s}var n={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:t,element:s,elementType:s,instanceOf:t,node:s,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:S,resetWarningCache:C};return n.PropTypes=n,n};N.exports=D();var _=N.exports;const O=$(_),b=(s="/")=>{const t=A(),n=w();return o.useCallback(()=>{n.pathname!==s?t(s):window.scrollTo({top:0,behavior:"smooth"})},[n.pathname,t,s])},d="/assets/icons-CtEApr2s.svg";function I(s){const[t,n]=o.useState(null),[c,l]=o.useState(!1),[r,a]=o.useState(!1),[h,u]=o.useState(!1),f=b(),p=()=>{localStorage.theme="dark",n("dark"),document.querySelector("html").setAttribute("data-theme",localStorage.theme),a(!1),l(!1),document.body.style.overflow="auto"},j=()=>{localStorage.theme="light",n("light"),document.querySelector("html").setAttribute("data-theme",localStorage.theme),a(!1),l(!1),document.body.style.overflow="auto"},g=()=>{localStorage.removeItem("theme"),n("system");const i=window.matchMedia("(prefers-color-scheme: dark)").matches;document.querySelector("html").setAttribute("data-theme",i?"dark":"light"),a(!1),l(!1),document.body.style.overflow="auto"};o.useEffect(()=>{localStorage.theme==="dark"?p():localStorage.theme==="light"?j():g();const i=window.matchMedia("(prefers-color-scheme: dark)"),x=P=>{t==="system"&&document.querySelector("html").setAttribute("data-theme",P.matches?"dark":"light")};return i.addEventListener("change",x),()=>{i.removeEventListener("change",x)}},[t]);const m=i=>{if(["/about","/projects","/contact"].includes(location.pathname)&&h===!1)return i?{backgroundColor:"white"}:{color:"white",fill:"white"}},[T,k]=o.useState(!1),E=()=>{c?(document.body.style.overflow="auto",l(!1)):(document.body.style.overflow="hidden",k(!0),setTimeout(()=>l(!0),10))};o.useEffect(()=>{if(!c){const i=setTimeout(()=>k(!1),300);return()=>clearTimeout(i)}},[c]);const[L,y]=o.useState(!1),M=()=>{r?a(!1):(y(!0),setTimeout(()=>a(!0),10))};return o.useEffect(()=>{if(!r){const i=setTimeout(()=>y(!1),300);return()=>clearTimeout(i)}},[r]),o.useEffect(()=>{const i=()=>{l(!1),a(!1),document.body.style.overflow="auto"};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),o.useEffect(()=>{const i=()=>{window.scrollY>0?u(!0):u(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),e.jsxs("header",{className:h?"scrolled":"",children:[e.jsxs("nav",{className:"navbar",children:[e.jsxs("button",{onClick:f,className:"navbar-section logo-button",children:[e.jsx("svg",{className:"logo",style:m(),children:e.jsx("use",{href:`${d}#main-icon`})}),e.jsx("span",{style:m(),children:"Fred's Portfolio"})]}),e.jsxs("div",{className:"navbar-section",children:[e.jsxs("div",{className:"navbar-items",children:[e.jsx("li",{className:"navbar-item",children:e.jsx(v,{className:`navbar-link ${s.activeLink==="home"?"link-active":""}`,style:m(),to:"/",children:"Home"})}),e.jsx("li",{className:"navbar-item",children:e.jsx(v,{className:`navbar-link ${s.activeLink==="about"?"link-active":""}`,style:m(),to:"/about",children:"About"})}),e.jsx("li",{className:"navbar-item",children:e.jsx(v,{className:`navbar-link ${s.activeLink==="projects"?"link-active":""}`,style:m(),to:"/projects",children:"Projects"})}),e.jsx("li",{className:"navbar-item",children:e.jsx(v,{className:`navbar-link ${s.activeLink==="contact"?"link-active":""}`,style:m(),to:"/contact",children:"Contact"})}),e.jsxs("li",{className:"navbar-item theme-menu",children:[e.jsx("span",{style:m(),children:"Theme"}),e.jsxs("ul",{className:"theme-submenu",children:[e.jsxs("li",{className:"theme-submenu-item",onClick:()=>j(),children:[e.jsx("svg",{className:t==="light"?"active-mode":"",children:e.jsx("use",{href:`${d}#lightmode-icon`})}),e.jsx("span",{className:t==="light"?"active-mode":"",children:"Light"})]}),e.jsxs("li",{className:"theme-submenu-item",onClick:()=>p(),children:[e.jsx("svg",{className:t==="dark"?"active-mode":"",children:e.jsx("use",{href:`${d}#darkmode-icon`})}),e.jsx("span",{className:t==="dark"?"active-mode":"",children:"Dark"})]}),e.jsxs("li",{className:"theme-submenu-item",onClick:()=>g(),children:[e.jsx("svg",{className:t==="system"?"active-mode":"",children:e.jsx("use",{href:`${d}#systemmode-icon`})}),e.jsx("span",{className:t==="system"?"active-mode":"",children:"System"})]})]})]})]}),e.jsx("button",{className:"filled-button",onClick:()=>window.open("https://www.linkedin.com/in/frederico-silva-727a8b21a/","_blank"),children:"Hire Me!"})]}),e.jsxs("div",{className:"mobile-menu",children:[e.jsx("button",{className:"filled-button",onClick:()=>window.open("https://www.linkedin.com/in/frederico-silva-727a8b21a/","_blank"),children:"Hire Me!"}),e.jsxs("button",{className:`menu-button ${c?"shrink":""}`,onClick:E,children:[e.jsx("span",{style:m(!0)}),e.jsx("span",{style:m(!0)}),e.jsx("span",{style:m(!0)}),e.jsx("span",{style:m(!0)})]})]})]}),T&&e.jsxs("div",{className:`mobile-menu-items ${c?"show":"hide"}`,children:[e.jsx(v,{className:"mobile-menu-link",to:"/",children:"Home"}),e.jsx(v,{className:"mobile-menu-link",to:"/about",children:"About"}),e.jsx(v,{className:"mobile-menu-link",to:"/projects",children:"Projects"}),e.jsx(v,{className:"mobile-menu-link",to:"/contact",children:"Contact"}),e.jsx("span",{className:`mobile-menu-link mobile-menu-theme ${r?"active":""}`,onClick:M,children:"Theme"}),L&&e.jsxs("div",{className:r?"show-theme":"hide",children:[e.jsxs("div",{className:"mobile-menu-theme-item",onClick:()=>j(),children:[e.jsx("svg",{className:t==="light"?"active-mode":"",children:e.jsx("use",{href:`${d}#lightmode-icon`})}),e.jsx("span",{className:t==="light"?"active-mode":"",children:"Light"})]}),e.jsxs("div",{className:"mobile-menu-theme-item",onClick:()=>p(),children:[e.jsx("svg",{className:t==="dark"?"active-mode":"",children:e.jsx("use",{href:`${d}#darkmode-icon`})}),e.jsx("span",{className:t==="dark"?"active-mode":"",children:"Dark"})]}),e.jsxs("div",{className:"mobile-menu-theme-item",onClick:()=>g(),children:[e.jsx("svg",{className:t==="system"?"active-mode":"",children:e.jsx("use",{href:`${d}#systemmode-icon`})}),e.jsx("span",{className:t==="system"?"active-mode":"",children:"System"})]})]})]})]})}I.propTypes={activeLink:O.string};const W=(s,t=100)=>{const[n,c]=o.useState(!1),[l,r]=o.useState(!1),a=o.useCallback(()=>{if(!s.current||l)return;const h=s.current.getBoundingClientRect().top,u=s.current.getBoundingClientRect().height;h<window.innerHeight-t&&h>-u&&(c(!0),r(!0),window.removeEventListener("scroll",a),window.removeEventListener("resize",a))},[s,t,l]);return o.useEffect(()=>(a(),l||(window.addEventListener("scroll",a),window.addEventListener("resize",a)),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}),[a,l]),n},q="/assets/skills-images-CkmXRt6K.svg";function Y(){const s=new Date().getFullYear(),t=b(),n=b("/about"),c=b("/projects"),l=b("/contact");return e.jsx("footer",{className:"footer-container",children:e.jsxs("div",{className:"footer-inner-container",children:[e.jsx("button",{className:"footer-navlink",onClick:t,children:e.jsx("svg",{className:"footer-main-icon",children:e.jsx("use",{href:`${d}#main-icon`})})}),e.jsxs("div",{className:"footer-navlink-container",children:[e.jsx("button",{className:"footer-navlink",onClick:t,children:"Home"}),e.jsx("button",{className:"footer-navlink",onClick:n,children:"About"}),e.jsx("button",{className:"footer-navlink",onClick:c,children:"Projects"}),e.jsx("button",{className:"footer-navlink",onClick:l,children:"Contact"})]}),e.jsxs("div",{className:"footer-credits",children:[e.jsx("svg",{className:"footer-react-icon",children:e.jsx("use",{href:`${q}#react-icon`})}),e.jsx("p",{children:"Made with React JS"}),e.jsx("p",{children:`© ${s} All rights reserved by Frederico Silva`})]})]})})}function B(){const{pathname:s}=w();o.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),document.body.style.overflow="auto"},[s])}function V(){const[s,t]=o.useState(0),n=307.919,c=o.useCallback(()=>{try{const r=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),a=window.innerHeight,h=window.scrollY,u=r-a,p=h/u*n;t(p)}catch(r){console.error("Error updating fill amount:",r)}},[n]);o.useEffect(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[c]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("button",{className:`go-up-container ${s>0?"active-progress":""}`,onClick:l,children:[e.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:e.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",style:{strokeDasharray:n,strokeDashoffset:-s}})}),e.jsx("svg",{className:"go-up-icon",children:e.jsx("use",{href:`${d}#arrow-icon`})})]})}export{Y as F,V as G,I as N,O as P,q as R,B as S,d as i,W as u};
