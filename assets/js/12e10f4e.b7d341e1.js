"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1599],{3852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));a(1839);const i={title:"Backup",sidebar_position:10},r=void 0,s={unversionedId:"admin-manual/backup",id:"admin-manual/backup",title:"Backup",description:"Create a backup",source:"@site/../docs/admin-manual/backup.md",sourceDirName:"admin-manual",slug:"/admin-manual/backup",permalink:"/docs/next/admin-manual/backup",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/backup.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Backup",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Migrate from Airtime",permalink:"/docs/next/admin-manual/setup/migrate-from-airtime"},next:{title:"Library management",permalink:"/docs/next/admin-manual/library"}},l={},u=[{value:"Create a backup",id:"create-a-backup",level:2},{value:"Backup the configuration",id:"backup-the-configuration",level:3},{value:"Backup the database",id:"backup-the-database",level:3},{value:"Backup the storage",id:"backup-the-storage",level:3},{value:"Restore a backup",id:"restore-a-backup",level:2},{value:"Install or cleanup",id:"install-or-cleanup",level:3},{value:"Restore the configuration",id:"restore-the-configuration",level:3},{value:"Restore the database",id:"restore-the-database",level:3},{value:"Restore the storage",id:"restore-the-storage",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-backup"},"Create a backup"),(0,o.kt)("p",null,"This guide walk you though the steps required to create a full backup of your installation."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Remember to ",(0,o.kt)("strong",{parentName:"p"},"automate")," and ",(0,o.kt)("strong",{parentName:"p"},"test")," the backup process and to have it run regularly. Having an ",(0,o.kt)("strong",{parentName:"p"},"automated")," and ",(0,o.kt)("strong",{parentName:"p"},"tested")," restoring process is also recommended.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Feel free to pick the backup software of your choice, but know that rsync and similar tools aren't backup tools. You could use ",(0,o.kt)("a",{parentName:"p",href:"https://restic.net/"},"restic")," or ",(0,o.kt)("a",{parentName:"p",href:"https://borgbackup.readthedocs.io/"},"borg"),".")),(0,o.kt)("h3",{id:"backup-the-configuration"},"Backup the configuration"),(0,o.kt)("p",null,"On common setups, you need to backup the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/libretime")," folder."),(0,o.kt)("h3",{id:"backup-the-database"},"Backup the database"),(0,o.kt)("p",null,"You need to backup the PostgreSQL database, which holds the entire data of your installation."),(0,o.kt)("p",null,"Here is an example to dump your PostgreSQL database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres pg_dump --file=libretime.sql libretime\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Consider using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-owner")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-privileges")," flags to ignore roles\nand permissions details about the database. This can be useful when restoring\nto database or role that have different names.")),(0,o.kt)("p",null,"Please read the ",(0,o.kt)("inlineCode",{parentName:"p"},"pg_dump")," usage for additional details."),(0,o.kt)("h3",{id:"backup-the-storage"},"Backup the storage"),(0,o.kt)("p",null,"You need to backup the entire file storage, which holds all the files of your installation."),(0,o.kt)("p",null,"The path to your storage is defined in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/configuration"},"configuration")," file."),(0,o.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,o.kt)("h3",{id:"install-or-cleanup"},"Install or cleanup"),(0,o.kt)("p",null,"If you are restoring a backup on a fresh system, we recommend that you first ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/install"},"install LibreTime"),", and ",(0,o.kt)("strong",{parentName:"p"},"stop before the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/admin-manual/setup/install#setup"},"setup tasks")),"."),(0,o.kt)("p",null,"If you are restoring a backup on an existing system, make sure to clean the old ",(0,o.kt)("strong",{parentName:"p"},"database")," and ",(0,o.kt)("strong",{parentName:"p"},"files storage"),"."),(0,o.kt)("h3",{id:"restore-the-configuration"},"Restore the configuration"),(0,o.kt)("p",null,"Copy the backed configuration files back to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/configuration"},"configuration")," folder."),(0,o.kt)("p",null,"If you are upgrading LibreTime, edit the configuration file to match the new configuration schema and update any changed values. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/configuration"},"configuration")," documentation for more details."),(0,o.kt)("h3",{id:"restore-the-database"},"Restore the database"),(0,o.kt)("p",null,"Restore the database by using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres pg_restore --dbname=libretime libretime.sql\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Consider using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-owner")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-privileges")," flags to ignore roles\nand permissions details about the database. This can be useful when restoring\nto database or role that have different names.")),(0,o.kt)("p",null,"If you are upgrading LibreTime, make sure to apply the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/upgrade#apply-migrations"},"database migration"),"."),(0,o.kt)("h3",{id:"restore-the-storage"},"Restore the storage"),(0,o.kt)("p",null,"Copy the entire backed file storage back to the storage path."),(0,o.kt)("p",null,"The path to your storage is defined in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/admin-manual/setup/configuration"},"configuration")," file."))}d.isMDXComponent=!0}}]);