"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7472],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"Listener statistics"},c=void 0,l={unversionedId:"user-manual/listener-stats",id:"version-3.0.0-alpha.12/user-manual/listener-stats",title:"Listener statistics",description:"The Listener Stats page on the Analytics menu shows graphs of listener connections to the configured streaming servers for the selected date and time range. On the right side, a green Status indicator shows OK if the connection to the streaming server is active.",source:"@site/versioned_docs/version-3.0.0-alpha.12/user-manual/listener-stats.md",sourceDirName:"user-manual",slug:"/user-manual/listener-stats",permalink:"/docs/user-manual/listener-stats",editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/user-manual/listener-stats.md",tags:[],version:"3.0.0-alpha.12",frontMatter:{title:"Listener statistics"},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/docs/user-manual/dashboard"},next:{title:"Broadcasting live",permalink:"/docs/user-manual/live-broadcast"}},u={},p=[],m={toc:p};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Listener Stats page on the Analytics menu shows graphs of listener connections to the configured streaming servers for the selected date and time range. On the right side, a green ",(0,s.kt)("strong",{parentName:"p"},"Status")," indicator shows ",(0,s.kt)("strong",{parentName:"p"},"OK")," if the connection to the streaming server is active."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(7387).Z,width:"650",height:"350"})),(0,s.kt)("p",null,"If the status indicator is red, check that the ",(0,s.kt)("strong",{parentName:"p"},"Admin User")," and ",(0,s.kt)("strong",{parentName:"p"},"Admin Password")," settings are correct under ",(0,s.kt)("strong",{parentName:"p"},"Additional Options")," for the named mount point, such as ",(0,s.kt)("em",{parentName:"p"},"libretime_128"),", on the ",(0,s.kt)("strong",{parentName:"p"},"Streams")," page of the ",(0,s.kt)("strong",{parentName:"p"},"Settings")," menu."),(0,s.kt)("p",null,"To choose which particular streams should have statistics displayed, click the check boxes for the individual colour-coded mount points, just below the graph."),(0,s.kt)("p",null,"By default, statistics for the last 24 hours of streaming are shown. To change this date and time range, click the calendar and clock icons in the lower left corner of the page, then click the magnifying glass icon."))}d.isMDXComponent=!0},7387:function(e,t,n){t.Z=n.p+"assets/images/listener-stats-stream-stats-20febe7b63cd005606f5d73e427770d9.jpg"}}]);