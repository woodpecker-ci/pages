"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[12],{82116:(e,t,a)=>{a.d(t,{c:()=>k});var r=a(96651),l=a(66548),n=a(78312),o=a(99768),c=a(91408),i=a(61264),s=a(74760),m=a(99632);function u(e){const{pathname:t}=(0,s.IT)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Sc)(e.permalink,t))}(e,t)))),[e,t])}const d={sidebar:"sidebar_wYbK",sidebarItemTitle:"sidebarItemTitle_fTB8",sidebarItemList:"sidebarItemList_Dipg",sidebarItem:"sidebarItem_B6VI",sidebarItemLink:"sidebarItemLink_NvrR",sidebarItemLinkActive:"sidebarItemLinkActive_ORC8"};function g({sidebar:e}){const t=u(e.items);return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.c)(d.sidebar,"thin-scrollbar"),"aria-label":(0,i.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.c)(d.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.c)(d.sidebarItemList,"clean-list")},t.map((e=>r.createElement("li",{key:e.permalink,className:d.sidebarItem},r.createElement(c.c,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive},e.title)))))))}var p=a(12248);function b({sidebar:e}){const t=u(e.items);return r.createElement("ul",{className:"menu__list"},t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return r.createElement(p.Mx,{component:b,props:e})}function h({sidebar:e}){const t=(0,o.U)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(f,{sidebar:e}):r.createElement(g,{sidebar:e}):null}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&N(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&N(e,a,t[a]);return e},_=(e,t)=>{var a={};for(var r in e)P.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&E)for(var r of E(e))t.indexOf(r)<0&&y.call(e,r)&&(a[r]=e[r]);return a};function k(e){const t=e,{sidebar:a,toc:o,children:c}=t,i=_(t,["sidebar","toc","children"]),s=a&&a.items.length>0;return r.createElement(n.c,O({},i),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:a}),r.createElement("main",{className:(0,l.c)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"https://schema.org/Blog"},c),o&&r.createElement("div",{className:"col col--2"},o))))}},75240:(e,t,a)=>{a.d(t,{c:()=>ee});var r=a(96651),l=a(66548),n=a(69224),o=a(1620);function c({children:e,className:t}){var a,l;const{frontMatter:c,assets:i,metadata:{description:s}}=(0,n.g)(),{withBaseUrl:m}=(0,o.E)(),u=null!=(a=i.image)?a:c.image,d=null!=(l=c.keywords)?l:[];return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting"},s&&r.createElement("meta",{itemProp:"description",content:s}),u&&r.createElement("link",{itemProp:"image",href:m(u,{absolute:!0})}),d.length>0&&r.createElement("meta",{itemProp:"keywords",content:d.join(",")}),e)}var i=a(91408);const s={title:"title_Q0Ri"};function m({className:e}){const{metadata:t,isBlogPostPage:a}=(0,n.g)(),{permalink:o,title:c}=t,m=a?"h1":"h2";return r.createElement(m,{className:(0,l.c)(s.title,e),itemProp:"headline"},a?c:r.createElement(i.c,{itemProp:"url",to:o},c))}var u=a(61264),d=a(4032);const g={container:"container_ij_U"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.A)();return t=>{const a=Math.ceil(t);return e(a,(0,u.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function f(){return r.createElement(r.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,n.g)(),{date:a,formattedDate:o,readingTime:c}=t;return r.createElement("div",{className:(0,l.c)(g.container,"margin-vert--md",e)},r.createElement(b,{date:a,formattedDate:o}),void 0!==c&&r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(p,{readingTime:c})))}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&N(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&N(e,a,t[a]);return e};function _(e){return e.href?r.createElement(i.c,O({},e)):r.createElement(r.Fragment,null,e.children)}function k({author:e,className:t}){const{name:a,title:n,url:o,imageURL:c,email:i}=e,s=o||i&&`mailto:${i}`||void 0;return r.createElement("div",{className:(0,l.c)("avatar margin-bottom--sm",t)},c&&r.createElement(_,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:c,alt:a,itemProp:"image"})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(_,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const w={authorCol:"authorCol__F1c",imageOnlyAuthorRow:"imageOnlyAuthorRow_jfzL",imageOnlyAuthorCol:"imageOnlyAuthorCol_Kv20"};var I=Object.defineProperty,T=Object.defineProperties,j=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,F=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,R=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&F(e,a,t[a]);if(L)for(var a of L(t))C.call(t,a)&&F(e,a,t[a]);return e},A=(e,t)=>T(e,j(t));function B({className:e}){const{metadata:{authors:t},assets:a}=(0,n.g)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,l.c)("margin-top--md margin-bottom--sm",o?w.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var n;return r.createElement("div",{className:(0,l.c)(!o&&"col col--6",o?w.imageOnlyAuthorCol:w.authorCol),key:t},r.createElement(k,{author:A(R({},e),{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}function M(){return r.createElement("header",null,r.createElement(m,null),r.createElement(h,null),r.createElement(B,null))}var U=a(14208),D=a(91072);function S({children:e,className:t}){const{isBlogPostPage:a}=(0,n.g)();return r.createElement("div",{id:a?U.blogPostContainerID:void 0,className:(0,l.c)("markdown",t),itemProp:"articleBody"},r.createElement(D.c,null,e))}var $=a(71544),z=a(64632),W=Object.defineProperty,G=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,H=(e,t,a)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,K=(e,t)=>{for(var a in t||(t={}))Y.call(t,a)&&H(e,a,t[a]);if(G)for(var a of G(t))q.call(t,a)&&H(e,a,t[a]);return e},Q=(e,t)=>{var a={};for(var r in e)Y.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&G)for(var r of G(e))t.indexOf(r)<0&&q.call(e,r)&&(a[r]=e[r]);return a};function Z(){return r.createElement("b",null,r.createElement(u.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function V(e){const t=e,{blogPostTitle:a}=t,l=Q(t,["blogPostTitle"]);return r.createElement(i.c,K({"aria-label":(0,u.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},l),r.createElement(Z,null))}const J={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Z4uj"};function X(){const{metadata:e,isBlogPostPage:t}=(0,n.g)(),{tags:a,title:o,editUrl:c,hasTruncateMarker:i}=e,s=!t&&i,m=a.length>0;return m||s||c?r.createElement("footer",{className:(0,l.c)("row docusaurus-mt-lg",t&&J.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,l.c)("col",{"col--9":s})},r.createElement(z.c,{tags:a})),t&&c&&r.createElement("div",{className:"col margin-top--sm"},r.createElement($.c,{editUrl:c})),s&&r.createElement("div",{className:(0,l.c)("col text--right",{"col--3":m})},r.createElement(V,{blogPostTitle:o,to:e.permalink}))):null}function ee({children:e,className:t}){const a=function(){const{isBlogPostPage:e}=(0,n.g)();return e?void 0:"margin-bottom--xl"}();return r.createElement(c,{className:(0,l.c)(a,t)},r.createElement(M,null),r.createElement(S,null,e),r.createElement(X,null))}},71544:(e,t,a)=>{a.d(t,{c:()=>h});var r=a(96651),l=a(61264),n=a(78828),o=a(91408),c=a(66548);const i={iconEdit:"iconEdit_rZ_O"};var s=Object.defineProperty,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&g(e,a,t[a]);if(m)for(var a of m(t))d.call(t,a)&&g(e,a,t[a]);return e},b=(e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a};function f(e){var t=e,{className:a}=t,l=b(t,["className"]);return r.createElement("svg",p({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.c)(i.iconEdit,a),"aria-hidden":"true"},l),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h({editUrl:e}){return r.createElement(o.c,{to:e,className:n.W.common.editThisPage},r.createElement(f,null),r.createElement(l.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},77496:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(96651),l=a(66548),n=a(91408);function o(e){const{permalink:t,title:a,subLabel:o,isNext:c}=e;return r.createElement(n.c,{className:(0,l.c)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},a))}},79800:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(96651),l=a(66548),n=a(91408);const o={tag:"tag_TyYM",tagRegular:"tagRegular_OQYI",tagWithCount:"tagWithCount_PDNs"};function c({permalink:e,label:t,count:a}){return r.createElement(n.c,{href:e,className:(0,l.c)(o.tag,a?o.tagWithCount:o.tagRegular)},t,a&&r.createElement("span",null,a))}},64632:(e,t,a)=>{a.d(t,{c:()=>i});var r=a(96651),l=a(66548),n=a(61264),o=a(79800);const c={tags:"tags_Cev9",tag:"tag_HkUk"};function i({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.c)(c.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:c.tag},r.createElement(o.c,{label:e,permalink:t}))))))}},69224:(e,t,a)=>{a.d(t,{E:()=>o,g:()=>c});var r=a(96651),l=a(18348);const n=r.createContext(null);function o({children:e,content:t,isBlogPostPage:a=!1}){const l=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return r.createElement(n.Provider,{value:l},e)}function c(){const e=(0,r.useContext)(n);if(null===e)throw new l.AH("BlogPostProvider");return e}},4032:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(96651),l=a(18724);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.c)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function s(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}]);