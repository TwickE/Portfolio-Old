import{r as s,j as e,L as d}from"./index-JiM7_aer.js";import{P as u,i as l}from"./GoUp-B7N1gxWk.js";const m="/Portfolio/assets/breadcrumbBackground-DgNyymMx.webp";function b(t){const a={backgroundImage:`url(${m})`},n=s.useRef(null),[c,i]=s.useState(0),r=s.useCallback(()=>{if(n.current){const{height:o}=n.current.getBoundingClientRect();i(o-100)}},[]);return s.useEffect(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[r]),e.jsxs(e.Fragment,{children:[e.jsxs("section",{ref:n,style:a,className:"breadcrumb-container",children:[e.jsx("h1",{children:t.location}),e.jsxs("div",{className:"breadcrumb-path-container",children:[e.jsx(d,{className:"breadcrumb-link",to:"/",children:"Home"}),e.jsx("svg",{children:e.jsx("use",{href:`${l}#arrow-icon`})}),e.jsx("span",{children:t.location})]})]}),e.jsx("span",{style:{height:`${c}px`,display:"block"}})]})}b.propTypes={location:u.string.isRequired};export{b as B};
