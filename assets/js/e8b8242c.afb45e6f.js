(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5597],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),i=a(6010),r=a(2389),o=a(7392),s=a(7094),u=a(2466);const m="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:r,block:d,defaultValue:c,values:h,groupId:g,className:k}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[T,C]=(0,l.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=g){const e=v[g];null!=e&&e!==T&&f.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==T&&(I(t),C(n),null!=g&&w(g,String(n)))},L=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;a=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:L,onFocus:E,onClick:E},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},1838:e=>{e.exports={title:"LibreTime",description:"Radio Broadcast & Automation Platform",version:"3.0.0-alpha.13",website:"https://libretime.org",repository:{href:"https://github.com/libretime/libretime",label:"Github"},forum:{href:"https://discourse.libretime.org",label:"Discourse"},channel:{href:"https://chat.libretime.org",label:"Mattermost"},home:{links:[{label:"Get started \ud83d\ude80",to:"/docs/admin-manual"},{label:"Release note",to:"/docs/releases/3.0.0-alpha.13"}]},doc:{sections:[{label:"Admin manual",to:"/docs/admin-manual"},{label:"User manual",to:"/docs/user-manual"},{label:"Developer manual",to:"/docs/developer-manual"}]}}},6534:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>h});var n=a(7462),l=(a(7294),a(3905)),i=(a(1839),a(5488)),r=a(5162),o=a(814),s=a(1838),u=a.n(s);const m={title:"Install",sidebar_position:10},p=void 0,d={unversionedId:"admin-manual/setup/install",id:"admin-manual/setup/install",title:"Install",description:"This guide walk you though the steps required to install LibreTime on your system.",source:"@site/../docs/admin-manual/setup/install.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/install",permalink:"/docs/next/admin-manual/setup/install",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/install.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Install",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Administrator manual",permalink:"/docs/next/admin-manual/"},next:{title:"Configuration",permalink:"/docs/next/admin-manual/setup/configuration"}},c={},h=[{value:"Minimum system requirements",id:"minimum-system-requirements",level:4},{value:"Using the installer",id:"using-the-installer",level:2},{value:"Before installing",id:"before-installing",level:3},{value:"Operating system time configuration",id:"operating-system-time-configuration",level:4},{value:"Download",id:"download",level:3},{value:"Run the installer",id:"run-the-installer",level:3},{value:"Using hardware audio output",id:"using-hardware-audio-output",level:4},{value:"Setup",id:"setup",level:3},{value:"Configure",id:"configure",level:4},{value:"Next",id:"next",level:3}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide walk you though the steps required to install LibreTime on your system."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you are coming from ",(0,l.kt)("strong",{parentName:"p"},"Airtime"),", please follow the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/migrate-from-airtime"},"Airtime migration guide"),".")),(0,l.kt)("p",null,"You can install LibreTime using the one of the following methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-the-installer"},"\ud83d\ude80 Using the installer")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udea7 Using Ansible")),(0,l.kt)("h4",{id:"minimum-system-requirements"},"Minimum system requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 Ghz Processor"),(0,l.kt)("li",{parentName:"ul"},"2 GB RAM recommended (1 GB required)"),(0,l.kt)("li",{parentName:"ul"},"A static external IP address (",(0,l.kt)("a",{parentName:"li",href:"/docs/next/admin-manual/tutorials/setup-a-static-ip-using-netplan"},"How to setup a static ip using Netplan"),")")),(0,l.kt)("p",null,"One of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/developer-manual/development/releases#distributions-releases-support"},"supported distribution releases"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.debian.org/releases/"},"Debian 11")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/Releases"},"Ubuntu 20.04 LTS"))),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Make sure that you have configured a ",(0,l.kt)("strong",{parentName:"p"},"firewall")," and it's not blocking connection to the desired ports."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/admin-manual/tutorials/setup-a-firewall-using-ufw"},"How to setup a firewall using UFW"))),(0,l.kt)("p",{parentName:"admonition"},"LibreTime requires the following default ports to be open:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"80")," for the web interface,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8000")," for the Icecast streams,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8001")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"8002")," for the live stream input endpoint."))),(0,l.kt)("h2",{id:"using-the-installer"},"Using the installer"),(0,l.kt)("p",null,"The installer is shipped in the released tarballs or directly in the project repository."),(0,l.kt)("h3",{id:"before-installing"},"Before installing"),(0,l.kt)("p",null,"Before installing LibreTime, you need to make sure you operating system is properly configured."),(0,l.kt)("h4",{id:"operating-system-time-configuration"},"Operating system time configuration"),(0,l.kt)("p",null,"Check your operating system time configuration using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"               Local time: Fri 2022-08-05 12:43:39 CEST\n           Universal time: Fri 2022-08-05 10:43:39 UTC\n                 RTC time: Fri 2022-08-05 10:43:40\n                Time zone: Europe/Berlin (CEST, +0200)\nSystem clock synchronized: yes\n              NTP service: active\n          RTC in local TZ: no\n")),(0,l.kt)("p",null,"Make sure that your time zone is properly configured, if not you can set it using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/timedatectl.html#set-timezone%20%5BTIMEZONE%5D"},(0,l.kt)("inlineCode",{parentName:"a"},"timedatectl set-timezone")," command"),"."),(0,l.kt)("p",null,"If the NTP service is inactive, you should consider enabling it using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/timedatectl.html#set-ntp%20%5BBOOL%5D"},(0,l.kt)("inlineCode",{parentName:"a"},"timedatectl set-ntp")," command"),"."),(0,l.kt)("h3",{id:"download"},"Download"),(0,l.kt)("p",null,"You can either download the latest released tarball or clone the repository."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{label:"Release tarball",value:"tarball",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Download the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/releases"},"latest released")," tarball from Github."),(0,l.kt)("p",null,"Or directly from the command-line:"),(0,l.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"wget https://github.com/libretime/libretime/releases/download/",u().version,"/libretime-",u().version,".tar.gz"),(0,l.kt)("p",null,"And extract the tarball:"),(0,l.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"tar -xvf libretime-",u().version,".tar.gz && cd libretime")),(0,l.kt)(r.Z,{label:"Git repository",value:"git",mdxType:"TabItem"},(0,l.kt)("p",null,"Clone the project repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/libretime/libretime\ncd libretime\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Don't use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime-debian-packaging"},"https://github.com/libretime/libretime-debian-packaging")," repository, it is only used to create LibreTime packages.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"When upgrading, you should clean the local repository, pull the latest changes and finally check out the desired version:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime\ngit clean -xdf\ngit pull\n"))),(0,l.kt)("p",null,"And checkout the latest version:"),(0,l.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"git checkout ",u().version))),(0,l.kt)("h3",{id:"run-the-installer"},"Run the installer"),(0,l.kt)("p",null,"Install LibreTime with the recommended options, be sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL")," with the public url of your installation,\nfor example ",(0,l.kt)("inlineCode",{parentName:"p"},"https://libretime.example.com")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"http://192.168.10.100:80"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./install PUBLIC_URL\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"When upgrading be sure to run the installer using the same arguments you used during the initial install.")),(0,l.kt)("p",null,"If you need to change some configuration, the install script can be configured using flags or environment variables. Changing the listening port of LibreTime or whether you want to install some dependency by yourself, you could run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install LibreTime on your system with the following tweaks:\n# - do not install the liquidsoap package (remember to install liquidsoap yourself)\n# - set the listen port to 8080\n# - do not run the PostgreSQL setup (remember to setup PostgreSQL yourself)\nsudo \\\nLIBRETIME_PACKAGES_EXCLUDES='liquidsoap' \\\n./install \\\n  --listen-port 8080 \\\n  --no-setup-postgresql\xa0\\\n  https://libretime.example.com\n")),(0,l.kt)("p",null,"You can persist the install configuration in a ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file next to the install script. For example, the above command could be persisted using the ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file below, and you should be able to run the install script without arguments:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LIBRETIME_PACKAGES_EXCLUDES='liquidsoap'\nLIBRETIME_LISTEN_PORT='8080'\nLIBRETIME_SETUP_POSTGRESQL=false\nLIBRETIME_PUBLIC_URL='https://libretime.example.com'\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The install script will use randomly generated passwords to create the PostgreSQL user, RabbitMQ user and to update the default Icecast passwords. Those passwords will be saved to the configuration files.")),(0,l.kt)("p",null,"Feel free to run ",(0,l.kt)("inlineCode",{parentName:"p"},"./install --help")," to get more details."),(0,l.kt)("h4",{id:"using-hardware-audio-output"},"Using hardware audio output"),(0,l.kt)("p",null,"If you plan to output analog audio directly to a mixing console or transmitter, the user running LibreTime needs to be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," user group using the command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser libretime audio\n")),(0,l.kt)("h3",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Once the installation is completed, edit the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/configuration"},"configuration file")," at ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml")," to fill required information and to match your needs."),(0,l.kt)("p",null,"Next, run the following commands to setup the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-api migrate\n")),(0,l.kt)("p",null,"Synchronize the new Icecast passwords into the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo libretime-api set_icecast_passwords --from-icecast-config\n")),(0,l.kt)("p",null,"Finally, start the services, and check that they are running properly using the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start libretime.target\n\nsudo systemctl --all --plain | grep libretime\n")),(0,l.kt)("h4",{id:"configure"},"Configure"),(0,l.kt)("p",null,"Once the setup is completed, log in the interface and make sure to edit the project settings (go to ",(0,l.kt)("strong",{parentName:"p"},"Settings")," > ",(0,l.kt)("strong",{parentName:"p"},"General"),") to match your needs. Important settings are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Timezone"),(0,l.kt)("li",{parentName:"ul"},"First day of the week")),(0,l.kt)("h3",{id:"next"},"Next"),(0,l.kt)("p",null,"Once completed, it's recommended to ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/reverse-proxy"},"install a reverse proxy")," to setup SSL termination and secure your installation."))}k.isMDXComponent=!0}}]);