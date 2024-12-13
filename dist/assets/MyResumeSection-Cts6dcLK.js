import{r as s,j as e}from"./index-DQMI7FNt.js";import{u as m,R as M,P as l,i as N}from"./GoUp-P32V6-ly.js";import{skills as $,education as E,work as I}from"./data--cyEcxDx.js";import{O as q}from"./OutlineButton-DG3K8Tca.js";const P="/assets/CV-BO8Z8kOm.pdf",W=()=>s.useCallback(async()=>{try{const t={suggestedName:"CV_Frederico_Silva.pdf",types:[{description:"PDF Files",accept:{"application/pdf":[".pdf"]}}]},c=await(await window.showSaveFilePicker(t)).createWritable(),d=await(await fetch(P)).blob();await c.write(d),await c.close()}catch(t){console.error("Error saving file:",t)}},[]),j=s.forwardRef((o,t)=>{const r=s.useRef(null),c=m(r,100);return e.jsx("div",{ref:r,className:c?"fadeInLeft":"no-animation",children:e.jsxs("a",{href:o.skillLink,className:"skill-badge",target:"_blank",ref:t,"aria-label":`${o.skillName} skill`,children:[e.jsx("svg",{children:e.jsx("use",{href:`${M}#${o.skillImage}`})}),e.jsx("h3",{children:o.skillName})]})})});j.displayName="SkillBadge";j.propTypes={skillLink:l.string.isRequired,skillImage:l.string.isRequired,skillName:l.string.isRequired};function H(o){const t=s.useRef(null),r=s.useRef(null),c=m(r,20),h=s.useRef(null),d=m(h,20),f={backgroundColor:o.backgroundColor?"var(--background-color2)":"var(--background-color1)"},x=s.useCallback(i=>{const u=t.current,k=u.getBoundingClientRect(),p=i.clientX-k.left,y=i.clientY-k.top;u.style.setProperty("--x",`${p}px`),u.style.setProperty("--y",`${y}px`)},[]),b=s.useCallback(()=>{const i=t.current;i&&(i.style.setProperty("--x","-999px"),i.style.setProperty("--y","-999px"))},[]);return e.jsx("section",{style:f,className:"my-skills-conatiner",children:e.jsxs("div",{className:"my-skills-inner-conatiner",children:[e.jsx("div",{ref:r,className:c?"fadeInUp":"no-animation",children:e.jsx("h2",{children:"My Skills"})}),e.jsx("div",{ref:h,className:d?"fadeInUp":"no-animation",children:e.jsx("p",{children:"I can put your ideas and thus your wishes in the form of a unique solution that can help you achieve your goals."})}),e.jsx("div",{className:"badges-container",ref:t,onMouseEnter:b,onMouseMove:x,role:"list","aria-label":"Skills list",children:$.map((i,u)=>e.jsx(j,{skillLink:i.skillLink,skillName:i.skillName,skillImage:i.skillImage},u))})]})})}H.propTypes={backgroundColor:l.bool.isRequired};const R=s.forwardRef((o,t)=>e.jsxs("div",{className:"resume-card",children:[e.jsx("object",{type:"image/svg+xml",data:N,style:{display:"none"}}),e.jsx("span",{className:"resume-card-icon",ref:t,children:e.jsx("svg",{children:e.jsx("use",{href:`${N}#${o.icon}`})})}),e.jsxs("div",{className:"resume-card-text",children:[e.jsx("h5",{children:o.date}),e.jsx("h4",{children:o.title}),e.jsx("h6",{children:o.location})]})]}));R.displayName="ResumeCard";R.propTypes={icon:l.string.isRequired,date:l.string.isRequired,title:l.string.isRequired,location:l.string.isRequired};function F(o){const t=s.useRef(null),r=s.useRef(null),[c,h]=s.useState(0),d=s.useRef(null),f=s.useRef(null),[x,b]=s.useState(0),i=W(),u=s.useRef(null),k=m(u,20),p=s.useRef(null),y=m(p,50),w=s.useRef(null),V=m(w,50),C=s.useRef(null),B=m(C,50),S={backgroundColor:o.backgroundColor?"var(--background-color2)":"var(--background-color1)"},v=s.useCallback(()=>{try{if(t.current&&r.current){const n=t.current.getBoundingClientRect(),g=r.current.getBoundingClientRect().top+window.scrollY-(n.top+window.scrollY);h(g)}if(d.current&&f.current){const n=d.current.getBoundingClientRect(),g=f.current.getBoundingClientRect().top+window.scrollY-(n.top+window.scrollY);b(g)}}catch(n){console.error("Error calculating heights:",n)}},[]);return s.useEffect(()=>{const n=new ResizeObserver(()=>{v()});return[t.current,r.current,d.current,f.current].filter(Boolean).forEach(g=>n.observe(g)),()=>{n.disconnect()}},[v]),e.jsx("section",{style:S,className:"my-resume-container",children:e.jsxs("div",{className:"my-resume-inner-container",children:[e.jsx("div",{ref:u,className:k?"fadeInUp":"no-animation",children:e.jsx("h2",{children:"My Resume"})}),e.jsxs("div",{className:"resume-container",children:[e.jsxs("div",{ref:p,className:`resume-small-container ${y?"fadeInLeft":"no-animation"}`,children:[e.jsx("h3",{children:"Education"}),e.jsx("div",{className:"resume-data-container",style:{"--education-bar-height":`${c}px`},children:E.map((n,a)=>e.jsx(R,{icon:n.icon,date:n.date,title:n.title,location:n.place,ref:a===0?t:a===E.length-1?r:null},a))})]}),e.jsxs("div",{ref:w,className:`resume-small-container ${V?"fadeInRight":"no-animation"}`,children:[e.jsx("h3",{children:"Work Experience"}),e.jsx("div",{className:"resume-data-container",style:{"--work-bar-height":`${x}px`},children:I.map((n,a)=>e.jsx(R,{icon:"work-icon",date:n.date,title:n.title,location:n.place,ref:a===0?d:a===I.length-1?f:null},a))})]})]}),e.jsx("div",{ref:C,className:B?"fadeInUp":"no-animation",style:{width:"fit-content",margin:"auto"},children:e.jsx(q,{buttonProps:{buttonSmall:!1,startImage:!1,text:"Download CV",endImage:!0,endImageSrc:"download-icon",clickFunction:i}})})]})})}F.propTypes={backgroundColor:l.bool.isRequired};export{H as M,F as a,W as u};
