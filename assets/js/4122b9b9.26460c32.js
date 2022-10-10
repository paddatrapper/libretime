"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6816],{4692:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294),s=a(9960);const n=e=>{let{version:t,children:a}=e;return i.createElement(s.Z,{to:`https://github.com/libretime/libretime/releases/download/${t}/libretime-${t}.tar.gz`},a)}},3082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(7462),s=(a(7294),a(3905)),n=(a(1839),a(230));const r={title:"LibreTime 3.0.0 alpha 1"},l=void 0,o={unversionedId:"releases/3.0.0-alpha.01",id:"version-3.0.0/releases/3.0.0-alpha.01",title:"LibreTime 3.0.0 alpha 1",description:"Features",source:"@site/versioned_docs/version-3.0.0/releases/3.0.0-alpha.01.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.01",permalink:"/docs/releases/3.0.0-alpha.01",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0/releases/3.0.0-alpha.01.md",tags:[],version:"3.0.0",frontMatter:{title:"LibreTime 3.0.0 alpha 1"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 2",permalink:"/docs/releases/3.0.0-alpha.02"},next:{title:"LibreTime 3.0.0 alpha",permalink:"/docs/releases/3.0.0-alpha.00"}},u={},p=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Silan from OBS build (https://github.com/libretime/libretime/issues/177#issuecomment-299195796)",id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796",level:4},{value:"Legacy upstream silan packages (https://github.com/libretime/libretime/issues/197)",id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.ZP,{date:"2017-04-20",version:"3.0.0-alpha.1",mdxType:"ReleaseHead"}),(0,s.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Make overriding of album tag in downloaded Podcasts configurable"),(0,s.kt)("li",{parentName:"ul"},"Configurable master and show sources in settings"),(0,s.kt)("li",{parentName:"ul"},"Version check on main interface against Github"),(0,s.kt)("li",{parentName:"ul"},"updated i18n strings (complete ru_RU translation)"),(0,s.kt)("li",{parentName:"ul"},'Allow closing "Scheduled Shows" tab in Showbuilder'),(0,s.kt)("li",{parentName:"ul"},"FreeIPA Auth Adaptor")),(0,s.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"restart=always")," in systemd installs"),(0,s.kt)("li",{parentName:"ul"},"Don't depend on hardcoded admin password for autoplaylist feature"),(0,s.kt)("li",{parentName:"ul"},"more legacy upstream branding removal"),(0,s.kt)("li",{parentName:"ul"},"restore table settings (ie. columns and sort) on login"),(0,s.kt)("li",{parentName:"ul"},"translatable radio page"),(0,s.kt)("li",{parentName:"ul"},"line-in recording almost works again"),(0,s.kt)("li",{parentName:"ul"},"no more oopsing on week info API")),(0,s.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"ubuntu")," Vagrant box has been replaced with ",(0,s.kt)("inlineCode",{parentName:"li"},"ubuntu-xenial")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"ubuntu-trusty"),". The ",(0,s.kt)("inlineCode",{parentName:"li"},"debian")," box has been replaced with ",(0,s.kt)("inlineCode",{parentName:"li"},"debian-jessie")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"debian-wheezy"),". Users of the old boxes should switch to a new box so we can drop the old box after this release.")),(0,s.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,s.kt)("p",null,"The following issues need a workaround for the time being. Please search the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,s.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,s.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan on all Debian based Platforms (ie. Ubuntu). This affects all distros supported by the installer except CentOS which doesn't have upstream packages and you may either install from source or use the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,s.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,s.kt)("p",null,"You can check the version of silan by running with ",(0,s.kt)("inlineCode",{parentName:"p"},"silan --version")," which should report ",(0,s.kt)("inlineCode",{parentName:"p"},"0.3.3")," or with ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo dpkg -s silan | awk '/Version/ {print $2}'")," that will show the exact package version you installed. Please include this information if you file bugs concerning silan."),(0,s.kt)("p",null,"There are multiple workarounds to this issue and ",(0,s.kt)("a",{parentName:"p",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=855319"},"a bug against the upstream")," has been opened with Debian. Until this is sorted you should pre-install silan from a source you trust. If your distro hasn't updated to 0.3.3 yet you can also help by asking your distros maintainers for a bump."),(0,s.kt)("p",null,"The following solutions have been reported to work."),(0,s.kt)("h4",{id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796"},"Silan from OBS build (",(0,s.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"},"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"),")"),(0,s.kt)("p",null,"Works for all relevant Debian and Ubuntu distros and installs silan ",(0,s.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\n# install package signing key from obs\nwget -qO- https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0/Release.key \\\n  | apt-key add -\n\n# add OBS repo to sources list (pick the distro you need)\n\n# Debian Wheezy\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Debian Jessie\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_8.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Trusty\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_14.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Xenial\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_16.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n\n# update local package database\napt-get update\n\n# install silan 0.3.3 from obs packages\napt-get install silan\n")),(0,s.kt)("h4",{id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197"},"Legacy upstream silan packages (",(0,s.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/197"},"https://github.com/libretime/libretime/issues/197"),")"),(0,s.kt)("p",null,"Legacy Upstream hosts patched packages for Ubuntu Trusty on ",(0,s.kt)("inlineCode",{parentName:"p"},"apt.sourcefabric.org"),". They install as ",(0,s.kt)("inlineCode",{parentName:"p"},"0.3.2~trusty~sfo-1"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\nsudo tee -a /etc/apt/sources.list <<EOD\ndeb https://apt.sourcefabric.org/ trusty main\nEOD\n\nsudo apt-get update\nsudo apt-get install sourcefabric-keyring\nsudo apt-get update\nsudo apt-get install --reinstall silan=0.3.2~trusty~sfo-1\n")))}m.isMDXComponent=!0},230:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(7462),s=(a(7294),a(3905)),n=(a(1839),a(4692));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This version was released the ",(0,s.kt)("strong",null,a.date),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,s.kt)("p",{parentName:"admonition"},"For general discussion or if you need help, you can join the ",(0,s.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," forum or chat on the ",(0,s.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," server.")),(0,s.kt)("p",null,"The full tarball for the ",(0,s.kt)("code",null,a.version)," release of LibreTime is available ",(0,s.kt)(n.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}l.isMDXComponent=!0}}]);