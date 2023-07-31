"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8158],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>k,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var a=n(49613),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={},g="Swagger, API Spec and Code Generation",m={unversionedId:"development/swagger",id:"version-1.0/development/swagger",title:"Swagger, API Spec and Code Generation",description:"Woodpecker uses gin-swagger middleware to automatically",source:"@site/versioned_docs/version-1.0/92-development/08-swagger.md",sourceDirName:"92-development",slug:"/development/swagger",permalink:"/docs/development/swagger",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/92-development/08-swagger.md",tags:[],version:"1.0",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translations",permalink:"/docs/development/translations"},next:{title:"Security",permalink:"/docs/development/security"}},h={},f=[{value:"Gin-Handler API documentation guideline",id:"gin-handler-api-documentation-guideline",level:3},{value:"Manual code generation",id:"manual-code-generation",level:3},{value:"generate the server&#39;s Go code containing the Swagger",id:"generate-the-servers-go-code-containing-the-swagger",level:5},{value:"update the Markdown in the ./docs folder",id:"update-the-markdown-in-the-docs-folder",level:5},{value:"auto-format swagger related godoc",id:"auto-format-swagger-related-godoc",level:5}],w={toc:f};function k(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},w),d),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"swagger-api-spec-and-code-generation"}),"Swagger, API Spec and Code Generation"),(0,a.kt)("p",null,"Woodpecker uses ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/swaggo/gin-swagger"}),"gin-swagger")," middleware to automatically\ngenerate Swagger v2 API specifications and a nice looking Web UI from the source code.\nAlso, the generated spec will be transformed into Markdown, using ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/go-swagger/go-swagger"}),"go-swagger"),"\nand then being using on the community's website documentation."),(0,a.kt)("p",null,"It's paramount important to keep the gin handler function's godoc documentation up-to-date,\nto always have accurate API documentation.\nWhenever you change, add or enhance an API endpoint, please update the godocs."),(0,a.kt)("p",null,"You don't require any extra tools on your machine, all Swagger tooling is automatically fetched by standard Go tools."),(0,a.kt)("h3",p({},{id:"gin-handler-api-documentation-guideline"}),"Gin-Handler API documentation guideline"),(0,a.kt)("p",null,"Here's a typical example of how annotations for Swagger documentation look like..."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-text"}),'--- server/api/user.go ---\n//  @Summary        Get a user\n//  @Description    Returns a user with the specified login name. Requires admin rights.\n//  @Router         /users/{login} [get]\n//  @Produce        json\n//  @Success        200 {object}    User\n//  @Tags           Users\n//  @Param          Authorization   header  string  true    "Insert your personal access token" default(Bearer <personal access token>)\n//  @Param          login           path    string  true    "the user\'s login name"\n// @Param   foobar  query   string false "optional foobar parameter"\n//  @Param    page    query int     false   "for response pagination, page offset number"   default(1)\n//  @Param   perPage query  int     false   "for response pagination, max items per page"   default(50)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-text"}),'--- server/model/user.go ---\ntype User struct {\n  ID int64 `json:"id" xorm:"pk autoincr \'user_id\'"`\n// ...\n} //    @name User\n')),(0,a.kt)("p",null,"These guidelines aim to have consistent wording in the swagger doc:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"first word after ",(0,a.kt)("inlineCode",{parentName:"li"},"@Summary")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@Summary")," are always uppercase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Summary")," has no . (dot) at the end of the line"),(0,a.kt)("li",{parentName:"ul"},"model structs shall use custom short names, to ease life for API consumers, using ",(0,a.kt)("inlineCode",{parentName:"li"},"@name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Success")," object or array declarations shall be short, this means the actual ",(0,a.kt)("inlineCode",{parentName:"li"},"model.User")," struct must have a ",(0,a.kt)("inlineCode",{parentName:"li"},"@name")," annotation, so that the model can be renderend in Swagger"),(0,a.kt)("li",{parentName:"ul"},"when pagination is used, ",(0,a.kt)("inlineCode",{parentName:"li"},"@Parame page")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@Parame perPage")," must be added manually"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Param Authorization")," is almost always present, there are just a few un-protected endpoints")),(0,a.kt)("p",null,"There are many examples in the server/api package, which you can use a blueprint.\nMore enhanced information you can find here ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/swaggo/swag/blob/master/README.md#declarative-comments-format"}),"https://github.com/swaggo/swag/blob/master/README.md#declarative-comments-format")),(0,a.kt)("h3",p({},{id:"manual-code-generation"}),"Manual code generation"),(0,a.kt)("h5",p({},{id:"generate-the-servers-go-code-containing-the-swagger"}),"generate the server's Go code containing the Swagger"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"make generate-swagger\n")),(0,a.kt)("h5",p({},{id:"update-the-markdown-in-the-docs-folder"}),"update the Markdown in the ./docs folder"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"make docs\n")),(0,a.kt)("h5",p({},{id:"auto-format-swagger-related-godoc"}),"auto-format swagger related godoc"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"go run github.com/swaggo/swag/cmd/swag@latest fmt -g server/api/z.go\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WARNING, known issue"),": using swag v1.18.12 , there's a bug when running the ",(0,a.kt)("inlineCode",{parentName:"p"},"fmt")," command,\nwhich makes the swagger generator failing, because it can't find the models/structs/types anymore.\nTo fix it, please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"// @name\\tModelName")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"// @name ModelName"),",\nwhich means, replace the tab (",(0,a.kt)("inlineCode",{parentName:"p"},"\\t"),") with a space (",(0,a.kt)("inlineCode",{parentName:"p"}," "),").\nSee ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/swaggo/swag/pull/1594"}),"https://github.com/swaggo/swag/pull/1594")," == once this is merged and released, the mentioned issue is obsolete."))}k.isMDXComponent=!0}}]);