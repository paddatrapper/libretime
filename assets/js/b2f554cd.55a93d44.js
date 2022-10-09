"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/09/17/libretime-v3-beta.0","metadata":{"permalink":"/blog/2022/09/17/libretime-v3-beta.0","source":"@site/blog/2022-09-17-libretime-v3-beta.0.md","title":"LibreTime 3.0.0 beta.0, finally!","description":"Greetings LibreTime enthusiast\'s and friends!","date":"2022-09-17T00:00:00.000Z","formattedDate":"September 17, 2022","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.73,"hasTruncateMarker":true,"authors":[{"name":"Jooola","url":"https://github.com/jooola","key":"jooola"}],"frontMatter":{"title":"LibreTime 3.0.0 beta.0, finally!","authors":["jooola"],"tags":["release"]}},"content":"Greetings LibreTime enthusiast\'s and friends!\\n\\nWe are happy to announce that we [released LibreTime `v3.0.0-beta.0` yesterday](/docs/releases/3.0.0-beta.0/)! :tada:\\n\\nThis is our very first blog post, and they should be as irregular as LibreTime releases! We changed from the monthly community meetings to something less timezone sensitive, such as blog posts.\\n\\n\x3c!--truncate--\x3e\\n\\nWe will go through the notable changes in the recent release of LibreTime.\\n\\nA **lot** of work has been put into LibreTime to finalize the forking from AirTime, and provide a comfortable base for future works.\\n\\n## Versions, and supported distributions releases\\n\\nWe drafted a [supported distributions releases and versions support policy](/docs/developer-manual/development/releases#distributions-releases-support), that will help us to know when to drop support for distributions releases, and help you to plan for a distributions upgrades.\\n\\nThe important bits are:\\n\\n- New LibreTime releases will only target the current stable distributions releases.\\n- Maintenance only releases will provide bug and security fixes for old stable distributions releases until they reach their end of life.\\n\\nNote that the [release note for LibreTime `v3.0.0-beta.0`](/docs/releases/3.0.0-beta.0/#-deprecation-and-removal) announced some major deprecation.\\n\\n## What is missing from AirTime ?\\n\\nI would expect that most of AirTime users already migrated to LibreTime using one of the many alpha versions, for those who didn\'t migrated yet, you will have to install LibreTime `<3.1` before upgrading to any newer versions.\\n\\nSome incomplete or non functional features from AirTime were removed in LibreTime:\\n\\n- [The **My podcasts** feature has been removed.](https://github.com/libretime/libretime/pull/1327)\\n- [The **Line in recording** feature was not added.](https://github.com/libretime/libretime/issues/42)\\n- (I probably missed a few others...)\\n\\nThose feature might be reimplemented in the future, any contribution are welcome!\\n\\n## Running inside containers\\n\\nThis has been awaited for quite some time: you can now [run LibreTime inside containers](/docs/admin-manual/setup/install#using-docker-compose) :tada: ! A [docker-compose example](https://github.com/libretime/libretime/tree/main/docker/example) is available in the repository.\\n\\nPlease help us test it and give us feedback, we really appreciate any help!\\n\\n## A new configuration file\\n\\nA lot has moved with regards to configuring LibreTime. A lot of settings from the database moved to the configuration file to simplify the configuration of LibreTime.\\n\\nThis will allow us to add more options for advanced use cases, such as ssl input harbors, HLS outputs or your own Liquidsoap scripts.\\n\\n## Improvement for development\\n\\nLibreTime might be hard to contribute to without having a good understanding of the project in general. A lot of work has been made to clean and modernize parts of LibreTime, by simplifying the file structure of the project and the naming, adding typing definitions or development tools to help you write good code. To keep improving the developer experience, new contributions will have to include typings and tests.\\n\\nThough, with the new docker-compose setup, setting up a development environment is really easy! Feel free to test it by making a contribution!\\n\\n## Now what ?\\n\\nWe expect to cut the LibreTime 3.0.0 release in the next weeks. So please help us test LibreTime so we can fix bugs!\\n\\nA few exiting features that are will be worked on once 3.0.0 is out:\\n\\n- Liquidsoap 2.0 support\\n- SSL input harbors\\n- HLS streaming\\n- Start embedding a new UI in parts of the legacy web application.\\n\\nIf you feel [like paying us a beer, or a month rent](https://opencollective.com/libretime), we will really appreciate!\\n\\nCheers !\\n\\nJo"}]}')}}]);