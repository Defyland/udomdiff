var udomdiff=function(e){"use strict";return e.default=(e,i,t,l,r)=>{const f=t.length;let s=i.length,n=f,o=0,c=0,h=null;for(;o<s||c<n;)if(i[o]===t[c])o++,c++;else if(s&&n&&i[s-1]===t[n-1])s--,n--;else if(s===o){const i=n<f?c?l(t[c-1],-0).nextSibling:l(t[n-c],0):r;for(;c<n;)e.insertBefore(l(t[c++],1),i)}else if(n===c)for(;o<s;)e.removeChild(l(i[o++],-1));else if(s-o==1&&n-c==1)h&&h.has(i[o])?e.insertBefore(l(t[c],1),l(n<f?t[n]:r,0)):e.replaceChild(l(t[c],1),l(i[o],-1)),o++,c++;else if(i[o]===t[n-1]&&t[c]===i[s-1]){const r=l(i[--s],-1).nextSibling;e.insertBefore(l(t[c++],1),l(i[o++],-1).nextSibling),e.insertBefore(l(t[--n],1),r),i[s]=t[n]}else{if(!h){h=new Map;let e=c;for(;e<n;)h.set(t[e],e++)}if(h.has(i[o])){const r=h.get(i[o]);if(c<r){let f=o,n=1;for(;++f<s&&h.has(i[f])&&h.get(i[f])===r+n;)n++;if(n>r-c){const f=l(i[o],0);for(;c<r;)e.insertBefore(l(t[c++],1),f)}else e.replaceChild(l(t[c++],1),l(i[o++],-1))}else o++}else e.removeChild(l(i[o++],-1))}return t},e}({}).default;
