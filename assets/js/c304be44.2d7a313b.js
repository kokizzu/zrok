"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[327],{6508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=t(5893),o=t(1151),r=t(4908),i=t(3298),a=t(7597);const d={title:"Install zrok in Windows",sidebar_label:"Windows"},l=void 0,c={id:"guides/install/windows",title:"Install zrok in Windows",description:"Windows Binary",source:"@site/../docs/guides/install/windows.mdx",sourceDirName:"guides/install",slug:"/guides/install/windows",permalink:"/docs/guides/install/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/install/windows.mdx",tags:[],version:"current",frontMatter:{title:"Install zrok in Windows",sidebar_label:"Windows"},sidebar:"tutorialSidebar",previous:{title:"macOS",permalink:"/docs/guides/install/macos"},next:{title:"frontdoor",permalink:"/docs/guides/frontdoor"}},u={},h=[{value:"Windows Binary",id:"windows-binary",level:2}];function w(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"windows-binary",children:"Windows Binary"}),"\n",(0,s.jsx)(r.N,{children:(0,s.jsx)("div",{className:a.Z.downloadContainer,children:(0,s.jsx)(i.Z,{osName:"Windows",osLogo:"/img/logo-windows.svg"})})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Unarchive the distribution in a temporary directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'New-Item -Path "$env:TEMP\\zrok" -ItemType Directory -ErrorAction Stop\ntar -xf .\\zrok*windows*.tar.gz -C "$env:TEMP\\zrok"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the ",(0,s.jsx)(n.code,{children:"zrok"})," executable and include HOME\\bin in the search PATH."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'$source = Join-Path -Path $env:TEMP -ChildPath "zrok\\zrok.exe"\n$destination = Join-Path -Path $env:HOME -ChildPath "bin\\zrok.exe"\nNew-Item -Path $destination -ItemType Directory -ErrorAction SilentlyContinue\nCopy-Item -Path $source -Destination $destination\n$env:path += ";"+$destination\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["With the ",(0,s.jsx)(n.code,{children:"zrok"})," executable in your path, you can then execute the ",(0,s.jsx)(n.code,{children:"zrok"})," directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"zrok version\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"\n _____ __ ___ | | __\n|_  / '__/ _ \\| |/ /\n / /| | | (_) |   <\n/___|_|  \\___/|_|\\_\\\n\nv0.4.0 [c889005]\n"})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},4908:(e,n,t)=>{t.d(n,{L:()=>i,N:()=>a});var s=t(7294),o=t(5893);const r=(0,s.createContext)([]),i=()=>(0,s.useContext)(r),a=e=>{let{children:n}=e;const[t,i]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.github.com/repos/openziti/zrok/releases/latest");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const n=(await e.json()).assets.map((e=>({name:e.name,url:e.browser_download_url,arch:e.name.replace(".tar.gz","").split("_")[3]})));console.log("Fetched assets:",n),i(n)}catch(e){console.error("Error fetching the release assets:",e)}})()}),[]),(0,o.jsx)(r.Provider,{value:t,children:n})}},3298:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var s=t(4908),o=t(7597),r=t(2949),i=t(5893);const a=e=>{switch(e){case"amd64":return"x86_64";case"arm64":return"ARM64";case"armv7":return"ARM";default:return e.toUpperCase()}},d=e=>{let{osName:n,osLogo:t,infoText:d,guideLink:l}=e;const{colorMode:c}=(0,r.I)(),u=(0,s.L)();console.log("Assets in DownloadCard:",u);const h=(e=>{switch(e){case"Windows":return"windows";case"macOS":return"darwin";case"Linux":return"linux";default:return""}})(n),w=u.filter((e=>e.name.includes(h)));return console.log("Filtered assets for",n,"in DownloadCard:",w),(0,i.jsxs)("div",{className:o.Z.downloadCard,children:[(0,i.jsx)("div",{className:o.Z.imgContainer,children:(0,i.jsx)("img",{src:t,alt:`${n} logo`})}),(0,i.jsx)("h3",{children:n}),w.length>0&&(0,i.jsx)("ul",{children:w.map(((e,n)=>(0,i.jsx)("li",{className:o.Z.downloadButtons,children:(0,i.jsx)("a",{href:e.url,className:o.Z.downloadLinks,children:a(e.arch)})},n)))}),l&&(0,i.jsxs)("div",{className:o.Z.cardFooter,children:[(0,i.jsx)("p",{children:d}),(0,i.jsx)("a",{href:l,children:"GUIDE"}),(0,i.jsx)("p",{})]})]})}},7597:(e,n,t)=>{t.d(n,{Z:()=>s});const s={downloadContainer:"downloadContainer_nNgj",downloadCard:"downloadCard_D_EY",cardFooter:"cardFooter_Rhom",downloadButtons:"downloadButtons_NPAP",downloadLinks:"downloadLinks_thSu",imgContainer:"imgContainer_r0QA"}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);