"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2166],{4692:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(7294),n=a(9960);const l=e=>{let{version:t,children:a}=e;return i.createElement(n.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},a)}},6853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905)),l=(a(1839),a(2973));const o={title:"LibreTime 3.0.0 alpha 10"},r=void 0,s={unversionedId:"releases/3.0.0-alpha.10",id:"releases/3.0.0-alpha.10",title:"LibreTime 3.0.0 alpha 10",description:"Contributors",source:"@site/../docs/releases/3.0.0-alpha.10.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.10",permalink:"/docs/next/releases/3.0.0-alpha.10",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.10.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 10"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 11",permalink:"/docs/next/releases/3.0.0-alpha.11"},next:{title:"LibreTime 3.0.0 alpha 9",permalink:"/docs/next/releases/3.0.0-alpha.09"}},u={},p=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"\u2b06\ufe0f Upgrading",id:"\ufe0f-upgrading",level:2},{value:"Packages renaming and new install paths",id:"packages-renaming-and-new-install-paths",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Interface Customization Issues",id:"interface-customization-issues",level:3},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.ZP,{date:"2021-10-15",version:"3.0.0-alpha.10",mdxType:"ReleaseHead"}),(0,n.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,n.kt)("p",null,"The LibreTime project wants to thank the following contributors for contributing to this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@jooola"),(0,n.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,n.kt)("li",{parentName:"ul"},"@xabispacebiker"),(0,n.kt)("li",{parentName:"ul"},"@malespiaut"),(0,n.kt)("li",{parentName:"ul"},"@zklosko"),(0,n.kt)("li",{parentName:"ul"},"@brekemeier"),(0,n.kt)("li",{parentName:"ul"},"@jeromelebleu"),(0,n.kt)("li",{parentName:"ul"},"@danielhjames"),(0,n.kt)("li",{parentName:"ul"},"@rjhelms"),(0,n.kt)("li",{parentName:"ul"},"@hairmare")),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support ",(0,n.kt)("inlineCode",{parentName:"li"},"force_ssl")," configuration option in Python applications"),(0,n.kt)("li",{parentName:"ul"},"Move ",(0,n.kt)("inlineCode",{parentName:"li"},"airtime_mvc")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"legacy")," and move all PHP related files under it"),(0,n.kt)("li",{parentName:"ul"},"Support ",(0,n.kt)("inlineCode",{parentName:"li"},"Authorization: Api-Key")," header in API v1"),(0,n.kt)("li",{parentName:"ul"},"Use pip for LibreTime Python package installation"),(0,n.kt)("li",{parentName:"ul"},"Move Python scripts into ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")),(0,n.kt)("li",{parentName:"ul"},"Add API v2 (unstable and subject to change)")),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("inlineCode",{parentName:"li"},"airtime_analyzer")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"libretime-analyzer")),(0,n.kt)("li",{parentName:"ul"},"Prevent auto load playlists running on deleted show instances"),(0,n.kt)("li",{parentName:"ul"},"Playout history can be exported as CSV and PDF"),(0,n.kt)("li",{parentName:"ul"},"Explicitly fail if the HTTP requests made by the Python applications fail"),(0,n.kt)("li",{parentName:"ul"},"Fix API v2 schedule endpoint item filtering and overlapping playout"),(0,n.kt)("li",{parentName:"ul"},"Fix pypo overlapping track playout"),(0,n.kt)("li",{parentName:"ul"},"Fix installation when Icecast is already installed"),(0,n.kt)("li",{parentName:"ul"},"Request 1Gb of memory on libvirt Vagrant boxes"),(0,n.kt)("li",{parentName:"ul"},"Clean up CORS setup in the installer"),(0,n.kt)("li",{parentName:"ul"},"Pin the ",(0,n.kt)("inlineCode",{parentName:"li"},"setuptools")," version to ensure older versions of LibreTime can still be installed")),(0,n.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed broken Soundcloud integration"),(0,n.kt)("li",{parentName:"ul"},"Dropped support for Ubuntu Xenial as it is end-of-life"),(0,n.kt)("li",{parentName:"ul"},"Dropped support for Debian Stretch as it is end-of-life"),(0,n.kt)("li",{parentName:"ul"},"Removed SysV and Upstart init system files"),(0,n.kt)("li",{parentName:"ul"},"Removed broken My Podcasts feature")),(0,n.kt)("h2",{id:"\ufe0f-upgrading"},"\u2b06\ufe0f Upgrading"),(0,n.kt)("h3",{id:"packages-renaming-and-new-install-paths"},"Packages renaming and new install paths"),(0,n.kt)("p",null,"Once the upgrade has taken place, you need to run the following commands to clean up old scripts and configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Remove the old packages\nsudo pip3 uninstall \\\n  airtime-playout \\\n  airtime-celery \\\n  api_clients\n\n# Remove old entrypoints\nsudo rm -f \\\n  /usr/bin/airtime-liquidsoap \\\n  /usr/bin/airtime-playout \\\n  /usr/bin/pyponotify\n\n# Remove old config files\nsudo rm -f \\\n  /etc/logrotate.d/airtime-liquidsoap\n\n# Remove the old runtime and PHP directories\nsudo rm -rf \\\n  /var/run/airtime \\\n  /run/airtime \\\n  /usr/share/airtime/php/airtime_mvc\n\n# Remove old python libraries entrypoints\nsudo rm -f \\\n  /usr/bin/airtime-liquidsoap \\\n  /usr/bin/airtime-playout \\\n  /usr/bin/libretime-analyzer \\\n  /usr/bin/libretime-api \\\n  /usr/bin/collectiongain \\\n  /usr/bin/django-admin \\\n  /usr/bin/django-admin.py \\\n  /usr/bin/markdown_py \\\n  /usr/bin/mid3cp \\\n  /usr/bin/mid3iconv \\\n  /usr/bin/mid3v2 \\\n  /usr/bin/moggsplit \\\n  /usr/bin/mutagen-inspect \\\n  /usr/bin/mutagen-pony \\\n  /usr/bin/pyponotify \\\n  /usr/bin/replaygain \\\n  /usr/bin/sqlformat\n")),(0,n.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,n.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,n.kt)("h3",{id:"interface-customization-issues"},"Interface Customization Issues"),(0,n.kt)("p",null,"The UI works best if you don't use it in an opinionated fashion and change just the bare minimal."),(0,n.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,n.kt)("p",null,"Currently LibreTime does not support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature. This is tracked in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/70"},"#70"),"."),(0,n.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,n.kt)("p",null,"This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording. This is tracked in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/42"},"#42"),"."),(0,n.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,n.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided. This is tracked in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/317"},"#317"),"."),(0,n.kt)("p",null,"You can set up the locale using a combination of the following commands. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,n.kt)("p",null,"These instructions do not seem to work on all Debian based distros so you might need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')))}d.isMDXComponent=!0},2973:(e,t,a)=>{a.d(t,{ZP:()=>r});var i=a(7462),n=(a(7294),a(3905)),l=(a(1839),a(4692));const o={toc:[]};function r(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,a.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,a.version)," release of LibreTime is available ",(0,n.kt)(l.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}r.isMDXComponent=!0}}]);