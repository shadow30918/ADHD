import{_ as d}from"./CnXp2qlQ.js";import{m as x,f as g,o as m,c as p,a as o,b as n,w as r,d as a,n as v,i as k,F as f,_ as C,e as h,q as w,s as D,x as M}from"./C3-Op_cE.js";import{u as H}from"./Do4gjQNV.js";function T(l,s){const{title:e,titleTemplate:u,...c}=l;return H({title:e,titleTemplate:u,_flatMeta:c},{...s,transform(t){const i=x({...t._flatMeta});return delete t._flatMeta,{...t,meta:i}}})}const b=""+new URL("logo.D6h0GOdd.png",import.meta.url).href,A={class:"logo"},N={class:"nav_list"},R={class:"back"},$={__name:"header",props:{scroll_top:{type:Number,required:!0}},setup(l){const s=g(),e=()=>{s.value=="open"&&u()},u=()=>{s.value=s.value=="open"?"":"open"};return(c,t)=>{const i=d,_=d;return m(),p(f,null,[o("nav",{id:"nav",class:v(l.scroll_top>=20?"scroll":"")},[o("div",A,[n(i,{to:"https://www.edh.tw/"},{default:r(()=>t[0]||(t[0]=[o("img",{src:b,alt:"H2U 早安健康"},null,-1)])),_:1})]),o("ul",N,[o("li",{onClick:e},[n(_,{to:{hash:"#sec_03"}},{default:r(()=>t[1]||(t[1]=[a("ADHD測測看")])),_:1})]),o("li",{onClick:e},[n(_,{to:{hash:"#sec_04"}},{default:r(()=>t[2]||(t[2]=[a("教與學現場")])),_:1})]),o("li",{onClick:e},[n(_,{to:{hash:"#sec_05"}},{default:r(()=>t[3]||(t[3]=[a("ADHD行為表現")])),_:1})]),o("li",{onClick:e},[n(_,{to:{hash:"#sec_06"}},{default:r(()=>t[4]||(t[4]=[a("ADHD藥知道的事")])),_:1})]),o("li",{onClick:e},[n(_,{to:{hash:"#sec_07"}},{default:r(()=>t[5]||(t[5]=[a("A咖看漫畫")])),_:1})])]),o("div",{class:v(["hem",k(s)]),onClick:u},t[6]||(t[6]=[o("div",{class:"line _t"},null,-1),o("div",{class:"line _m"},null,-1),o("div",{class:"line _b"},null,-1)]),2),o("div",R,[n(_,{to:"/"},{default:r(()=>t[7]||(t[7]=[a("返回活動頁")])),_:1})])],2),t[8]||(t[8]=o("div",{id:"top"},null,-1))],64)}}},B={};function E(l,s){const e=d;return m(),p(f,null,[n(e,{class:"go_Top",to:{hash:"#top"}}),s[0]||(s[0]=o("footer",null,[o("div",{class:"inner"},[o("ul",{class:"list"},[o("li",null,[a("© 2025 早安健康 All Rights Reserved. "),o("br"),a("版權所有，禁止擅自轉貼節錄 ")])])])],-1))],64)}const F=C(B,[["render",E]]),L=()=>{const l=g(0);h(()=>{document.addEventListener("scroll",s)}),w(()=>{});const s=e=>{l.value=e.target.scrollingElement.scrollTop};return{scroll_top:l}},q={__name:"default",setup(l){const{scroll_top:s}=L(),e=D();return T({ogImage:`${e.fullPath}img/ogimg.jpg`}),(u,c)=>{const t=$,i=F;return m(),p(f,null,[n(t,{scroll_top:k(s)},null,8,["scroll_top"]),M(u.$slots,"default"),n(i)],64)}}};export{q as default};
