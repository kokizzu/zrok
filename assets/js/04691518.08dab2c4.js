"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[0],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,k=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Linux Service",sidebar_position:40},o=void 0,l={unversionedId:"guides/linux-service",id:"guides/linux-service",title:"Linux Service",description:"Goal",source:"@site/../docs/guides/linux-service.md",sourceDirName:"guides",slug:"/guides/linux-service",permalink:"/docs/guides/linux-service",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/linux-service.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Linux Service",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Private Share",permalink:"/docs/guides/docker-share/docker_private_share_guide"},next:{title:"Self Hosting",permalink:"/docs/category/self-hosting"}},s={},p=[{value:"Goal",id:"goal",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Installation",id:"installation",level:2},{value:"Enable",id:"enable",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Proxy a Web Server",id:"proxy-a-web-server",level:3},{value:"Serve Static Files",id:"serve-static-files",level:3},{value:"WebDAV Server",id:"webdav-server",level:3},{value:"Caddy Server",id:"caddy-server",level:3},{value:"Authentication",id:"authentication",level:2},{value:"OAuth",id:"oauth",level:3},{value:"Password",id:"password",level:3},{value:"Start the Service",id:"start-the-service",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Package Contents",id:"package-contents",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"goal"},"Goal"),(0,n.kt)("p",null,"Proxy a reserved public subdomain to a backend target with a Linux service."),(0,n.kt)("h2",{id:"how-it-works"},"How it Works"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"zrok-share")," package creates a ",(0,n.kt)("inlineCode",{parentName:"p"},"zrok-share.service")," unit in systemd. The administrator edits the service's configuration file to specify the:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"zrok environment enable token"),(0,n.kt)("li",{parentName:"ol"},"target URL or files to be shared and backend mode, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"proxy")),(0,n.kt)("li",{parentName:"ol"},"authentication options, if wanted")),(0,n.kt)("p",null,"When the service starts it will:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"enable the zrok environment unless ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/zrok-share/.zrok/environment.json")," exists"),(0,n.kt)("li",{parentName:"ol"},"reserve a public subdomain for the service unless ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/zrok-share/.zrok/reserved.json")," exists"),(0,n.kt)("li",{parentName:"ol"},"start sharing the target specified in the configuration file")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the OpenZiti install script."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSo ./openziti-install.bash https://get.openziti.io/install.bash\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Inspect the script to ensure it is suitable to run as root on your system."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"less ./openziti-install.bash\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the script as root to install the ",(0,n.kt)("inlineCode",{parentName:"p"},"zrok-share")," package."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo bash ./openziti-install.bash zrok-share\n")))),(0,n.kt)("h2",{id:"enable"},"Enable"),(0,n.kt)("p",null,"Save the enable token from the zrok console in the configuration file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_ENABLE_TOKEN="14cbfca9772f"\n')),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"You may change the target for the current backend mode, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy"),", by editing the configuration file and restarting the service. The reserved subdomain will remain the same."),(0,n.kt)("p",null,"You may switch between backend modes or change authentication options by deleting ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/zrok-share/.zrok/reserved.json")," and restarting the service. A new subdomain will be reserved."),(0,n.kt)("h3",{id:"proxy-a-web-server"},"Proxy a Web Server"),(0,n.kt)("p",null,"Proxy a reserved subdomain to an existing web server. The web server could be on a private network or on the same host as zrok."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_TARGET="http://127.0.0.1:3000"\nZROK_BACKEND_MODE="proxy"\n')),(0,n.kt)("h3",{id:"serve-static-files"},"Serve Static Files"),(0,n.kt)("p",null,"Run zrok's embedded web server to serve the files in a directory. If there's an ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," file in the directory then visitors will see that web page in their browser, otherwise they'll see a generated index of the files. The directory must be readable by 'other', e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"chmod -R o+rX /var/www/html"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_TARGET="/var/www/html"\nZROK_BACKEND_MODE="web"\n')),(0,n.kt)("h3",{id:"webdav-server"},"WebDAV Server"),(0,n.kt)("p",null,"This uses zrok's ",(0,n.kt)("inlineCode",{parentName:"p"},"drive")," backend mode to serve a directory of static files as a WebDAV resource. The directory must be readable by 'other', e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"chmod -R o+rX /usr/share/doc"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_TARGET="/usr/share/doc"\nZROK_BACKEND_MODE="drive"\n')),(0,n.kt)("h3",{id:"caddy-server"},"Caddy Server"),(0,n.kt)("p",null,"Use zrok's built-in Caddy server to serve static files or as a reverse proxy to multiple web servers with various HTTP routes or as a load-balanced set. A sample Caddyfile is available in the path shown."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_TARGET="/opt/openziti/etc/zrok/multiple_upstream.Caddyfile"\nZROK_BACKEND_MODE="caddy"\n')),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"You can limit access to certain email addresses with OAuth or require a password."),(0,n.kt)("h3",{id:"oauth"},"OAuth"),(0,n.kt)("p",null,"You can require that visitors authenticate with an email address that matches at least one of the suffixes you specify. Add the following to the configuration file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_OAUTH_PROVIDER="github"  # or google\nZROK_OAUTH_EMAILS="bob@example.com @acme.example.com"\n')),(0,n.kt)("h3",{id:"password"},"Password"),(0,n.kt)("p",null,"Enable HTTP basic authentication by adding the following to the configuration file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/opt/openziti/etc/zrok/zrok-share.env"',title:'"/opt/openziti/etc/zrok/zrok-share.env"'},'ZROK_BASIC_AUTH="user:passwd"\n')),(0,n.kt)("h2",{id:"start-the-service"},"Start the Service"),(0,n.kt)("p",null,"Start the service, and check the zrok console or the service log for the reserved subdomain."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="run now and at startup"',title:'"run',now:!0,and:!0,at:!0,'startup"':!0},"sudo systemctl enable --now zrok-share.service\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="run now"',title:'"run','now"':!0},"sudo systemctl restart zrok-share.service\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u zrok-share.service\n")),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"The Linux distribution must have a package manager that understands the ",(0,n.kt)("inlineCode",{parentName:"p"},".deb")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".rpm")," format and be running systemd v232 or newer. The service was tested with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ubuntu 20.04, 22.04, 23.04"),(0,n.kt)("li",{parentName:"ul"},"Debian 11 12"),(0,n.kt)("li",{parentName:"ul"},"Rocky 8, 9"),(0,n.kt)("li",{parentName:"ul"},"Fedora 37, 38")),(0,n.kt)("h2",{id:"package-contents"},"Package Contents"),(0,n.kt)("p",null,"The files included in the ",(0,n.kt)("inlineCode",{parentName:"p"},"zrok-share")," package are sourced ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/openziti/zrok/tree/main/nfpm"},"here in GitHub"),"."))}u.isMDXComponent=!0}}]);