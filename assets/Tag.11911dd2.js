import{u as q,g as b,a as N,b as T,c as P,d as C,e as M,f as k}from"./tags.1cbf17f1.js";import{c as F,b as L,r as a,a as e,h as j,j as c,i as w}from"./index.8f9897ef.js";/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=F("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);function z(){const{tag:r,repository:l,organization:n}=L(),{data:t,isLoading:f,isError:g}=q({organization:n,repository:l,tag:r,enabled:!!n&&!!l&&!!r}),u=a.exports.useMemo(()=>b(t),[t]),y=a.exports.useMemo(()=>!!n&&!!l&&!!u,[n,l,u]),m=a.exports.useMemo(()=>N(t),[t]),i=a.exports.useMemo(()=>T(t),[t]),d=a.exports.useMemo(()=>P(t),[t]),{data:h}=C({organization:n,repository:l,pullRequestNumber:u,enabled:y}),s=a.exports.useMemo(()=>M(h),[h]),p=a.exports.useMemo(()=>k(n,l,r),[n,l,r]);if(f)return e(j,{});if(g)return e("div",{children:"Unable to fetch tag"});const x=a.exports.createRef(),R=()=>{var o;w((o=x.current)==null?void 0:o.innerText)};return c("div",{className:"flex flex-col",children:[c("div",{className:"flex items-center justify-between mb-3",children:[e("h2",{className:"text-2xl",children:r}),c("nav",{className:"flex gap-1",children:[m&&e("a",{className:"underline",href:m,children:"Pull Request"}),s&&e("a",{className:"underline",href:s.at(-1),children:"Test Report"}),p&&e("a",{className:"underline",href:p,children:r})]})]}),c("h2",{className:"text-xl mb-3 flex items-center justify-start gap-2",children:["Changelog (Markdown)"," ",e("button",{onClick:R,children:e(v,{})})]}),c("pre",{ref:x,className:"text-wrap max-w-prose w-full p-2 py-4",children:["- ",r,": ",i==null?void 0:i.join(", ")," ",s&&(s==null?void 0:s.length)>0&&`[Test Report](${s==null?void 0:s.at(-1)})`,d&&e("ul",{className:"flex flex-col",children:d.map(o=>e("li",{children:`  - ${o}`},o)).filter(Boolean)})]})]})}export{z as default};