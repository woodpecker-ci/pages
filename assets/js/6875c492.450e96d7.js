"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["83"],{89567:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(52676);n(75271);var r=n(62624),s=n(39654);function a(e){let{metadata:t}=e,{previousPage:n,nextPage:a}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.Z,{permalink:n,title:(0,i.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),a&&(0,i.jsx)(s.Z,{permalink:a,title:(0,i.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},69034:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(52676);n(75271);var r=n(20718),s=n(2002);function a(e){let{items:t,component:n=s.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,i.jsx)(r.n4,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)})})}},8429:function(e,t,n){n.r(t),n.d(t,{default:()=>j});var i=n("52676");n("75271");var r=n("54461"),s=n("62624"),a=n("57614"),l=n("490"),o=n("17325");function c(e){let t=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var d=n("89388"),u=n("46396"),g=n("89567"),h=n("69478"),p=n("69034"),f=n("12353"),m=n("87796");function x(e){let{tag:t}=e,n=c(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.d,{title:n,description:t.description}),(0,i.jsx)(h.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:r,listMetadata:a}=e,l=c(t);return(0,i.jsxs)(u.Z,{sidebar:r,children:[t.unlisted&&(0,i.jsx)(f.Z,{}),(0,i.jsxs)("header",{className:"margin-bottom--xl",children:[(0,i.jsx)(m.Z,{as:"h1",children:l}),t.description&&(0,i.jsx)("p",{children:t.description}),(0,i.jsx)(d.Z,{href:t.allTagsPath,children:(0,i.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,i.jsx)(p.Z,{items:n}),(0,i.jsx)(g.Z,{metadata:a})]})}function j(e){return(0,i.jsxs)(a.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,i.jsx)(x,{...e}),(0,i.jsx)(b,{...e})]})}},12353:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(52676);n(75271);var r=n(54461),s=n(64372),a=n(490),l=n(97607);function o(e){let{className:t}=e;return(0,i.jsx)(l.Z,{type:"caution",title:(0,i.jsx)(s.cI,{}),className:(0,r.Z)(t,a.k.common.unlistedBanner),children:(0,i.jsx)(s.eU,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.T$,{}),(0,i.jsx)(o,{...e})]})}},64372:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return a},eU:function(){return l},ht:function(){return c},xo:function(){return d}});var i=n(52676);n(75271);var r=n(62624),s=n(10331);function a(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);