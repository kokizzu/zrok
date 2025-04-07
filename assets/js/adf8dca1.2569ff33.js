"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8051],{7773:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"guides/self-hosting/instance-configuration","title":"Use Another zrok Instance","description":"This guide is relevant if you are self-hosting or using a friend\'s zrok instance instead of using zrok-as-a-service from zrok.io.","source":"@site/versioned_docs/version-0.4/guides/self-hosting/instance-configuration.mdx","sourceDirName":"guides/self-hosting","slug":"/guides/self-hosting/instance-configuration","permalink":"/docs/0.4/guides/self-hosting/instance-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/versioned_docs/version-0.4/guides/self-hosting/instance-configuration.mdx","tags":[],"version":"0.4","frontMatter":{"title":"Use Another zrok Instance","sidebar_label":"Instance Config"},"sidebar":"tutorialSidebar","previous":{"title":"OAuth Public Frontend Configuration","permalink":"/docs/0.4/guides/self-hosting/oauth/configuring-oauth"},"next":{"title":"Invitations","permalink":"/docs/0.4/guides/self-hosting/self-service-invite"}}');var s=o(4848),i=o(8453);const r={title:"Use Another zrok Instance",sidebar_label:"Instance Config"},c=void 0,a={},d=[];function l(e){const n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This guide is relevant if you are self-hosting or using a friend's ",(0,s.jsx)(n.code,{children:"zrok"})," instance instead of using zrok-as-a-service from ",(0,s.jsx)(n.code,{children:"zrok.io"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"zrok"})," ",(0,s.jsx)(n.em,{children:"command"})," on your computer uses a ",(0,s.jsx)(n.code,{children:"zrok"})," ",(0,s.jsx)(n.em,{children:"instance"})," over the network."]}),"\n",(0,s.jsxs)(n.p,{children:["The default instance API endpoint for the ",(0,s.jsx)(n.code,{children:"zrok"})," command is ",(0,s.jsx)(n.code,{children:"api.zrok.io"}),". Set the API endpoint to another instance's API endpoint:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"zrok config set apiEndpoint https://zrok.example.com\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"[WARNING]: unable to open environment metadata; ignoring\n\nzrok configuration updated\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WARNING"})," about ",(0,s.jsx)(n.code,{children:"environment metadata"})," is expected when you run ",(0,s.jsx)(n.code,{children:"zrok config set"})," before ",(0,s.jsx)(n.code,{children:"zrok enable"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"zrok status"})," command to inspect the state of your local ",(0,s.jsx)(n.em,{children:"environment"}),". ",(0,s.jsx)(n.code,{children:"zrok"})," refers to each shell where you install and ",(0,s.jsx)(n.code,{children:"enable"})," a copy of ",(0,s.jsx)(n.code,{children:"zrok"})," as an ",(0,s.jsx)(n.em,{children:"environment"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"zrok status\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"Config:\n\n CONFIG       VALUE                      SOURCE \n apiEndpoint  https://zrok.mydomain.com  config \n\n[WARNING]: Unable to load your local environment!\n\nTo create a local environment use the zrok enable command.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"zrok status"})," command shows the configured API service that your environment is using, as well as the ",(0,s.jsx)(n.code,{children:"SOURCE"})," where the setting was retrieved. In this case, ",(0,s.jsx)(n.code,{children:"config"})," means that the setting was set into the environment using the ",(0,s.jsx)(n.code,{children:"zrok config"})," command."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);