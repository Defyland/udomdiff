var udomdiff=function(r){"use strict";function f(r){return(r.remove||function(){var r=this.parentNode;r&&r.removeChild(this)}).call(r)}var x=function(r,e,n,o,f,t){for(var a=("selectedIndex"in e),i=a;o<f;){var c=r(n[o],1);if(e.insertBefore(c,t),a&&i&&c.selected){i=!i;var v=e.selectedIndex;e.selectedIndex=v<0?o:n.indexOf.call(e.querySelectorAll("option"),c)}o++}},b=function(r,e,n,o){for(;n<o;)f(r(e[n++],-1))},m=function(r,e,n){for(var o=1,f=e;o<f;){var t=(o+f)/2>>>0;n<r[t]?f=t:o=1+t}return o};return r.default=function(r,e,n,o,f){for(var t=e.length,a=t,i=0,c=n.length,v=0;i<a&&v<c&&e[i]===n[v];)i++,v++;for(;i<a&&v<c&&e[a-1]===n[c-1];)a--,c--;var u,l,s,d,h=i===a,p=v===c;return h&&p||(h&&v<c?x(o,r,n,v,c,(u=o,l=e,d=f,(s=i)<t?u(l[s],0):0<s?u(l[s-1],-0).nextSibling:d)):p&&i<a?b(o,e,i,a):function(r,e,n,o,f,t,a,i,c){for(var v=[],u=r.length,l=a,s=0;s<u;)switch(r[s++]){case 0:f++,l++;break;case 1:v.push(o[f]),x(e,n,o,f++,f,l<i?e(t[l],0):c);break;case-1:l++}for(s=0;s<u;)switch(r[s++]){case 0:a++;break;case-1:-1<v.indexOf(t[a])?a++:b(e,t,a++,a)}}(function(r,e,n,o,f,t,a,i){var c=0,v=o<i?o:i,u=Array(v++),l=[];l.push(-1);for(var s=1;s<v;s++)l.push(a);for(var d=f.slice(t,a),h=e;h<n;h++){var p=d.indexOf(r[h]);if(-1<p){var x=p+t;-1<(c=m(l,v,x))&&(l[c]=x,u[c]={newi:h,oldi:x,prev:u[c-1]})}}for(c=--v,--a;l[c]>a;)--c;v=i+o-c;var b=Array(v),g=u[c];for(--n;g;){for(var w=g.newi,k=g.oldi;w<n;)b[--v]=1,--n;for(;k<a;)b[--v]=-1,--a;b[--v]=0,--n,--a,g=g.prev}for(;e<=n;)b[--v]=1,--n;for(;t<=a;)b[--v]=-1,--a;return b}(n,v,c,c-v,e,i,a,a-i),o,r,n,v,e,i,t,f)),n},r}({}).default;