"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["2998"],{72219:function(e,t,n){n.r(t),n.d(t,{default:()=>b});var r=n("96773");n("41699");var i=n("54461"),o=n("38056"),l=n("12791"),s=n("12161"),a=n("46937"),c=n("5448"),u=n("89615"),d=n("73454");function f(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(d.Z,{...n,subLabel:(0,r.jsx)(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(d.Z,{...t,subLabel:(0,r.jsx)(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){let{assets:e,metadata:t}=(0,s.nO)(),{title:n,description:i,date:l,tags:a,authors:c,frontMatter:u}=t,{keywords:d}=u,f=e.image??u.image;return(0,r.jsxs)(o.d,{title:u.title_meta??n,description:i,keywords:d,image:f,children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:published_time",content:l}),c.some(e=>e.url)&&(0,r.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),a.length>0&&(0,r.jsx)("meta",{property:"article:tag",content:a.map(e=>e.label).join(",")})]})}var m=n("46803");function p(){let e=(0,s.iZ)();return(0,r.jsx)(m.Z,{children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n("82610"),g=n("13978");function v(e){let{sidebar:t,children:n}=e,{metadata:i,toc:o}=(0,s.nO)(),{nextItem:l,prevItem:u,frontMatter:d}=i,{hide_table_of_contents:h,toc_min_heading_level:m,toc_max_heading_level:p}=d;return(0,r.jsxs)(a.Z,{sidebar:t,toc:!h&&o.length>0?(0,r.jsx)(x.Z,{toc:o,minHeadingLevel:m,maxHeadingLevel:p}):void 0,children:[(0,r.jsx)(g.Z,{metadata:i}),(0,r.jsx)(c.Z,{children:n}),(l||u)&&(0,r.jsx)(f,{nextItem:l,prevItem:u})]})}function b(e){let t=e.content;return(0,r.jsx)(s.n4,{content:e.content,isBlogPostPage:!0,children:(0,r.jsxs)(o.FG,{className:(0,i.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage),children:[(0,r.jsx)(h,{}),(0,r.jsx)(p,{}),(0,r.jsx)(v,{sidebar:e.sidebar,children:(0,r.jsx)(t,{})})]})})}},42834:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(96773);n(41699);var i=n(54461),o=n(68235),l=n(12791),s=n(46986);function a(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(o.cI,{}),className:(0,i.Z)(t,l.k.common.unlistedBanner),children:(0,r.jsx)(o.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.T$,{}),(0,r.jsx)(a,{...e})]})}},13978:function(e,t,n){n.d(t,{Z:()=>u});var r=n("96773");n("41699");var i=n("54461"),o=n("68235"),l=n("12791"),s=n("46986");function a(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(o.ht,{}),className:(0,i.Z)(t,l.k.common.draftBanner),children:(0,r.jsx)(o.xo,{})})}var c=n("42834");function u(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.Z,{}),i.draft&&(0,r.jsx)(a,{})]})}},82610:function(e,t,n){n.d(t,{Z:()=>l});var r=n("96773");n("41699");var i=n("54461"),o=n("66812");function l(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)("tableOfContents_dEZD","thin-scrollbar",t),children:(0,r.jsx)(o.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},66812:function(e,t,n){n.d(t,{Z:()=>c});var r=n("96773"),i=n("41699"),o=n("25627");function l(e){let t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}var s=n("43542");let a=i.memo(function e(t){let{toc:n,className:i,linkClassName:o,isChild:l}=t;return n.length?(0,r.jsx)("ul",{className:l?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(s.Z,{to:`#${t.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:o})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:d,...f}=e,h=(0,o.L)(),m=u??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return t.level>=r&&t.level<=i?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:m,maxHeadingLevel:p});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:s}=e;function a(){let e=Array.from(document.getElementsByClassName(r)),a=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>l(e).top>=n);if(r){var i;return(i=l(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:s}),{anchorTopOffset:n.current}),c=e.find(e=>a&&a.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,i.useMemo)(()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:p}},[s,c,m,p])),(0,r.jsx)(a,{toc:x,className:n,linkClassName:s,...f})}},68235:function(e,t,n){n.d(t,{T$:function(){return a},cI:function(){return l},eU:function(){return s},ht:function(){return c},xo:function(){return u}});var r=n(96773);n(41699);var i=n(89615),o=n(46803);function l(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function a(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);