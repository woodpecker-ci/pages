(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["4967"],{57822:function(e){!function(){var t,r,i,n,s,o,a,u,l,c,h,d,f,p,y,m,v,g,x,Q,w,k,S,E,b,L,P,T,O=function(e){var t=new O.Builder;return t.pipeline.add(O.trimmer,O.stopWordFilter,O.stemmer),t.searchPipeline.add(O.stemmer),e.call(t,t),t.build()};O.version="2.3.9",O.utils={},O.utils.warn=(t=this,function(e){t.console&&console.warn&&console.warn(e)}),O.utils.asString=function(e){return null==e?"":e.toString()},O.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),i=0;i<r.length;i++){var n=r[i],s=e[n];if(Array.isArray(s)){t[n]=s.slice();continue}if("string"==typeof s||"number"==typeof s||"boolean"==typeof s){t[n]=s;continue}throw TypeError("clone is not deep and does not support nested objects")}return t},O.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},O.FieldRef.joiner="/",O.FieldRef.fromString=function(e){var t=e.indexOf(O.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),i=e.slice(t+1);return new O.FieldRef(i,r,e)},O.FieldRef.prototype.toString=function(){return void 0==this._stringValue&&(this._stringValue=this.fieldName+O.FieldRef.joiner+this.docRef),this._stringValue},O.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},O.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},O.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},O.Set.prototype.contains=function(e){return!!this.elements[e]},O.Set.prototype.intersect=function(e){var t,r,i,n=[];if(e===O.Set.complete)return this;if(e===O.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),i=Object.keys(t.elements);for(var s=0;s<i.length;s++){var o=i[s];o in r.elements&&n.push(o)}return new O.Set(n)},O.Set.prototype.union=function(e){return e===O.Set.complete?O.Set.complete:e===O.Set.empty?this:new O.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},O.idf=function(e,t){var r=0;for(var i in e)"_index"!=i&&(r+=Object.keys(e[i]).length);return Math.log(1+Math.abs((t-r+.5)/(r+.5)))},O.Token=function(e,t){this.str=e||"",this.metadata=t||{}},O.Token.prototype.toString=function(){return this.str},O.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},O.Token.prototype.clone=function(e){return e=e||function(e){return e},new O.Token(e(this.str,this.metadata),this.metadata)},O.tokenizer=function(e,t){if(null==e||void 0==e)return[];if(Array.isArray(e))return e.map(function(e){return new O.Token(O.utils.asString(e).toLowerCase(),O.utils.clone(t))});for(var r=e.toString().toLowerCase(),i=r.length,n=[],s=0,o=0;s<=i;s++){var a=r.charAt(s),u=s-o;if(a.match(O.tokenizer.separator)||s==i){if(u>0){var l=O.utils.clone(t)||{};l.position=[o,u],l.index=n.length,n.push(new O.Token(r.slice(o,s),l))}o=s+1}}return n},O.tokenizer.separator=/[\s\-]+/,O.Pipeline=function(){this._stack=[]},O.Pipeline.registeredFunctions=Object.create(null),O.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&O.utils.warn("Overwriting existing registered function: "+t),e.label=t,O.Pipeline.registeredFunctions[e.label]=e},O.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||O.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},O.Pipeline.load=function(e){var t=new O.Pipeline;return e.forEach(function(e){var r=O.Pipeline.registeredFunctions[e];if(r)t.add(r);else throw Error("Cannot load unregistered function: "+e)}),t},O.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){O.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},O.Pipeline.prototype.after=function(e,t){O.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},O.Pipeline.prototype.before=function(e,t){O.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw Error("Cannot find existingFn");this._stack.splice(r,0,t)},O.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},O.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var i=this._stack[r],n=[],s=0;s<e.length;s++){var o=i(e[s],s,e);if(null!=o&&""!==o){if(Array.isArray(o))for(var a=0;a<o.length;a++)n.push(o[a]);else n.push(o)}}e=n}return e},O.Pipeline.prototype.runString=function(e,t){var r=new O.Token(e,t);return this.run([r]).map(function(e){return e.toString()})},O.Pipeline.prototype.reset=function(){this._stack=[]},O.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return O.Pipeline.warnIfFunctionNotRegistered(e),e.label})},O.Vector=function(e){this._magnitude=0,this.elements=e||[]},O.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,i=r-t,n=Math.floor(i/2),s=this.elements[2*n];i>1&&(s<e&&(t=n),s>e&&(r=n),s!=e);)i=r-t,n=t+Math.floor(i/2),s=this.elements[2*n];return s==e||s>e?2*n:s<e?(n+1)*2:void 0},O.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},O.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=r(this.elements[i+1],t):this.elements.splice(i,0,e,t)},O.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var i=this.elements[r];e+=i*i}return this._magnitude=Math.sqrt(e)},O.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,i=e.elements,n=r.length,s=i.length,o=0,a=0,u=0,l=0;u<n&&l<s;)(o=r[u])<(a=i[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*i[l+1],u+=2,l+=2);return t},O.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},O.Vector.prototype.toArray=function(){for(var e=Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},O.Vector.prototype.toJSON=function(){return this.elements},O.stemmer=(r={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},i={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},a=RegExp("^("+(s="[^aeiou][^aeiouy]*")+")?"+(o=(n="[aeiouy]")+"[aeiou]*")+s),u=RegExp("^("+s+")?"+o+s+o+s),l=RegExp("^("+s+")?"+o+s+"("+o+")?$"),c=RegExp("^("+s+")?"+n),h=/^(.+?)(ss|i)es$/,d=/^(.+?)([^s])s$/,f=/^(.+?)eed$/,p=/^(.+?)(ed|ing)$/,y=/.$/,m=/(at|bl|iz)$/,v=RegExp("([^aeiouylsz])\\1$"),g=RegExp("^"+s+n+"[^aeiouwxy]$"),x=/^(.+?[^aeiou])y$/,Q=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,w=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,k=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,S=/^(.+?)(s|t)(ion)$/,E=/^(.+?)e$/,b=/ll$/,L=RegExp("^"+s+n+"[^aeiouwxy]$"),P=function(e){var t,n,s,o,P,T;if(e.length<3)return e;if("y"==(s=e.substr(0,1))&&(e=s.toUpperCase()+e.substr(1)),o=h,P=d,o.test(e)?e=e.replace(o,"$1$2"):P.test(e)&&(e=e.replace(P,"$1$2")),o=f,P=p,o.test(e)){var O=o.exec(e);(o=a).test(O[1])&&(o=y,e=e.replace(o,""))}else if(P.test(e)){var O=P.exec(e);t=O[1],(P=c).test(t)&&(e=t,P=m,T=v,P.test(e)?e+="e":T.test(e)?(o=y,e=e.replace(o,"")):g.test(e)&&(e+="e"))}if((o=x).test(e)){var O=o.exec(e);e=(t=O[1])+"i"}if((o=Q).test(e)){var O=o.exec(e);t=O[1],n=O[2],(o=a).test(t)&&(e=t+r[n])}if((o=w).test(e)){var O=o.exec(e);t=O[1],n=O[2],(o=a).test(t)&&(e=t+i[n])}if(o=k,P=S,o.test(e)){var O=o.exec(e);t=O[1],(o=u).test(t)&&(e=t)}else if(P.test(e)){var O=P.exec(e);t=O[1]+O[2],(P=u).test(t)&&(e=t)}if((o=E).test(e)){var O=o.exec(e);t=O[1],o=u,P=l,T=L,(o.test(t)||P.test(t)&&!T.test(t))&&(e=t)}return o=b,P=u,o.test(e)&&P.test(e)&&(o=y,e=e.replace(o,"")),"y"==s&&(e=s.toLowerCase()+e.substr(1)),e},function(e){return e.update(P)}),O.Pipeline.registerFunction(O.stemmer,"stemmer"),O.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},O.stopWordFilter=O.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),O.Pipeline.registerFunction(O.stopWordFilter,"stopWordFilter"),O.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},O.Pipeline.registerFunction(O.trimmer,"trimmer"),O.TokenSet=function(){this.final=!1,this.edges={},this.id=O.TokenSet._nextId,O.TokenSet._nextId+=1},O.TokenSet._nextId=1,O.TokenSet.fromArray=function(e){for(var t=new O.TokenSet.Builder,r=0,i=e.length;r<i;r++)t.insert(e[r]);return t.finish(),t.root},O.TokenSet.fromClause=function(e){return"editDistance"in e?O.TokenSet.fromFuzzyString(e.term,e.editDistance):O.TokenSet.fromString(e.term)},O.TokenSet.fromFuzzyString=function(e,t){for(var r=new O.TokenSet,i=[{node:r,editsRemaining:t,str:e}];i.length;){var n=i.pop();if(n.str.length>0){var s,o=n.str.charAt(0);o in n.node.edges?s=n.node.edges[o]:(s=new O.TokenSet,n.node.edges[o]=s),1==n.str.length&&(s.final=!0),i.push({node:s,editsRemaining:n.editsRemaining,str:n.str.slice(1)})}if(0!=n.editsRemaining){if("*"in n.node.edges)var a=n.node.edges["*"];else{var a=new O.TokenSet;n.node.edges["*"]=a}if(0==n.str.length&&(a.final=!0),i.push({node:a,editsRemaining:n.editsRemaining-1,str:n.str}),n.str.length>1&&i.push({node:n.node,editsRemaining:n.editsRemaining-1,str:n.str.slice(1)}),1==n.str.length&&(n.node.final=!0),n.str.length>=1){if("*"in n.node.edges)var u=n.node.edges["*"];else{var u=new O.TokenSet;n.node.edges["*"]=u}1==n.str.length&&(u.final=!0),i.push({node:u,editsRemaining:n.editsRemaining-1,str:n.str.slice(1)})}if(n.str.length>1){var l,c=n.str.charAt(0),h=n.str.charAt(1);h in n.node.edges?l=n.node.edges[h]:(l=new O.TokenSet,n.node.edges[h]=l),1==n.str.length&&(l.final=!0),i.push({node:l,editsRemaining:n.editsRemaining-1,str:c+n.str.slice(2)})}}}return r},O.TokenSet.fromString=function(e){for(var t=new O.TokenSet,r=t,i=0,n=e.length;i<n;i++){var s=e[i],o=i==n-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new O.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},O.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),i=Object.keys(r.node.edges),n=i.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<n;s++){var o=i[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},O.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,i=0;i<r;i++){var n=t[i],s=this.edges[n];e=e+n+s.id}return e},O.TokenSet.prototype.intersect=function(e){for(var t=new O.TokenSet,r=void 0,i=[{qNode:e,output:t,node:this}];i.length;)for(var n=Object.keys((r=i.pop()).qNode.edges),s=n.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=n[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new O.TokenSet).final=p,r.output.edges[h]=y),i.push({qNode:f,output:y,node:d})}}return t},O.TokenSet.Builder=function(){this.previousWord="",this.root=new O.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},O.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(var i=r;i<e.length;i++){var n=new O.TokenSet,s=e[i];t.edges[s]=n,this.uncheckedNodes.push({parent:t,char:s,child:n}),t=n}t.final=!0,this.previousWord=e},O.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},O.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],i=r.child.toString();i in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[i]:(r.child._str=i,this.minimizedNodes[i]=r.child),this.uncheckedNodes.pop()}},O.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},O.Index.prototype.search=function(e){return this.query(function(t){new O.QueryParser(e,t).parse()})},O.Index.prototype.query=function(e){for(var t=new O.Query(this.fields),r=Object.create(null),i=Object.create(null),n=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)i[this.fields[a]]=new O.Vector;e.call(t,t);for(var a=0;a<t.clauses.length;a++){var u=t.clauses[a],l=null,c=O.Set.empty;l=u.usePipeline?this.pipeline.runString(u.term,{fields:u.fields}):[u.term];for(var h=0;h<l.length;h++){var d=l[h];u.term=d;var f=O.TokenSet.fromClause(u),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&u.presence===O.Query.presence.REQUIRED){for(var y=0;y<u.fields.length;y++){var m=u.fields[y];s[m]=O.Set.empty}break}for(var v=0;v<p.length;v++)for(var g=p[v],x=this.invertedIndex[g],Q=x._index,y=0;y<u.fields.length;y++){var m=u.fields[y],w=x[m],k=Object.keys(w),S=g+"/"+m,E=new O.Set(k);if(u.presence==O.Query.presence.REQUIRED&&(c=c.union(E),void 0===s[m]&&(s[m]=O.Set.complete)),u.presence==O.Query.presence.PROHIBITED){void 0===o[m]&&(o[m]=O.Set.empty),o[m]=o[m].union(E);continue}if(i[m].upsert(Q,u.boost,function(e,t){return e+t}),!n[S]){for(var b=0;b<k.length;b++){var L,P=k[b],T=new O.FieldRef(P,m),I=w[P];void 0===(L=r[T])?r[T]=new O.MatchData(g,m,I):L.add(g,m,I)}n[S]=!0}}}if(u.presence===O.Query.presence.REQUIRED)for(var y=0;y<u.fields.length;y++){var m=u.fields[y];s[m]=s[m].intersect(c)}}for(var R=O.Set.complete,F=O.Set.empty,a=0;a<this.fields.length;a++){var m=this.fields[a];s[m]&&(R=R.intersect(s[m])),o[m]&&(F=F.union(o[m]))}var C=Object.keys(r),N=[],_=Object.create(null);if(t.isNegated()){C=Object.keys(this.fieldVectors);for(var a=0;a<C.length;a++){var T=C[a],j=O.FieldRef.fromString(T);r[T]=new O.MatchData}}for(var a=0;a<C.length;a++){var j=O.FieldRef.fromString(C[a]),D=j.docRef;if(!(!R.contains(D)||F.contains(D))){var A,B=this.fieldVectors[j],V=i[j.fieldName].similarity(B);if(void 0!==(A=_[D]))A.score+=V,A.matchData.combine(r[j]);else{var z={ref:D,score:V,matchData:r[j]};_[D]=z,N.push(z)}}}return N.sort(function(e,t){return t.score-e.score})},O.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),t=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:O.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},O.Index.load=function(e){var t={},r={},i=e.fieldVectors,n=Object.create(null),s=e.invertedIndex,o=new O.TokenSet.Builder,a=O.Pipeline.load(e.pipeline);e.version!=O.version&&O.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+O.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<i.length;u++){var l=i[u],c=l[0],h=l[1];r[c]=new O.Vector(h)}for(var u=0;u<s.length;u++){var l=s[u],d=l[0],f=l[1];o.insert(d),n[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=n,t.tokenSet=o.root,t.pipeline=a,new O.Index(t)},O.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=O.tokenizer,this.pipeline=new O.Pipeline,this.searchPipeline=new O.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},O.Builder.prototype.ref=function(e){this._ref=e},O.Builder.prototype.field=function(e,t){if(/\//.test(e))throw RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},O.Builder.prototype.b=function(e){e<0?this._b=0:e>1?this._b=1:this._b=e},O.Builder.prototype.k1=function(e){this._k1=e},O.Builder.prototype.add=function(e,t){var r=e[this._ref],i=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var n=0;n<i.length;n++){var s=i[n],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new O.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(void 0==h[f]&&(h[f]=0),h[f]+=1,void 0==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<i.length;y++)p[i[y]]=Object.create(null);this.invertedIndex[f]=p}void 0==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var v=this.metadataWhitelist[m],g=f.metadata[v];void 0==this.invertedIndex[f][s][r][v]&&(this.invertedIndex[f][s][r][v]=[]),this.invertedIndex[f][s][r][v].push(g)}}}},O.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},i={},n=0;n<t;n++){var s=O.FieldRef.fromString(e[n]),o=s.fieldName;i[o]||(i[o]=0),i[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}for(var a=Object.keys(this._fields),n=0;n<a.length;n++){var u=a[n];r[u]=r[u]/i[u]}this.averageFieldLength=r},O.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,i=Object.create(null),n=0;n<r;n++){for(var s=O.FieldRef.fromString(t[n]),o=s.fieldName,a=this.fieldLengths[s],u=new O.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,v,g=c[p],x=l[g],Q=this.invertedIndex[g]._index;void 0===i[g]?(y=O.idf(this.invertedIndex[g],this.documentCount),i[g]=y):y=i[g],v=Math.round(1e3*(y*((this._k1+1)*x)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+x)*d*f))/1e3,u.insert(Q,v)}e[s]=u}this.fieldVectors=e},O.Builder.prototype.createTokenSet=function(){this.tokenSet=O.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},O.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new O.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},O.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},O.MatchData=function(e,t,r){for(var i=Object.create(null),n=Object.keys(r||{}),s=0;s<n.length;s++){var o=n[s];i[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=i)},O.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var i=t[r],n=Object.keys(e.metadata[i]);void 0==this.metadata[i]&&(this.metadata[i]=Object.create(null));for(var s=0;s<n.length;s++){var o=n[s],a=Object.keys(e.metadata[i][o]);void 0==this.metadata[i][o]&&(this.metadata[i][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];void 0==this.metadata[i][o][l]?this.metadata[i][o][l]=e.metadata[i][o][l]:this.metadata[i][o][l]=this.metadata[i][o][l].concat(e.metadata[i][o][l])}}}},O.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata)){this.metadata[e]=Object.create(null),this.metadata[e][t]=r;return}if(!(t in this.metadata[e])){this.metadata[e][t]=r;return}for(var i=Object.keys(r),n=0;n<i.length;n++){var s=i[n];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}},O.Query=function(e){this.clauses=[],this.allFields=e},O.Query.wildcard=new String("*"),O.Query.wildcard.NONE=0,O.Query.wildcard.LEADING=1,O.Query.wildcard.TRAILING=2,O.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},O.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=O.Query.wildcard.NONE),e.wildcard&O.Query.wildcard.LEADING&&e.term.charAt(0)!=O.Query.wildcard&&(e.term="*"+e.term),e.wildcard&O.Query.wildcard.TRAILING&&e.term.slice(-1)!=O.Query.wildcard&&(e.term=""+e.term+"*"),"presence"in e||(e.presence=O.Query.presence.OPTIONAL),this.clauses.push(e),this},O.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=O.Query.presence.PROHIBITED)return!1;return!0},O.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(e){this.term(e,O.utils.clone(t))},this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},O.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},O.QueryParseError.prototype=Error(),O.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},O.QueryLexer.prototype.run=function(){for(var e=O.QueryLexer.lexText;e;)e=e(this)},O.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,i=0;i<this.escapeCharPositions.length;i++)r=this.escapeCharPositions[i],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},O.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},O.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},O.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return O.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},O.QueryLexer.prototype.width=function(){return this.pos-this.start},O.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},O.QueryLexer.prototype.backup=function(){this.pos-=1},O.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do t=(e=this.next()).charCodeAt(0);while(t>47&&t<58);e!=O.QueryLexer.EOS&&this.backup()},O.QueryLexer.prototype.more=function(){return this.pos<this.length},O.QueryLexer.EOS="EOS",O.QueryLexer.FIELD="FIELD",O.QueryLexer.TERM="TERM",O.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",O.QueryLexer.BOOST="BOOST",O.QueryLexer.PRESENCE="PRESENCE",O.QueryLexer.lexField=function(e){return e.backup(),e.emit(O.QueryLexer.FIELD),e.ignore(),O.QueryLexer.lexText},O.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(O.QueryLexer.TERM)),e.ignore(),e.more())return O.QueryLexer.lexText},O.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(O.QueryLexer.EDIT_DISTANCE),O.QueryLexer.lexText},O.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(O.QueryLexer.BOOST),O.QueryLexer.lexText},O.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(O.QueryLexer.TERM)},O.QueryLexer.termSeparator=O.tokenizer.separator,O.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==O.QueryLexer.EOS)return O.QueryLexer.lexEOS;if(92==t.charCodeAt(0)){e.escapeCharacter();continue}if(":"==t)return O.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(O.QueryLexer.TERM),O.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(O.QueryLexer.TERM),O.QueryLexer.lexBoost;if("+"==t&&1===e.width()||"-"==t&&1===e.width())return e.emit(O.QueryLexer.PRESENCE),O.QueryLexer.lexText;if(t.match(O.QueryLexer.termSeparator))return O.QueryLexer.lexTerm}},O.QueryParser=function(e,t){this.lexer=new O.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},O.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=O.QueryParser.parseClause;e;)e=e(this);return this.query},O.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},O.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},O.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},O.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(void 0!=t)switch(t.type){case O.QueryLexer.PRESENCE:return O.QueryParser.parsePresence;case O.QueryLexer.FIELD:return O.QueryParser.parseField;case O.QueryLexer.TERM:return O.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new O.QueryParseError(r,t.start,t.end)}},O.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(void 0!=t){switch(t.str){case"-":e.currentClause.presence=O.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=O.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new O.QueryParseError(r,t.start,t.end)}var i=e.peekLexeme();if(void 0==i){var r="expecting term or field, found nothing";throw new O.QueryParseError(r,t.start,t.end)}switch(i.type){case O.QueryLexer.FIELD:return O.QueryParser.parseField;case O.QueryLexer.TERM:return O.QueryParser.parseTerm;default:var r="expecting term or field, found '"+i.type+"'";throw new O.QueryParseError(r,i.start,i.end)}}},O.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(void 0!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map(function(e){return"'"+e+"'"}).join(", "),i="unrecognised field '"+t.str+"', possible fields: "+r;throw new O.QueryParseError(i,t.start,t.end)}e.currentClause.fields=[t.str];var n=e.peekLexeme();if(void 0==n){var i="expecting term, found nothing";throw new O.QueryParseError(i,t.start,t.end)}if(n.type===O.QueryLexer.TERM)return O.QueryParser.parseTerm;var i="expecting term, found '"+n.type+"'";throw new O.QueryParseError(i,n.start,n.end)}},O.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(void 0!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(void 0==r){e.nextClause();return}switch(r.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+r.type+"'";throw new O.QueryParseError(i,r.start,r.end)}}},O.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(void 0!=t){var r=parseInt(t.str,10);if(isNaN(r)){var i="edit distance must be numeric";throw new O.QueryParseError(i,t.start,t.end)}e.currentClause.editDistance=r;var n=e.peekLexeme();if(void 0==n){e.nextClause();return}switch(n.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+n.type+"'";throw new O.QueryParseError(i,n.start,n.end)}}},O.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(void 0!=t){var r=parseInt(t.str,10);if(isNaN(r)){var i="boost must be numeric";throw new O.QueryParseError(i,t.start,t.end)}e.currentClause.boost=r;var n=e.peekLexeme();if(void 0==n){e.nextClause();return}switch(n.type){case O.QueryLexer.TERM:return e.nextClause(),O.QueryParser.parseTerm;case O.QueryLexer.FIELD:return e.nextClause(),O.QueryParser.parseField;case O.QueryLexer.EDIT_DISTANCE:return O.QueryParser.parseEditDistance;case O.QueryLexer.BOOST:return O.QueryParser.parseBoost;case O.QueryLexer.PRESENCE:return e.nextClause(),O.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+n.type+"'";throw new O.QueryParseError(i,n.start,n.end)}}},T=function(){return O},"function"==typeof define&&define.amd?define(T):e.exports=T()}()}}]);