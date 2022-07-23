"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1354],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Setting the server time",sidebar_position:20},p=void 0,l={unversionedId:"admin-manual/server-time",id:"version-3.0.0-alpha.13/admin-manual/server-time",title:"Setting the server time",description:"Accurate time keeping on your server is vital for LibreTime performance. You can confirm that the date and time of your server are set correctly with the date command.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/server-time.md",sourceDirName:"admin-manual",slug:"/admin-manual/server-time",permalink:"/docs/admin-manual/server-time",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/server-time.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:20,frontMatter:{title:"Setting the server time",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/docs/admin-manual/backup"},next:{title:"Library management",permalink:"/docs/admin-manual/library"}},u={},m=[{value:"Configuring NTP",id:"configuring-ntp",level:2},{value:"Adjusting the server time zone",id:"adjusting-the-server-time-zone",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Accurate time keeping on your server is vital for LibreTime performance. You can confirm that the date and time of your server are set correctly with the ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," command.\nThe server should respond with the date, time, time zone and year in a format similar to the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tue Jul  2 15:08:57 BST 2013\n")),(0,a.kt)("p",null,"If the time on your server is wrong, we strongly recommend that you take LibreTime off-air until the problem is fixed."),(0,a.kt)("h2",{id:"configuring-ntp"},"Configuring NTP"),(0,a.kt)("p",null,"Although it is possible to set the date and time of the server manually, this is not recommended because the server clock can drift over time, compromising the accuracy of your broadcast schedule. If your LibreTime server is permanently connected to the Internet, you can synchronize your server to a time server with the ",(0,a.kt)("strong",{parentName:"p"},"ntp")," program. If ",(0,a.kt)("strong",{parentName:"p"},"ntp")," is not on your server, you can install it with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install ntp"),"."),(0,a.kt)("p",null,"Optionally, open the ",(0,a.kt)("strong",{parentName:"p"},"ntp")," configuration file in the ",(0,a.kt)("strong",{parentName:"p"},"nano")," editor to add further time server names:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/ntp.conf\n")),(0,a.kt)("p",null,"On Ubuntu GNU/Linux, the default time server is ",(0,a.kt)("inlineCode",{parentName:"p"},"ntp.ubuntu.com"),", but there are many other time servers available on the public Internet, including the group of servers listed at ",(0,a.kt)("a",{parentName:"p",href:"https://www.pool.ntp.org/"},"https://www.pool.ntp.org/")," for each country. Using a variety of NTP servers located closely to your LibreTime server should produce the most accurate results. For example, for a server in the United Kingdom you could use the following list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:'language-title="/etc/ntp.conf"'},"# You do need to talk to an NTP server or two (or three).\nserver ntp.ubuntu.com\nserver 0.uk.pool.ntp.org\nserver 1.uk.pool.ntp.org\nserver 2.uk.pool.ntp.org\nserver 3.uk.pool.ntp.org\n")),(0,a.kt)("p",null,"Enter the server names you require, press ",(0,a.kt)("strong",{parentName:"p"},"Ctrl+O")," to write out the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/ntp.conf")," file, then ",(0,a.kt)("strong",{parentName:"p"},"Ctrl+X")," to exit ",(0,a.kt)("strong",{parentName:"p"},"nano"),". Restart the ",(0,a.kt)("strong",{parentName:"p"},"ntp")," service with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart ntp"),"."),(0,a.kt)("p",null,"The server should respond:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* Stopping NTP server ntpd                                 [ OK ]\n* Starting NTP server ntpd                                 [ OK ]\n")),(0,a.kt)("p",null,"Then use the ",(0,a.kt)("strong",{parentName:"p"},"ntpq -p")," command to confirm that ",(0,a.kt)("strong",{parentName:"p"},"ntp")," is working. This command should produce output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ntpq -p\n    remote      refid     st t  when poll reach  delay offset jitter\n==================================================================\neuropium. 193.79.237.14  2 u   28   64    3  39.571  12.600  3.590\nnorb.v4.c 46.227.200.72  3 u   28   64    3  47.856  -6.908 10.028\n82.113.15 193.62.22.82   2 u   29   64    3  11.458  -0.513  2.629\nntppub.le 158.43.192.66  2 u   91   64    2 122.781  44.864  0.001\ndns0.rmpl 195.66.241.3   2 u   27   64    3  22.171   1.464  4.242\n")),(0,a.kt)("h2",{id:"adjusting-the-server-time-zone"},"Adjusting the server time zone"),(0,a.kt)("p",null,"The data centre which hosts your LibreTime server could be located anywhere in the world. Some servers are set to ",(0,a.kt)("em",{parentName:"p"},"Coordinated Universal Time")," or UTC (similar to ",(0,a.kt)("em",{parentName:"p"},"Greenwich Mean Time")," or GMT), regardless of their location. LibreTime uses UTC time in its database for scheduling purposes, independent of the server time zone."),(0,a.kt)("p",null,"Find your timezone's shortcode with ",(0,a.kt)("inlineCode",{parentName:"p"},"timedatectl list-timezones"),", then enter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo timedatectl set-timezone your_time_zone\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can check to see which time zone your server is set to by running ",(0,a.kt)("inlineCode",{parentName:"p"},"timedatectl")," without any arguments."))))}d.isMDXComponent=!0}}]);