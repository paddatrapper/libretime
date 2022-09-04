"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8073],{4692:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(7294),n=i(9960);const s=e=>{let{version:t,children:i}=e;return a.createElement(n.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},i)}},4339:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=i(7462),n=(i(7294),i(3905)),s=(i(1839),i(2973));const l={title:"LibreTime 3.0.0 alpha 3"},o=void 0,r={unversionedId:"releases/3.0.0-alpha.03",id:"releases/3.0.0-alpha.03",title:"LibreTime 3.0.0 alpha 3",description:"Features",source:"@site/../docs/releases/3.0.0-alpha.03.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.03",permalink:"/docs/next/releases/3.0.0-alpha.03",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.03.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 3"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 4",permalink:"/docs/next/releases/3.0.0-alpha.04"},next:{title:"LibreTime 3.0.0 alpha 2",permalink:"/docs/next/releases/3.0.0-alpha.02"}},u={},p=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"\u2b06\ufe0f Upgrading",id:"\ufe0f-upgrading",level:2},{value:"Configuration files merging",id:"configuration-files-merging",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Silan from OBS build (https://github.com/libretime/libretime/issues/177#issuecomment-299195796)",id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796",level:4},{value:"Local armhf builds for Raspberry Pi 3 (https://github.com/libretime/libretime/issues/214#issuecomment-305988355)",id:"local-armhf-builds-for-raspberry-pi-3-httpsgithubcomlibretimelibretimeissues214issuecomment-305988355",level:4},{value:"Legacy upstream silan packages (https://github.com/libretime/libretime/issues/197)",id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197",level:4},{value:"Remove silan completely (https://github.com/libretime/libretime/issues/193#issuecomment-299174997)",id:"remove-silan-completely-httpsgithubcomlibretimelibretimeissues193issuecomment-299174997",level:4},{value:"Liquidsoap &gt;= 1.3.0 Support",id:"liquidsoap--130-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"\ud83d\udcdd Colophon",id:"-colophon",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{date:"2017-10-18",version:"3.0.0-alpha.3",mdxType:"ReleaseHead"}),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Debian 9 support in installer shell script"),(0,n.kt)("li",{parentName:"ul"},"Simplify configuration file structure"),(0,n.kt)("li",{parentName:"ul"},"Lots of work on Hungarian (hu_HU) translation"),(0,n.kt)("li",{parentName:"ul"},"Automatic Creation of Smartblocks and Playlists for new Podcasts"),(0,n.kt)("li",{parentName:"ul"},"Duplicate Smartblock functionality in context menu"),(0,n.kt)("li",{parentName:"ul"},"Better server preparation docs with firewall infos")),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CORS responses work for all browsers and with TLS or on non default ports"),(0,n.kt)("li",{parentName:"ul"},"Fix update warning for pre-release candidates"),(0,n.kt)("li",{parentName:"ul"},"Dont install dev packages in installer for faster installs"),(0,n.kt)("li",{parentName:"ul"},"Some php 7.1 patches"),(0,n.kt)("li",{parentName:"ul"},"Better logging for analyzer and pypo"),(0,n.kt)("li",{parentName:"ul"},"Fix chunked podcast downloading"),(0,n.kt)("li",{parentName:"ul"},"Fix TLS timestamp updating")),(0,n.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dropped support for Debian Wheezy")),(0,n.kt)("h2",{id:"\ufe0f-upgrading"},"\u2b06\ufe0f Upgrading"),(0,n.kt)("h3",{id:"configuration-files-merging"},"Configuration files merging"),(0,n.kt)("p",null,"The contents of ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/cloud_storage.conf")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/rabbitmq-analyzer.ini")," have been moved to the main ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.ini")," file and the env specific symlink is no longer needed. See below for instructions on how to migrate from a pre-release that created those files."),(0,n.kt)("p",null,"The configuration file structure has changed. Please move the contents of the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/cloud_storage.conf")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/rabbitmq-analyzer.ini")," files into the main ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.ini"),". In all known cases you need to add the following sections to the file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"[current_backend]\nstorage_backend=file\n\n[amazon_S3]\nprovider=amazon_S3\nbucket=0\napi_key=0\napi_key_secret=0\n")),(0,n.kt)("p",null,"You can then remove the files and the symlink."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -f \\\n  /etc/airtime/cloud_storage.conf \\\n  /etc/airtime/rabbitmq-analyzer.ini \\\n  /etc/airtime/production\n")),(0,n.kt)("p",null,"Analyzer grabs all the needed info from the main ",(0,n.kt)("inlineCode",{parentName:"p"},"airtime.ini")," file starting with ",(0,n.kt)("inlineCode",{parentName:"p"},"3.0.0-alpha.3"),"."),(0,n.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,n.kt)("p",null,"The following issues need a workaround for the time being. Please search the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,n.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,n.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan on most Debian based Platforms (ie. Ubuntu). This affects all distros supported by the installer except Debian unstable which has the silan 0.3.3 and CentOS which does not have upstream packages and you may either install from source or use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,n.kt)("p",null,"You can check the version of silan by running with ",(0,n.kt)("inlineCode",{parentName:"p"},"silan --version")," which should report ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3")," or with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo dpkg -s silan | awk '/Version/ {print $2}'")," that will show the exact package version you installed. Please include this information if you file bugs concerning silan."),(0,n.kt)("p",null,"There are multiple workarounds to this issue and ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=855319"},"a bug against the upstream")," has been opened with Debian. Until this is sorted you should pre-install silan from a source you trust. If your distro has not updated to 0.3.3 yet you can also help by asking your distros maintainers for a bump."),(0,n.kt)("p",null,"Kyle Robbertze @paddatrapper has taken over maintainership of the silan packages in Debian as he is currently packaging LibreTime for Debian. Thank you very much Kyle!"),(0,n.kt)("p",null,"The following solutions have been reported to work."),(0,n.kt)("h4",{id:"silan-from-obs-build-httpsgithubcomlibretimelibretimeissues177issuecomment-299195796"},"Silan from OBS build (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"},"https://github.com/libretime/libretime/issues/177#issuecomment-299195796"),")"),(0,n.kt)("p",null,"Works for all relevant Debian and Ubuntu distros and installs silan ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\n# install package signing key from obs\nwget -qO- https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_7.0/Release.key \\\n  | apt-key add -\n\n# add OBS repo to sources list (pick the distro you need)\n\n# Debian Stretch\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_9.0_standard/ ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Debian Jessie\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/Debian_8.0 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Xenial\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_16.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n# Ubuntu Trusty\necho 'deb https://download.opensuse.org/repositories/home:/hairmare:/silan/xUbuntu_14.04 ./' \\\n  > /etc/apt/sources.list.d/hairmare_silan.list\n\n# update local package database\napt-get update\n\n# install silan 0.3.3 from obs packages\napt-get install silan\n")),(0,n.kt)("h4",{id:"local-armhf-builds-for-raspberry-pi-3-httpsgithubcomlibretimelibretimeissues214issuecomment-305988355"},"Local armhf builds for Raspberry Pi 3 (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/214#issuecomment-305988355"},"https://github.com/libretime/libretime/issues/214#issuecomment-305988355"),")"),(0,n.kt)("p",null,"Since build.opensuse.org can't build Debian packages on arm due to missing dependencies, the ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3~nmu1")," arm package was built in a docker crossdev environment. This is reported to work on Debian Jessie on a Raspberry Pi 3 Model B."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://github.com/libretime/libretime/files/1049738/silan_0.3.3.nmu1_armhf.deb.tar.gz\ntar xvf silan_0.3.3.nmu1_armhf.deb.tar.gz\nsudo dpkg -i silan_0.3.3~nmu1_armhf.deb\n")),(0,n.kt)("h4",{id:"legacy-upstream-silan-packages-httpsgithubcomlibretimelibretimeissues197"},"Legacy upstream silan packages (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/197"},"https://github.com/libretime/libretime/issues/197"),")"),(0,n.kt)("p",null,"Legacy upstream hosts patched packages for Ubuntu Trusty on ",(0,n.kt)("inlineCode",{parentName:"p"},"apt.sourcefabric.org"),". They install as ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.2~trusty~sfo-1"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install apt-transport-https\n\nsudo tee -a /etc/apt/sources.list <<EOD\ndeb https://apt.sourcefabric.org/ trusty main\nEOD\n\nsudo apt-get update\nsudo apt-get install sourcefabric-keyring\nsudo apt-get update\nsudo apt-get install --reinstall silan=0.3.2~trusty~sfo-1\n")),(0,n.kt)("h4",{id:"remove-silan-completely-httpsgithubcomlibretimelibretimeissues193issuecomment-299174997"},"Remove silan completely (",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/libretime/libretime/issues/193#issuecomment-299174997"},"https://github.com/libretime/libretime/issues/193#issuecomment-299174997"),")"),(0,n.kt)("p",null,"It is worth mentioning that you can disable cue point detection by removing silan from the system."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get uninstall silan\n")),(0,n.kt)("p",null,"Reportedly this might wake the \ud83d\udc08 (",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/116588/26853726-6d5bd6be-4b13-11e7-9dbd-9d7333e828c5.png",alt:"happy-cuteness-overload-small"})," ",(0,n.kt)("em",{parentName:"p"},"aww"),") or have other ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/214#issuecomment-305748757"},"side effects"),"."),(0,n.kt)("h3",{id:"liquidsoap--130-support"},"Liquidsoap >= 1.3.0 Support"),(0,n.kt)("p",null,"LibreTime currently only supports liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,n.kt)("a",{parentName:"p",href:"https://www.liquidsoap.info/"},"using OPAM")," or through the ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.1")," installed."),(0,n.kt)("p",null,"You can check your liquidsoap version by running ",(0,n.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,n.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,n.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,n.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,n.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.3/\ncurl -L https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0.patch | patch -p1\n")),(0,n.kt)("p",null,"Git users can pull from the branch at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0"},"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0")," directly."),(0,n.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,n.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,n.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,n.kt)("p",null,"Currently LibreTime does not support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,n.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,n.kt)("p",null,"Line In recording can be enabled in the UI but doesn't currently work. This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,n.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,n.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided."),(0,n.kt)("p",null,"You can set up the locale using a combination of the following command. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,n.kt)("p",null,"these instructions do not seem to work on all Debian based distros so you might need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,n.kt)("h2",{id:"-colophon"},"\ud83d\udcdd Colophon"),(0,n.kt)("p",null,"It's been awesome to see that the interest in LibreTime isn't dying off."),(0,n.kt)("p",null,"I recently did some cleaning up of the labels and milestones in the issue tracker and would like to ask everyone to help out with tagging issues and managing milestones."),(0,n.kt)("p",null,"Currently the milestones only contain issues likely to be finished in the development window of the respective version. This includes things that already have a pull-request or issues with a high priority due to their sensible or blocking nature. Feel free to request new labels and unversioned milestones if you feel you can use them."),(0,n.kt)("p",null,"That's all for these release notes. I'd also like to note that I plan on doing releases more often. They will be smaller but there will be less changes per release."))}d.isMDXComponent=!0},2973:(e,t,i)=>{i.d(t,{ZP:()=>o});var a=i(7462),n=(i(7294),i(3905)),s=(i(1839),i(4692));const l={toc:[]};function o(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,i.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,i.version)," release of LibreTime is available ",(0,n.kt)(s.Z,{version:i.version,mdxType:"TarballLink"},"here"),"."))}o.isMDXComponent=!0}}]);