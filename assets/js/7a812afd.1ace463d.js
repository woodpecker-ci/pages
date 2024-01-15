/*! For license information please see 7a812afd.1ace463d.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4832],{35348:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(11527),o=t(7463);const s={},n="Databases",i={id:"administration/database",title:"Databases",description:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database.",source:"@site/docs/30-administration/30-database.md",sourceDirName:"30-administration",slug:"/administration/database",permalink:"/docs/next/administration/database",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/30-database.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes backend",permalink:"/docs/next/administration/backends/kubernetes"},next:{title:"Secrets encryption",permalink:"/docs/next/administration/encryption"}},d={},c=[{value:"Configure SQLite",id:"configure-sqlite",level:2},{value:"Configure MySQL/MariaDB",id:"configure-mysqlmariadb",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"databases",children:"Databases"}),"\n",(0,r.jsx)(a.p,{children:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database."}),"\n",(0,r.jsx)(a.h2,{id:"configure-sqlite",children:"Configure SQLite"}),"\n",(0,r.jsxs)(a.p,{children:["By default Woodpecker uses a SQLite database stored under ",(0,r.jsx)(a.code,{children:"/var/lib/woodpecker/"}),". If using containers, you can mount a ",(0,r.jsx)(a.a,{href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes",children:"data volume"})," to persist the SQLite database."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n+    volumes:\n+      - woodpecker-server-data:/var/lib/woodpecker/\n"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-mysqlmariadb",children:"Configure MySQL/MariaDB"}),"\n",(0,r.jsxs)(a.p,{children:["The below example demonstrates MySQL database configuration. See the official driver ",(0,r.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"documentation"})," for configuration options and examples.\nThe minimum version of MySQL/MariaDB required is determined by the ",(0,r.jsx)(a.code,{children:"go-sql-driver/mysql"})," - see ",(0,r.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#requirements",children:"it's README"})," for more information."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ini",children:"WOODPECKER_DATABASE_DRIVER=mysql\nWOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-postgres",children:"Configure Postgres"}),"\n",(0,r.jsxs)(a.p,{children:["The below example demonstrates Postgres database configuration. See the official driver ",(0,r.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING",children:"documentation"})," for configuration options and examples.\nPlease use Postgres versions equal or higher than ",(0,r.jsx)(a.strong,{children:"11"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ini",children:"WOODPECKER_DATABASE_DRIVER=postgres\nWOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n"})}),"\n",(0,r.jsx)(a.h2,{id:"database-creation",children:"Database Creation"}),"\n",(0,r.jsxs)(a.p,{children:["Woodpecker does not create your database automatically. If you are using the MySQL or Postgres driver you will need to manually create your database using ",(0,r.jsx)(a.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"database-migration",children:"Database Migration"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."}),"\n",(0,r.jsx)(a.h2,{id:"database-backups",children:"Database Backups"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."}),"\n",(0,r.jsx)(a.h2,{id:"database-archiving",children:"Database Archiving"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."})]})}function u(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,a,t)=>{var r=t(50959),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var r,s={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,r)&&!d.hasOwnProperty(r)&&(s[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:i.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},11527:(e,a,t)=>{e.exports=t(3354)},7463:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>n});var r=t(50959);const o={},s=r.createContext(o);function n(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);