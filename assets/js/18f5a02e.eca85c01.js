"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4709],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,f=p["".concat(u,".").concat(b)]||p[b]||s[b]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},13701:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={title:"Library management",sidebar_position:30},u=void 0,c={unversionedId:"admin-manual/library",id:"version-3.0.0-alpha.13/admin-manual/library",title:"Library management",description:"This page describe the available options to manage the LibreTime library.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/library.md",sourceDirName:"admin-manual",slug:"/admin-manual/library",permalink:"/docs/admin-manual/library",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/library.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:30,frontMatter:{title:"Library management",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Setting the server time",permalink:"/docs/admin-manual/server-time"},next:{title:"Stream configuration",permalink:"/docs/admin-manual/stream-configuration"}},m={},s=[{value:"Files bulk import",id:"files-bulk-import",level:2}],p={toc:s};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describe the available options to manage the LibreTime library."),(0,i.kt)("h2",{id:"files-bulk-import"},"Files bulk import"),(0,i.kt)("p",null,"To scan a directory and import the files into the library, you can use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-api bulk_import --path PATH_THE_DIRECTORY_TO_SCAN\n")),(0,i.kt)("p",null,"See the command usage to get available options."))}b.isMDXComponent=!0}}]);