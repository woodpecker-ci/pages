"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2392],{53472:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(96651),r=n(61264),l=n(77496);function c(e){const{metadata:t}=e,{previousPage:n,nextPage:c}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.c,{permalink:n,title:a.createElement(r.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),c&&a.createElement(l.c,{permalink:c,title:a.createElement(r.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},70620:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(96651),r=n(69224),l=n(75240);function c({items:e,component:t=l.c}){return a.createElement(a.Fragment,null,e.map((({content:e})=>a.createElement(r.E,{key:e.metadata.permalink,content:e},a.createElement(t,null,a.createElement(e,null))))))}},24252:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(96651),r=n(66548),l=n(61264),c=n(4032),o=n(96142),i=n(78828),s=n(91408),m=n(82116),u=n(53472),g=n(74148),p=n(70620),d=n(67020),b=n(37872),E=Object.defineProperty,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))w.call(t,n)&&v(e,n,t[n]);return e};function P(e){const t=function(){const{selectMessage:e}=(0,c.A)();return t=>e(t,(0,l.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function O({tag:e}){const t=P(e);return a.createElement(a.Fragment,null,a.createElement(o.U7,{title:t}),a.createElement(g.c,{tag:"blog_tags_posts"}))}function k({tag:e,items:t,sidebar:n,listMetadata:r}){const c=P(e);return a.createElement(m.c,{sidebar:n},e.unlisted&&a.createElement(d.c,null),a.createElement("header",{className:"margin-bottom--xl"},a.createElement(b.c,{as:"h1"},c),a.createElement(s.c,{href:e.allTagsPath},a.createElement(l.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(p.c,{items:t}),a.createElement(u.c,{metadata:r}))}function T(e){return a.createElement(o.cr,{className:(0,r.c)(i.W.wrapper.blogPages,i.W.page.blogTagPostListPage)},a.createElement(O,y({},e)),a.createElement(k,y({},e)))}},67020:(e,t,n)=>{n.d(t,{c:()=>w});var a=n(96651),r=n(66548),l=n(61264),c=n(99112);function o(){return a.createElement(l.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function i(){return a.createElement(l.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function s(){return a.createElement(c.c,null,a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var m=n(78828),u=n(11336),g=Object.defineProperty,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&E(e,n,t[n]);if(p)for(var n of p(t))b.call(t,n)&&E(e,n,t[n]);return e};function f({className:e}){return a.createElement(u.c,{type:"caution",title:a.createElement(o,null),className:(0,r.c)(e,m.W.common.unlistedBanner)},a.createElement(i,null))}function w(e){return a.createElement(a.Fragment,null,a.createElement(s,null),a.createElement(f,h({},e)))}}}]);