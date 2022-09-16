"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9385],{1251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));a(1839);const s={title:"How to setup a static ip using Netplan"},r=void 0,o={unversionedId:"admin-manual/tutorials/setup-a-static-ip-using-netplan",id:"version-3.0.0-beta.0/admin-manual/tutorials/setup-a-static-ip-using-netplan",title:"How to setup a static ip using Netplan",description:"This tutorials will walk you though the steps required to configure a server static IP address by modifying the Netplan configuration.",source:"@site/versioned_docs/version-3.0.0-beta.0/admin-manual/tutorials/setup-a-static-ip-using-netplan.md",sourceDirName:"admin-manual/tutorials",slug:"/admin-manual/tutorials/setup-a-static-ip-using-netplan",permalink:"/docs/admin-manual/tutorials/setup-a-static-ip-using-netplan",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.0/admin-manual/tutorials/setup-a-static-ip-using-netplan.md",tags:[],version:"3.0.0-beta.0",frontMatter:{title:"How to setup a static ip using Netplan"},sidebar:"tutorialSidebar",previous:{title:"How to setup a firewall using UFW",permalink:"/docs/admin-manual/tutorials/setup-a-firewall-using-ufw"},next:{title:"User manual",permalink:"/docs/user-manual/"}},l={},u=[{value:"1. Edit the configuration",id:"1-edit-the-configuration",level:2},{value:"2. Apply the configuration",id:"2-apply-the-configuration",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorials will walk you though the steps required to configure a server static IP address by modifying the ",(0,i.kt)("a",{parentName:"p",href:"https://netplan.io/reference/"},"Netplan")," configuration."),(0,i.kt)("h2",{id:"1-edit-the-configuration"},"1. Edit the configuration"),(0,i.kt)("p",null,"First find the right Netplan configuration filename, and edit the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/netplan && ls  # find the netplan filename\nsudo nano ##-network-manager-all.yaml\n")),(0,i.kt)("p",null,"If the Netplan configuration is empty, fill in the file with the example below. Otherwise,\ninput the IP address reserved for the server in ",(0,i.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx/yy")," format, the gateway (the IP address\nof your router), and your DNS server's address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    enp3s0:\n      addresses: [192.168.88.8/24]\n      gateway4: 192.168.88.1\n      nameservers:\n        addresses: [192.168.88.1]\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you don't have your own DNS server you can use the router's address in most cases or a public DNS server like Google ",(0,i.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," or Cloudflare ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1"),".")),(0,i.kt)("h2",{id:"2-apply-the-configuration"},"2. Apply the configuration"),(0,i.kt)("p",null,"After the Netplan file has been saved, apply the changes by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo netplan apply\n")))}d.isMDXComponent=!0}}]);