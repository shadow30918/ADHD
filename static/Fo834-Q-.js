import{_ as d}from"./DLhc2cmo.js";import{m as x,f as v,o as m,c as p,a as o,b as e,w as r,d as a,n as g,i as k,F as f,_ as C,e as w,q as D,s as M,x as b}from"./ub95yxG8.js";import{u as h}from"./BsxQXvA7.js";function H(l,s){const{title:n,titleTemplate:u,...c}=l;return h({title:n,titleTemplate:u,_flatMeta:c},{...s,transform(t){const _=x({...t._flatMeta});return delete t._flatMeta,{...t,meta:_}}})}const T=""+new URL("logo.D6h0GOdd.png",import.meta.url).href,A={class:"logo"},N={class:"nav_list"},R={class:"back"},L={__name:"header",props:{scroll_top:{type:Number,required:!0}},setup(l){const s=v(),n=()=>{s.value=="open"&&u()},u=()=>{s.value=s.value=="open"?"":"open"};return(c,t)=>{const _=d,i=d;return m(),p(f,null,[o("nav",{id:"nav",class:g(l.scroll_top>=20?"scroll":"")},[o("div",A,[e(_,{to:"https://www.edh.tw/"},{default:r(()=>t[0]||(t[0]=[o("img",{src:T,alt:"H2U 早安健康"},null,-1)])),_:1})]),o("ul",N,[o("li",{onClick:n},[e(i,{to:{hash:"#sec_03"}},{default:r(()=>t[1]||(t[1]=[a("ADHD測測看")])),_:1})]),o("li",{onClick:n},[e(i,{to:{hash:"#sec_04"}},{default:r(()=>t[2]||(t[2]=[a("教與學現場")])),_:1})]),o("li",{onClick:n},[e(i,{to:{hash:"#sec_05"}},{default:r(()=>t[3]||(t[3]=[a("ADHD行為表現")])),_:1})]),o("li",{onClick:n},[e(i,{to:{hash:"#sec_06"}},{default:r(()=>t[4]||(t[4]=[a("ADHD藥知道的事")])),_:1})]),o("li",{onClick:n},[e(i,{to:{hash:"#sec_07"}},{default:r(()=>t[5]||(t[5]=[a("A咖看漫畫")])),_:1})])]),o("div",{class:g(["hem",k(s)]),onClick:u},t[6]||(t[6]=[o("div",{class:"line _t"},null,-1),o("div",{class:"line _m"},null,-1),o("div",{class:"line _b"},null,-1)]),2),o("div",R,[e(i,{to:"/"},{default:r(()=>t[7]||(t[7]=[a("返回活動頁")])),_:1})])],2),t[8]||(t[8]=o("div",{id:"top"},null,-1))],64)}}},U={};function $(l,s){const n=d;return m(),p(f,null,[e(n,{class:"go_Top",to:{hash:"#top"}}),s[0]||(s[0]=o("footer",null,[o("div",{class:"inner"},[o("ul",{class:"list"},[o("li",null,[a("© 2025 早安健康 All Rights Reserved. "),o("br"),a("版權所有，禁止擅自轉貼節錄 ")])])])],-1))],64)}const B=C(U,[["render",$]]),E=()=>{const l=v(0);w(()=>{document.addEventListener("scroll",s)}),D(()=>{});const s=n=>{l.value=n.target.scrollingElement.scrollTop};return{scroll_top:l}},q={__name:"default",setup(l){const{scroll_top:s}=E(),n=b();return H({ogImage:`${n.app.baseURL}img/ogimg.jpg`}),(u,c)=>{const t=L,_=B;return m(),p(f,null,[e(t,{scroll_top:k(s)},null,8,["scroll_top"]),M(u.$slots,"default"),e(_)],64)}}};export{q as default};
