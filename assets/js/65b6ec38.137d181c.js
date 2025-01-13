"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["3692"],{13398:function(e,a,t){t.r(a),t.d(a,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>n});var s=JSON.parse('{"id":"administration/database","title":"Databases","description":"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database.","source":"@site/versioned_docs/version-2.6/30-administration/30-database.md","sourceDirName":"30-administration","slug":"/administration/database","permalink":"/docs/2.6/administration/database","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.6/30-administration/30-database.md","tags":[],"version":"2.6","sidebarPosition":30,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Custom backends","permalink":"/docs/2.6/administration/backends/custom-backends"},"next":{"title":"SSL","permalink":"/docs/2.6/administration/ssl"}}'),r=t("96773"),o=t("24027");let i={},n="Databases",d={},c=[{value:"Configure SQLite",id:"configure-sqlite",level:2},{value:"Configure MySQL/MariaDB",id:"configure-mysqlmariadb",level:2},{value:"Configure Postgres",id:"configure-postgres",level:2},{value:"Database Creation",id:"database-creation",level:2},{value:"Database Migration",id:"database-migration",level:2},{value:"Database Backups",id:"database-backups",level:2},{value:"Database Archiving",id:"database-archiving",level:2}];function l(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"databases",children:"Databases"})}),"\n",(0,r.jsx)(a.p,{children:"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database."}),"\n",(0,r.jsx)(a.h2,{id:"configure-sqlite",children:"Configure SQLite"}),"\n",(0,r.jsxs)(a.p,{children:["By default Woodpecker uses a SQLite database stored under ",(0,r.jsx)(a.code,{children:"/var/lib/woodpecker/"}),". If using containers, you can mount a ",(0,r.jsx)(a.a,{href:"https://docs.docker.com/storage/volumes/#create-and-manage-volumes",children:"data volume"})," to persist the SQLite database."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n+    volumes:\n+      - woodpecker-server-data:/var/lib/woodpecker/\n"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-mysqlmariadb",children:"Configure MySQL/MariaDB"}),"\n",(0,r.jsxs)(a.p,{children:["The below example demonstrates MySQL database configuration. See the official driver ",(0,r.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"documentation"})," for configuration options and examples.\nThe minimum version of MySQL/MariaDB required is determined by the ",(0,r.jsx)(a.code,{children:"go-sql-driver/mysql"})," - see ",(0,r.jsx)(a.a,{href:"https://github.com/go-sql-driver/mysql#requirements",children:"it's README"})," for more information."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ini",children:"WOODPECKER_DATABASE_DRIVER=mysql\nWOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-postgres",children:"Configure Postgres"}),"\n",(0,r.jsxs)(a.p,{children:["The below example demonstrates Postgres database configuration. See the official driver ",(0,r.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING",children:"documentation"})," for configuration options and examples.\nPlease use Postgres versions equal or higher than ",(0,r.jsx)(a.strong,{children:"11"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ini",children:"WOODPECKER_DATABASE_DRIVER=postgres\nWOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n"})}),"\n",(0,r.jsx)(a.h2,{id:"database-creation",children:"Database Creation"}),"\n",(0,r.jsxs)(a.p,{children:["Woodpecker does not create your database automatically. If you are using the MySQL or Postgres driver you will need to manually create your database using ",(0,r.jsx)(a.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"database-migration",children:"Database Migration"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker automatically handles database migration, including the initial creation of tables and indexes. New versions of Woodpecker will automatically upgrade the database unless otherwise specified in the release notes."}),"\n",(0,r.jsx)(a.h2,{id:"database-backups",children:"Database Backups"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker does not perform database backups. This should be handled by separate third party tools provided by your database vendor of choice."}),"\n",(0,r.jsx)(a.h2,{id:"database-archiving",children:"Database Archiving"}),"\n",(0,r.jsx)(a.p,{children:"Woodpecker does not perform data archival; it considered out-of-scope for the project. Woodpecker is rather conservative with the amount of data it stores, however, you should expect the database logs to grow the size of your database considerably."})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},24027:function(e,a,t){t.d(a,{Z:function(){return n},a:function(){return i}});var s=t(41699);let r={},o=s.createContext(r);function i(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);