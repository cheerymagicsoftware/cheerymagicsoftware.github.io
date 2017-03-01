/* Rainbow v2.1.2 rainbowco.de | included languages: generic, html, json, php */!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Rainbow=t()}(this,function(){"use strict";function e(){return"undefined"!=typeof module&&"object"==typeof module.exports}function t(){return"undefined"==typeof document&&"undefined"!=typeof self}function n(e){var t=e.getAttribute("data-language")||e.parentNode.getAttribute("data-language");if(!t){var n=/\blang(?:uage)?-(\w+)/,r=e.className.match(n)||e.parentNode.className.match(n);r&&(t=r[1])}return t?t.toLowerCase():null}function r(e,t,n,r){return(n!==e||r!==t)&&(n<=e&&r>=t)}function a(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;")}function o(e,t){for(var n=0,r=1;r<t;++r)e[r]&&(n+=e[r].length);return n}function i(e,t,n,r){return n>=e&&n<t||r>e&&r<t}function u(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t.sort(function(e,t){return t-e})}function c(e,t,n,r){var a=r.substr(e);return r.substr(0,e)+a.replace(t,n)}function s(t,n){if(e())return global.Worker=require("webworker-threads").Worker,new Worker(__filename);var s=n.toString(),f=u.toString();f+=a.toString(),f+=r.toString(),f+=i.toString(),f+=c.toString(),f+=o.toString(),f+=s;var l=s.match(/function (\w+?)\(/)[1],d=t.toString();d=d.replace(/=new \w+/,"= new "+l);var g=f+"\tthis.onmessage ="+d,m=new Blob([g],{type:"text/javascript"});return new Worker((window.URL||window.webkitURL).createObjectURL(m))}function f(e){function t(){self.postMessage({id:n.id,lang:n.lang,result:a})}var n=e.data,r=new C(n.options),a=r.refract(n.code,n.lang);return n.isNode?(t(),void self.close()):void setTimeout(function(){t()},1e3*n.options.delay)}function l(){return(R||null===j)&&(j=s(f,C)),j}function d(e,t){function n(a){a.data.id===e.id&&(t(a.data),r.removeEventListener("message",n))}var r=l();r.addEventListener("message",n),r.postMessage(e)}function g(e,t,n){return function(r){e.innerHTML=r.result,e.classList.remove("loading"),"PRE"===e.parentNode.tagName&&e.parentNode.classList.remove("loading"),M&&M(e,r.lang),0===--t.c&&n()}}function m(e){return{patterns:S,inheritenceMap:T,aliases:x,globalClass:e.globalClass,delay:isNaN(e.delay)?0:e.delay}}function v(e,t){var n={};"object"==typeof t&&(n=t,t=n.language),t=x[t]||t;var r={id:String.fromCharCode(65+Math.floor(26*Math.random()))+Date.now(),code:e,lang:t,options:m(n),isNode:R};return r}function p(e,t){for(var r={c:0},a=0,o=e;a<o.length;a+=1){var i=o[a],u=n(i);if(!i.classList.contains("rainbow")&&u){i.classList.add("loading"),i.classList.add("rainbow"),"PRE"===i.parentNode.tagName&&i.parentNode.classList.add("loading");var c=i.getAttribute("data-global-class"),s=parseInt(i.getAttribute("data-delay"),10);++r.c,d(v(i.innerHTML,{language:u,globalClass:c,delay:s}),g(i,r,t))}}0===r.c&&t()}function h(e){var t=document.createElement("div");t.className="preloader";for(var n=0;n<7;n++)t.appendChild(document.createElement("div"));e.appendChild(t)}function b(e,t){t=t||function(){},e=e&&"function"==typeof e.getElementsByTagName?e:document;for(var n=e.getElementsByTagName("pre"),r=e.getElementsByTagName("code"),a=[],o=[],i=0,u=n;i<u.length;i+=1){var c=u[i];h(c),c.getElementsByTagName("code").length?c.getAttribute("data-trimmed")||(c.setAttribute("data-trimmed",!0),c.innerHTML=c.innerHTML.trim()):a.push(c)}for(var s=0,f=r;s<f.length;s+=1){var l=f[s];o.push(l)}p(o.concat(a),t)}function w(e){M=e}function y(e,t,n){T[e]||(T[e]=n),S[e]=t.concat(S[e]||[])}function N(e){delete T[e],delete S[e]}function L(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];if("string"==typeof e[0]){var n=v(e[0],e[1]);return void d(n,function(e){return function(t){e&&e(t.result,t.lang)}}(e[2]))}return"function"==typeof e[0]?void b(0,e[0]):void b(e[0],e[1])}function E(e,t){x[e]=t}var M,C=function H(e){function t(e,t){for(var n in h)if(n=parseInt(n,10),r(n,h[n],e,t)&&(delete h[n],delete p[n]),i(n,h[n],e,t))return!0;return!1}function n(t,n){var r=t.replace(/\./g," "),a=e.globalClass;return a&&(r+=" "+a),'<span class="'+r+'">'+n+"</span>"}function s(e){for(var t=u(p),n=0,r=t;n<r.length;n+=1){var a=r[n],o=p[a];e=c(a,o.replace,o["with"],e)}return e}function f(e){var t="";return e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),new RegExp(e.source,t)}function l(r,a,i){function s(e){return r.name&&(e=n(r.name,e)),p[w]={replace:m[0],"with":e},h[w]=y,!g&&{remaining:a.substr(y-i),offset:y}}function l(t){var a=m[t];if(a){var i=r.matches[t],u=i.language,s=i.name&&i.matches?i.matches:i,f=function(e,r,a){b=c(o(m,t),e,a?n(a,r):r,b)};if("string"==typeof i)return void f(a,a,i);var l,d=new H(e);if(u)return l=d.refract(a,u),void f(a,l);l=d.refract(a,v,s.length?s:[s]),f(a,l,i.matches?i.name:0)}}void 0===i&&(i=0);var d=r.pattern;if(!d)return!1;var g=!d.global;d=f(d);var m=d.exec(a);if(!m)return!1;!r.name&&r.matches&&"string"==typeof r.matches[0]&&(r.name=r.matches[0],delete r.matches[0]);var b=m[0],w=m.index+i,y=m[0].length+w;if(w===y)return!1;if(t(w,y))return{remaining:a.substr(y-i),offset:y};for(var N=u(r.matches),L=0,E=N;L<E.length;L+=1){var M=E[L];l(M)}return s(b)}function d(e,t){for(var n=0,r=t;n<r.length;n+=1)for(var a=r[n],o=l(a,e);o;)o=l(a,o.remaining,o.offset);return s(e)}function g(t){for(var n=e.patterns[t]||[];e.inheritenceMap[t];)t=e.inheritenceMap[t],n=n.concat(e.patterns[t]||[]);return n}function m(e,t,n){return v=t,n=n||g(t),d(a(e),n)}var v,p={},h={};this.refract=m},S={},T={},x={},A={},R=e(),k=t(),j=null;A={extend:y,remove:N,onHighlight:w,addAlias:E,color:L},R&&(A.colorSync=function(e,t){var n=v(e,t),r=new C(n.options);return r.refract(n.code,n.lang)}),R||k||document.addEventListener("DOMContentLoaded",function(e){A.defer||A.color(e)},!1),k&&(self.onmessage=f);var B=A;return B});
Rainbow.extend("generic",[{matches:{1:[{name:"keyword.operator",pattern:/\=|\+/g},{name:"keyword.dot",pattern:/\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:|\+|\.|\{|,)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)(?!.*('|").*?[^:](\/\/|\#)).*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]),Rainbow.extend("html",[{name:"source.php.embedded",matches:{1:"variable.language.php-tag",2:{language:"php"},3:"variable.language.php-tag"},pattern:/(&lt;\?php|&lt;\?=?(?!xml))([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"entity.tag.style",pattern:/^style/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style.attribute",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm},{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"entity.tag.script",pattern:/^script/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script.attribute",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},pattern:/\s([\w-]+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}]),Rainbow.addAlias("xml","html"),Rainbow.extend("json",[{matches:{0:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\"|\')(\\?.)*?\1/g},{name:"constant.numeric",pattern:/\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/gi},{name:"constant.language",pattern:/\b(true|false|null)\b/g}]),Rainbow.extend("php",[{name:"support",pattern:/\becho\b/gi},{matches:{1:"variable.dollar-sign",2:"variable"},pattern:/(\$)(\w+)\b/g},{name:"constant.language",pattern:/true|false|null/gi},{name:"constant",pattern:/\b[A-Z0-9_]{2,}\b/g},{name:"keyword.dot",pattern:/\./g},{name:"keyword",pattern:/\b(die|end(for(each)?|switch|if)|case|require(_once)?|include(_once)?)(?=\b)/gi},{matches:{1:"keyword",2:{name:"support.class",pattern:/\w+/g}},pattern:/(instanceof)\s([^\$].*?)(\)|;)/gi},{matches:{1:"support.function"},pattern:/\b(array(_key_exists|_merge|_keys|_shift)?|isset|count|empty|unset|printf|is_(array|string|numeric|object)|sprintf|each|date|time|substr|pos|str(len|pos|tolower|_replace|totime)?|ord|trim|in_array|implode|end|preg_match|explode|fmod|define|link|list|get_class|serialize|file|sort|mail|dir|idate|log|intval|header|chr|function_exists|dirname|preg_replace|file_exists)(?=\()/gi},{name:"variable.language.php-tag",pattern:/(&lt;\?(php)?|\?&gt;)/gi},{matches:{1:"keyword.namespace",2:{name:"support.namespace",pattern:/\w+/g}},pattern:/\b(namespace|use)\s(.*?);/gi},{matches:{1:"storage.modifier",2:"storage.class",3:"entity.name.class",4:"storage.modifier.extends",5:"entity.other.inherited-class",6:"storage.modifier.extends",7:"entity.other.inherited-class"},pattern:/\b(abstract|final)?\s?(class|interface|trait)\s(\w+)(\sextends\s)?([\w\\]*)?(\simplements\s)?([\w\\]*)?\s?\{?(\n|\})/gi},{name:"keyword.static",pattern:/self::|static::/gi},{matches:{1:"storage.function",2:"entity.name.function.magic"},pattern:/(function)\s(__.*?)(?=\()/gi},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/gi},{matches:{1:"keyword.new",2:{name:"support.class",pattern:/\w+/g}},pattern:/\b(new)\s([^\$].*?)(?=\)|\(|;)/gi},{matches:{1:{name:"support.class",pattern:/\w+/g},2:"keyword.static"},pattern:/([\w\\]*?)(::)(?=\b|\$)/g},{matches:{2:{name:"support.class",pattern:/\w+/g}},pattern:/(\(|,\s?)([\w\\]*?)(?=\s\$)/g}],"generic");