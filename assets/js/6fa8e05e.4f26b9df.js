/*! For license information please see 6fa8e05e.4f26b9df.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7704],{77148:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(2488),r=t(37052);const i={},s="Guides",a={id:"development/guides",title:"Guides",description:"ORM",source:"@site/versioned_docs/version-0.15/92-development/06-guides.md",sourceDirName:"92-development",slug:"/development/guides",permalink:"/docs/0.15/development/guides",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/92-development/06-guides.md",tags:[],version:"0.15",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/0.15/development/architecture"}},d={},c=[{value:"ORM",id:"orm",level:2},{value:"Add a new migration",id:"add-a-new-migration",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"guides",children:"Guides"}),"\n",(0,n.jsx)(o.h2,{id:"orm",children:"ORM"}),"\n",(0,n.jsxs)(o.p,{children:["Woodpecker uses ",(0,n.jsx)(o.a,{href:"https://xorm.io/",children:"Xorm"})," as ORM for the database connection.\nYou can find its documentation at ",(0,n.jsx)(o.a,{href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/",children:"gobook.io/read/gitea.com/xorm"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"add-a-new-migration",children:"Add a new migration"}),"\n",(0,n.jsxs)(o.p,{children:["Woodpecker uses migrations to change the database schema if a database model has been changed. If for example a developer removes a property ",(0,n.jsx)(o.code,{children:"Counter"})," from the model ",(0,n.jsx)(o.code,{children:"Repo"})," in ",(0,n.jsx)(o.code,{children:"server/model/"})," they would need to add a new migration task like the following  example to a file like ",(0,n.jsx)(o.code,{children:"server/store/datastore/migration/004_repos_drop_repo_counter.go"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'package migration\n\nimport (\n  "xorm.io/xorm"\n)\n\nvar alterTableReposDropCounter = task{\n  name: "alter-table-drop-counter",\n  fn: func(sess *xorm.Session) error {\n    return dropTableColumns(sess, "repos", "repo_counter")\n  },\n}\n'})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Adding new properties to models will be handled automatically by the underlying ",(0,n.jsx)(o.a,{href:"#orm",children:"ORM"})," based on the ",(0,n.jsx)(o.a,{href:"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go",children:"struct field tags"})," of the model. If you add a completely new model, you have to add it to the ",(0,n.jsx)(o.code,{children:"allBeans"})," variable at ",(0,n.jsx)(o.code,{children:"server/store/datastore/migration/migration.go"})," to get a new table created."]})}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsxs)(o.p,{children:["You should not use ",(0,n.jsx)(o.code,{children:"sess.Begin()"}),", ",(0,n.jsx)(o.code,{children:"sess.Commit()"})," or ",(0,n.jsx)(o.code,{children:"sess.Close()"})," inside a migration. Session / transaction handling will be done by the underlying migration manager."]})}),"\n",(0,n.jsxs)(o.p,{children:["To automatically execute the migration after the start of the server, the new migration needs to be added to the end of ",(0,n.jsx)(o.code,{children:"migrationTasks"})," in ",(0,n.jsx)(o.code,{children:"server/store/datastore/migration/migration.go"}),". After a successful execution of that transaction the server will automatically add the migration to a list, so it wont be executed again on the next start."]})]})}function m(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},38088:(e,o,t)=>{var n=t(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,t){var n,i={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)s.call(o,n)&&!d.hasOwnProperty(n)&&(i[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===i[n]&&(i[n]=o[n]);return{$$typeof:r,type:e,key:c,ref:l,props:i,_owner:a.current}}o.Fragment=i,o.jsx=c,o.jsxs=c},2488:(e,o,t)=>{e.exports=t(38088)},37052:(e,o,t)=>{t.d(o,{I:()=>a,M:()=>s});var n=t(96651);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);