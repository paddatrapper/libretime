"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9120],{4692:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(7294),n=i(9960);const s=e=>{let{version:t,children:i}=e;return a.createElement(n.Z,{to:`https://github.com/libretime/libretime/releases/download/${t}/libretime-${t}.tar.gz`},i)}},7406:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=i(7462),n=(i(7294),i(3905)),s=(i(1839),i(1916));const o={title:"LibreTime 3.0.0 alpha 5"},l=void 0,r={unversionedId:"releases/3.0.0-alpha.05",id:"version-3.0.0-beta.2/releases/3.0.0-alpha.05",title:"LibreTime 3.0.0 alpha 5",description:"Features",source:"@site/versioned_docs/version-3.0.0-beta.2/releases/3.0.0-alpha.05.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.05",permalink:"/docs/releases/3.0.0-alpha.05",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.2/releases/3.0.0-alpha.05.md",tags:[],version:"3.0.0-beta.2",frontMatter:{title:"LibreTime 3.0.0 alpha 5"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 6",permalink:"/docs/releases/3.0.0-alpha.06"},next:{title:"LibreTime 3.0.0 alpha 4",permalink:"/docs/releases/3.0.0-alpha.04"}},u={},p=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"Deprecation of Ubuntu 14.04 (Trusty)",id:"deprecation-of-ubuntu-1404-trusty",level:3},{value:"\u2b06\ufe0f Upgrading",id:"\ufe0f-upgrading",level:2},{value:"S3 storage support removal",id:"s3-storage-support-removal",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Silan from OBS build (https://github.com/libretime/libretime/issues/177#issuecomment-299195796)",id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796",level:4},{value:"Local armhf builds for Raspberry Pi 3 (https://github.com/libretime/libretime/issues/214#issuecomment-305988355)",id:"local-armhf-builds-for-raspberry-pi-3-httpsgithubcomlibretimelibretimeissues214issuecomment-305988355",level:4},{value:"Legacy upstream silan packages (https://github.com/libretime/libretime/issues/197)",id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197",level:4},{value:"Remove silan completely (https://github.com/libretime/libretime/issues/193#issuecomment-299174997)",id:"remove-silan-completely-httpsgithubcomlibretimelibretimeissues193issuecomment-299174997",level:4},{value:"Liquidsoap Support",id:"liquidsoap-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3},{value:"\ud83d\udcdd Colophon",id:"-colophon",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{date:"2018-10-12",version:"3.0.0-alpha.5",mdxType:"ReleaseHead"}),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interface improvements"),(0,n.kt)("li",{parentName:"ul"},"Raspbian 9 support in installer script"),(0,n.kt)("li",{parentName:"ul"},"Allow skipping RabbitMQ and PostgreSQL install in installer script with ",(0,n.kt)("inlineCode",{parentName:"li"},"--no-rabbitmq ")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"--no-postgres"))),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"[media-monitor]")," section from default install"),(0,n.kt)("li",{parentName:"ul"},"Fix last help links that pointed to sourcefabric and update others to point to discourse"),(0,n.kt)("li",{parentName:"ul"},"Fix for ShoutCAST DNAS rejecting title updates when artist is missing"),(0,n.kt)("li",{parentName:"ul"},"Initial fixes for native IPv6 support"),(0,n.kt)("li",{parentName:"ul"},"Support modern pika versions"),(0,n.kt)("li",{parentName:"ul"},"Disable podcast subscription limit"),(0,n.kt)("li",{parentName:"ul"},"Return proper ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Length")," for legacy database entries missing the info")),(0,n.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed Amazon S3 storage support")),(0,n.kt)("h3",{id:"deprecation-of-ubuntu-1404-trusty"},"Deprecation of Ubuntu 14.04 (Trusty)"),(0,n.kt)("p",null,"This info is an early warning that we're deprecating a major os version."),(0,n.kt)("p",null,"Ubuntu 16.04 (Xenial) and Ubuntu 18.04 (Bionic) are now available and Trusty is EOL in April 2019."),(0,n.kt)("h2",{id:"\ufe0f-upgrading"},"\u2b06\ufe0f Upgrading"),(0,n.kt)("h3",{id:"s3-storage-support-removal"},"S3 storage support removal"),(0,n.kt)("p",null,"The configuration file structure has changed. Remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"amazon_s3")," configuration section from the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file, as S3 storage support has been removed."),(0,n.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,n.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,n.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,n.kt)("p",null,"If you are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you don't run into the problems described in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/450"},"https://github.com/libretime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,n.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,n.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan on most Debian based Platforms (ie. Ubuntu). This affects all distros supported by the installer except Debian unstable which has the silan 0.3.3 and CentOS which doesn't have upstream packages and you may either install from source or use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,n.kt)("p",null,"You can check the version of silan by running with ",(0,n.kt)("inlineCode",{parentName:"p"},"silan --version")," which should report ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3")," or with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo dpkg -s silan | awk '/Version/ {print $2}'")," that will show the exact package version you installed. Please include this information if you file bugs concerning silan."),(0,n.kt)("p",null,"There are multiple workarounds to this issue and ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=855319"},"a bug against the upstream")," has been fixed. Kyle Robbertze @paddatrapper has taken over maintainership of the silan packages in Debian as he is currently packaging LibreTime for Debian. The silan package is in testing as can be seen in the ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/silan"},"Debian PTS"),". This section will get updated once the package is in stable."),(0,n.kt)("p",null,"Until this is sorted you should pre-install silan from a source you trust. If your distro hasn't updated to 0.3.3 yet you can also help by asking your distros maintainers for a bump."),(0,n.kt)("p",null,"The following solutions have been reported to work. If they don't work, please note that it's your responsibility to get working silan packages."),(0,n.kt)("h4",{id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796"},"Silan from OBS build (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"},"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"),")"),(0,n.kt)("p",null,"Works for all relevant Debian and Ubuntu distros and installs silan ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\n# install package signing key from obs\nwget -qO- https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0/Release.key \\\n  | apt-key add -\n\n# add OBS repo to sources list (pick the distro you need)\n\n# Debian Stretch\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_9.0_standard/ ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Debian Jessie\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_8.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Xenial\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_16.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Trusty (14.04) EOL in April 2019\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Ubuntu_14.10_standard/ ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n\n# update local package database\napt-get update\n\n# install silan 0.3.3 from obs packages\napt-get install silan\n")),(0,n.kt)("h4",{id:"local-armhf-builds-for-raspberry-pi-3-httpsgithubcomlibretimelibretimeissues214issuecomment-305988355"},"Local armhf builds for Raspberry Pi 3 (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/214#issuecomment-305988355"},"https://github.com/libretime/libretime/issues/214#issuecomment-305988355"),")"),(0,n.kt)("p",null,"Since build.opensuse.org can't build Debian packages on arm due to missing dependencies, the ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1")," arm package was built in a docker crossdev environment. This is reported to work on Debian Jessie on a Raspberry Pi 3 Model B."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://github.com/libretime/libretime/files/1049738/silan_0.3.3.nmu1_armhf.deb.tar.gz\ntar xvf silan_0.3.3.nmu1_armhf.deb.tar.gz\nsudo dpkg -i silan_0.3.3~nmu1_armhf.deb\n")),(0,n.kt)("h4",{id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197"},"Legacy upstream silan packages (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/197"},"https://github.com/libretime/libretime/issues/197"),")"),(0,n.kt)("p",null,"Legacy upstream hosts patched packages for Ubuntu Trusty on ",(0,n.kt)("inlineCode",{parentName:"p"},"apt.sourcefabric.org"),". They install as ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.2~trusty~sfo-1"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\nsudo tee -a /etc/apt/sources.list <<EOD\ndeb https://apt.sourcefabric.org/ trusty main\nEOD\n\nsudo apt-get update\nsudo apt-get install sourcefabric-keyring\nsudo apt-get update\nsudo apt-get install --reinstall silan=0.3.2~trusty~sfo-1\n")),(0,n.kt)("h4",{id:"remove-silan-completely-httpsgithubcomlibretimelibretimeissues193issuecomment-299174997"},"Remove silan completely (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/193#issuecomment-299174997"},"https://github.com/libretime/libretime/issues/193#issuecomment-299174997"),")"),(0,n.kt)("p",null,"It's worth mentioning that you can disable cue point detection by removing silan from the system."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get uninstall silan\n")),(0,n.kt)("p",null,"Reportedly this might have ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/214#issuecomment-305748757"},"side effects"),"."),(0,n.kt)("h3",{id:"liquidsoap-support"},"Liquidsoap Support"),(0,n.kt)("p",null,"LibreTime currently only supports liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,n.kt)("a",{parentName:"p",href:"https://www.liquidsoap.info/"},"using OPAM")," or through the ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.2")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.3")," installed."),(0,n.kt)("p",null,"#352 reports that liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," can exhibit issues on some Debian based installs. One fix for the issue is to install liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.0")," and to use the following patching steps. Kyle from silan fame is taking the needed steps to get liquidsoap maintained again in Debian so we expect the situation to improve over time."),(0,n.kt)("p",null,"You can check your liquidsoap version by running ",(0,n.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,n.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,n.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,n.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,n.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.5/\ncurl -L https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0.patch | patch -p1\n")),(0,n.kt)("p",null,"Git users can pull from the branch at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0"},"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0")," directly."),(0,n.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,n.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,n.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,n.kt)("p",null,"Currently LibreTime doesn't support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,n.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,n.kt)("p",null,"Line In recording can be enabled in the UI but doesn't currently work. This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,n.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,n.kt)("p",null,"Some minimal OS installs don't have a default locale configured. This only seems to affect some VPS installs as they often don't have a locale setup in the default images provided."),(0,n.kt)("p",null,"You can set up the locale using a combination of the following command. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,n.kt)("p",null,"These instructions don't seem to work on all Debian based distros so you might need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,n.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,n.kt)("p",null,"Some translations might miss the tarball. They didn't get lost but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we proabably want to support bidirectional translation syncing with zanata."),(0,n.kt)("h2",{id:"-colophon"},"\ud83d\udcdd Colophon"),(0,n.kt)("p",null,"Sorry for the ",(0,n.kt)("em",{parentName:"p"},"late")," release, RelEng has been busy with adulting and generally having a life as of lately. I'm still very much committed to LibreTime but can only find a limited amount of time to look into Issues due to being busy qualifying LibreTime for production workloads at my station. I plan on re-shifting my focus on pull request reviews and RelEng to address my lack of time going further."))}d.isMDXComponent=!0},1916:(e,t,i)=>{i.d(t,{ZP:()=>l});var a=i(7462),n=(i(7294),i(3905)),s=(i(1839),i(4692));const o={toc:[]};function l(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,i.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"For general discussion or if you need help, you can join the ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," forum or chat on the ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," server.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,i.version)," release of LibreTime is available ",(0,n.kt)(s.Z,{version:i.version,mdxType:"TarballLink"},"here"),"."))}l.isMDXComponent=!0}}]);