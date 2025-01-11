"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["5230"],{73925:function(e,t,r){r.d(t,{c:function(){return o}});var a=r(41699),s=r(36523);let l=["zero","one","two","few","many","other"];function n(e){return l.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,a.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);let s=r.select(t);return a[Math.min(r.pluralForms.indexOf(s),a.length-1)]})(r,t,e)}}},81598:function(e,t,r){r.r(t),r.d(t,{default:()=>_});var a=r("96773"),s=r("41699"),l=r("36523"),n=r("22392"),c=r("46803"),o=r("43542"),u=r("89615"),h=r("73925"),i=r("54461"),m=r("63218"),d=r("71522"),p=r("44855");let g=function(){let e=(0,d.Z)(),t=(0,m.k6)(),r=(0,m.TH)(),{siteConfig:{baseUrl:a}}=(0,l.Z)(),s=e?new URLSearchParams(r.search):null,n=s?.get("q")||"",c=s?.get("ctx")||"",o=s?.get("version")||"",u=e=>{let t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:n,searchContext:c&&Array.isArray(p.Kc)&&p.Kc.some(e=>"string"==typeof e?e===c:e.path===c)?c:"",searchVersion:o,updateSearchPath:e=>{let r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{let a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{let t=u(e);return`${a}search?${t.toString()}`}}};var f=r("70314"),x=r("24982"),y=r("55153"),j=r("67976"),S=r("81546"),C=r("52311"),I=r("15917");let v={searchContextInput:"searchContextInput_aPM1",searchQueryInput:"searchQueryInput_Sj83",searchResultItem:"searchResultItem_tdMb",searchResultItemPath:"searchResultItemPath_Dcb9",searchResultItemSummary:"searchResultItemSummary_kjGv",searchQueryColumn:"searchQueryColumn_y2__",searchContextColumn:"searchContextColumn_W41o"};var w=r("36550");function P(){let{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,l.Z)(),{selectMessage:r}=(0,h.c)(),{searchValue:n,searchContext:o,searchVersion:m,updateSearchPath:d,updateSearchContext:x}=g(),[y,j]=(0,s.useState)(n),[S,I]=(0,s.useState)(),P=`${e}${m}`,_=(0,s.useMemo)(()=>y?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}),[y]);(0,s.useEffect)(()=>{d(y),y?(async()=>{I(await (0,f.a)(P,o,y))})():I(void 0)},[y,P,o]);let b=(0,s.useCallback)(e=>{j(e.target.value)},[]);(0,s.useEffect)(()=>{n&&n!==y&&j(n)},[n]);let[A,$]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{(async function(){(!Array.isArray(p.Kc)||o||p.pQ)&&await (0,f.r)(P,o),$(!0)})()},[o,P]),(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,a.jsx)("title",{children:_})]}),(0,a.jsxs)("div",{className:"container margin-vert--lg",children:[(0,a.jsx)("h1",{children:_}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:(0,i.Z)("col",{[v.searchQueryColumn]:Array.isArray(p.Kc),"col--9":Array.isArray(p.Kc),"col--12":!Array.isArray(p.Kc)}),children:(0,a.jsx)("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:b,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(p.Kc)?(0,a.jsx)("div",{className:(0,i.Z)("col","col--3","padding-left--none",v.searchContextColumn),children:(0,a.jsxs)("select",{name:"search-context",className:v.searchContextInput,id:"context-selector",value:o,onChange:e=>x(e.target.value),children:[p.pQ&&(0,a.jsx)("option",{value:"",children:(0,u.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),p.Kc.map(e=>{let{label:r,path:s}=(0,w._)(e,t);return(0,a.jsx)("option",{value:s,children:r},s)})]})}):null]}),!A&&y&&(0,a.jsx)("div",{children:(0,a.jsx)(C.Z,{})}),S&&(S.length>0?(0,a.jsx)("p",{children:r(S.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))}):(0,a.jsx)("p",{children:(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,a.jsx)("section",{children:S&&S.map(e=>(0,a.jsx)(R,{searchResult:e},e.document.i))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:s,tokens:l,metadata:n}}=e,c=r===x.P.Title,u=r===x.P.Keywords,h=r===x.P.Description,i=h||u,m=c||i,d=r===x.P.Content,g=(c?t.b:s.b).slice(),f=d||i?t.s:t.t;m||g.push(s.t);let C="";if(p.vc&&l.length>0){let e=new URLSearchParams;for(let t of l)e.append("_highlight",t);C=`?${e.toString()}`}return(0,a.jsxs)("article",{className:v.searchResultItem,children:[(0,a.jsx)("h2",{children:(0,a.jsx)(o.Z,{to:t.u+C+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,y.C)(f,l):(0,j.o)(f,(0,S.m)(n,"t"),l,100)}})}),g.length>0&&(0,a.jsx)("p",{className:v.searchResultItemPath,children:(0,I.e)(g)}),(d||h)&&(0,a.jsx)("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.o)(t.t,(0,S.m)(n,"t"),l,100)}})]})}let _=function(){return(0,a.jsx)(n.Z,{children:(0,a.jsx)(P,{})})}}}]);