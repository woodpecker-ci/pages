(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4049],{9613:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2005:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(9496),o=n(5924),a=n(6274),l=n(9218);const c="anchorWithStickyNavbar_eW2B",i="anchorWithHideOnScrollNavbar_C3TD";var s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&b(e,n,t[n]);return e},v=(e,t)=>u(e,p(t));function g(e){var t=e,{as:n,id:s}=t,u=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(t,["as","id"]);const{navbar:{hideOnScroll:p}}=(0,l.L)();return"h1"!==n&&s?r.createElement(n,v(y({},u),{className:(0,o.Z)("anchor",p?i:c),id:s}),u.children,r.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,v(y({},u),{id:void 0}))}},6020:(e,t,n)=>{"use strict";n.d(t,{Z:()=>un});var r=n(9496),o=n(9613),a=n(1899),l=Object.defineProperty,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p(e){var t;if((null==(t=e.props)?void 0:t.mdxType)&&e.props.originalType){const t=e.props,{mdxType:n,originalType:o}=t,a=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(t,["mdxType","originalType"]);return r.createElement(e.props.originalType,a)}return e}var m=n(676),d=n(5924),f=n(6862),b=n(9218);function y(){const{prism:e}=(0,b.L)(),{colorMode:t}=(0,f.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var v=n(5676),g=n(7226),h=n.n(g);const O=new RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),E=new RegExp("\\{(?<range>[\\d,-]+)\\}"),j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function w(e,t){const n=e.map((e=>{const{start:n,end:r}=j[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function k(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&E.test(a)){const e=a.match(E).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"],t);case"jsx":case"tsx":return w(["js","jsBlock","jsx"],t);case"html":return w(["js","jsBlock","html"],t);case"python":case"py":case"bash":return w(["bash"],t);case"markdown":case"md":return w(["html","jsx","bash"],t);default:return w(Object.keys(j),t)}}(r,o),c=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${d},`:u[t]?i[u[t]].start=d:p[t]&&(i[p[t]].range+=`${i[p[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const m={};return Object.entries(i).forEach((([e,{range:t}])=>{h()(t).forEach((t=>{null!=m[t]||(m[t]=[]),m[t].push(e)}))})),{lineClassNames:m,code:n}}const P="codeBlockContainer_t23h";var N=Object.defineProperty,C=Object.defineProperties,x=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function I(e){var t=e,{as:n}=t,o=((e,t)=>{var n={};for(var r in e)B.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&L)for(var r of L(e))t.indexOf(r)<0&&T.call(e,r)&&(n[r]=e[r]);return n})(t,["as"]);const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(y());return r.createElement(n,(l=((e,t)=>{for(var n in t||(t={}))B.call(t,n)&&S(e,n,t[n]);if(L)for(var n of L(t))T.call(t,n)&&S(e,n,t[n]);return e})({},o),c={style:a,className:(0,d.Z)(o.className,P,v.k.common.codeBlock)},C(l,x(c))));var l,c}const H={codeBlockContent:"codeBlockContent_wF63",codeBlockTitle:"codeBlockTitle_NKcI",codeBlock:"codeBlock_VeLm",codeBlockStandalone:"codeBlockStandalone_MSP0",codeBlockLines:"codeBlockLines_nTAq",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FWcM",buttonGroup:"buttonGroup_u6Ja"};function _({children:e,className:t}){return r.createElement(I,{as:"pre",tabIndex:0,className:(0,d.Z)(H.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:H.codeBlockLines},e))}var D=n(739);const Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function A(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n=Z){const o=(0,D.zX)(t),a=(0,D.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const z={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var M={Prism:n(999).Z,theme:z};function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var V=/\r\n|\r|\n/,W=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},F=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=$({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=$({},n,{backgroundColor:null}),o};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const U=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),R(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),R(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=$({},G(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?$({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),R(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),R(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=$({},G(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?$({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),R(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=F(u,p.type),p.alias&&(u=F(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(V),d=m.length;c.push({types:u,content:m[0]});for(var f=1;f<d;f++)W(c),i.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return W(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),K="codeLine_aKe8",X="codeLineNumber_MOuG",Y="codeLineContent_BJ66";var J=Object.defineProperty,Q=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ne=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,re=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&ne(e,n,t[n]);if(Q)for(var n of Q(t))te.call(t,n)&&ne(e,n,t[n]);return e};function oe({line:e,classNames:t,showLineNumbers:n,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=o({line:e,className:(0,d.Z)(t,n&&K)}),c=e.map(((e,t)=>r.createElement("span",re({key:t},a({token:e,key:t})))));return r.createElement("span",re({},l),n?r.createElement(r.Fragment,null,r.createElement("span",{className:X}),r.createElement("span",{className:Y},c)):r.createElement(r.Fragment,null,c,r.createElement("br",null)))}var ae=n(6274);const le={copyButtonCopied:"copyButtonCopied_m2UK",copyButtonIcons:"copyButtonIcons_Ze3n",copyButtonIcon:"copyButtonIcon_SO8u",copyButtonSuccessIcon:"copyButtonSuccessIcon_IZwW"};function ce({code:e,className:t}){const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,ae.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,ae.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,ae.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,d.Z)("clean-btn",t,le.copyButton,n&&le.copyButtonCopied),onClick:l},r.createElement("span",{className:le.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:le.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:le.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const ie="wordWrapButtonIcon_fYlL",se="wordWrapButtonEnabled_z8bq";function ue({className:e,onClick:t,isEnabled:n}){const o=(0,ae.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,d.Z)("clean-btn",e,n&&se),"aria-label":o,title:o},r.createElement("svg",{className:ie,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}var pe=Object.defineProperty,me=Object.defineProperties,de=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ge({children:e,className:t="",metastring:n,title:o,showLineNumbers:a,language:l}){var c;const{prism:{defaultLanguage:i,magicComments:s}}=(0,b.L)(),u=null!=(c=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))?c:i,p=y(),m=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return A(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),f=function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.match(O))?void 0:t.groups.title)?n:""}(n)||o,{lineClassNames:v,code:g}=k(e,{metastring:n,language:u,magicComments:s}),h=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(I,{as:"div",className:(0,d.Z)(t,u&&!t.includes(`language-${u}`)&&`language-${u}`)},f&&r.createElement("div",{className:H.codeBlockTitle},f),r.createElement("div",{className:H.codeBlockContent},r.createElement(U,(E=((e,t)=>{for(var n in t||(t={}))be.call(t,n)&&ve(e,n,t[n]);if(fe)for(var n of fe(t))ye.call(t,n)&&ve(e,n,t[n]);return e})({},M),me(E,de({theme:p,code:g,language:null!=u?u:"text"}))),(({className:e,tokens:t,getLineProps:n,getTokenProps:o})=>r.createElement("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,d.Z)(e,H.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,d.Z)(H.codeBlockLines,h&&H.codeBlockLinesWithNumbering)},t.map(((e,t)=>r.createElement(oe,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:h}))))))),r.createElement("div",{className:H.buttonGroup},(m.isEnabled||m.isCodeScrollable)&&r.createElement(ue,{className:H.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),r.createElement(ce,{className:H.codeButton,code:g}))));var E}var he=Object.defineProperty,Oe=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,we=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ke(e){var t=e,{children:n}=t,o=((e,t)=>{var n={};for(var r in e)Ee.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Oe)for(var r of Oe(e))t.indexOf(r)<0&&je.call(e,r)&&(n[r]=e[r]);return n})(t,["children"]);const a=(0,m.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),c="string"==typeof l?ge:_;return r.createElement(c,((e,t)=>{for(var n in t||(t={}))Ee.call(t,n)&&we(e,n,t[n]);if(Oe)for(var n of Oe(t))je.call(t,n)&&we(e,n,t[n]);return e})({key:String(a)},o),l)}var Pe=Object.defineProperty,Ne=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&Le(e,n,t[n]);if(Ne)for(var n of Ne(t))xe.call(t,n)&&Le(e,n,t[n]);return e};var Te=n(8003),Se=Object.defineProperty,Ie=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,De=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ze=Object.defineProperty,Ae=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Re=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$e=(e,t)=>{for(var n in t||(t={}))ze.call(t,n)&&Re(e,n,t[n]);if(Ae)for(var n of Ae(t))Me.call(t,n)&&Re(e,n,t[n]);return e};var Ve=n(4753);const We="details_q2UF",Fe="isBrowser_eRhM",qe="collapsibleContent_zbtG";var Ge=Object.defineProperty,Ue=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,Xe=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Qe=(e,t,n)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function et(e){return!!e&&("SUMMARY"===e.tagName||et(e.parentElement))}function tt(e,t){return!!e&&(e===t||tt(e.parentElement,t))}function nt(e){var t=e,{summary:n,children:o}=t,a=((e,t)=>{var n={};for(var r in e)Ye.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&Xe)for(var r of Xe(e))t.indexOf(r)<0&&Je.call(e,r)&&(n[r]=e[r]);return n})(t,["summary","children"]);const l=(0,m.Z)(),c=(0,r.useRef)(null),{collapsed:i,setCollapsed:s}=(0,Ve.u)({initialState:!a.open}),[u,p]=(0,r.useState)(a.open);return r.createElement("details",(f=((e,t)=>{for(var n in t||(t={}))Ye.call(t,n)&&Qe(e,n,t[n]);if(Xe)for(var n of Xe(t))Je.call(t,n)&&Qe(e,n,t[n]);return e})({},a),b={ref:c,open:u,"data-collapsed":i,className:(0,d.Z)(We,l&&Fe,a.className),onMouseDown:e=>{et(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;et(t)&&tt(t,c.current)&&(e.preventDefault(),i?(s(!1),p(!0)):s(!0))}},Ue(f,Ke(b))),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(Ve.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),p(!e)}},r.createElement("div",{className:qe},o)));var f,b}const rt="details_FD62";var ot=Object.defineProperty,at=Object.defineProperties,lt=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,ut=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function pt(e){var t,n,o=((e,t)=>{var n={};for(var r in e)it.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&ct)for(var r of ct(e))t.indexOf(r)<0&&st.call(e,r)&&(n[r]=e[r]);return n})(e,[]);return r.createElement(nt,(t=((e,t)=>{for(var n in t||(t={}))it.call(t,n)&&ut(e,n,t[n]);if(ct)for(var n of ct(t))st.call(t,n)&&ut(e,n,t[n]);return e})({},o),n={className:(0,d.Z)("alert alert--info",rt,o.className)},at(t,lt(n))))}var mt=Object.defineProperty,dt=Object.defineProperties,ft=Object.getOwnPropertyDescriptors,bt=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,gt=(e,t,n)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ht=n(2005),Ot=Object.defineProperty,Et=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,kt=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Pt(e){return r.createElement(ht.Z,((e,t)=>{for(var n in t||(t={}))jt.call(t,n)&&kt(e,n,t[n]);if(Et)for(var n of Et(t))wt.call(t,n)&&kt(e,n,t[n]);return e})({},e))}const Nt="containsTaskList_agEb";var Ct=Object.defineProperty,xt=Object.defineProperties,Lt=Object.getOwnPropertyDescriptors,Bt=Object.getOwnPropertySymbols,Tt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,It=(e,t,n)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Ht="img_buSx";var _t=Object.defineProperty,Dt=Object.defineProperties,Zt=Object.getOwnPropertyDescriptors,At=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,Rt=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const $t="admonition_LrXW",Vt="admonitionHeading_UDHg",Wt="admonitionIcon_DefI",Ft="admonitionContent_Ye8G";var qt=Object.defineProperty,Gt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,Kt=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,Jt=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Qt={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(ae.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(ae.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(ae.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(ae.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(ae.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},en={secondary:"note",important:"info",success:"tip",warning:"danger"};function tn(e){var t;const{mdxAdmonitionTitle:n,rest:o}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return a=((e,t)=>{for(var n in t||(t={}))Xt.call(t,n)&&Jt(e,n,t[n]);if(Kt)for(var n of Kt(t))Yt.call(t,n)&&Jt(e,n,t[n]);return e})({},e),l={title:null!=(t=e.title)?t:n,children:o},Gt(a,Ut(l));var a,l}var nn=Object.defineProperty,rn=Object.getOwnPropertySymbols,on=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable,ln=(e,t,n)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cn=(e,t)=>{for(var n in t||(t={}))on.call(t,n)&&ln(e,n,t[n]);if(rn)for(var n of rn(t))an.call(t,n)&&ln(e,n,t[n]);return e};const sn={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?p(e):e));return r.createElement(a.Z,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&u(e,n,t[n]);return e})({},e),t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",Be({},e)):r.createElement(ke,Be({},e))},a:function(e){return r.createElement(Te.Z,((e,t)=>{for(var n in t||(t={}))He.call(t,n)&&De(e,n,t[n]);if(Ie)for(var n of Ie(t))_e.call(t,n)&&De(e,n,t[n]);return e})({},e))},pre:function(e){var t;return r.createElement(ke,$e({},(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:$e({},e)))},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(pt,(a=((e,t)=>{for(var n in t||(t={}))yt.call(t,n)&&gt(e,n,t[n]);if(bt)for(var n of bt(t))vt.call(t,n)&&gt(e,n,t[n]);return e})({},e),dt(a,ft({summary:n}))),o);var a},ul:function(e){return r.createElement("ul",(t=((e,t)=>{for(var n in t||(t={}))Tt.call(t,n)&&It(e,n,t[n]);if(Bt)for(var n of Bt(t))St.call(t,n)&&It(e,n,t[n]);return e})({},e),n={className:(o=e.className,(0,d.Z)(o,(null==o?void 0:o.includes("contains-task-list"))&&Nt))},xt(t,Lt(n))));var t,n,o},img:function(e){return r.createElement("img",(t=((e,t)=>{for(var n in t||(t={}))zt.call(t,n)&&Rt(e,n,t[n]);if(At)for(var n of At(t))Mt.call(t,n)&&Rt(e,n,t[n]);return e})({loading:"lazy"},e),n={className:(o=e.className,(0,d.Z)(o,Ht))},Dt(t,Zt(n))));var t,n,o},h1:e=>r.createElement(Pt,cn({as:"h1"},e)),h2:e=>r.createElement(Pt,cn({as:"h2"},e)),h3:e=>r.createElement(Pt,cn({as:"h3"},e)),h4:e=>r.createElement(Pt,cn({as:"h4"},e)),h5:e=>r.createElement(Pt,cn({as:"h5"},e)),h6:e=>r.createElement(Pt,cn({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=tn(e),l=function(e){var t;const n=null!=(t=en[e])?t:e;return Qt[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),Qt.info)}(n),c=null!=o?o:l.label,{iconComponent:i}=l,s=null!=a?a:r.createElement(i,null);return r.createElement("div",{className:(0,d.Z)(v.k.common.admonition,v.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,$t)},r.createElement("div",{className:Vt},r.createElement("span",{className:Wt},s),c),r.createElement("div",{className:Ft},t))}};function un({children:e}){return r.createElement(o.Zo,{components:sn},e)}},8454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(9496),o=n(5924),a=n(7100);const l="tableOfContents_sj1i";var c=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function f(e){var t,n=e,{className:c}=n,f=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["className"]);return r.createElement("div",{className:(0,o.Z)(l,"thin-scrollbar",c)},r.createElement(a.Z,(t=((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&d(e,n,t[n]);return e})({},f),i(t,s({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}},7100:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(9496),o=n(9218),a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>l(e,c(t));function f(e){const t=e.map((e=>d(m({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const n=e,{parentIndex:o}=n,a=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["parentIndex"]);o>=0?t[o].children.push(a):r.push(a)})),r}function b({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=b({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[d(m({},e),{children:r})]:r}))}function y(e){const t=e.getBoundingClientRect();return t.top===t.bottom?y(e.parentNode):t}function v(e,{anchorTopOffset:t}){var n,r;const o=e.find((e=>y(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(y(o))?o:null!=(n=e[e.indexOf(o)-1])?n:null}return null!=(r=e[e.length-1])?r:null}function g(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function h(e){const t=(0,r.useRef)(void 0),n=g();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),i=v(c,{anchorTopOffset:n.current}),s=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}const O=r.memo((function e({toc:t,className:n,linkClassName:o,isChild:a}){return t.length?r.createElement("ul",{className:a?void 0:n},t.map((t=>r.createElement("li",{key:t.id},r.createElement("a",{href:`#${t.id}`,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:t.value}}),r.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:o}))))):null}));var E=Object.defineProperty,j=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function N(e){var t=e,{toc:n,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:i,maxHeadingLevel:s}=t,u=((e,t)=>{var n={};for(var r in e)w.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&j)for(var r of j(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const p=(0,o.L)(),m=null!=i?i:p.tableOfContents.minHeadingLevel,d=null!=s?s:p.tableOfContents.maxHeadingLevel,y=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)((()=>b({toc:f(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:n,minHeadingLevel:m,maxHeadingLevel:d});return h((0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d}}),[l,c,m,d])),r.createElement(O,((e,t)=>{for(var n in t||(t={}))w.call(t,n)&&P(e,n,t[n]);if(j)for(var n of j(t))k.call(t,n)&&P(e,n,t[n]);return e})({toc:y,className:a,linkClassName:l},u))}},7226:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);