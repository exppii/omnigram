/*! For license information please see a51af684.062903ac.js.LICENSE.txt */
"use strict";(self.webpackChunkomnigram_docs=self.webpackChunkomnigram_docs||[]).push([[764],{5245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(1527),r=n(8672);const s={title:"Quick Start",sidebar_position:1},a=void 0,o={id:"overviews/getting_start",title:"Quick Start",description:"Dependencies",source:"@site/docs/overviews/getting_start.md",sourceDirName:"overviews",slug:"/overviews/getting_start",permalink:"/docs/overviews/getting_start",draft:!1,unlisted:!1,editUrl:"https://github.com/LinwoodDev/butterfly/edit/develop/docs/docs/overviews/getting_start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overviews",permalink:"/docs/overviews"},next:{title:"Support This Project",permalink:"/docs/overviews/support"}},l={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Docker Startup",id:"docker-startup",level:2},{value:"Try Mobile UI",id:"try-mobile-ui",level:2},{value:"Download App",id:"download-app",level:3},{value:"Login App",id:"login-app",level:3},{value:"Scan local files",id:"scan-local-files",level:3},{value:"Starting reading",id:"starting-reading",level:3},{value:"What next\uff1f",id:"what-next",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to ",(0,i.jsx)(t.a,{href:"../install/requirements",children:"environment requirements"})," for details."]}),"\n",(0,i.jsx)(t.h2,{id:"docker-startup",children:"Docker Startup"}),"\n",(0,i.jsxs)(t.p,{children:["By default, after docker starts up it will create a default admin account ",(0,i.jsx)(t.code,{children:"admin"})," with the default password ",(0,i.jsx)(t.code,{children:"123456"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The default password is ",(0,i.jsx)(t.code,{children:"123456"}),". You can change it after logging in later, or by setting the ",(0,i.jsx)(t.code,{children:"OMNI_PASSWORD"})," environment variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"my_local_docs_path"})," should be modified to your actual directory path that stores Epubs and PDFs. After logging in, you can configure scanning strategies to build file indices."]}),"\n",(0,i.jsxs)(t.li,{children:["If you need persistent running, please refer to ",(0,i.jsx)(t.a,{href:"../install/best_practice",children:"Best Practices for Deployment"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# Replace my_local_docs_path below with your actual documents directory\ndocker run -v <my_local_docs_path>:/docs -p 8080:80 lxpio/omnigram-server:v0.1.2-alpine\n"})}),"\n",(0,i.jsx)(t.h2,{id:"try-mobile-ui",children:"Try Mobile UI"}),"\n",(0,i.jsx)(t.h3,{id:"download-app",children:"Download App"}),"\n",(0,i.jsx)(t.p,{children:"The mobile app can be downloaded from:"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Google Play"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ","App Store"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(t.a,{href:"https://github.com/nexptr/omnigram",children:"Github (apk)"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"login-app",children:"Login App"}),"\n",(0,i.jsx)(t.p,{children:"//TODO add login page"}),"\n",(0,i.jsx)(t.h3,{id:"scan-local-files",children:"Scan local files"}),"\n",(0,i.jsx)(t.p,{children:"//TODO add scan page"}),"\n",(0,i.jsx)(t.h3,{id:"starting-reading",children:"Starting reading"}),"\n",(0,i.jsx)(t.p,{children:"//TODO add reading page"}),"\n",(0,i.jsx)(t.h2,{id:"what-next",children:"What next\uff1f"}),"\n",(0,i.jsxs)(t.p,{children:["The above documentation is only intended for quick start deployments and trials. If you expect full service capabilities and user experiences from Omnigram, please refer to ",(0,i.jsx)(t.a,{href:"../install/best_practice",children:"Best Practices for Deployment"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,t,n)=>{var i=n(959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},1527:(e,t,n)=>{e.exports=n(3354)},8672:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(959);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);