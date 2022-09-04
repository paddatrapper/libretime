"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6457],{2613:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=l(7462),o=(l(7294),l(3905));l(1839);const a={title:"Troubleshooting",sidebar_position:90},n=void 0,s={unversionedId:"admin-manual/troubleshooting",id:"admin-manual/troubleshooting",title:"Troubleshooting",description:"This guide walk you though the steps required to troubleshoot LibreTime.",source:"@site/../docs/admin-manual/troubleshooting.md",sourceDirName:"admin-manual",slug:"/admin-manual/troubleshooting",permalink:"/docs/next/admin-manual/troubleshooting",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/troubleshooting.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Troubleshooting",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Change default passwords",permalink:"/docs/next/admin-manual/default-passwords"},next:{title:"Uninstall",permalink:"/docs/next/admin-manual/uninstall"}},r={},u=[{value:"Services status",id:"services-status",level:2},{value:"Logs",id:"logs",level:2}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide walk you though the steps required to troubleshoot LibreTime."),(0,o.kt)("h2",{id:"services-status"},"Services status"),(0,o.kt)("p",null,"When facing a problem with LibreTime the first reflex is to verify whether the services are running."),(0,o.kt)("p",null,"In the web interface, go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"Status")," to see the state of the services."),(0,o.kt)("p",null,(0,o.kt)("img",{src:l(85).Z,width:"1500",height:"1122"})),(0,o.kt)("p",null,"Or directly from a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl --all --plain | egrep 'libretime|nginx|php.*-fpm'\n")),(0,o.kt)("p",null,"If a service isn't running, you should search for details using the tool running those services.\nOn a common setup, you should use the systemd service status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status libretime-worker\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to replace the service name with the problematic one.")),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"The next place to search for details on potential errors are the log files."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," file contains most of the system logs combined. This log file may contain information that the application logger wasn't able to log, such as early startup errors. You can follow the logs using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tail -n 100 -f "/var/log/syslog"\n# Filter the logs\nsudo tail -n 100 -f "/var/log/syslog" | egrep \'libretime|nginx|php.*-fpm\'\n')),(0,o.kt)("p",null,"On a common setup, to access LibreTime specific logs you should search for the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/analyzer.log")," file contains logs from the analyzer,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/api.log")," file contains logs from the api,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/legacy.log")," file contains logs from the legacy app,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/liquidsoap.log")," file contains logs from liquidsoap,"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/playout.log")," file contains logs from playout."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/libretime/worker.log")," file contains logs from the worker.")),(0,o.kt)("p",null,"For some LibreTime services, you can set a higher log level using the ",(0,o.kt)("inlineCode",{parentName:"p"},"LIBRETIME_LOG_LEVEL")," environment variable, or by running the service by hand and using a command line flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-analyzer --config /etc/libretime/config.yml --log-level debug\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/libretime.error.log")," file contains logs from the web server."))}p.isMDXComponent=!0},85:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/troubleshooting-status-page-61c938940393f94a08d1686476a54f4e.png"}}]);