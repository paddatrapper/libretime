"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/getting-started/install","docId":"getting-started/install"},{"type":"link","label":"Setting the Server Time","href":"/docs/getting-started/set-server-time","docId":"getting-started/set-server-time"},{"type":"link","label":"Change Default Passwords","href":"/docs/getting-started/default-passwords","docId":"getting-started/default-passwords"},{"type":"link","label":"SSL Configuration","href":"/docs/getting-started/ssl","docId":"getting-started/ssl"},{"type":"link","label":"Reverse Proxy","href":"/docs/getting-started/reverse-proxy","docId":"getting-started/reverse-proxy"}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Show Calendar","href":"/docs/guides/calendar","docId":"guides/calendar"},{"type":"link","label":"Dashboard","href":"/docs/guides/dashboard","docId":"guides/dashboard"},{"type":"link","label":"Listener Statistics","href":"/docs/guides/listener-stats","docId":"guides/listener-stats"},{"type":"link","label":"Broadcasting live","href":"/docs/guides/live-broadcast","docId":"guides/live-broadcast"},{"type":"link","label":"Playlists and Smartblocks","href":"/docs/guides/playlists","docId":"guides/playlists"},{"type":"link","label":"Playout History","href":"/docs/guides/playout-history","docId":"guides/playout-history"},{"type":"link","label":"Podcasts","href":"/docs/guides/podcasts","docId":"guides/podcasts"},{"type":"link","label":"Preparing Media for Upload","href":"/docs/guides/preparing-media","docId":"guides/preparing-media"},{"type":"link","label":"Scheduling Shows","href":"/docs/guides/scheduling-shows","docId":"guides/scheduling-shows"},{"type":"link","label":"Settings","href":"/docs/guides/settings","docId":"guides/settings"},{"type":"link","label":"System Status","href":"/docs/guides/status","docId":"guides/status"},{"type":"link","label":"Managing Users","href":"/docs/guides/users","docId":"guides/users"},{"type":"link","label":"Webstreams","href":"/docs/guides/webstreams","docId":"guides/webstreams"}]},{"type":"category","label":"Server Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Backing Up Libretime","href":"/docs/server-config/backing-up-the-server","docId":"server-config/backing-up-the-server"},{"type":"link","label":"FreeIPA Configuration","href":"/docs/server-config/freeipa","docId":"server-config/freeipa"},{"type":"link","label":"Host Configuration","href":"/docs/server-config/host-configuration","docId":"server-config/host-configuration"},{"type":"link","label":"Icecast Configuration","href":"/docs/server-config/icecast","docId":"server-config/icecast"}]},{"type":"category","label":"Appendix","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"LibreTime API Usage","href":"/docs/appendix/api","docId":"appendix/api"},{"type":"link","label":"HD Audio Modules","href":"/docs/appendix/hd-audio-modules","docId":"appendix/hd-audio-modules"},{"type":"link","label":"Rights and Royalties","href":"/docs/appendix/rights-royalties","docId":"appendix/rights-royalties"},{"type":"link","label":"Widgets","href":"/docs/appendix/widgets","docId":"appendix/widgets"}]},{"type":"link","label":"Local Development","href":"/docs/local-dev","docId":"local-dev"},{"type":"link","label":"Upgrading Libretime","href":"/docs/upgrading","docId":"upgrading"}]},"docs":{"appendix/api":{"id":"appendix/api","title":"LibreTime API Usage","description":"We\'re in the process of rewriting Libretime\'s API. This page contains the instructions for the current version, written in PHP.","sidebar":"tutorialSidebar"},"appendix/hd-audio-modules":{"id":"appendix/hd-audio-modules","title":"HD Audio Modules","description":"This listing is provided to help ensure that the correct model parameter is passed to the ALSA kernel module for an Intel HDA soundcard, if one is fitted to your LibreTime server.","sidebar":"tutorialSidebar"},"appendix/rights-royalties":{"id":"appendix/rights-royalties","title":"Rights and Royalties","description":"If you\'re new to broadcasting, or have not streamed your station online before,","sidebar":"tutorialSidebar"},"appendix/widgets":{"id":"appendix/widgets","title":"Widgets","description":"Bring your Libretime broadcast to your website with embeddable widgets! Libretime comes with two widgets: a streaming player and a schedule. Both widgets use iframes to display and can be placed wherever embeddable code can on a website.","sidebar":"tutorialSidebar"},"getting-started/default-passwords":{"id":"getting-started/default-passwords","title":"Change Default Passwords","description":"Libretime","sidebar":"tutorialSidebar"},"getting-started/install":{"id":"getting-started/install","title":"Installation","description":"Minimum System Requirements","sidebar":"tutorialSidebar"},"getting-started/reverse-proxy":{"id":"getting-started/reverse-proxy","title":"Reverse Proxy","description":"In some deployments, the LibreTime server is deployed behind a reverse proxy,","sidebar":"tutorialSidebar"},"getting-started/set-server-time":{"id":"getting-started/set-server-time","title":"Setting the Server Time","description":"Accurate time keeping on your server is vital for LibreTime performance. You can confirm that the date and time of your server are set correctly with the date command.","sidebar":"tutorialSidebar"},"getting-started/ssl":{"id":"getting-started/ssl","title":"SSL Configuration","description":"To increase the security of your server, you can enable encrypted access to the LibreTime administration interface, and direct your users towards this more secure login page. The main advantage of using this encryption is that your remote users\' login names and passwords are not sent in plain text across the public Internet or untrusted local networks, such as shared Wi-Fi access points.","sidebar":"tutorialSidebar"},"guides/calendar":{"id":"guides/calendar","title":"Show Calendar","description":"The Calendar page of the LibreTime administration interface has three views: day, week and month, which can be switched using the grey buttons in the top right corner. By default, the month view is shown, with today\'s date highlighted by a pale grey background.","sidebar":"tutorialSidebar"},"guides/dashboard":{"id":"guides/dashboard","title":"Dashboard","description":"Want to listen to Libretime\'s output stream? Click Listen below the On Air light.","sidebar":"tutorialSidebar"},"guides/listener-stats":{"id":"guides/listener-stats","title":"Listener Statistics","description":"The Listener Stats page on the Analytics menu shows graphs of listener connections to the configured streaming servers for the selected date and time range. On the right side, a green Status indicator shows OK if the connection to the streaming server is active.","sidebar":"tutorialSidebar"},"guides/live-broadcast":{"id":"guides/live-broadcast","title":"Broadcasting live","description":"MIXXX","sidebar":"tutorialSidebar"},"guides/playlists":{"id":"guides/playlists","title":"Playlists and Smartblocks","description":"Creating a new playlist","sidebar":"tutorialSidebar"},"guides/playout-history":{"id":"guides/playout-history","title":"Playout History","description":"On the History menu, the Playout History page enables you to view a list of files played within a specific date and time range. This page is designed to help your station prepare reports for music royalty collection societies and regulatory agencies.","sidebar":"tutorialSidebar"},"guides/podcasts":{"id":"guides/podcasts","title":"Podcasts","description":"The Podcasts page allows you add subscriptions to podcasts which are often used to syndicated audio files using a URL called a RSS feed. This allows your LibreTime instance to automatically download new shows from the web.","sidebar":"tutorialSidebar"},"guides/preparing-media":{"id":"guides/preparing-media","title":"Preparing Media for Upload","description":"Before uploading media to an LibreTime server, there are a number of factors which should be considered. Getting your ingest workflow right will save you a lot of time later.","sidebar":"tutorialSidebar"},"guides/scheduling-shows":{"id":"guides/scheduling-shows","title":"Scheduling Shows","description":"Log in using your username and password using the link in the upper right corner. (If you just installed","sidebar":"tutorialSidebar"},"guides/settings":{"id":"guides/settings","title":"Settings","description":"General Settings","sidebar":"tutorialSidebar"},"guides/status":{"id":"guides/status","title":"System Status","description":"On the Settings menu, the Status page provides an overview of the health and resource usage of the various","sidebar":"tutorialSidebar"},"guides/users":{"id":"guides/users","title":"Managing Users","description":"It is strongly recommended not to use the default admin account in production, especially if your LibreTime server is accessible from the internet.","sidebar":"tutorialSidebar"},"guides/webstreams":{"id":"guides/webstreams","title":"Webstreams","description":"Adding a webstream","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Libretime is an open-source radio automation system. It can be used for music and show playout in a radio studio or start an internet radio station on its own. Libretime runs on Ubuntu and Debian Linux; we\'re also working on making Docker images.","sidebar":"tutorialSidebar"},"local-dev":{"id":"local-dev","title":"Local Development","description":"Vagrant","sidebar":"tutorialSidebar"},"server-config/backing-up-the-server":{"id":"server-config/backing-up-the-server","title":"Backing Up Libretime","description":"At the moment, there is no script to cleanly restore a Libretime backup. To restore a Libretime backup, install a fresh copy, go through the standard setup process, and reupload the backed-up media files.","sidebar":"tutorialSidebar"},"server-config/freeipa":{"id":"server-config/freeipa","title":"FreeIPA Configuration","description":"You can configure LibreTime to delegate all authentication to a FreeIPA server.","sidebar":"tutorialSidebar"},"server-config/host-configuration":{"id":"server-config/host-configuration","title":"Host Configuration","description":"The streaming host configuration for LibreTime is shown in the file /etc/airtime/liquidsoap.cfg which is automatically generated by the Streams page, found on the System menu of the LibreTime administration interface. For this reason, you would not normally edit the streaming configuration manually, as any changes are likely to be overwritten by the administration interface.","sidebar":"tutorialSidebar"},"server-config/icecast":{"id":"server-config/icecast","title":"Icecast Configuration","description":"Background","sidebar":"tutorialSidebar"},"upgrading":{"id":"upgrading","title":"Upgrading Libretime","description":"While upgrading your installation may not cause any station downtime or data loss, always plan for the worst. Only upgrade your installation when Libretime isn\'t playing out shows, notify your DJs and essential personnel, and back up your database, configuration files, and media library before you make any changes.","sidebar":"tutorialSidebar"}}}')}}]);