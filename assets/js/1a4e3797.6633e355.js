"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7920],{83396:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(50959),n=r(25304);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},60713:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var a=r(50959),n=r(25304),l=r(28763),s=r(87626),c=r(47579),o=r(8943),u=r(83396),m=r(45924),h=r(28903),i=r(18662),p=r(8706);const d=function(){const e=(0,i.Z)(),t=(0,h.k6)(),r=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),l=e?new URLSearchParams(r.search):null,s=(null==l?void 0:l.get("q"))||"",c=(null==l?void 0:l.get("ctx"))||"",o=(null==l?void 0:l.get("version"))||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:s,searchContext:c&&Array.isArray(p.Kc)&&p.Kc.some((e=>"string"==typeof e?e===c:e.path===c))?c:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${a}search?${t.toString()}`}}};var g=r(21685),f=r(77917),y=r(63463),E=r(87958),S=r(15177),C=r(25129),v=r(9269);const I={searchContextInput:"searchContextInput_AhVD",searchQueryInput:"searchQueryInput_s59H",searchResultItem:"searchResultItem_kYXR",searchResultItemPath:"searchResultItemPath_zxMW",searchResultItemSummary:"searchResultItemSummary_HTz0",searchQueryColumn:"searchQueryColumn_PHLX",searchContextColumn:"searchContextColumn__21a"};var x=r(16902);function w(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,n.Z)(),{selectMessage:r}=(0,u.c)(),{searchValue:l,searchContext:c,searchVersion:h,updateSearchPath:i,updateSearchContext:y}=d(),[E,S]=(0,a.useState)(l),[v,w]=(0,a.useState)(),[P,_]=(0,a.useState)(),b=`${e}${h}`,k=(0,a.useMemo)((()=>E?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:E}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[E]);(0,a.useEffect)((()=>{i(E),v&&(E?v(E,(e=>{_(e)})):_(void 0))}),[E,v]);const A=(0,a.useCallback)((e=>{S(e.target.value)}),[]);return(0,a.useEffect)((()=>{l&&l!==E&&S(l)}),[l]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(p.Kc)||c||p.pQ?await(0,g.w)(b,c):{wrappedIndexes:[],zhDictionary:[]};w((()=>(0,f.v)(e,t,100)))}()}),[c,b]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,k)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,k),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[I.searchQueryColumn]:Array.isArray(p.Kc),"col--9":Array.isArray(p.Kc),"col--12":!Array.isArray(p.Kc)})},a.createElement("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:A,value:E,autoComplete:"off",autoFocus:!0})),Array.isArray(p.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",I.searchContextColumn)},a.createElement("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:c,onChange:e=>y(e.target.value)},p.pQ&&a.createElement("option",{value:""},(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})),p.Kc.map((e=>{const{label:r,path:n}=(0,x._)(e,t);return a.createElement("option",{key:n,value:n},r)})))):null),!v&&E&&a.createElement("div",null,a.createElement(C.Z,null)),P&&(P.length>0?a.createElement("p",null,r(P.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,P&&P.map((e=>a.createElement(R,{key:e.document.i,searchResult:e}))))))}function R({searchResult:{document:e,type:t,page:r,tokens:n,metadata:l}}){const s=0===t,o=2===t,u=(s?e.b:r.b).slice(),m=o?e.s:e.t;s||u.push(r.t);let h="";if(p.vc&&n.length>0){const e=new URLSearchParams;for(const t of n)e.append("_highlight",t);h=`?${e.toString()}`}return a.createElement("article",{className:I.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,y.C)(m,n):(0,E.o)(m,(0,S.m)(l,"t"),n,100)}})),u.length>0&&a.createElement("p",{className:I.searchResultItemPath},(0,v.e)(u)),o&&a.createElement("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,E.o)(e.t,(0,S.m)(l,"t"),n,100)}}))}const P=function(){return a.createElement(l.Z,null,a.createElement(w,null))}}}]);