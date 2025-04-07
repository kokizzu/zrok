"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[598],{4052:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"guides/self-hosting/interstitial-page","title":"Interstitial Pages","description":"On large zrok installations that support open registration and shared public frontends, abuse can become an issue. In order to mitigate phishing and other similar forms of abuse, zrok offers an interstitial page that announces to the visiting user that the share is hosted through zrok, and probably isn\'t their financial institution.","source":"@site/../docs/guides/self-hosting/interstitial-page.md","sourceDirName":"guides/self-hosting","slug":"/guides/self-hosting/interstitial-page","permalink":"/docs/guides/self-hosting/interstitial-page","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/interstitial-page.md","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Interstitial Pages","sidebar_label":"Interstitial Pages","sidebar_position":18},"sidebar":"tutorialSidebar","previous":{"title":"NGINX TLS","permalink":"/docs/guides/self-hosting/linux/nginx"},"next":{"title":"Organizations","permalink":"/docs/guides/self-hosting/organizations"}}');var s=i(4848),r=i(8453);const a={title:"Interstitial Pages",sidebar_label:"Interstitial Pages",sidebar_position:18},o=void 0,l={},h=[{value:"Bypassing the Interstitial",id:"bypassing-the-interstitial",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"On large zrok installations that support open registration and shared public frontends, abuse can become an issue. In order to mitigate phishing and other similar forms of abuse, zrok offers an interstitial page that announces to the visiting user that the share is hosted through zrok, and probably isn't their financial institution."}),"\n",(0,s.jsx)(t.p,{children:"Interstitial pages can be enabled on a per-frontend basis. This allows the interstitial to be enabled on open public frontends but not closed public frontends (closed public frontends require a grant to use)."}),"\n",(0,s.jsx)(t.p,{children:"The interstitial page requirement can also be overridden on a per-account basis, allowing shares created by specific accounts to bypass the interstitial requirement on frontends that enable it. This facilitates building infrastructure that grants trusted users additional privileges."}),"\n",(0,s.jsx)(t.p,{children:"By default, if you do not specifically enable interstitial pages on a public frontend, then your self-hosted service instance will not offer them."}),"\n",(0,s.jsx)(t.p,{children:"Let's take a look at how the interstitial pages mechanism works. The following diagram shows the share configuration rendezvous made between the zrok controller and a zrok frontend:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"zrok_interstitial_rendezvous",src:i(4214).A+"",width:"631",height:"362"})}),"\n",(0,s.jsxs)(t.p,{children:["Every zrok share has a ",(0,s.jsx)(t.em,{children:"config"})," recorded in the underlying OpenZiti network. The config is of type ",(0,s.jsx)(t.code,{children:"zrok.proxy.v1"}),". The frontend uses the information in this config to understand the disposition of the share. The config can contain an ",(0,s.jsx)(t.code,{children:"interstitial: true"})," setting. If the config has this setting, and the frontend is configured to enable interstitial pages, then end users accessing the share will receive the interstitial page on first visit."]}),"\n",(0,s.jsxs)(t.p,{children:["By default the zrok controller will record ",(0,s.jsx)(t.code,{children:"interstitial: true"})," in the share config ",(0,s.jsx)(t.em,{children:"unless"})," a row is present in the ",(0,s.jsx)(t.code,{children:"skip_interstitial_grants"})," table in the underlying database for the account creating the share. The ",(0,s.jsx)(t.code,{children:"skip_interstitial_grants"})," table is a basic SQL structure that allows inserting a row per account."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"create table skip_interstitial_grants (\n    id          serial         primary key,\n\n    account_id  integer        references accounts (id) not null,\n\n    created_at  timestamptz    not null default(current_timestamp),\n    updated_at  timestamptz    not null default(current_timestamp),\n    deleted     boolean        not null default(false)\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If an account has a row present in this table when creating a share, then the controller will write ",(0,s.jsx)(t.code,{children:"interstitial: false"})," into the config for the share, which will bypass the interstitial regardless of frontend configuration. The ",(0,s.jsx)(t.code,{children:"skip_interstitial_grants"})," controls what the zrok controller will store in the share config when creating the share."]}),"\n",(0,s.jsx)(t.p,{children:"The frontend configuration controls what the frontend will do with the share config it finds in OpenZiti. The new stanza looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'# Configure interstitial pages for this frontend. The interstitial page presents a warning to internet users, alerting\n# them to the fact that they\'re visiting a zrok share.\n#\n#interstitial:\n#  # Enable or disable interstitial pages on this frontend.\n#  #\n#  enabled: true\n#\n#  # Specify a list of User-Agent prefixes that should receive the interstitial page. If interstitial pages are enabled\n#  # and this list is not set, all user agents will receive an interstitial page.\n#  #\n#  user_agent_prefixes:\n#    - "Mozilla/5.0"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Setting ",(0,s.jsx)(t.code,{children:"enabled: true"})," in the ",(0,s.jsx)(t.code,{children:"interstitial"})," stanza of the frontend config will allow the configured frontend to offer an interstitial page if the share config enables the interstitial page for that share. The ",(0,s.jsx)(t.code,{children:"user_agent_prefixes"})," array can be used to specify which specific ",(0,s.jsx)(t.code,{children:"User-Agent"})," types receive the interstitial. User agents that match a prefix in the list will receive the interstitial, while others will not. If the ",(0,s.jsx)(t.code,{children:"user_agent_prefixes"})," list is omitted, ",(0,s.jsx)(t.em,{children:"all"})," user agents will receive the interstitial page."]}),"\n",(0,s.jsx)(t.h2,{id:"bypassing-the-interstitial",children:"Bypassing the Interstitial"}),"\n",(0,s.jsxs)(t.p,{children:["The interstitial page will be presented unless the client shows up with a ",(0,s.jsx)(t.code,{children:"zrok_interstitial"})," cookie (depending on ",(0,s.jsx)(t.code,{children:"user_agent_prefixes"})," configuration). When the user is presented with the interstitial page, there is a button they can click which sets the necessary cookie and allows them to visit the site. The cookie is set to expire in one week."]}),"\n",(0,s.jsxs)(t.p,{children:["Typically the ",(0,s.jsx)(t.code,{children:"user_agent_prefixes"})," list contains ",(0,s.jsx)(t.code,{children:"Mozilla/5.0"}),", which matches all typical interactive mobile and desktop browsers. Setting a non-standard ",(0,s.jsx)(t.code,{children:"User-Agent"})," in an interactive browser will bypass the interstitial pages for frontends configured with the usual ",(0,s.jsx)(t.code,{children:"Mozilla/5.0"})," prefix."]}),"\n",(0,s.jsxs)(t.p,{children:["End users can offer an HTTP header of ",(0,s.jsx)(t.code,{children:"skip_zrok_interstitial"}),", set to any value to bypass the interstitial page. Setting this header means that the user most likely understands what a zrok share is and will hopefully not fall for a phishing attack."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"skip_zrok_interstitial"})," header is especially useful for API clients (like ",(0,s.jsx)(t.code,{children:"curl"}),") and other types of non-interactive clients."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"drive"})," backend mode does not currently support ",(0,s.jsx)(t.code,{children:"GET"})," requests and cannot be accessed with a conventional web browser, so it bypasses the interstitial page requirement."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4214:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/zrok_interstitial_rendezvous-18053866f55c9d823e96f76f39c20555.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);