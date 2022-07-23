"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2471],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(h,r(r({ref:t},l),{},{components:a})):n.createElement(h,r({ref:t},l))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40084:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],s={title:"Stream configuration",sidebar_position:30},c=void 0,m={unversionedId:"admin-manual/stream-configuration",id:"version-3.0.0-alpha.13/admin-manual/stream-configuration",title:"Stream configuration",description:"LibreTime supports direct connection to two popular streaming media servers, the open source Icecast (https//www.shoutcast.com). Apart from the software license, the main difference between these two servers is that Icecast supports simultaneous MP3, AAC, Ogg Vorbis or Ogg Opus streaming from LibreTime, whereas SHOUTcast only supports MP3 and AAC streams. The royalty-free Ogg Vorbis format has the advantage of better sound quality than MP3 at lower bitrates, which has a direct impact on the amount of bandwidth that your station will require to serve the same number of listeners. Ogg Opus also benefits from good sound quality at low bitrates, with the added advantage of lower latency than other streaming formats. Opus is now an IETF standard and requires Icecast 2.4 or later to be installed on the streaming server.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/stream-configuration.md",sourceDirName:"admin-manual",slug:"/admin-manual/stream-configuration",permalink:"/docs/admin-manual/stream-configuration",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/stream-configuration.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:30,frontMatter:{title:"Stream configuration",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Library management",permalink:"/docs/admin-manual/library"},next:{title:"Custom authentication",permalink:"/docs/admin-manual/custom-authentication"}},l={},u=[{value:"Icecast",id:"icecast",level:2},{value:"UTF-8 metadata in Icecast MP3 streams",id:"utf-8-metadata-in-icecast-mp3-streams",level:3},{value:"Icecast handover configuration",id:"icecast-handover-configuration",level:3},{value:"Source configuration",id:"source-configuration",level:3},{value:"Promoting your station",id:"promoting-your-station",level:3}],p={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"LibreTime supports direct connection to two popular streaming media servers, the open source Icecast (",(0,i.kt)("a",{parentName:"p",href:"https://www.icecast.org/"},"https://www.icecast.org/"),") and the proprietary SHOUTcast (",(0,i.kt)("a",{parentName:"p",href:"https://www.shoutcast.com"},"https://www.shoutcast.com"),"). Apart from the software license, the main difference between these two servers is that Icecast supports simultaneous MP3, AAC, Ogg Vorbis or Ogg Opus streaming from LibreTime, whereas SHOUTcast only supports MP3 and AAC streams. The royalty-free Ogg Vorbis format has the advantage of better sound quality than MP3 at lower bitrates, which has a direct impact on the amount of bandwidth that your station will require to serve the same number of listeners. Ogg Opus also benefits from good sound quality at low bitrates, with the added advantage of lower latency than other streaming formats. Opus is now an ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6716"},"IETF standard")," and requires Icecast 2.4 or later to be installed on the streaming server."),(0,i.kt)("p",null,"Ogg Vorbis playback is supported in most modern web browsers (see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#opus"},"this MDN article")," for more information) and desktop players like ",(0,i.kt)("a",{parentName:"p",href:"https://www.videolan.org/vlc/"},"VLC"),"."),(0,i.kt)("p",null,"Streaming MP3 below a bitrate of 128kbps is not recommended for music, because of a perceptible loss of high audio frequencies in the broadcast playout. A 96kbps or 64kbps MP3 stream may be acceptable for voice broadcasts if there is a requirement for compatibility with legacy hardware playback devices which do not support Ogg Vorbis or Opus streams."),(0,i.kt)("p",null,"Because LibreTime supports simultaneous streaming in multiple formats, it is possible to offer one or more streams via your website, and another independent stream for direct connection from hardware players. You can test whether Ogg streams sound better at low bitrates for yourself, by using the ",(0,i.kt)("strong",{parentName:"p"},"LISTEN")," button in LibreTime's ",(0,i.kt)("strong",{parentName:"p"},"Master Panel")," to switch between streaming formats."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Setting a higher bitrate for your output stream will only benefit your listeners if you have high bitrate source material to play. LibreTime can convert bitrates down for lower-quality streams but ",(0,i.kt)("em",{parentName:"p"},"cannot")," convert up for higher-quality streams."))),(0,i.kt)("h2",{id:"icecast"},"Icecast"),(0,i.kt)("h3",{id:"utf-8-metadata-in-icecast-mp3-streams"},"UTF-8 metadata in Icecast MP3 streams"),(0,i.kt)("p",null,"When sending metadata about your stream to an Icecast server in non-Latin alphabets, you may find that Icecast does not display the characters correctly for an MP3 stream, even though they're displayed correctly for an Ogg Vorbis stream. In the following screenshot, Russian characters are being displayed incorrectly in the ",(0,i.kt)("em",{parentName:"p"},"Current Song")," field for the MP3 stream:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(21162).Z,width:"595",height:"760"})),(0,i.kt)("p",null,"The solution is to specify that the metadata for the MP3 mount point you are using should be interpreted using UTF-8 encoding. You can do this by adding the following stanza to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file, where ",(0,i.kt)("inlineCode",{parentName:"p"},"libretime.mp3")," is the name of your mount point:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<mount>\n  <mount-name>/libretime.mp3</mount-name>\n  <charset>UTF-8</charset>\n</mount>\n")),(0,i.kt)("p",null,"After saving the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file, restart the Icecast server with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart icecast2"),"."),(0,i.kt)("h3",{id:"icecast-handover-configuration"},"Icecast handover configuration"),(0,i.kt)("p",null,"In a typical radio station configuration, the live output from the broadcast studio and the scheduled output from LibreTime are mixed together before being sent further along the broadcast chain, to a transmitter or streaming media server on the Internet. (This may not be the case if your LibreTime server is remote from the studio, and you are using the ",(0,i.kt)("strong",{parentName:"p"},"Show Source Mount Point")," or ",(0,i.kt)("strong",{parentName:"p"},"Master Source Mount Point")," to mix live and scheduled content. See the ",(0,i.kt)("em",{parentName:"p"},"Stream Settings")," chapter for details)."),(0,i.kt)("p",null,"If your Icecast server is hosted in a remote data centre, you may not have the option to handover the streaming media source manually, because you have no physical access to connect a broadcast mixer to the server. Disconnecting the stream and beginning another is less than ideal, because the audience's media players will also be disconnected when that happens."),(0,i.kt)("p",null,"The Icecast server has a ",(0,i.kt)("em",{parentName:"p"},"fallback-mount")," feature which can be used to move clients (media players used by listeners or viewers) from one source to another, as new sources become available. This makes it possible to handover from LibreTime output to a show from another source, and handover to LibreTime again once the other show has ended."),(0,i.kt)("p",null,"To enable fallback mounts, edit the main Icecast configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml"),") to define the mount points you will use, and the relationship between them."),(0,i.kt)("p",null,"The example mount section provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"icecast.xml")," file is commented out by default. Before or after the commented section, add three mount point definitions. The default mount point used by LibreTime is ",(0,i.kt)("inlineCode",{parentName:"p"},"/main")," which is shown in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/libretime/liquidsoap.cfg")," file. You must also define a mount point for the live source (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"/live.ogg"),") and a mount point for the public to connect to (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"/stream.ogg"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="/etc/icecast2/icecast.xml"',title:'"/etc/icecast2/icecast.xml"'},"<mount>\n     <mount-name>/main</mount-name>\n     <hidden>0</hidden>\n</mount>\n\n<mount>\n     <mount-name>/live.ogg</mount-name>\n     <fallback-mount>/main</fallback-mount>\n     <fallback-override>1</fallback-override>\n     <hidden>0</hidden>\n</mount>\n\n<mount>\n     <mount-name>/stream.ogg</mount-name>\n     <fallback-mount>/live.ogg</fallback-mount>\n     <fallback-override>1</fallback-override>\n     <hidden>0</hidden>\n</mount>\n")),(0,i.kt)("p",null,"These mount point definitions mean that a client connecting to a URL such as ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"http://icecast.example.com:8000/stream.ogg"},"http://icecast.example.com:8000/stream.ogg"))," will first fall back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/live.ogg")," mount point if it is available. If not, the client will fall back in turn to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/main")," mount point for LibreTime playout."),(0,i.kt)("p",null,"Setting the value of ",(0,i.kt)("em",{parentName:"p"},"fallback-override")," to 1 (enabled) means that when the ",(0,i.kt)("inlineCode",{parentName:"p"},"/live.ogg")," mount point becomes available again, the client will be re-connected to it. If you wish to hide the ",(0,i.kt)("inlineCode",{parentName:"p"},"/main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/live.ogg")," mount points from the public Icecast web interface, set the value of ",(0,i.kt)("em",{parentName:"p"},"hidden")," in each of these definitions to 1."),(0,i.kt)("h3",{id:"source-configuration"},"Source configuration"),(0,i.kt)("p",null,"Connect the other source to the Icecast server with the same parameters defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/libretime/liquidsoap.cfg")," file, except for the mount point. This should one of the mount points you have defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/live.ogg")," in the example above."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Streaming with Mixxx")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To configure Mixxx for streaming to Icecast, click ",(0,i.kt)("em",{parentName:"p"},"Options"),", ",(0,i.kt)("em",{parentName:"p"},"Preferences"),", then ",(0,i.kt)("em",{parentName:"p"},"Live Broadcasting"),". For server ",(0,i.kt)("em",{parentName:"p"},"Type"),", select the default of ",(0,i.kt)("em",{parentName:"p"},"Icecast 2")," when streaming to Debian or Ubuntu servers."))),(0,i.kt)("p",null,"By default, Icecast streams are buffered to guard against network problems, which causes latency for remote listeners. When monitoring the stream from a remote location, you may have to begin the live stream a few seconds before the previous stream ends to enable a smooth transition."),(0,i.kt)("h3",{id:"promoting-your-station"},"Promoting your station"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section covers how to edit Icecast's configuration to broadcast your station's information to online radio station directories. If you aren't using Icecast (or don't want to edit the configuration file), many online directories will allow you to manually add your station to their listings."))),(0,i.kt)("p",null,"There are many online radio station directories you can add your station to for additional exposure."),(0,i.kt)("p",null,"On an Icecast server, you can uncomment the ",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," section in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," file to have\nyour station automatically listed on the ",(0,i.kt)("a",{parentName:"p",href:"https://dir.xiph.org/"},"Icecast directory website"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Uncomment this if you want directory listings --\x3e\n\n<directory>\n     <yp-url-timeout>15</yp-url-timeout>\n     <yp-url>https://dir.xiph.org/cgi-bin/yp-cgi</yp-url>\n</directory>\n")),(0,i.kt)("p",null,"The Indymedia stream directory at ",(0,i.kt)("a",{parentName:"p",href:"https://radio.indymedia.org"},"https://radio.indymedia.org")," links to grassroots independent radio projects around the world. You can add your station to their list with an additional ",(0,i.kt)("em",{parentName:"p"},"directory")," section, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<directory>\n  <yp-url-timeout>15</yp-url-timeout>\n  <yp-url>https://radio.indymedia.org/cgi-bin/yp-cgi</yp-url>\n</directory>\n")))}d.isMDXComponent=!0},21162:function(e,t,a){t.Z=a.p+"assets/images/icecast-screenshot223-icecast_utf-8_metadata-1e00a3fc1c444c8545eadc97e1463fcb.png"}}]);