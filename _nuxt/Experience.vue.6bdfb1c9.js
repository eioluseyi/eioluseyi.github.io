import{_ as b}from"./PageTitle.294f2c1c.js";import{_ as v}from"./nuxt-link.465ec787.js";import{f as m,o as s,c as l,a as e,t as a,d as n,j as _,w as c,A as w,_ as j,n as k,r as E,b as r,F as L,z as S,s as T}from"./entry.69847e23.js";import{_ as $}from"./ContentWrapper.6d253226.js";import{_ as C}from"./LinkButton.11a4ab10.js";const F={class:"pb-10"},V={class:"flex items-center gap-2 text-xs text-slate-400"},I=["src","alt"],q={class:"flex items-center gap-1 uppercase"},B={class:"text-slate-200 font-bold"},P=e("span",null,"•",-1),R={class:"font-bold italic"},N={class:"text-xs min-[400px]:ml-[50px] max-[400px]:ml-[5px] max-[400px]:mt-1"},D=e("i",{class:"gg-external [--ggs:0.5]"},null,-1),J=m({__name:"ExperienceItem",props:{item:{}},setup(p){const i=t=>{const o=t.target;o&&(o.src="/favicon.ico")};return(t,o)=>{const d=v;return s(),l("div",F,[e("div",V,[e("img",{class:"w-11 aspect-square rounded-full object-cover border-2 border-slate-300",src:t.item.companyLogo,alt:`${t.item.company} logo`,onError:i},null,40,I),e("div",null,[e("div",q,[e("span",B,a(t.item.company),1),P,e("span",null,a(t.item.from)+" - "+a(t.item.to),1)]),e("div",R,a(t.item.jobTitle),1)])]),e("div",N,[n(a(t.item.description)+" ",1),t.item.projectUrl?(s(),_(d,{key:0,class:"inline-flex gap-1 items-center lowercase font-bold !text-slate-300",href:t.item.projectUrl||"#",target:"_blank"},{default:c(()=>[n(" View "),D]),_:1},8,["href"])):w("",!0)])])}}});const U={},z={class:"button-item rounded-full flex items-center justify-center min-[400px]:px-5 min-[400px]:py-4 max-[400px]:px-3 max-[400px]:py-2 max-[400px]:text-sm text-slate-300 border-2 bg-[#1D212A] border-current transition-all duration-500 ease-out hover:tracking-widest whitespace-nowrap font-bold"};function A(p,i){return s(),l("button",z,[k(p.$slots,"default",{},void 0,!0)])}const K=j(U,[["render",A],["__scopeId","data-v-e68fa4b1"]]),W=[{from:"2022",to:"2023",company:"Crescat AS",jobTitle:"Frontend Engineer",companyLogo:"https://res.cloudinary.com/dfe4nl5xi/image/upload/v1691882327/wenhw8vhbqs2whsgkicj.jpg",description:"Migrated an event management system, serving over 25k customers from Vue2 to Vue3 with TypeScript support and Tailwind.",projectUrl:"https://crescat.io/"},{from:"2021",to:"Present",company:"Habari Pay",jobTitle:"Frontend Web Developer",companyLogo:"https://res.cloudinary.com/dfe4nl5xi/image/upload/v1691890917/5uJELPrgpV2Fzh0_ERkxwLAI7G1VX3RyJMMz3nG-4KFCdIjK1vpTSvi7f5aQElKFjkKg_ewagc9.png",description:"Contributed to the frontend development of a payment gateway system with ReactJs and NextJs, including UI design, logic optimization, and marketing website development.",projectUrl:"https://squadco.com/"},{from:"2018",to:"2021",company:"Zhaptek",jobTitle:"Frontend Developer",companyLogo:"https://res.cloudinary.com/dfe4nl5xi/image/upload/v1691890953/picture_rvfqcv.jpg",description:"Worked majorly with VueJs to develope a POS solution, among other projects. Contributed to product design and architecture, and brainstormed with design team."},{from:"2017",to:"2018",company:"Syscomptech",jobTitle:"Web Developer",companyLogo:"https://res.cloudinary.com/dfe4nl5xi/image/upload/v1691890986/wqbrmcyqdjxsnq3kmvas.jpg",description:"Built finance applications, refactored a logistics application, improved client websites, and maintained the Syscomptech website."}],M={class:"flex flex-col text-slate-500"},G=e("div",{class:"min-[600px]:text-sm max-[600px]:text-xs text-slate-400 my-5"},[n(" Frontend Engineer with 5+ years of experience in building visually captivating and "),e("span",{class:"whitespace-nowrap"},"high-quality"),n(" web experiences."),e("span",{class:"max-[400px]:hidden"},[e("br"),n("Proven ability to work independently and as part of a team, meeting deadlines under pressure.")])],-1),X={class:"py-"},H={class:"w-full py-4"},O=e("i",{class:"gg-software-download mr-2"},null,-1),ne=m({__name:"Experience",setup(p){const i=E(W),t=()=>{const o=document.createElement("a");o.href="/Resume.pdf",o.download="Imolorhe_Emmanuel_Resume.pdf",o.target="_blank",o.click(),o.remove()};return(o,d)=>{const u=b,f=J,x=$,g=K,h=C;return s(),l("div",M,[r(u,null,{default:c(()=>[n("Experience")]),_:1}),G,r(x,{class:""},{default:c(()=>[e("div",X,[(s(!0),l(L,null,S(T(i),(y,Q)=>(s(),_(f,{item:y},null,8,["item"]))),256))])]),_:1}),e("div",H,[r(g,{class:"w-full bottom-full mb-2",onClick:t},{default:c(()=>[O,n(" Resume ")]),_:1}),r(h,{label:"Projects",href:"/projects"})])])}}});export{ne as _};