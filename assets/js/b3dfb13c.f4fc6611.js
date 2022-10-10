"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9450],{2737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=a(7462),r=(a(7294),a(3905));a(1839);const n={title:"Migrate from Airtime",sidebar_position:90},o=void 0,s={unversionedId:"admin-manual/setup/migrate-from-airtime",id:"version-3.0.0/admin-manual/setup/migrate-from-airtime",title:"Migrate from Airtime",description:"This guide walk you though the steps required to migrate your data from Airtime to LibreTime.",source:"@site/versioned_docs/version-3.0.0/admin-manual/setup/migrate-from-airtime.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/migrate-from-airtime",permalink:"/docs/admin-manual/setup/migrate-from-airtime",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0/admin-manual/setup/migrate-from-airtime.md",tags:[],version:"3.0.0",sidebarPosition:90,frontMatter:{title:"Migrate from Airtime",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/docs/admin-manual/setup/upgrade"},next:{title:"Backup",permalink:"/docs/admin-manual/backup"}},l={},u=[{value:"Make a backup",id:"make-a-backup",level:2},{value:"Backup the configuration",id:"backup-the-configuration",level:3},{value:"Backup the database",id:"backup-the-database",level:3},{value:"Backup the storage",id:"backup-the-storage",level:3},{value:"Install",id:"install",level:2},{value:"Restore the backup",id:"restore-the-backup",level:2},{value:"Update the configuration files",id:"update-the-configuration-files",level:2},{value:"Finish",id:"finish",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide walk you though the steps required to migrate your data from Airtime to LibreTime."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Airtime ",(0,r.kt)("strong",{parentName:"p"},"linked files")," and ",(0,r.kt)("strong",{parentName:"p"},"watched folders")," features are either deprecated or not working in LibreTime.")),(0,r.kt)("p",null,"LibreTime dropped support for Ubuntu 16.04, which is the last supported version of Ubuntu that Airtime supports."),(0,r.kt)("h2",{id:"make-a-backup"},"Make a backup"),(0,r.kt)("h3",{id:"backup-the-configuration"},"Backup the configuration"),(0,r.kt)("p",null,"On common setups, you need to backup the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/airtime")," folder."),(0,r.kt)("h3",{id:"backup-the-database"},"Backup the database"),(0,r.kt)("p",null,"You need to backup the PostgreSQL database, which holds the entire data of your installation."),(0,r.kt)("p",null,"Here is an example to dump your PostgreSQL database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres pg_dump --file=airtime.sql airtime\n")),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_dump")," usage for additional details."),(0,r.kt)("h3",{id:"backup-the-storage"},"Backup the storage"),(0,r.kt)("p",null,"You need to backup the entire file storage, which holds all the files of your installation."),(0,r.kt)("p",null,"The path to your storage was defined during the installation process, the default storage path is ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/airtime/stor"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Install LibreTime on a new system by ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/install#run-the-installer"},"running the installer"),", and ",(0,r.kt)("strong",{parentName:"p"},"don't run the setup tasks"),"."),(0,r.kt)("h2",{id:"restore-the-backup"},"Restore the backup"),(0,r.kt)("p",null,"Restore ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin-manual/backup#restore"},"the Airtime backup")," on the newly installed LibreTime server."),(0,r.kt)("p",null,"You have to restore the ",(0,r.kt)("strong",{parentName:"p"},"database"),", the ",(0,r.kt)("strong",{parentName:"p"},"files storage")," and the ",(0,r.kt)("strong",{parentName:"p"},"configuration files"),"."),(0,r.kt)("h2",{id:"update-the-configuration-files"},"Update the configuration files"),(0,r.kt)("p",null,"Update the configuration file to match the new configuration schema and update any changed values. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin-manual/setup/configuration"},"configuration")," documentation for more details."),(0,r.kt)("p",null,"Edit the Icecast password in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," to reflect the password used in Airtime."),(0,r.kt)("h2",{id:"finish"},"Finish"),(0,r.kt)("p",null,"Restart the LibreTime services and navigate to the LibreTime web-page."))}d.isMDXComponent=!0}}]);