(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2733],{16963:function(e,a,n){"use strict";n.r(a),n.d(a,{assets:function(){return g},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var i=n(83117),t=n(80102),o=(n(67294),n(3905)),s=n(93456),r=["components"],d={},m="Database schema creation and migrations",l={unversionedId:"developer-manual/design/database-migrations",id:"developer-manual/design/database-migrations",title:"Database schema creation and migrations",description:"The method to maintain the database schema, is to write both a migration file for already installed databases and to update a schema.sql file for fresh databases. On fresh installation, the database is filled with the schema.sql and data.sql files and LibreTime won't run any sql migration on top of it. Previously, when LibreTime was upgraded, the missing migrations were run using a custom php based migration tool, those migrations are now handled by Django. The missing migrations are tracked using both a schemaversion field in the ccpref table and a Django migration id.",source:"@site/../docs/developer-manual/design/database-migrations.md",sourceDirName:"developer-manual/design",slug:"/developer-manual/design/database-migrations",permalink:"/docs/next/developer-manual/design/database-migrations",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/developer-manual/design/database-migrations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/next/developer-manual/design/architecture"},next:{title:"Development environment",permalink:"/docs/next/developer-manual/development/environment"}},g={},c=[],p={toc:c};function h(e){var a=e.components,n=(0,t.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-schema-creation-and-migrations"},"Database schema creation and migrations"),(0,o.kt)("p",null,"The method to maintain the database schema, is to write both a migration file for already installed databases and to update a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.sql")," file for fresh databases. On fresh installation, the database is filled with the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.sql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data.sql")," files and LibreTime won't run any sql migration on top of it. Previously, when LibreTime was upgraded, the missing migrations were run using a custom php based migration tool, those migrations are now handled by Django. The missing migrations are tracked using both a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema_version")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cc_pref")," table and a Django migration id."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since LibreTime forked, the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema_version")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.sql")," was locked on ",(0,o.kt)("inlineCode",{parentName:"p"},"3.0.0-alpha")," and all the migrations were run during the first user connection. This has been fixed during the move to the Django based migrations."))),(0,o.kt)("p",null,"Django does not maintain a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.sql")," file, it applies every migrations until it reaches the targeted schema represented by the code. The legacy ",(0,o.kt)("inlineCode",{parentName:"p"},"schema_version")," has to be tracked until we remove the Propel schema generation and let Django handle all the schema migrations. Until then Propel generate the schema and Django handle migrations from already installed databases."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The first Django migration is the initial schema creation using the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.sql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data.sql")," files."))),(0,o.kt)(s.Mermaid,{config:{},chart:'stateDiagram-v2\n    state is_django_migration_applied <<choice>>\n    [*] --\x3e is_django_migration_applied: Is the django migration ID in the DB ?\n\n    is_django_migration_applied --\x3e [*]: Yes, ignoring...\n\n    state "Apply django migration" as apply_django_migration\n    is_django_migration_applied --\x3e apply_django_migration: No\n\n    state apply_django_migration {\n        state is_legacy_migration <<choice>>\n        [*] --\x3e is_legacy_migration: Is it a legacy migration ?\n\n        state "Run django migration" as run_django_migration\n        state "Apply changes" as run_django_migration\n        state "Save migration ID in DB" as run_django_migration\n        is_legacy_migration --\x3e run_django_migration: No\n        run_legacy_migration --\x3e run_django_migration\n        run_django_migration --\x3e [*]\n\n        state is_legacy_migration_applied <<choice>>\n        is_legacy_migration_applied --\x3e [*]: Yes, ignoring...\n\n        state "Run legacy migration" as run_legacy_migration\n        state "Apply changes" as run_legacy_migration\n        state "Bump legacy schema version" as run_legacy_migration\n        is_legacy_migration_applied --\x3e run_legacy_migration: No\n        is_legacy_migration --\x3e is_legacy_migration_applied:  Yes, is the DB schema version >= legacy migration schema version ?\n    }\n\n    apply_django_migration --\x3e [*]',mdxType:"Mermaid"}))}h.isMDXComponent=!0},11748:function(e,a,n){var i={"./locale":89234,"./locale.js":89234};function t(e){var a=o(e);return n(a)}function o(e){if(!n.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}t.keys=function(){return Object.keys(i)},t.resolve=o,e.exports=t,t.id=11748}}]);