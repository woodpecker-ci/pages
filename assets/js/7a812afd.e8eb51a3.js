"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4832],{49613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(59496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(b,i(i({ref:t},d),{},{components:a})):r.createElement(b,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>b,toc:()=>g});var r=a(49613),o=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&d(e,a,t[a]);return e};const u={},m="Databases",b={unversionedId:"administration/database",id:"administration/database",title:"Databases",description:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database.",source:"@site/docs/30-administration/30-database.md",sourceDirName:"30-administration",slug:"/administration/database",permalink:"/docs/next/administration/database",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/30-database.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes backend",permalink:"/docs/next/administration/backends/kubernetes"},next:{title:"Secrets encryption",permalink:"/docs/next/administration/encryption"}},f={},g=[{value:"Configure SQLite",id:"configure-sqlite",level:2},{value:"Configure MySQL/MariaDB",id:"configure-mysqlmariadb",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}],v={toc:g};function y(e){var t,a=e,{components:o}=a,d=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),d),n(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"databases"}),"Databases"),(0,r.kt)("p",null,"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database."),(0,r.kt)("h2",p({},{id:"configure-sqlite"}),"Configure SQLite"),(0,r.kt)("p",null,"By default Woodpecker uses a SQLite database stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/woodpecker/"),". You can mount a ",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes"}),"data volume")," to persist the SQLite database."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n+   volumes:\n+     - woodpecker-server-data:/var/lib/woodpecker/\n")),(0,r.kt)("h2",p({},{id:"configure-mysqlmariadb"}),"Configure MySQL/MariaDB"),(0,r.kt)("p",null,"The below example demonstrates MySQL database configuration. See the official driver ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"}),"documentation")," for configuration options and examples."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_DATABASE_DRIVER=mysql\n+     - WOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n")),(0,r.kt)("h2",p({},{id:"configure-postgres"}),"Configure Postgres"),(0,r.kt)("p",null,"The below example demonstrates Postgres database configuration. See the official driver ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING"}),"documentation")," for configuration options and examples.\nPlease use Postgres versions equal or higher than ",(0,r.kt)("strong",{parentName:"p"},"11"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_DATABASE_DRIVER=postgres\n+     - WOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n")),(0,r.kt)("h2",p({},{id:"database-creation"}),"Database Creation"),(0,r.kt)("p",null,"Woodpecker does not create your database automatically. If you are using the MySQL or Postgres driver you will need to manually create your database using ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")),(0,r.kt)("h2",p({},{id:"database-migration"}),"Database Migration"),(0,r.kt)("p",null,"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."),(0,r.kt)("h2",p({},{id:"database-backups"}),"Database Backups"),(0,r.kt)("p",null,"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."),(0,r.kt)("h2",p({},{id:"database-archiving"}),"Database Archiving"),(0,r.kt)("p",null,"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."))}y.isMDXComponent=!0}}]);