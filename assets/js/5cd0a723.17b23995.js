"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8993],{2121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(5893),s=t(1151);const i={title:"Use Another zrok Instance",sidebar_label:"Instance Config"},r=void 0,c={id:"guides/self-hosting/instance-configuration",title:"Use Another zrok Instance",description:"This guide is relevant if you are self-hosting or using a friend's zrok instance instead of using zrok-as-a-service from zrok.io.",source:"@site/../docs/guides/self-hosting/instance-configuration.mdx",sourceDirName:"guides/self-hosting",slug:"/guides/self-hosting/instance-configuration",permalink:"/docs/guides/self-hosting/instance-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/instance-configuration.mdx",tags:[],version:"current",frontMatter:{title:"Use Another zrok Instance",sidebar_label:"Instance Config"},sidebar:"tutorialSidebar",previous:{title:"OAuth Public Frontend Configuration",permalink:"/docs/guides/self-hosting/oauth/configuring-oauth"},next:{title:"The Drives CLI",permalink:"/docs/guides/drives/cli"}},a={},d=[];function l(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This guide is relevant if you are self-hosting or using a friend's ",(0,o.jsx)(n.code,{children:"zrok"})," instance instead of using zrok-as-a-service from ",(0,o.jsx)(n.code,{children:"zrok.io"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"zrok"})," ",(0,o.jsx)(n.em,{children:"command"})," on your omputer uses a ",(0,o.jsx)(n.code,{children:"zrok"})," ",(0,o.jsx)(n.em,{children:"instance"})," over the network."]}),"\n",(0,o.jsxs)(n.p,{children:["The default instance API endpoint for the ",(0,o.jsx)(n.code,{children:"zrok"})," command is ",(0,o.jsx)(n.code,{children:"api.zrok.io"}),". Set the API endpoint to another instance's API endpoint:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"zrok config set apiEndpoint https://zrok.example.com\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"[WARNING]: unable to open environment metadata; ignoring\n\nzrok configuration updated\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"WARNING"})," about ",(0,o.jsx)(n.code,{children:"environment metadata"})," is expected when you run ",(0,o.jsx)(n.code,{children:"zrok config set"})," before ",(0,o.jsx)(n.code,{children:"zrok enable"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"zrok status"})," command to inspect the state of your local ",(0,o.jsx)(n.em,{children:"environment"}),". ",(0,o.jsx)(n.code,{children:"zrok"})," refers to each shell where you install and ",(0,o.jsx)(n.code,{children:"enable"})," a copy of ",(0,o.jsx)(n.code,{children:"zrok"})," as an ",(0,o.jsx)(n.em,{children:"environment"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"zrok status\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"Config:\n\n CONFIG       VALUE                      SOURCE \n apiEndpoint  https://zrok.mydomain.com  config \n\n[WARNING]: Unable to load your local environment!\n\nTo create a local environment use the zrok enable command.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"zrok status"})," command shows the configured API service that your environment is using, as well as the ",(0,o.jsx)(n.code,{children:"SOURCE"})," where the setting was retrieved. In this case, ",(0,o.jsx)(n.code,{children:"config"})," means that the setting was set into the environment using the ",(0,o.jsx)(n.code,{children:"zrok config"})," command."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);