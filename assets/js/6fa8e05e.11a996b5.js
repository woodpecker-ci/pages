"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2927],{49613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const m={},u="Guides",f={unversionedId:"development/guides",id:"version-0.15/development/guides",title:"Guides",description:"ORM",source:"@site/versioned_docs/version-0.15/92-development/06-guides.md",sourceDirName:"92-development",slug:"/development/guides",permalink:"/docs/0.15/development/guides",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/06-guides.md",tags:[],version:"0.15",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/0.15/development/architecture"}},g={},v=[{value:"ORM",id:"orm",level:2},{value:"Add a new migration",id:"add-a-new-migration",level:2}],b={toc:v};function y(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),d),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"guides"}),"Guides"),(0,n.kt)("h2",c({},{id:"orm"}),"ORM"),(0,n.kt)("p",null,"Woodpecker uses ",(0,n.kt)("a",c({parentName:"p"},{href:"https://xorm.io/"}),"Xorm")," as ORM for the database connection.\nYou can find its documentation at ",(0,n.kt)("a",c({parentName:"p"},{href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/"}),"gobook.io/read/gitea.com/xorm"),"."),(0,n.kt)("h2",c({},{id:"add-a-new-migration"}),"Add a new migration"),(0,n.kt)("p",null,"Woodpecker uses migrations to change the database schema if a database model has been changed. If for example a developer removes a property ",(0,n.kt)("inlineCode",{parentName:"p"},"Counter")," from the model ",(0,n.kt)("inlineCode",{parentName:"p"},"Repo")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"server/model/")," they would need to add a new migration task like the following  example to a file like ",(0,n.kt)("inlineCode",{parentName:"p"},"server/store/datastore/migration/004_repos_drop_repo_counter.go"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-go"}),'package migration\n\nimport (\n  "xorm.io/xorm"\n)\n\nvar alterTableReposDropCounter = task{\n  name: "alter-table-drop-counter",\n  fn: func(sess *xorm.Session) error {\n    return dropTableColumns(sess, "repos", "repo_counter")\n  },\n}\n')),(0,n.kt)("admonition",c({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Adding new properties to models will be handled automatically by the underlying ",(0,n.kt)("a",c({parentName:"p"},{href:"#orm"}),"ORM")," based on the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go"}),"struct field tags")," of the model. If you add a completely new model, you have to add it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"allBeans")," variable at ",(0,n.kt)("inlineCode",{parentName:"p"},"server/store/datastore/migration/migration.go")," to get a new table created.")),(0,n.kt)("admonition",c({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"You should not use ",(0,n.kt)("inlineCode",{parentName:"p"},"sess.Begin()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"sess.Commit()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"sess.Close()")," inside a migration. Session / transaction handling will be done by the underlying migration manager.")),(0,n.kt)("p",null,"To automatically execute the migration after the start of the server, the new migration needs to be added to the end of ",(0,n.kt)("inlineCode",{parentName:"p"},"migrationTasks")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"server/store/datastore/migration/migration.go"),". After a successful execution of that transaction the server will automatically add the migration to a list, so it wont be executed again on the next start."))}y.isMDXComponent=!0}}]);