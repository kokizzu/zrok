"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4927],{5294:(e,n,r)=>{r.d(n,{Ay:()=>o,RM:()=>t});var s=r(4848),i=r(8453);const t=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This formula is maintained by the Homebrew community."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"brew install zrok\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"guides/install/linux","title":"Install zrok in Linux","description":"Package Repository","source":"@site/../docs/guides/install/linux.mdx","sourceDirName":"guides/install","slug":"/guides/install/linux","permalink":"/docs/guides/install/linux","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/install/linux.mdx","tags":[],"version":"current","frontMatter":{"title":"Install zrok in Linux","sidebar_label":"Linux"},"sidebar":"tutorialSidebar","previous":{"title":"Install","permalink":"/docs/guides/install/"},"next":{"title":"macOS","permalink":"/docs/guides/install/macos"}}');var i=r(4848),t=r(8453),a=r(3070),o=r(3484),l=r(3769),c=r(397),d=r(4119),u=r(5294);const h={title:"Install zrok in Linux",sidebar_label:"Linux"},p=void 0,m={},x=[{value:"Package Repository",id:"package-repository",level:2},{value:"Linux Binary",id:"linux-binary",level:2},{value:"Arch User Repository",id:"arch-user-repository",level:2},{value:"Homebrew Formula",id:"homebrew-formula",level:2},...u.RM];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"package-repository",children:"Package Repository"}),"\n",(0,i.jsx)(n.p,{children:"The RedHat (RPM) and Debian (DEB) packages are maintained by NetFoundry."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"curl -sSf https://get.openziti.io/install.bash | sudo bash -s zrok\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Check out ",(0,i.jsx)(n.a,{href:"/docs/guides/frontdoor?os=Linux",children:"zrok frontdoor"})," for running ",(0,i.jsx)(n.code,{children:"zrok"})," as an always-on service."]})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Ansible Playbook"}),(0,i.jsxs)(d.A,{title:"Set up package repository and install zrok",children:[c.A,"\n- name: Install zrok package\ngather_facts: false\nhosts: all \nbecome: true\ntasks:\n- name: Install zrok\n  ansible.builtin.package:\n    name: zrok\n    state: present\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"linux-binary",children:"Linux Binary"}),"\n",(0,i.jsx)(a.F,{children:(0,i.jsx)("div",{className:l.A.downloadContainer,children:(0,i.jsx)(o.A,{osName:"Linux",osLogo:"/img/logo-linux.svg"})})}),"\n",(0,i.jsxs)(n.p,{children:["Download the binary distribution for your Linux distribution's architecture or run the install script below to pick the correct CPU architecture automatically. For Intel and AMD 64-bit machines use the ",(0,i.jsx)(n.code,{children:"amd64"})," distribution. For Raspberry Pi use the ",(0,i.jsx)(n.code,{children:"arm64"})," distribution."]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsxs)("summary",{children:["Manually install in ",(0,i.jsx)(n.code,{children:"~/bin/zrok"})]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unarchive the distribution in a temporary directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"mkdir /tmp/zrok && tar -xf ./zrok*linux*.tar.gz -C /tmp/zrok\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install the ",(0,i.jsx)(n.code,{children:"zrok"})," executable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"mkdir -p ~/bin && install /tmp/zrok/zrok ~/bin/\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"~/bin"})," to your shell's executable search path. Optionally add this to your ~/.zshenv to persist the change."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"PATH=~/bin:$PATH\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["With the ",(0,i.jsx)(n.code,{children:"zrok"})," executable in your path, you can then execute the ",(0,i.jsx)(n.code,{children:"zrok"})," command from your shell:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"zrok version\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"               _    \n _____ __ ___ | | __\n|_  / '__/ _ \\| |/ /\n / /| | | (_) |   < \n/___|_|  \\___/|_|\\_\\\n\nv1.0.0 [c889005]\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsxs)("summary",{children:["Script to install binary in ",(0,i.jsx)(n.code,{children:"/usr/local/bin/zrok"})]}),(0,i.jsx)(n.p,{children:"This script auto-selects the correct architecture and may be helpful for Raspberry Pi users."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"cd $(mktemp -d);\n\nZROK_VERSION=$(\n  curl -sSf https://api.github.com/repos/openziti/zrok/releases/latest \\\n  | jq -r '.tag_name'\n);\n\ncase $(uname -m) in\n  x86_64)         GOXARCH=amd64\n  ;;\n  aarch64|arm64)  GOXARCH=arm64\n  ;;\n  arm*)           GOXARCH=armv7\n  ;;\n  *)              echo \"ERROR: unknown arch '$(uname -m)'\" >&2\n                  exit 1\n  ;;\nesac;\n\ncurl -sSfL \\\n  \"https://github.com/openziti/zrok/releases/download/${ZROK_VERSION}/zrok_${ZROK_VERSION#v}_linux_${GOXARCH}.tar.gz\" \\\n  | tar -xz -f -;\n\nsudo install -o root -g root ./zrok /usr/local/bin/;\n\nzrok version;\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"arch-user-repository",children:"Arch User Repository"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://aur.archlinux.org/packages/zrok-bin",children:"An Arch User Repository (AUR) package"})," is maintained by the Arch community. As of April 2025, the AUR package includes the ",(0,i.jsx)(n.code,{children:"zrok"})," CLI and ",(0,i.jsxs)(n.a,{href:"/docs/guides/agent/linux-service",children:["the ",(0,i.jsx)(n.code,{children:"zrok-agent.service"})," systemd ",(0,i.jsx)(n.code,{children:"--user"})," service"]}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"homebrew-formula",children:"Homebrew Formula"}),"\n",(0,i.jsx)(u.Ay,{})]})}function b(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3070:(e,n,r)=>{r.d(n,{F:()=>o,d:()=>a});var s=r(6540),i=r(4848);const t=(0,s.createContext)([]),a=()=>(0,s.useContext)(t),o=e=>{let{children:n}=e;const[r,a]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.github.com/repos/openziti/zrok/releases/latest");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const n=(await e.json()).assets.map((e=>({name:e.name,url:e.browser_download_url,arch:e.name.replace(".tar.gz","").split("_")[3]})));console.log("Fetched assets:",n),a(n)}catch(e){console.error("Error fetching the release assets:",e)}})()}),[]),(0,i.jsx)(t.Provider,{value:r,children:n})}},4119:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(382),i=r(8069),t=r(4848);const a=e=>{let{title:n,children:r}=e;const a=r.map((e=>"string"==typeof e?e.trim():s.Ay.dump(e).trim())).join("\n\n");return(0,t.jsx)("div",{children:(0,t.jsx)(i.A,{language:"yaml",title:n,children:a})})}},3484:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var s=r(3070),i=r(3769),t=r(8532),a=r(4848);const o=e=>{switch(e){case"amd64":return"x86_64";case"arm64":return"ARM64";case"armv7":return"ARM";default:return e.toUpperCase()}},l=e=>{let{osName:n,osLogo:r,infoText:l,guideLink:c}=e;const{colorMode:d}=(0,t.G)(),u=(0,s.d)();console.log("Assets in DownloadCard:",u);const h=(e=>{switch(e){case"Windows":return"windows";case"macOS":return"darwin";case"Linux":return"linux";default:return""}})(n),p=u.filter((e=>e.name.includes(h)));return console.log("Filtered assets for",n,"in DownloadCard:",p),(0,a.jsxs)("div",{className:i.A.downloadCard,children:[(0,a.jsx)("div",{className:i.A.imgContainer,children:(0,a.jsx)("img",{src:r,alt:`${n} logo`})}),(0,a.jsx)("h3",{children:n}),p.length>0&&(0,a.jsx)("ul",{children:p.map(((e,n)=>(0,a.jsx)("li",{className:i.A.downloadButtons,children:(0,a.jsx)("a",{href:e.url,className:i.A.downloadLinks,children:o(e.arch)})},n)))}),c&&(0,a.jsxs)("div",{className:i.A.cardFooter,children:[(0,a.jsx)("p",{children:l}),(0,a.jsx)("a",{href:c,children:"GUIDE"}),(0,a.jsx)("p",{})]})]})}},3769:(e,n,r)=>{r.d(n,{A:()=>s});const s={downloadContainer:"downloadContainer_nNgj",downloadCard:"downloadCard_D_EY",cardFooter:"cardFooter_Rhom",downloadButtons:"downloadButtons_NPAP",downloadLinks:"downloadLinks_thSu",imgContainer:"imgContainer_r0QA"}},397:(e,n,r)=>{r.d(n,{A:()=>s});const s=[{name:"Set up zrok Package Repo",gather_facts:!0,hosts:"all",become:!0,tasks:[{name:"Set up apt repo",when:'ansible_os_family == "Debian"',block:[{name:"Install playbook dependencies","ansible.builtin.package":{name:["gnupg"],state:"present"}},{name:"Fetch armored pubkey","ansible.builtin.uri":{url:"https://get.openziti.io/tun/package-repos.gpg",return_content:"yes"},register:"armored_pubkey"},{name:"Dearmor pubkey","ansible.builtin.shell":'gpg --dearmor --output /usr/share/keyrings/openziti.gpg <<< "{{ armored_pubkey.content }}"\n',args:{creates:"/usr/share/keyrings/openziti.gpg",executable:"/bin/bash"}},{name:"Set pubkey filemode","ansible.builtin.file":{path:"/usr/share/keyrings/openziti.gpg",mode:"a+rX"}},{name:"Install OpenZiti repo deb source","ansible.builtin.copy":{dest:"/etc/apt/sources.list.d/openziti-release.list",content:"deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable debian main\n"}},{name:"Refresh Repo Sources","ansible.builtin.apt":{update_cache:"yes",cache_valid_time:3600}}]},{name:"Set up yum repo",when:'ansible_os_family == "RedHat"',block:[{name:"Install OpenZiti repo rpm source","ansible.builtin.yum_repository":{name:"OpenZitiRelease",description:"OpenZiti Release",baseurl:"https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat/$basearch",enabled:"yes",gpgkey:"https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat/$basearch/repodata/repomd.xml.key",repo_gpgcheck:"yes",gpgcheck:"no"}}]}]}]}}]);