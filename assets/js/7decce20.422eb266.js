"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2108],{17942:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(50959);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var r=a(17942),o=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>n(e,i(t)),f=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const m={},b="Databases",g={unversionedId:"administration/database",id:"version-0.15/administration/database",title:"Databases",description:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL or Postgres database.",source:"@site/versioned_docs/version-0.15/30-administration/30-database.md",sourceDirName:"30-administration",slug:"/administration/database",permalink:"/docs/0.15/administration/database",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/30-administration/30-database.md",tags:[],version:"0.15",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent configuration",permalink:"/docs/0.15/administration/agent-config"},next:{title:"SSL",permalink:"/docs/0.15/administration/ssl"}},v={},y=[{value:"Configure sqlite",id:"configure-sqlite",level:2},{value:"Configure MySQL",id:"configure-mysql",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}],h={toc:y},k="wrapper";function w(e){var t=e,{components:a}=t,o=f(t,["components"]);return(0,r.kt)(k,u(p(p({},h),o),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"databases"}),"Databases"),(0,r.kt)("p",null,"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL or Postgres database."),(0,r.kt)("h2",p({},{id:"configure-sqlite"}),"Configure sqlite"),(0,r.kt)("p",null,"By default Woodpecker uses a sqlite database stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/woodpecker/"),". You can mount a ",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes"}),"data volume")," to persist the sqlite database."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n+   volumes:\n+     - woodpecker-server-data:/var/lib/woodpecker/\n")),(0,r.kt)("h2",p({},{id:"configure-mysql"}),"Configure MySQL"),(0,r.kt)("p",null,"The below example demonstrates mysql database configuration. See the official driver ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"}),"documentation")," for configuration options and examples."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     WOODPECKER_DATABASE_DRIVER: mysql\n+     WOODPECKER_DATABASE_DATASOURCE: root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n")),(0,r.kt)("h2",p({},{id:"configure-postgres"}),"Configure Postgres"),(0,r.kt)("p",null,"The below example demonstrates postgres database configuration. See the official driver ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING"}),"documentation")," for configuration options and examples.\nPlease use postgres versions equal or higher than ",(0,r.kt)("strong",{parentName:"p"},"11"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     WOODPECKER_DATABASE_DRIVER: postgres\n+     WOODPECKER_DATABASE_DATASOURCE: postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n")),(0,r.kt)("h2",p({},{id:"database-creation"}),"Database Creation"),(0,r.kt)("p",null,"Woodpecker does not create your database automatically. If you are using the mysql or postgres driver you will need to manually create your database using ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")),(0,r.kt)("h2",p({},{id:"database-migration"}),"Database Migration"),(0,r.kt)("p",null,"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."),(0,r.kt)("h2",p({},{id:"database-backups"}),"Database Backups"),(0,r.kt)("p",null,"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."),(0,r.kt)("h2",p({},{id:"database-archiving"}),"Database Archiving"),(0,r.kt)("p",null,"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."))}w.isMDXComponent=!0}}]);