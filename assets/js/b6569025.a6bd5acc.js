"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[913],{9243:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var t=s(5893),o=s(1151),a=s(4908),i=s(3298),r=s(7597);const l={title:"Install"},d=void 0,c={id:"guides/install/index",title:"Install",description:"<DownloadCard",source:"@site/../docs/guides/install/index.mdx",sourceDirName:"guides/install",slug:"/guides/install/",permalink:"/docs/guides/install/",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/install/index.mdx",tags:[],version:"current",frontMatter:{title:"Install"},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Linux",permalink:"/docs/guides/install/linux"}},u={},m=[];function g(e){return(0,t.jsx)(a.N,{children:(0,t.jsxs)("div",{className:r.Z.downloadContainer,children:[(0,t.jsx)(i.Z,{osName:"Windows",osLogo:"/img/logo-windows.svg",infoText:"Binary executable",guideLink:"/docs/guides/install/windows"}),(0,t.jsx)(i.Z,{osName:"macOS",osLogo:"/img/logo-apple.svg",infoText:"Binary executable",guideLink:"/docs/guides/install/macos"}),(0,t.jsx)(i.Z,{osName:"Linux",osLogo:"/img/logo-linux.svg",infoText:"DEB, RPM packages",guideLink:"/docs/guides/install/linux"})]})})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g()}},4908:(e,n,s)=>{s.d(n,{L:()=>i,N:()=>r});var t=s(7294),o=s(5893);const a=(0,t.createContext)([]),i=()=>(0,t.useContext)(a),r=e=>{let{children:n}=e;const[s,i]=(0,t.useState)([]);return(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.github.com/repos/openziti/zrok/releases/latest");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const n=(await e.json()).assets.map((e=>({name:e.name,url:e.browser_download_url,arch:e.name.replace(".tar.gz","").split("_")[3]})));console.log("Fetched assets:",n),i(n)}catch(e){console.error("Error fetching the release assets:",e)}})()}),[]),(0,o.jsx)(a.Provider,{value:s,children:n})}},3298:(e,n,s)=>{s.d(n,{Z:()=>l});s(7294);var t=s(4908),o=s(7597),a=s(2949),i=s(5893);const r=e=>{switch(e){case"amd64":return"x86_64";case"arm64":return"ARM64";case"armv7":return"ARM";default:return e.toUpperCase()}},l=e=>{let{osName:n,osLogo:s,infoText:l,guideLink:d}=e;const{colorMode:c}=(0,a.I)(),u=(0,t.L)();console.log("Assets in DownloadCard:",u);const m=(e=>{switch(e){case"Windows":return"windows";case"macOS":return"darwin";case"Linux":return"linux";default:return""}})(n),g=u.filter((e=>e.name.includes(m)));return console.log("Filtered assets for",n,"in DownloadCard:",g),(0,i.jsxs)("div",{className:o.Z.downloadCard,children:[(0,i.jsx)("div",{className:o.Z.imgContainer,children:(0,i.jsx)("img",{src:s,alt:`${n} logo`})}),(0,i.jsx)("h3",{children:n}),g.length>0&&(0,i.jsx)("ul",{children:g.map(((e,n)=>(0,i.jsx)("li",{className:o.Z.downloadButtons,children:(0,i.jsx)("a",{href:e.url,className:o.Z.downloadLinks,children:r(e.arch)})},n)))}),d&&(0,i.jsxs)("div",{className:o.Z.cardFooter,children:[(0,i.jsx)("p",{children:l}),(0,i.jsx)("a",{href:d,children:"GUIDE"}),(0,i.jsx)("p",{})]})]})}},7597:(e,n,s)=>{s.d(n,{Z:()=>t});const t={downloadContainer:"downloadContainer_nNgj",downloadCard:"downloadCard_D_EY",cardFooter:"cardFooter_Rhom",downloadButtons:"downloadButtons_NPAP",downloadLinks:"downloadLinks_thSu",imgContainer:"imgContainer_r0QA"}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var t=s(7294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);