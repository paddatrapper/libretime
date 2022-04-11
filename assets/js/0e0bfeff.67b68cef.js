"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8810],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"How to setup a static ip using Netplan"},l=void 0,u={unversionedId:"admin-manual/tutorials/setup-a-static-ip-using-netplan",id:"admin-manual/tutorials/setup-a-static-ip-using-netplan",title:"How to setup a static ip using Netplan",description:"This tutorials will walk you though the steps required to configure a server static IP address by modifying the Netplan configuration.",source:"@site/../docs/admin-manual/tutorials/setup-a-static-ip-using-netplan.md",sourceDirName:"admin-manual/tutorials",slug:"/admin-manual/tutorials/setup-a-static-ip-using-netplan",permalink:"/docs/next/admin-manual/tutorials/setup-a-static-ip-using-netplan",editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/tutorials/setup-a-static-ip-using-netplan.md",tags:[],version:"current",frontMatter:{title:"How to setup a static ip using Netplan"},sidebar:"tutorialSidebar",previous:{title:"How to setup a firewall using UFW",permalink:"/docs/next/admin-manual/tutorials/setup-a-firewall-using-ufw"},next:{title:"User manual",permalink:"/docs/next/user-manual/"}},p={},c=[{value:"1. Edit the configuration",id:"1-edit-the-configuration",level:2},{value:"2. Apply the configuration",id:"2-apply-the-configuration",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorials will walk you though the steps required to configure a server static IP address by modifying the ",(0,i.kt)("a",{parentName:"p",href:"https://netplan.io/reference/"},"Netplan")," configuration."),(0,i.kt)("h2",{id:"1-edit-the-configuration"},"1. Edit the configuration"),(0,i.kt)("p",null,"First find the right Netplan configuration filename, and edit the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/netplan && ls  # find the netplan filename\nsudo nano ##-network-manager-all.yaml\n")),(0,i.kt)("p",null,"If the Netplan configuration is empty, fill in the file with the example below. Otherwise,\ninput the IP address reserved for the server in ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx/yy")," format, the gateway (the IP address\nof your router), and your DNS server's address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    enp3s0:\n      addresses: [192.168.88.8/24]\n      gateway4: 192.168.88.1\n      nameservers:\n        addresses: [192.168.88.1]\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't have your own DNS server you can use the router's address in most cases or a public DNS server like Google ",(0,i.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," or Cloudflare ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1"),"."))),(0,i.kt)("h2",{id:"2-apply-the-configuration"},"2. Apply the configuration"),(0,i.kt)("p",null,"After the Netplan file has been saved, apply the changes by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo netplan apply\n")))}m.isMDXComponent=!0}}]);