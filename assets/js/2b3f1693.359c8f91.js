"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Reverse Proxy",sidebar_position:5},l=void 0,c={unversionedId:"getting-started/reverse-proxy",id:"getting-started/reverse-proxy",title:"Reverse Proxy",description:"In some deployments, the LibreTime server is deployed behind a reverse proxy,",source:"@site/../docs/getting-started/reverse-proxy.md",sourceDirName:"getting-started",slug:"/getting-started/reverse-proxy",permalink:"/docs/getting-started/reverse-proxy",editUrl:"https://github.com/libretime/libretime/../docs/getting-started/reverse-proxy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Reverse Proxy",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SSL Configuration",permalink:"/docs/getting-started/ssl"},next:{title:"Show Calendar",permalink:"/docs/guides/calendar"}},p=[{value:"Reverse proxy basics",id:"reverse-proxy-basics",children:[],level:3},{value:"Setup",id:"setup",children:[],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some deployments, the LibreTime server is deployed behind a reverse proxy,\nfor example in containerization use-cases such as Docker and LXC. LibreTime\nmakes extensive use of its API for some site functionality, which causes\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing (CORS)"),"\nto occur. By default, CORS requests are blocked by your browser and the origins\nneed to be added to the ",(0,i.kt)("strong",{parentName:"p"},"Allowed CORS URLs")," block in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/settings"},(0,i.kt)("strong",{parentName:"a"},"General Settings")),". These origins should include any\ndomains that will be used externally to connect to your reverse proxy that you\nwant handled by LibreTime. These URLS can also be set during the first run configuration\nthat is displayed when you first install LibreTime"),(0,i.kt)("h3",{id:"reverse-proxy-basics"},"Reverse proxy basics"),(0,i.kt)("p",null,"A reverse proxy allows the LibreTime server to not be connected to the open internet. In\nthis configuration, it is rather behind another server that proxies traffic to it from\nusers. This provides some advantages in the containerization space, as this means that\nthe containers can be on their own internal network, protected from outside access."),(0,i.kt)("p",null,"A reverse proxy also allows SSL to be terminated in a single location for multiple sites.\nThis means that all your traffic to the proxy from clients is encrypted, but the reverse\nproxy's traffic to the containers on the internal network is not. All the SSL certificates\nlive on the reverse proxy and can be renewed there instead of on the individual\ncontainers."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"For SSL redirection to work, you need two domains: one for LibreTime and one for Icecast.\nHere, these will be ",(0,i.kt)("inlineCode",{parentName:"p"},"libretime.example.com")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"icecast.example.com"),"."),(0,i.kt)("p",null,"You will also require two VMs, servers or containers. Alternatively the reverse proxy can\nbe located on the server, proxying connections to containers also on the host. Setting up\na containerization environment is beyond the scope of this guide. It assumes that you have\nNginx set up on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," and LibreTime will be installed on ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.10"),". You will need root\naccess on both. ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.10")," also needs to be able to be accessed from ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"ping 192.168.1.10")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),")."),(0,i.kt)("p",null,"On ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.10"),", install LibreTime as described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/install"},"install guide"),". Once it has installed, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<hostname>localhost</hostname>")," in\n",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<hostname>icecast.example.com</hostname>\n")),(0,i.kt)("p",null,"This is the hostname that people listening to your stream will connect to and what\nLibreTime will use to stream out to them. You will then need to restart Icecast using ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart icecast2"),"."),(0,i.kt)("p",null,"On ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),", run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF | sudo tee /etc/nginx/sites-available/libretime.conf\nserver {\n    listen 80;\n    server_name libretime.example.com;\n    location / {\n        rewrite ^ https://$server_name$request_uri? permanent;\n    }\n}\nserver {\n    listen 443 ssl;\n    server_name libretime.example.com;\n    ssl_certificate /etc/letsencrypt/live/libretime.example.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/libretime.example.com/privkey.pem;\n    add_header Strict-Transport-Security "max-age=15552000;";\n    add_header X-Frame-Options "SAMEORIGIN";\n    client_max_body_size 512M;\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_pass http://192.168.1.10/;\n    }\n}\nEOF\n')),(0,i.kt)("p",null,"This Nginx configuration ensures that all traffic uses SSL to the reverse proxy, and\ntraffic is proxied to ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.10"),"."),(0,i.kt)("p",null,"Next, the SSL certificate needs to be generated and the site activated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt install certbot\nsudo systemctl stop nginx\nsudo certbot certonly -d libretime.example.com -a standalone\nsudo systemctl start nginx\n")),(0,i.kt)("p",null,"You can now go to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://libretime.example.com")," and go\nthrough the installer. On ",(0,i.kt)("inlineCode",{parentName:"p"},"General Settings"),", you need to change the Webserver Port to\n",(0,i.kt)("inlineCode",{parentName:"p"},"443")," and add the following CORS URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://libretime.example.com\nhttp://libretime.example.com\nhttps://localhost\nhttp://localhost\n")),(0,i.kt)("p",null,"Finally, the configuration file needs updating. Under ",(0,i.kt)("inlineCode",{parentName:"p"},"[general]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"force_ssl"),"\nneeds to be set to true:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[general]\n...\nforce_ssl = true\n")))}u.isMDXComponent=!0}}]);