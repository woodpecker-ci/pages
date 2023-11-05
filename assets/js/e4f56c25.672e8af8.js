/*! For license information please see e4f56c25.672e8af8.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2999],{95062:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(11527),t=o(76225);const n={},s="Databases",i={id:"administration/database",title:"Databases",description:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database.",source:"@site/versioned_docs/version-1.0/30-administration/30-database.md",sourceDirName:"30-administration",slug:"/administration/database",permalink:"/docs/administration/database",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/30-database.md",tags:[],version:"1.0",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes backend",permalink:"/docs/administration/backends/kubernetes"},next:{title:"Secrets encryption",permalink:"/docs/administration/encryption"}},d={},c=[{value:"Configure SQLite",id:"configure-sqlite",level:2},{value:"Configure MySQL/MariaDB",id:"configure-mysqlmariadb",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"databases",children:"Databases"}),"\n",(0,r.jsx)(a.p,{children:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database."}),"\n",(0,r.jsx)(a.h2,{id:"configure-sqlite",children:"Configure SQLite"}),"\n",(0,r.jsxs)(a.p,{children:["By default Woodpecker uses a SQLite database stored under ",(0,r.jsx)(a.code,{children:"/var/lib/woodpecker/"}),". You can mount a ",(0,r.jsx)(a.a,{href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes",children:"data volume"})," to persist the SQLite database."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n+   volumes:\n+     - woodpecker-server-data:/var/lib/woodpecker/\n"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-mysqlmariadb",children:"Configure MySQL/MariaDB"}),"\n",(0,r.jsxs)(a.p,{children:["The below example demonstrates MySQL database configuration. See the official driver ",(0,r.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"documentation"})," for configuration options and examples."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_DATABASE_DRIVER=mysql\n+     - WOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-postgres",children:"Configure Postgres"}),"\n",(0,r.jsxs)(a.p,{children:["The below example demonstrates Postgres database configuration. See the official driver ",(0,r.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING",children:"documentation"})," for configuration options and examples.\nPlease use Postgres versions equal or higher than ",(0,r.jsx)(a.strong,{children:"11"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_DATABASE_DRIVER=postgres\n+     - WOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n"})}),"\n",(0,r.jsx)(a.h2,{id:"database-creation",children:"Database Creation"}),"\n",(0,r.jsxs)(a.p,{children:["Woodpecker does not create your database automatically. If you are using the MySQL or Postgres driver you will need to manually create your database using ",(0,r.jsx)(a.code,{children:"CREATE DATABASE"})]}),"\n",(0,r.jsx)(a.h2,{id:"database-migration",children:"Database Migration"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."}),"\n",(0,r.jsx)(a.h2,{id:"database-backups",children:"Database Backups"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."}),"\n",(0,r.jsx)(a.h2,{id:"database-archiving",children:"Database Archiving"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."})]})}function u(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,a,o)=>{var r=o(50959),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,o){var r,n={},c=null,l=null;for(r in void 0!==o&&(c=""+o),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)s.call(a,r)&&!d.hasOwnProperty(r)&&(n[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===n[r]&&(n[r]=a[r]);return{$$typeof:t,type:e,key:c,ref:l,props:n,_owner:i.current}}a.Fragment=n,a.jsx=c,a.jsxs=c},11527:(e,a,o)=>{e.exports=o(3354)},76225:(e,a,o)=>{o.d(a,{Z:()=>i,a:()=>s});var r=o(50959);const t={},n=r.createContext(t);function s(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);