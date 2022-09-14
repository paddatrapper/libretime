"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6079],{4692:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294),o=a(9960);const n=e=>{let{version:t,children:a}=e;return i.createElement(o.Z,{to:`https://github.com/libretime/libretime/releases/download/${t}/libretime-${t}.tar.gz`},a)}},9045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=a(7462),o=(a(7294),a(3905)),n=(a(1839),a(2973));const l={title:"LibreTime 3.0.0 alpha 8"},s=void 0,r={unversionedId:"releases/3.0.0-alpha.08",id:"releases/3.0.0-alpha.08",title:"LibreTime 3.0.0 alpha 8",description:"Contributors",source:"@site/../docs/releases/3.0.0-alpha.08.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.08",permalink:"/docs/next/releases/3.0.0-alpha.08",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.08.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 8"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 9",permalink:"/docs/next/releases/3.0.0-alpha.09"},next:{title:"LibreTime 3.0.0 alpha 7",permalink:"/docs/next/releases/3.0.0-alpha.07"}},u={},p=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Installer Issues",id:"installer-issues",level:3},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Liquidsoap Support",id:"liquidsoap-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.ZP,{date:"2019-08-02",version:"3.0.0-alpha.8",mdxType:"ReleaseHead"}),(0,o.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,o.kt)("p",null,"The LibreTime project wants to thank the following contributors for contributing to this release:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@ciaby"),(0,o.kt)("li",{parentName:"ul"},"@hairmare"),(0,o.kt)("li",{parentName:"ul"},"@learning-more"),(0,o.kt)("li",{parentName:"ul"},"@mirzazulfan"),(0,o.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,o.kt)("li",{parentName:"ul"},"@Robbt")),(0,o.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The LibreTime project now has a proper logo!"),(0,o.kt)("li",{parentName:"ul"},'New "Show Listener Stats" in "Analytics" contains listeners statistics on specific shows.'),(0,o.kt)("li",{parentName:"ul"},"Display time of last podcast import in downloaded podcasts view."),(0,o.kt)("li",{parentName:"ul"},"Allow sorting by last play date in smartblocks, makes creating playlists that play the least played track possible."),(0,o.kt)("li",{parentName:"ul"},"Preliminary support for Debian Buster (Remember to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/releases#issues-liquidsoap-3.0.0-alpha.8"},"patch the liquidsoap scripts")," if you use Buster).")),(0,o.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Widgets now use user specified timezones as they should."),(0,o.kt)("li",{parentName:"ul"},"Podcast view now display proper number of downloaded podcasts rather than just the first 25 podcasts."),(0,o.kt)("li",{parentName:"ul"},"Fix using non-ascii characters in podcast publishing service."),(0,o.kt)("li",{parentName:"ul"},'Fix canceling current show for "linked" shows.'),(0,o.kt)("li",{parentName:"ul"},"Fix empty schedule page when previous track is empty."),(0,o.kt)("li",{parentName:"ul"},"Fix focus jumping to search in advanced search.")),(0,o.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dropped support for Debian Jessie as it is end-of-life"),(0,o.kt)("li",{parentName:"ul"},"Liquidsoap 1.1.1 support. 3.0.0-alpha.8 is most likely the last version to support liquidsoap 1.1.1 out of the box. The number of distros that install a current version of liquidsoap are gaining the majority and once Ubuntu releases a version of their distro that has liquidsoap 1.3.x we will switch to native liquidsoap 1.3.x support. Users still on liquidsoap 1.1.1 will need to apply a patch to their liquidsoap scripts (or update liquidsoap).")),(0,o.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,o.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,o.kt)("h3",{id:"installer-issues"},"Installer Issues"),(0,o.kt)("p",null,"The installer is generally a bit unstable, we hope to be able to offer some reasonable packages at some point. Some of the GUI driven parts before the first login are also in a somewhat questionable state, ymmv."),(0,o.kt)("p",null,"For now the installer distro selection is pretty good at auto-detecting your os and usually does an ok job depending on your distro. You should usually not need to pass a --distribution and --release parameter, those are still supported for the time being but their use is not recommended."),(0,o.kt)("p",null,"The UI works best if you don't use it in an opinionated fashion and change just the bare minimal."),(0,o.kt)("p",null,"If you want to skip the installer GUI completely you can configure LibreTime using ",(0,o.kt)("inlineCode",{parentName:"p"},"airtime_mvc/build/airtime.example.conf")," as an template. Due to some python/PHP differences you must remove all comments from the example to use it \ud83d\ude1e. You'll also have to create some folder structures manually and check if the music dir got properly created directly in the database. Referencing a second ",(0,o.kt)("inlineCode",{parentName:"p"},"install -fiap")," install on a non productive system for reference can help with this type of bootstrap."),(0,o.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you do not run into the problems described in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/450"},"https://github.com/libretime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,o.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,o.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan (0.3.2) on some Debian based Platforms (ie. Ubuntu). This affects Ubuntu 16.04, Debian Jessie and Debian Stretch. CentOS does not have upstream packages and you may either install from source or use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,o.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,o.kt)("p",null,"Check your version of silan by running ",(0,o.kt)("inlineCode",{parentName:"p"},"silan --version"),". This should report ",(0,o.kt)("inlineCode",{parentName:"p"},"0.3.3")," or higher. If not please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation")," wiki page for more details & workarounds."),(0,o.kt)("p",null,"To date silan 0.3.3 or higher is in Debian testing & Ubuntu Bionic. You can check the upstream progress the ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/silan"},"Debian PTS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://launchpad.net/ubuntu/+source/silan"},"Ubuntu launchpad"),". This section will get removed once the package is in stable."),(0,o.kt)("p",null,"tldr: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation"))),(0,o.kt)("h3",{id:"liquidsoap-support"},"Liquidsoap Support"),(0,o.kt)("p",null,"LibreTime currently only supports liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,o.kt)("a",{parentName:"p",href:"https://www.liquidsoap.info/"},"using OPAM")," or through the ",(0,o.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.2")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.3")," installed."),(0,o.kt)("p",null,"#352 reports that liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," can exhibit issues on Debian Stretch installs. One fix for the issue is to install liquidsoap ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.0")," and to use the following patching steps."),(0,o.kt)("p",null,"You can check your liquidsoap version by running ",(0,o.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,o.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,o.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,o.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,o.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.8/\ncurl -L https://github.com/libretime/libretime/compare/master...radiorabe:feature/liquidsoap-1.3-for-3.0.0-alpha.7.patch | patch -p1\n")),(0,o.kt)("p",null,"Git users can pull from the branch at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3-for-3.0.0-alpha.7"},"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3-for-3.0.0-alpha.7")," directly."),(0,o.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,o.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,o.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,o.kt)("p",null,"Currently LibreTime does not support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,o.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,o.kt)("p",null,"This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,o.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,o.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided."),(0,o.kt)("p",null,"You can set up the locale using a combination of the following commands. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,o.kt)("p",null,"These instructions do not seem to work on all Debian based distros so you might need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,o.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,o.kt)("p",null,"Some translations might miss the tarball. They didn't get lost, but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we probably want to support bidirectional translation syncing with zanata."))}m.isMDXComponent=!0},2973:(e,t,a)=>{a.d(t,{ZP:()=>s});var i=a(7462),o=(a(7294),a(3905)),n=(a(1839),a(4692));const l={toc:[]};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This version was released the ",(0,o.kt)("strong",null,a.date),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,o.kt)("p",{parentName:"admonition"},"Join our ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,o.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,o.kt)("p",null,"The full tarball for the ",(0,o.kt)("code",null,a.version)," release of LibreTime is available ",(0,o.kt)(n.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}s.isMDXComponent=!0}}]);