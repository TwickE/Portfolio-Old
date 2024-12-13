import{r as c,j as e}from"./index-Clo57v3E.js";import{P as i,u as p,i as j}from"./GoUp-CHv_He52.js";import{S as f}from"./sweetalert2.esm.all-D3pEHXw3.js";function n(t){const s=c.useRef(null),o=p(s,50);return e.jsx("div",{ref:s,className:o?"fadeInRight":"no-animation",children:e.jsxs("a",{className:"contact-badge",href:t.link,target:"_blank",children:[e.jsx("span",{children:e.jsx("svg",{children:e.jsx("use",{href:`${j}#${t.icon}`})})}),e.jsxs("div",{className:"contact-badge-text-container",children:[e.jsx("h6",{children:t.title}),e.jsx("h4",{children:t.text})]})]})})}n.propTypes={link:i.string.isRequired,icon:i.string.isRequired,title:i.string.isRequired,text:i.string.isRequired};function k(t){const s=c.useRef(null),o=p(s,50),[r,l]=c.useState(!1),x={backgroundColor:t.backgroundColor?"var(--background-color2)":"var(--background-color1)"},h=async d=>{var u;if(d.preventDefault(),!r)try{l(!0);const a=new FormData(d.target),b=Object.fromEntries(a),m=await fetch("https://portfolio-server-6bn8.onrender.com/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(b)}),g=await m.json();if(!m.ok)throw new Error("Network response was not ok");g.success&&(await f.fire({title:"Success!",text:"Message sent successfully!",icon:"success",color:"var(--text-color)",background:"var(--accent-color)",buttonsStyling:!1,customClass:{confirmButton:"filled-button"},confirmButtonText:"Ok"}),(u=s.current)==null||u.reset())}catch(a){console.error("Error submitting form:",a),await f.fire({title:"Error!",text:"Failed to send message. Please try again.",icon:"error",color:"var(--text-color)",background:"var(--accent-color)",buttonsStyling:!1,customClass:{confirmButton:"filled-button"},confirmButtonText:"Ok"})}finally{l(!1)}};return e.jsx("section",{style:x,className:"contact-conatiner",children:e.jsxs("div",{className:"contact-inner-container",children:[e.jsxs("form",{ref:s,onSubmit:h,className:o?"fadeInLeft":"no-animation",children:[e.jsx("h2",{children:"Let's Talk!"}),e.jsx("p",{children:"I design and code beautifully simple things and i love what i do. Just simple like that!"}),e.jsxs("div",{className:"form-devide-inputs",children:[e.jsx("input",{className:"form-inputs",type:"text",name:"First Name",placeholder:"First Name",required:!0}),e.jsx("input",{className:"form-inputs",type:"text",name:"Last Name",placeholder:"Last Name",required:!0})]}),e.jsxs("div",{className:"form-devide-inputs",children:[e.jsx("input",{className:"form-inputs",type:"email",name:"Email Adress",placeholder:"Email Adress",required:!0}),e.jsx("input",{className:"form-inputs",type:"tel",pattern:"[0-9+ ]*",name:"Phone Number",placeholder:"Phone Number",required:!0})]}),e.jsx("textarea",{className:"form-textarea",name:"Message",placeholder:"Message",required:!0}),e.jsx("button",{className:"filled-button form-button",disabled:r,children:r?"Sending...":"Send Message"})]}),e.jsxs("div",{className:"contact-badges-container",children:[e.jsx(n,{link:"mailto: fredericosilva2002@hotmail.com",icon:"mail-icon",title:"Email",text:"fredericosilva2002@hotmail.com"}),e.jsx(n,{link:"https://www.linkedin.com/in/frederico-silva-727a8b21a/",icon:"linkedin-icon",title:"LinkedIn",text:"Frederico Silva"}),e.jsx(n,{link:"https://github.com/TwickE",icon:"github-icon",title:"Github",text:"@TwickE"}),e.jsx(n,{link:"https://codepen.io/TwickE",icon:"codepen-icon",title:"CodePen",text:"@TwickE"})]})]})})}k.propTypes={backgroundColor:i.bool.isRequired};export{k as C};
