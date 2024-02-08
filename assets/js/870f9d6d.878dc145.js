/*! For license information please see 870f9d6d.878dc145.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6840],{87652:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(2488),o=r(37052);const s={},n="Databases",i={id:"administration/database",title:"Databases",description:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database.",source:"@site/versioned_docs/version-2.3/30-administration/30-database.md",sourceDirName:"30-administration",slug:"/administration/database",permalink:"/docs/administration/database",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/30-administration/30-database.md",tags:[],version:"2.3",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes backend",permalink:"/docs/administration/backends/kubernetes"},next:{title:"Secrets encryption",permalink:"/docs/administration/encryption"}},d={},c=[{value:"Configure SQLite",id:"configure-sqlite",level:2},{value:"Configure MySQL/MariaDB",id:"configure-mysqlmariadb",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"databases",children:"Databases"}),"\n",(0,t.jsx)(a.p,{children:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database."}),"\n",(0,t.jsx)(a.h2,{id:"configure-sqlite",children:"Configure SQLite"}),"\n",(0,t.jsxs)(a.p,{children:["By default Woodpecker uses a SQLite database stored under ",(0,t.jsx)(a.code,{children:"/var/lib/woodpecker/"}),". If using containers, you can mount a ",(0,t.jsx)(a.a,{href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes",children:"data volume"})," to persist the SQLite database."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n+    volumes:\n+      - woodpecker-server-data:/var/lib/woodpecker/\n"})}),"\n",(0,t.jsx)(a.h2,{id:"configure-mysqlmariadb",children:"Configure MySQL/MariaDB"}),"\n",(0,t.jsxs)(a.p,{children:["The below example demonstrates MySQL database configuration. See the official driver ",(0,t.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"documentation"})," for configuration options and examples.\nThe minimum version of MySQL/MariaDB required is determined by the ",(0,t.jsx)(a.code,{children:"go-sql-driver/mysql"})," - see ",(0,t.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#requirements",children:"it's README"})," for more information."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ini",children:"WOODPECKER_DATABASE_DRIVER=mysql\nWOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n"})}),"\n",(0,t.jsx)(a.h2,{id:"configure-postgres",children:"Configure Postgres"}),"\n",(0,t.jsxs)(a.p,{children:["The below example demonstrates Postgres database configuration. See the official driver ",(0,t.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING",children:"documentation"})," for configuration options and examples.\nPlease use Postgres versions equal or higher than ",(0,t.jsx)(a.strong,{children:"11"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ini",children:"WOODPECKER_DATABASE_DRIVER=postgres\nWOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n"})}),"\n",(0,t.jsx)(a.h2,{id:"database-creation",children:"Database Creation"}),"\n",(0,t.jsxs)(a.p,{children:["Woodpecker does not create your database automatically. If you are using the MySQL or Postgres driver you will need to manually create your database using ",(0,t.jsx)(a.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"database-migration",children:"Database Migration"}),"\n",(0,t.jsx)(a.p,{children:"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."}),"\n",(0,t.jsx)(a.h2,{id:"database-backups",children:"Database Backups"}),"\n",(0,t.jsx)(a.p,{children:"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."}),"\n",(0,t.jsx)(a.h2,{id:"database-archiving",children:"Database Archiving"}),"\n",(0,t.jsx)(a.p,{children:"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."})]})}function u(e={}){const{wrapper:a}={...(0,o.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},38088:(e,a,r)=>{var t=r(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,r){var t,s={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,t)&&!d.hasOwnProperty(t)&&(s[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:i.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},2488:(e,a,r)=>{e.exports=r(38088)},37052:(e,a,r)=>{r.d(a,{I:()=>i,M:()=>n});var t=r(96651);const o={},s=t.createContext(o);function n(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);