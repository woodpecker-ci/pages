/*! For license information please see c4114d46.2695a8d8.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6375],{34405:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(11527),t=a(46224);const o={},s="Swagger, API Spec and Code Generation",i={id:"development/swagger",title:"Swagger, API Spec and Code Generation",description:"Woodpecker uses gin-swagger middleware to automatically",source:"@site/docs/92-development/08-swagger.md",sourceDirName:"92-development",slug:"/development/swagger",permalink:"/docs/next/development/swagger",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/92-development/08-swagger.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translations",permalink:"/docs/next/development/translations"},next:{title:"Security",permalink:"/docs/next/development/security"}},d={},c=[{value:"Gin-Handler API documentation guideline",id:"gin-handler-api-documentation-guideline",level:2},{value:"Manual code generation",id:"manual-code-generation",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"swagger-api-spec-and-code-generation",children:"Swagger, API Spec and Code Generation"}),"\n",(0,r.jsxs)(n.p,{children:["Woodpecker uses ",(0,r.jsx)(n.a,{href:"https://github.com/swaggo/gin-swagger",children:"gin-swagger"})," middleware to automatically\ngenerate Swagger v2 API specifications and a nice looking Web UI from the source code.\nAlso, the generated spec will be transformed into Markdown, using ",(0,r.jsx)(n.a,{href:"https://github.com/go-swagger/go-swagger",children:"go-swagger"}),"\nand then being using on the community's website documentation."]}),"\n",(0,r.jsx)(n.p,{children:"It's paramount important to keep the gin handler function's godoc documentation up-to-date,\nto always have accurate API documentation.\nWhenever you change, add or enhance an API endpoint, please update the godocs."}),"\n",(0,r.jsx)(n.p,{children:"You don't require any extra tools on your machine, all Swagger tooling is automatically fetched by standard Go tools."}),"\n",(0,r.jsx)(n.h2,{id:"gin-handler-api-documentation-guideline",children:"Gin-Handler API documentation guideline"}),"\n",(0,r.jsx)(n.p,{children:"Here's a typical example of how annotations for Swagger documentation look like..."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="server/api/user.go"',children:'// @Summary  Get a user\n// @Description Returns a user with the specified login name. Requires admin rights.\n// @Router   /users/{login} [get]\n// @Produce  json\n// @Success  200 {object} User\n// @Tags   Users\n// @Param   Authorization header string true "Insert your personal access token" default(Bearer <personal access token>)\n// @Param   login   path string true "the user\'s login name"\n// @Param   foobar  query   string false "optional foobar parameter"\n// @Param   page    query int  false "for response pagination, page offset number" default(1)\n// @Param   perPage query int  false "for response pagination, max items per page" default(50)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="server/model/user.go"',children:'type User struct {\n  ID int64 `json:"id" xorm:"pk autoincr \'user_id\'"`\n// ...\n} // @name User\n'})}),"\n",(0,r.jsx)(n.p,{children:"These guidelines aim to have consistent wording in the swagger doc:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["first word after ",(0,r.jsx)(n.code,{children:"@Summary"})," and ",(0,r.jsx)(n.code,{children:"@Summary"})," are always uppercase"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@Summary"})," has no ",(0,r.jsx)(n.code,{children:"."})," (dot) at the end of the line"]}),"\n",(0,r.jsxs)(n.li,{children:["model structs shall use custom short names, to ease life for API consumers, using ",(0,r.jsx)(n.code,{children:"@name"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@Success"})," object or array declarations shall be short, this means the actual ",(0,r.jsx)(n.code,{children:"model.User"})," struct must have a ",(0,r.jsx)(n.code,{children:"@name"})," annotation, so that the model can be renderend in Swagger"]}),"\n",(0,r.jsxs)(n.li,{children:["when pagination is used, ",(0,r.jsx)(n.code,{children:"@Parame page"})," and ",(0,r.jsx)(n.code,{children:"@Parame perPage"})," must be added manually"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@Param Authorization"})," is almost always present, there are just a few un-protected endpoints"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There are many examples in the ",(0,r.jsx)(n.code,{children:"server/api"})," package, which you can use a blueprint.\nMore enhanced information you can find here ",(0,r.jsx)(n.a,{href:"https://github.com/swaggo/swag/blob/main/README.md#declarative-comments-format",children:"https://github.com/swaggo/swag/blob/main/README.md#declarative-comments-format"})]}),"\n",(0,r.jsx)(n.h3,{id:"manual-code-generation",children:"Manual code generation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="generate the server\'s Go code containing the Swagger"',children:"make generate-swagger\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="update the Markdown in the ./docs folder"',children:"make docs\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="auto-format swagger related godoc"',children:"go run github.com/swaggo/swag/cmd/swag@latest fmt -g server/api/z.go\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,n,a)=>{var r=a(50959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var r,o={},c=null,l=null;for(r in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},11527:(e,n,a)=>{e.exports=a(3354)},46224:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>s});var r=a(50959);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);