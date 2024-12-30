"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["9914"],{24646:function(e,t,n){n.r(t),n.d(t,{default:()=>ec});var a=n("52676"),i=n("75271"),r=n("54461"),o=n("49559"),l=n("42476"),s=n("31452"),d=n("31989"),c=n("92590"),u=n("95377"),m=n("12388");let b={backToTopButton:"backToTopButton_L9BX",backToTopButtonShow:"backToTopButtonShow_x2ad"};function h(){let{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e,[n,a]=(0,i.useState)(!1),r=(0,i.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,u.Ct)();return(0,u.RF)((e,n)=>{let{scrollY:i}=e,o=n?.scrollY;if(!!o)r.current?r.current=!1:i>=o?(l(),a(!1)):i<t?a(!1):i+window.innerHeight<document.documentElement.scrollHeight&&a(!0)}),(0,m.S)(e=>{e.location.hash&&(r.current=!0,a(!1))}),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,a.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var p=n("86647"),x=n("3225"),f=n("44451"),j=n("99466"),_=n("73446");function k(e){return(0,a.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,a.jsxs)("g",{fill:"#7a7a7a",children:[(0,a.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,a.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}let g="collapseSidebarButton_SvlF",v="collapseSidebarButtonIcon_Z8Ax";function C(e){let{onClick:t}=e;return(0,a.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",g),onClick:t,children:(0,a.jsx)(k,{className:v})})}var S=n("64995"),I=n("94970");let T=Symbol("EmptyContext"),N=i.createContext(T);function Z(e){let{children:t}=e,[n,r]=(0,i.useState)(null),o=(0,i.useMemo)(()=>({expandedItem:n,setExpandedItem:r}),[n]);return(0,a.jsx)(N.Provider,{value:o,children:t})}var L=n("44888"),y=n("52521"),w=n("76605"),A=n("90100");function B(e){let{collapsed:t,categoryLabel:n,onClick:i}=e;return(0,a.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:i})}function E(e){let{item:t,onItemClick:n,activePath:o,level:d,index:c,...u}=e,{items:m,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),_=function(e){let t=(0,A.Z)();return(0,i.useMemo)(()=>{if(e.href&&!e.linkUnlisted)return e.href;if(!t&&!!e.collapsible)return(0,s.LM)(e)},[e,t])}(t),k=(0,s._F)(t,o),g=(0,y.Mg)(x,o),{collapsed:v,setCollapsed:C}=(0,L.u)({initialState:()=>!!h&&!k&&t.collapsed}),{expandedItem:S,setExpandedItem:Z}=function(){let e=(0,i.useContext)(N);if(e===T)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!v;Z(e?null:c),C(e)};return!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e,r=(0,I.D9)(t);(0,i.useEffect)(()=>{t&&!r&&n&&a(!1)},[t,r,n,a])}({isActive:k,collapsed:v,updateCollapsed:E}),(0,i.useEffect)(()=>{h&&null!=S&&S!==c&&f&&C(!0)},[h,S,c,C,f]),(0,a.jsxs)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(d),"menu__list-item",{"menu__list-item--collapsed":v},p),children:[(0,a.jsxs)("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,a.jsx)(w.Z,{className:(0,r.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":k}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":g?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!v:void 0,href:h?_??"#":_,...u,children:b}),x&&h&&(0,a.jsx)(B,{collapsed:v,categoryLabel:b,onClick:e=>{e.preventDefault(),E()}})]}),(0,a.jsx)(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,a.jsx)(V,{items:m,tabIndex:v?-1:0,onItemClick:n,activePath:o,level:d+1})})]})}var H=n("38328"),M=n("87197");let R={menuExternalLink:"menuExternalLink_EErw"};function F(e){let{item:t,onItemClick:n,activePath:i,level:o,index:d,...c}=e,{href:u,label:m,className:b,autoAddBaseUrl:h}=t,p=(0,s._F)(t,i),x=(0,H.Z)(u);return(0,a.jsx)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),children:(0,a.jsxs)(w.Z,{className:(0,r.Z)("menu__link",!x&&R.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:u,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,a.jsx)(M.Z,{})]})},m)}let W={menuHtmlItem:"menuHtmlItem__T5K"};function P(e){let{item:t,level:n,index:i}=e,{value:o,defaultStyle:s,className:d}=t;return(0,a.jsx)("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),s&&[W.menuHtmlItem,"menu__list-item"],d),dangerouslySetInnerHTML:{__html:o}},i)}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,a.jsx)(E,{item:t,...n});case"html":return(0,a.jsx)(P,{item:t,...n});default:return(0,a.jsx)(F,{item:t,...n})}}let V=(0,i.memo)(function(e){let{items:t,...n}=e,i=(0,s.f)(t,n.activePath);return(0,a.jsx)(Z,{children:i.map((e,t)=>(0,a.jsx)(D,{item:e,index:t,...n},t))})}),z={menu:"menu_LOn2",menuWithAnnouncementBar:"menuWithAnnouncementBar_b0KO"};function K(e){let{path:t,sidebar:n,className:o}=e,s=function(){let{isActive:e}=(0,S.n)(),[t,n]=(0,i.useState)(e);return(0,u.RF)(t=>{let{scrollY:a}=t;e&&n(0===a)},[e]),e&&t}();return(0,a.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",z.menu,s&&z.menuWithAnnouncementBar,o),children:(0,a.jsx)("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(V,{items:n,activePath:t,level:1})})})}let U={sidebar:"sidebar_mKnO",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_EUGV",sidebarHidden:"sidebarHidden_gwwT",sidebarLogo:"sidebarLogo_qQpq"},q=i.memo(function(e){let{path:t,sidebar:n,onCollapse:i,isHidden:o}=e,{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:s}}}=(0,j.L)();return(0,a.jsxs)("div",{className:(0,r.Z)(U.sidebar,l&&U.sidebarWithHideableNavbar,o&&U.sidebarHidden),children:[l&&(0,a.jsx)(_.Z,{tabIndex:-1,className:U.sidebarLogo}),(0,a.jsx)(K,{path:t,sidebar:n}),s&&(0,a.jsx)(C,{onClick:i})]})});var O=n("89721"),G=n("74531");let Q=e=>{let{sidebar:t,path:n}=e,i=(0,G.e)();return(0,a.jsx)("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1})})},Y=i.memo(function(e){return(0,a.jsx)(O.Zo,{component:Q,props:e})});function X(e){let t=(0,f.i)();return(0,a.jsxs)(a.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,a.jsx)(q,{...e}),"mobile"===t&&(0,a.jsx)(Y,{...e})]})}let J="expandButton_yRVh",$="expandButtonIcon_CU8T";function ee(e){let{toggleSidebar:t}=e;return(0,a.jsx)("div",{className:J,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,a.jsx)(k,{className:$})})}let et={docSidebarContainer:"docSidebarContainer_KT5P",docSidebarContainerHidden:"docSidebarContainerHidden_x1z_",sidebarViewport:"sidebarViewport_eWsh"};function en(e){let{children:t}=e,n=(0,d.V)();return(0,a.jsx)(i.Fragment,{children:t},n?.name??"noSidebar")}function ea(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e,{pathname:s}=(0,x.TH)(),[d,c]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{d&&c(!1),!d&&(0,p.n)()&&c(!0),o(e=>!e)},[o,d]);return(0,a.jsx)("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,et.docSidebarContainer,n&&et.docSidebarContainerHidden),onTransitionEnd:e=>{if(!!e.currentTarget.classList.contains(et.docSidebarContainer))n&&c(!0)},children:(0,a.jsx)(en,{children:(0,a.jsxs)("div",{className:(0,r.Z)(et.sidebarViewport,d&&et.sidebarViewportHidden),children:[(0,a.jsx)(X,{sidebar:t,path:s,onCollapse:u,isHidden:d}),d&&(0,a.jsx)(ee,{toggleSidebar:u})]})})})}let ei={docMainContainer:"docMainContainer_jayR",docMainContainerEnhanced:"docMainContainerEnhanced_Zfq3",docItemWrapperEnhanced:"docItemWrapperEnhanced_Q4rv"};function er(e){let{hiddenSidebarContainer:t,children:n}=e,i=(0,d.V)();return(0,a.jsx)("main",{className:(0,r.Z)(ei.docMainContainer,(t||!i)&&ei.docMainContainerEnhanced),children:(0,a.jsx)("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ei.docItemWrapper,t&&ei.docItemWrapperEnhanced),children:n})})}let eo="docRoot_FI3m",el="docsWrapper_zRCC";function es(e){let{children:t}=e,n=(0,d.V)(),[r,o]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:el,children:[(0,a.jsx)(h,{}),(0,a.jsxs)("div",{className:eo,children:[n&&(0,a.jsx)(ea,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,a.jsx)(er,{hiddenSidebarContainer:r,children:t})]})]})}var ed=n("17984");function ec(e){let t=(0,s.SN)(e);if(!t)return(0,a.jsx)(ed.Z,{});let{docElement:n,sidebarName:i,sidebarItems:c}=t;return(0,a.jsx)(o.FG,{className:(0,r.Z)(l.k.page.docsDocPage),children:(0,a.jsx)(d.b,{name:i,items:c,children:(0,a.jsx)(es,{children:n})})})}},17984:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(52676);n(75271);var i=n(54461),r=n(92590),o=n(16134);function l(e){let{className:t}=e;return(0,a.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,a.jsx)(o.Z,{as:"h1",className:"hero__title",children:(0,a.jsx)(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,a.jsx)("p",{children:(0,a.jsx)(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);