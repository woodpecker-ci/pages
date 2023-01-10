"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7920],{7725:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(9496),a=n(1283),l=n(2924),s=n(306),c=n(6513),o=n(2317);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}var g=n(3442),d=n(6297);const f=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:n}}=(0,a.Z)(),r=d.Z.canUseDOM?new URLSearchParams(t.search):null,l=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",c=(null==r?void 0:r.get("version"))||"",o=e=>{const n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const n=o(t);e.replace({search:n.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${n}search?${t.toString()}`}}};var E=n(9519),y=n(285),S=n(5448),w=n(9819),v=n(2108),P=n(9620),b=n(8491),I=n(8576);const R="searchQueryInput_ym0V",k="searchResultItem_hzOM",$="searchResultItemPath_YtTY",x="searchResultItemSummary_LJnv";function C(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=p(),{searchValue:n,searchContext:l,searchVersion:c,updateSearchPath:u}=f(),[m,h]=(0,r.useState)(n),[i,g]=(0,r.useState)(),[d,S]=(0,r.useState)(),w=`${e}${c}`,v=(0,r.useMemo)((()=>m?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,r.useEffect)((()=>{u(m),i&&(m?i(m,(e=>{S(e)})):S(void 0))}),[m,i]);const b=(0,r.useCallback)((e=>{h(e.target.value)}),[]);return(0,r.useEffect)((()=>{n&&n!==m&&h(n)}),[n]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(w,l);g((()=>(0,y.v)(e,t,100)))}()}),[l,w]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,v)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,v),r.createElement("input",{type:"search",name:"q",className:R,"aria-label":"Search",onChange:b,value:m,autoComplete:"off",autoFocus:!0}),!i&&m&&r.createElement("div",null,r.createElement(P.Z,null)),d&&(d.length>0?r.createElement("p",null,t(d.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:d.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,d&&d.map((e=>r.createElement(F,{key:e.document.i,searchResult:e}))))))}function F({searchResult:{document:e,type:t,page:n,tokens:a,metadata:l}}){const s=0===t,o=2===t,u=(s?e.b:n.b).slice(),m=o?e.s:e.t;s||u.push(n.t);let h="";if(I.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);h=`?${e.toString()}`}return r.createElement("article",{className:k},r.createElement("h2",null,r.createElement(c.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,S.C)(m,a):(0,w.o)(m,(0,v.m)(l,"t"),a,100)}})),u.length>0&&r.createElement("p",{className:$},(0,b.e)(u)),o&&r.createElement("p",{className:x,dangerouslySetInnerHTML:{__html:(0,w.o)(e.t,(0,v.m)(l,"t"),a,100)}}))}const _=function(){return r.createElement(l.Z,null,r.createElement(C,null))}}}]);